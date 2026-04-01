// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2023-10-16",
// });

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { service, amount } = body;

//     if (!amount || amount <= 0) {
//       return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
//     }

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "inr",
//             product_data: { name: service },
//             unit_amount: amount * 100,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: `${process.env.NEXT_PUBLIC_APP_URL}/user/payment?status=success&service=${encodeURIComponent(service)}&amount=${amount}`,
//       cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/user/payment?status=failed&service=${encodeURIComponent(service)}&amount=${amount}`,
//     });

//     return NextResponse.json({ url: session.url });
//   } catch (err: any) {
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }




// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2023-10-16",
// });

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { service, amount } = body;

//     if (!service) return NextResponse.json({ error: "Service missing" }, { status: 400 });
//     if (!amount || amount <= 0) return NextResponse.json({ error: "Invalid amount" }, { status: 400 });

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "inr",
//             product_data: { name: service },
//             unit_amount: amount * 100, // rupees → paise
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: `${process.env.NEXT_PUBLIC_APP_URL}/user/payment?status=success&service=${encodeURIComponent(service)}&amount=${amount}`,
//       cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/user/payment?status=failed&service=${encodeURIComponent(service)}&amount=${amount}`,
//     });

//     return NextResponse.json({ url: session.url });
//   } catch (err: any) {
//     console.error("Stripe session creation error:", err);
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }

// import { NextResponse } from "next/server";
// import Stripe from "stripe";
// import { adminDb } from "@/lib/firebaseAdmin";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2023-10-16",
// });

// // ✅ Checkout route – creates a new Stripe checkout session
// export async function POST(req: Request) {
//   try {
//     const { paymentDocId } = await req.json();
//     if (!paymentDocId) {
//       return NextResponse.json({ error: "Missing paymentDocId" }, { status: 400 });
//     }

//     // 1️⃣ Load the payment document from Firestore
//     const docRef = adminDb.collection("payments").doc(paymentDocId);
//     const snap = await docRef.get();
//     if (!snap.exists) {
//       return NextResponse.json({ error: "Payment document not found" }, { status: 404 });
//     }

//     const data = snap.data();
//     if (!data?.amount || data.amount <= 0) {
//       return NextResponse.json({ error: "Invalid amount in DB" }, { status: 400 });
//     }

//     // Convert INR → USD cents for Stripe
//     const INR_TO_USD = 0.012;
//     const usdAmount = Math.round(data.amount * INR_TO_USD * 100);
//     if (usdAmount < 50) {
//       return NextResponse.json(
//         { error: "Amount converts to less than $0.50, increase the price." },
//         { status: 400 }
//       );
//     }

//     // 2️⃣ Create Stripe checkout session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: data.service || "Service",
//               description: data.provider || "Provider",
//             },
//             unit_amount: usdAmount,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       // ✅ Redirect to the Payment page (not History) with all details
//       success_url: `${process.env.NEXT_PUBLIC_APP_URL}/user/payment?status=success&service=${encodeURIComponent(
//         data.service || ""
//       )}&amount=${data.amount}&paymentDocId=${paymentDocId}`,
//       cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/user/payment?status=failed&service=${encodeURIComponent(
//         data.service || ""
//       )}&amount=${data.amount}&paymentDocId=${paymentDocId}`,
//       metadata: { paymentDocId },
//     });

//     // 3️⃣ Update document with the session ID & converted amount
//     await docRef.update({
//       checkoutSessionId: session.id,
//       convertedUsdCents: usdAmount,
//       currency: "USD",
//     });

//     return NextResponse.json({ url: session.url });
//   } catch (err: any) {
//     console.error("Checkout error:", err);
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }

// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { adminDb } from "@/lib/firebaseAdmin";

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const appUrl = process.env.NEXT_PUBLIC_APP_URL;

if (!stripeSecret) {
  console.error("❌ Missing STRIPE_SECRET_KEY in environment");
}
if (!appUrl) {
  console.error("❌ Missing NEXT_PUBLIC_APP_URL in environment");
}

const stripe = new Stripe(stripeSecret || "", {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const paymentDocId = body?.paymentDocId;

    if (!paymentDocId) {
      return NextResponse.json(
        { error: "Missing paymentDocId in request body" },
        { status: 400 }
      );
    }

    // 1️⃣ Load the payment document
    const docRef = adminDb.collection("payments").doc(paymentDocId);
    const snap = await docRef.get();

    if (!snap.exists) {
      return NextResponse.json(
        { error: `Payment document not found: ${paymentDocId}` },
        { status: 404 }
      );
    }

    const data = snap.data();
    const amountInINR = Number(data?.amount);

    if (!amountInINR || amountInINR <= 0) {
      return NextResponse.json(
        { error: "Invalid or missing amount in Firestore" },
        { status: 400 }
      );
    }

    // Convert INR → USD cents (rough rate)
    const INR_TO_USD = 0.012;
    const usdAmount = Math.round(amountInINR * INR_TO_USD * 100);

    if (usdAmount < 50) {
      return NextResponse.json(
        {
          error:
            "Amount converts to less than $0.50. Increase the INR price or adjust conversion.",
        },
        { status: 400 }
      );
    }

    // 2️⃣ Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: data.service || "Service",
              description: data.provider || "Provider",
            },
            unit_amount: usdAmount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${appUrl}/user/payment?status=success&service=${encodeURIComponent(
        data.service || ""
      )}&amount=${amountInINR}&paymentDocId=${paymentDocId}`,
      cancel_url: `${appUrl}/user/payment?status=failed&service=${encodeURIComponent(
        data.service || ""
      )}&amount=${amountInINR}&paymentDocId=${paymentDocId}`,
      metadata: { paymentDocId },
    });

    // 3️⃣ Update Firestore with session details
    await docRef.update({
      checkoutSessionId: session.id,
      convertedUsdCents: usdAmount,
      currency: "USD",
      updatedAt: new Date(),
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("🚨 Checkout error:", err);
    return NextResponse.json(
      { error: err?.message || "Unknown server error" },
      { status: 500 }
    );
  }
}
