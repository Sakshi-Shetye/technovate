import twilio from "twilio";

const accountSid = process.env.TWILIO_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const client = twilio(accountSid, authToken);

export const sendSMS = async (to: string, body: string) => {
  if (!process.env.TWILIO_SID) {
    console.log(`📩 Mock SMS to ${to}: ${body}`);
    return;
  }
  return client.messages.create({
    body,
    from: process.env.TWILIO_PHONE_NUMBER!,
    to,
  });
};
