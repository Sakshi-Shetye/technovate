// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";
// import { adminDb } from "@/lib/firebaseAdmin";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2023-10-16",
// });

// export async function POST(req: NextRequest) {
//   const sig = req.headers.get("stripe-signature");
//   const buf = await req.arrayBuffer();
//   const rawBody = Buffer.from(buf);

//   let event: Stripe.Event;

//   try {
//     event = stripe.webhooks.constructEvent(
//       rawBody,
//       sig!,
//       process.env.STRIPE_WEBHOOK_SECRET!
//     );
//   } catch (err: any) {
//     console.error("Webhook signature verification failed:", err.message);
//     return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
//   }

//   console.log(`🔔 Stripe event: ${event.type}`);

//   if (event.type === "checkout.session.completed") {
//     const session = event.data.object as Stripe.Checkout.Session;
//     console.log("➡️  Metadata:", session.metadata);

//     const paymentDocId = session.metadata?.paymentDocId;
//     if (!paymentDocId) {
//       console.warn("⚠️  No paymentDocId in metadata");
//       return NextResponse.json({ received: true });
//     }

//     try {
//       await adminDb.collection("payments").doc(paymentDocId).update({
//         status: "paid",
//         stripePaymentIntentId: session.payment_intent,
//         updatedAt: new Date(),
//       });
//       console.log(`✅ Firestore updated to paid: ${paymentDocId}`);
//     } catch (dbErr) {
//       console.error("Firestore update failed:", dbErr);
//     }
//   }

//   return NextResponse.json({ received: true });
// }
// app/api/stripe-webhook/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { adminDb } from "@/lib/firebaseAdmin";

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

if (!stripeSecret) {
  console.error("❌ Missing STRIPE_SECRET_KEY in environment");
}
if (!webhookSecret) {
  console.error("❌ Missing STRIPE_WEBHOOK_SECRET in environment");
}

const stripe = new Stripe(stripeSecret || "", {
  apiVersion: "2023-10-16",
});

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  const buf = Buffer.from(await req.arrayBuffer());

  if (!sig) {
    return new NextResponse("Missing stripe-signature header", { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret || "");
  } catch (err: any) {
    console.error("🚨 Webhook signature verification failed:", err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  console.log(`🔔 Stripe event received: ${event.type}`);

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const paymentDocId = session.metadata?.paymentDocId;

    if (!paymentDocId) {
      console.warn("⚠️ checkout.session.completed missing paymentDocId metadata");
      return NextResponse.json({ received: true });
    }

    try {
      await adminDb.collection("payments").doc(paymentDocId).update({
        status: "paid",
        stripePaymentIntentId: session.payment_intent,
        updatedAt: new Date(),
      });
      console.log(`✅ Firestore updated to 'paid' for doc: ${paymentDocId}`);
    } catch (dbErr) {
      console.error("🚨 Firestore update failed:", dbErr);
    }
  }

  return NextResponse.json({ received: true });
}
