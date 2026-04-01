// import { NextRequest } from "next/server";
// import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

// export const runtime = "nodejs";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { date, service, provider, cost, status } = body;

//     const pdfDoc = await PDFDocument.create();
//     const page = pdfDoc.addPage([600, 400]);
//     const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

//     const { height } = page.getSize();
//     let y = height - 50;

//     page.drawText("Service Receipt", {
//       x: 200,
//       y,
//       size: 20,
//       font,
//       color: rgb(0, 0, 0),
//     });

//     y -= 40;
//     page.drawText(`Date: ${date}`, { x: 50, y, size: 12, font });
//     y -= 20;
//     page.drawText(`Service: ${service}`, { x: 50, y, size: 12, font });
//     y -= 20;
//     page.drawText(`Provider: ${provider}`, { x: 50, y, size: 12, font });
//     y -= 20;
//     page.drawText(`Cost: INR ${cost}`, { x: 50, y, size: 12, font }); // ✅ Fixed
//     y -= 20;
//     page.drawText(`Payment Status: ${status}`, { x: 50, y, size: 12, font });

//     y -= 40;
//     page.drawText("Thank you for using Rural Assist!", {
//       x: 150,
//       y,
//       size: 10,
//       font,
//     });

//     const pdfBytes = await pdfDoc.save();

//     return new Response(pdfBytes, {
//       status: 200,
//       headers: {
//         "Content-Type": "application/pdf",
//         "Content-Disposition": `attachment; filename="${service}-receipt.pdf"`,
//       },
//     });
//   } catch (err: any) {
//     console.error("PDF generation error:", err);
//     return new Response(
//       JSON.stringify({ error: "Failed to generate PDF" }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// }








// import { NextRequest } from "next/server";
// import { PDFDocument, rgb } from "pdf-lib";
// import fs from "fs";
// import path from "path";

// export const runtime = "nodejs"; // Must run on Node.js

// import fontkit from "fontkit"; // Correct import in Node.js

// type Party = { name: string; address: string; phone: string; email: string; };
// type Item = { name: string; quantity: number; price: number; discount: number; tax: number; };
// type ReceiptRequest = {
//   receiptNo: string;
//   date: string;
//   paymentType: string;
//   from: Party;
//   to: Party;
//   items: Item[];
//   additionalCharge?: number;
//   terms?: string;
// };

// export async function POST(req: NextRequest) {
//   try {
//     const body: ReceiptRequest = await req.json();
//     const { receiptNo, date, paymentType, from, to, items, additionalCharge, terms } = body;

//     const pdfDoc = await PDFDocument.create();
//     pdfDoc.registerFontkit(fontkit); // Register fontkit

//     // Embed custom Unicode font
//     const fontPath = path.join(process.cwd(), "public/fonts/NotoSans-Regular.ttf");
//     if (!fs.existsSync(fontPath)) throw new Error("Font file not found at " + fontPath);
//     const fontBytes = fs.readFileSync(fontPath);
//     const font = await pdfDoc.embedFont(fontBytes);
//     const boldFont = font;

//     const page = pdfDoc.addPage([600, 800]);
//     const { width, height } = page.getSize();
//     let y = height - 40;
//     const blue = rgb(0 / 255, 82 / 255, 155 / 255);
//     const black = rgb(0, 0, 0);

//     // Header
//     page.drawText("MySANmarg", { x: 110, y: height - 40, size: 22, font: boldFont, color: blue });
//     page.drawText("Smart Assistance Network — Helping Rural India, On Time.", { x: 110, y: height - 65, size: 10, font, color: black });
//     page.drawText("RECEIPT", { x: width - 120, y: height - 50, size: 18, font: boldFont, color: blue });

//     // Receipt Info
//     y -= 100;
//     page.drawText(`Receipt No: ${receiptNo}`, { x: 30, y, size: 12, font });
//     page.drawText(`Date: ${date}`, { x: 400, y, size: 12, font });
//     y -= 20;
//     page.drawText(`Payment Type: ${paymentType}`, { x: 30, y, size: 12, font });

//     // From / To Section
//     y -= 50;
//     page.drawText("From:", { x: 30, y, size: 12, font: boldFont });
//     page.drawText(`Name: ${from.name}`, { x: 30, y: y - 15, size: 12, font });
//     page.drawText(`Address: ${from.address}`, { x: 30, y: y - 30, size: 12, font });
//     page.drawText(`Phone: ${from.phone}`, { x: 30, y: y - 45, size: 12, font });
//     page.drawText(`Email: ${from.email}`, { x: 30, y: y - 60, size: 12, font });

//     page.drawText("Bill To:", { x: 300, y, size: 12, font: boldFont });
//     page.drawText(`Name: ${to.name}`, { x: 300, y: y - 15, size: 12, font });
//     page.drawText(`Address: ${to.address}`, { x: 300, y: y - 30, size: 12, font });
//     page.drawText(`Phone: ${to.phone}`, { x: 300, y: y - 45, size: 12, font });
//     page.drawText(`Email: ${to.email}`, { x: 300, y: y - 60, size: 12, font });

//     // Items Table
//     y -= 100;
//     const colX = [30, 80, 220, 300, 380, 450, 520];
//     const headers = ["Sl. No", "Item/Description", "Qty", "Price", "Discount", "Tax", "Amount"];
//     headers.forEach((h, i) => page.drawText(h, { x: colX[i], y, size: 11, font: boldFont, color: blue }));
//     y -= 20;

//     let total = 0;
//     items.forEach((item, i) => {
//       const amount = item.price * item.quantity - item.discount + item.tax;
//       total += amount;

//       page.drawText(String(i + 1), { x: colX[0], y, size: 11, font });
//       page.drawText(item.name, { x: colX[1], y, size: 11, font });
//       page.drawText(String(item.quantity), { x: colX[2], y, size: 11, font });
//       page.drawText(`₹${item.price}`, { x: colX[3], y, size: 11, font });
//       page.drawText(`₹${item.discount}`, { x: colX[4], y, size: 11, font });
//       page.drawText(`₹${item.tax}`, { x: colX[5], y, size: 11, font });
//       page.drawText(`₹${amount}`, { x: colX[6], y, size: 11, font });

//       y -= 20;
//     });

//     // Totals
//     y -= 20;
//     page.drawText("Total:", { x: 450, y, size: 12, font: boldFont });
//     page.drawText(`₹${total}`, { x: 520, y, size: 12, font: boldFont });

//     if (additionalCharge) {
//       y -= 20;
//       page.drawText("Additional Charge:", { x: 400, y, size: 11, font });
//       page.drawText(`₹${additionalCharge}`, { x: 520, y, size: 11, font });
//       total += additionalCharge;
//     }

//     y -= 25;
//     page.drawText("Total Amount:", { x: 400, y, size: 12, font: boldFont });
//     page.drawText(`₹${total}`, { x: 520, y, size: 12, font: boldFont, color: blue });

//     // Terms
//     y -= 60;
//     page.drawText("Terms & Conditions:", { x: 30, y, size: 12, font: boldFont });
//     page.drawText(terms || "No special terms applied.", { x: 30, y: y - 15, size: 10, font });

//     // Footer
//     y = 60;
//     page.drawText("Thank you for Business !!! Visit us Again !!!", { x: 150, y, size: 11, font: boldFont, color: blue });

//     // Save PDF
//     const pdfBytes = await pdfDoc.save();
//     return new Response(new Uint8Array(pdfBytes), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/pdf",
//         "Content-Disposition": `attachment; filename="receipt-${receiptNo}.pdf"`,
//       },
//     });

//   } catch (err: any) {
//     console.error("❌ PDF generation error:", err.message, err.stack);
//     return new Response(JSON.stringify({ error: "Failed to generate PDF", details: err.message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }















// import { NextRequest } from "next/server";
// import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
// import fs from "fs";
// import path from "path";

// export const runtime = "nodejs";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { date, service, provider, cost, status } = body;

//     const pdfDoc = await PDFDocument.create();
//     const page = pdfDoc.addPage([600, 650]);
//     const { width, height } = page.getSize();

//     // Fonts
//     const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
//     const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

//     let y = height - 50;

//     // --- Logo + App Name + Tagline ---
//     try {
//       const logoPath = path.resolve("./public/logo3.png");
//       const logoBytes = fs.readFileSync(logoPath);
//       const logoImage = await pdfDoc.embedPng(logoBytes);
//       const logoDims = logoImage.scale(0.15); // adjust size
//       page.drawImage(logoImage, {
//         x: 50,
//         y: y - logoDims.height + 10,
//         width: logoDims.width,
//         height: logoDims.height,
//       });
//     } catch (err: unknown) {
//       console.warn("Logo not found or failed to embed", err);
//     }

//     // App name & tagline
//     page.drawText("MySANmarg", {
//       x: 200,
//       y,
//       size: 24,
//       font: boldFont,
//       color: rgb(0.05, 0.2, 0.5),
//     });

//     page.drawText("Smart Assistance Network — Helping Rural India, On Time", {
//       x: 200,
//       y: y - 25,
//       size: 10,
//       font,
//       color: rgb(0.2, 0.2, 0.2),
//     });

//     y -= 80;

//     // --- Header ---
//     page.drawText("SERVICE RECEIPT", {
//       x: 180,
//       y,
//       size: 22,
//       font: boldFont,
//       color: rgb(0.05, 0.2, 0.5),
//     });

//     y -= 30;

//     // --- Draw details table ---
//     const tableStartX = 50;
//     const tableStartY = y;
//     const tableWidth = 500;
//     const rowHeight = 25;

//     const details: [string, string][] = [
//       ["Date", date],
//       ["Service", service],
//       ["Provider", provider],
//       ["Cost", `INR ${cost}`],
//       ["Payment Status", status],
//     ];

//     // Draw table background
//     page.drawRectangle({
//       x: tableStartX - 5,
//       y: tableStartY - details.length * rowHeight - 5,
//       width: tableWidth + 10,
//       height: details.length * rowHeight + 10,
//       color: rgb(0.95, 0.95, 0.95),
//       borderColor: rgb(0.7, 0.7, 0.7),
//       borderWidth: 1,
//     });

//     let currentY = tableStartY;

//     details.forEach(([label, value], index) => {
//       // Alternate row shading
//       if (index % 2 === 1) {
//         page.drawRectangle({
//           x: tableStartX - 5,
//           y: currentY - rowHeight + 5,
//           width: tableWidth,
//           height: rowHeight,
//           color: rgb(0.98, 0.98, 0.98),
//         });
//       }

//       // Label
//       page.drawText(label + ":", {
//         x: tableStartX,
//         y: currentY,
//         size: 12,
//         font: boldFont,
//         color: rgb(0, 0, 0),
//       });

//       // Value
//       page.drawText(value, {
//         x: tableStartX + 200,
//         y: currentY,
//         size: 12,
//         font,
//         color:
//           label === "Payment Status" && status === "Paid"
//             ? rgb(0, 0.6, 0)
//             : label === "Payment Status"
//             ? rgb(0.8, 0, 0)
//             : rgb(0, 0, 0),
//       });

//       currentY -= rowHeight;
//     });

//     // --- Footer ---
//     page.drawLine({
//       start: { x: 50, y: 50 },
//       end: { x: width - 50, y: 50 },
//       thickness: 0.5,
//       color: rgb(0.7, 0.7, 0.7),
//     });

//     page.drawText("Thank you for using MySANmarg!", {
//       x: 160,
//       y: 30,
//       size: 12,
//       font,
//       color: rgb(0.3, 0.3, 0.3),
//     });

//     // ✅ Generate PDF
//     const pdfBytes = await pdfDoc.save();
//     const uint8Pdf = new Uint8Array(pdfBytes);

//     return new Response(uint8Pdf, {
//       status: 200,
//       headers: {
//         "Content-Type": "application/pdf",
//         "Content-Disposition": `attachment; filename="${service}-receipt.pdf"`,
//       },
//     });
//   } catch (err: unknown) {
//     console.error("PDF generation error:", err);
//     return new Response(
//       JSON.stringify({ error: "Failed to generate PDF" }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }



// import { NextRequest } from "next/server";
// import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
// import fs from "fs";
// import path from "path";

// export const runtime = "nodejs";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { date, service, provider, cost, status } = body;

//     const pdfDoc = await PDFDocument.create();
//     const page = pdfDoc.addPage([600, 700]);
//     const { width, height } = page.getSize();

//     // Fonts
//     const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
//     const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

//     // --- Logo + App Name + Tagline ---
//     let y = height - 50;

//     try {
//       const logoPath = path.resolve("./public/logo3.png");
//       const logoBytes = fs.readFileSync(logoPath);
//       const logoImage = await pdfDoc.embedPng(logoBytes);
//       const logoDims = logoImage.scale(0.15);

//       page.drawImage(logoImage, {
//         x: 50,
//         y: y - logoDims.height + 10,
//         width: logoDims.width,
//         height: logoDims.height,
//       });
//     } catch (err: unknown) {
//       console.warn("Logo not found or failed to embed", err);
//     }

//     // App name & tagline next to logo
//     const appNameX = 200;
//     const appNameY = y;
//     page.drawText("MySANmarg", {
//       x: appNameX,
//       y: appNameY,
//       size: 24,
//       font: boldFont,
//       color: rgb(0.05, 0.2, 0.5),
//     });
//     page.drawText("Smart Assistance Network — Helping Rural India, On Time", {
//       x: appNameX,
//       y: appNameY - 25,
//       size: 10,
//       font,
//       color: rgb(0.2, 0.2, 0.2),
//     });

//     y -= 100;

//     // --- Header ---
//     const headerText = "SERVICE RECEIPT";
//     const textWidth = boldFont.widthOfTextAtSize(headerText, 22);
//     page.drawText(headerText, {
//       x: (width - textWidth) / 2,
//       y,
//       size: 22,
//       font: boldFont,
//       color: rgb(0.05, 0.2, 0.5),
//     });

//     y -= 40;

//     // --- Table of details ---
//     const tableStartX = 50;
//     const tableWidth = 500;
//     const rowHeight = 30;
//     let currentY = y;

//     const details: [string, string][] = [
//       ["Date", date],
//       ["Service", service],
//       ["Provider", provider],
//       ["Cost", `INR ${cost}`],
//       ["Payment Status", status],
//     ];

//     // Draw table rows
//     details.forEach(([label, value], i) => {
//       // Background shading
//       if (i % 2 === 1) {
//         page.drawRectangle({
//           x: tableStartX,
//           y: currentY - rowHeight + 5,
//           width: tableWidth,
//           height: rowHeight,
//           color: rgb(0.98, 0.98, 0.98),
//         });
//       }

//       // Label
//       page.drawText(label + ":", {
//         x: tableStartX + 10,
//         y: currentY - 20,
//         size: 12,
//         font: boldFont,
//         color: rgb(0, 0, 0),
//       });

//       // Value
//       const valueColor =
//         label === "Payment Status" && status === "Paid"
//           ? rgb(0, 0.6, 0)
//           : label === "Payment Status"
//           ? rgb(0.8, 0, 0)
//           : rgb(0, 0, 0);

//       page.drawText(value, {
//         x: tableStartX + 200,
//         y: currentY - 20,
//         size: 12,
//         font,
//         color: valueColor,
//       });

//       // Draw row separator
//       page.drawLine({
//         start: { x: tableStartX, y: currentY - rowHeight + 5 },
//         end: { x: tableStartX + tableWidth, y: currentY - rowHeight + 5 },
//         thickness: 0.5,
//         color: rgb(0.7, 0.7, 0.7),
//       });

//       currentY -= rowHeight;
//     });

//     // Draw table border
//  page.drawRectangle({
//   x: tableStartX,
//   y: currentY + 5,
//   width: tableWidth,
//   height: details.length * rowHeight,
//   borderColor: rgb(0.7, 0.7, 0.7),
//   borderWidth: 1,
// });
//     // --- Footer ---
//     const footerY = 50;
//     page.drawLine({
//       start: { x: 50, y: footerY + 20 },
//       end: { x: width - 50, y: footerY + 20 },
//       thickness: 0.5,
//       color: rgb(0.7, 0.7, 0.7),
//     });
//     const footerText = "Thank you for using MySANmarg!";
//     const footerTextWidth = font.widthOfTextAtSize(footerText, 12);
//     page.drawText(footerText, {
//       x: (width - footerTextWidth) / 2,
//       y: footerY,
//       size: 12,
//       font,
//       color: rgb(0.3, 0.3, 0.3),
//     });

//     // ✅ Generate PDF
//     const pdfBytes = await pdfDoc.save();
//     const uint8Pdf = new Uint8Array(pdfBytes);

//     return new Response(uint8Pdf, {
//       status: 200,
//       headers: {
//         "Content-Type": "application/pdf",
//         "Content-Disposition": `attachment; filename="${service}-receipt.pdf"`,
//       },
//     });
//   } catch (err: unknown) {
//     console.error("PDF generation error:", err);
//     return new Response(
//       JSON.stringify({ error: "Failed to generate PDF" }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }


// import { NextRequest } from "next/server";
// import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
// import fs from "fs";
// import path from "path";

// export const runtime = "nodejs";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { date, service, provider, cost, status } = body;

//     const pdfDoc = await PDFDocument.create();
//     const page = pdfDoc.addPage([600, 700]);
//     const { width, height } = page.getSize();

//     // Fonts
//     const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
//     const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

//     let y = height - 50;

//     // --- Logo at top center ---
//     try {
//       const logoPath = path.resolve("./public/logo3.png");
//       const logoBytes = fs.readFileSync(logoPath);
//       const logoImage = await pdfDoc.embedPng(logoBytes);
//       const logoDims = logoImage.scale(0.2); // adjust logo size

//       const logoX = (width - logoDims.width) / 2;
//       page.drawImage(logoImage, {
//         x: logoX,
//         y: y - logoDims.height,
//         width: logoDims.width,
//         height: logoDims.height,
//       });

//       y -= logoDims.height + 10;
//     } catch (err: unknown) {
//       console.warn("Logo not found or failed to embed", err);
//     }

//     // --- Tagline below logo ---
//     const tagline = "Smart Assistance Network — Helping Rural India, On Time";
//     const taglineWidth = font.widthOfTextAtSize(tagline, 10);
//     page.drawText(tagline, {
//       x: (width - taglineWidth) / 2,
//       y,
//       size: 10,
//       font,
//       color: rgb(0.2, 0.4, 0.8), // blue theme
//     });

//     y -= 40;

//     // --- Header: SERVICE RECEIPT ---
//     const headerText = "SERVICE RECEIPT";
//     const headerWidth = boldFont.widthOfTextAtSize(headerText, 22);
//     page.drawText(headerText, {
//       x: (width - headerWidth) / 2,
//       y,
//       size: 22,
//       font: boldFont,
//       color: rgb(0.05, 0.2, 0.5), // dark blue
//     });

//     y -= 50;

//     // --- Details table ---
//     const tableStartX = 50;
//     const tableWidth = 500;
//     const rowHeight = 30;
//     let currentY = y;

//     const details: [string, string][] = [
//       ["Date", date],
//       ["Service", service],
//       ["Provider", provider],
//       ["Cost", `INR ${cost}`],
//       ["Payment Status", status],
//     ];

//     // Draw table rows
//     details.forEach(([label, value], i) => {
//       // Alternate row shading (light blue-white)
//       page.drawRectangle({
//         x: tableStartX,
//         y: currentY - rowHeight + 5,
//         width: tableWidth,
//         height: rowHeight,
//         color: i % 2 === 0 ? rgb(0.95, 0.97, 1) : rgb(1, 1, 1),
//       });

//       // Label
//       page.drawText(label + ":", {
//         x: tableStartX + 10,
//         y: currentY - 20,
//         size: 12,
//         font: boldFont,
//         color: rgb(0.05, 0.2, 0.5), // blue label
//       });

//       // Value
//       const valueColor =
//         label === "Payment Status" && status === "Paid"
//           ? rgb(0, 0.6, 0) // green if paid
//           : label === "Payment Status"
//           ? rgb(0.8, 0, 0) // red if not paid
//           : rgb(0, 0, 0);

//       page.drawText(value, {
//         x: tableStartX + 200,
//         y: currentY - 20,
//         size: 12,
//         font,
//         color: valueColor,
//       });

//       // Row separator
//       page.drawLine({
//         start: { x: tableStartX, y: currentY - rowHeight + 5 },
//         end: { x: tableStartX + tableWidth, y: currentY - rowHeight + 5 },
//         thickness: 0.5,
//         color: rgb(0.7, 0.7, 0.7),
//       });

//       currentY -= rowHeight;
//     });

//     // Draw table border
//     page.drawRectangle({
//       x: tableStartX,
//       y: currentY + 5,
//       width: tableWidth,
//       height: details.length * rowHeight,
//       borderColor: rgb(0.05, 0.2, 0.5),
//       borderWidth: 1,
//     });

//     // --- Footer ---
//     const footerY = 50;
//     page.drawLine({
//       start: { x: 50, y: footerY + 20 },
//       end: { x: width - 50, y: footerY + 20 },
//       thickness: 0.5,
//       color: rgb(0.7, 0.7, 0.7),
//     });
//     const footerText = "Thank you for using MySANmarg!";
//     const footerTextWidth = font.widthOfTextAtSize(footerText, 12);
//     page.drawText(footerText, {
//       x: (width - footerTextWidth) / 2,
//       y: footerY,
//       size: 12,
//       font,
//       color: rgb(0.05, 0.2, 0.5), // dark blue footer
//     });

//     // ✅ Save PDF
//     const pdfBytes = await pdfDoc.save();
//     const uint8Pdf = new Uint8Array(pdfBytes);

//     return new Response(uint8Pdf, {
//       status: 200,
//       headers: {
//         "Content-Type": "application/pdf",
//         "Content-Disposition": `attachment; filename="${service}-receipt.pdf"`,
//       },
//     });
//   } catch (err: unknown) {
//     console.error("PDF generation error:", err);
//     return new Response(JSON.stringify({ error: "Failed to generate PDF" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }



// import { NextRequest } from "next/server";
// import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
// import fs from "fs";
// import path from "path";

// export const runtime = "nodejs";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { date, service, provider, cost, status } = body;

//     const pdfDoc = await PDFDocument.create();
//     const page = pdfDoc.addPage([600, 700]);
//     const { width, height } = page.getSize();

//     const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
//     const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

//     let y = height - 50;

//     // Logo
//     try {
//       const logoPath = path.resolve("./public/logo3.png");
//       const logoBytes = fs.readFileSync(logoPath);
//       const logoImage = await pdfDoc.embedPng(logoBytes);
//       const logoDims = logoImage.scale(0.2);

//       const logoX = (width - logoDims.width) / 2;
//       page.drawImage(logoImage, { x: logoX, y: y - logoDims.height, width: logoDims.width, height: logoDims.height });
//       y -= logoDims.height + 10;
//     } catch (err) {
//       console.warn("Logo not found", err);
//     }

//     // Tagline
//     const tagline = "Smart Assistance Network — Helping Rural India, On Time";
//     const taglineWidth = font.widthOfTextAtSize(tagline, 10);
//     page.drawText(tagline, { x: (width - taglineWidth) / 2, y, size: 10, font, color: rgb(0.2, 0.4, 0.8) });
//     y -= 40;

//     // Header
//     const headerText = "SERVICE RECEIPT";
//     const headerWidth = boldFont.widthOfTextAtSize(headerText, 22);
//     page.drawText(headerText, { x: (width - headerWidth) / 2, y, size: 22, font: boldFont, color: rgb(0.05, 0.2, 0.5) });
//     y -= 50;

//     const tableStartX = 50;
//     const tableWidth = 500;
//     const rowHeight = 30;
//     let currentY = y;

//     const details: [string, string][] = [
//       ["Date", date],
//       ["Service", service],
//       ["Provider", provider],
//       ["Cost", `INR ${cost}`],
//       ["Payment Status", status],
//     ];

//     details.forEach(([label, value], i) => {
//       page.drawRectangle({
//         x: tableStartX,
//         y: currentY - rowHeight + 5,
//         width: tableWidth,
//         height: rowHeight,
//         color: i % 2 === 0 ? rgb(0.95, 0.97, 1) : rgb(1, 1, 1),
//       });

//       page.drawText(label + ":", { x: tableStartX + 10, y: currentY - 20, size: 12, font: boldFont, color: rgb(0.05, 0.2, 0.5) });

//       const valueColor = label === "Payment Status" && status === "Paid" ? rgb(0, 0.6, 0) : label === "Payment Status" ? rgb(0.8, 0, 0) : rgb(0, 0, 0);

//       page.drawText(value, { x: tableStartX + 200, y: currentY - 20, size: 12, font, color: valueColor });

//       page.drawLine({ start: { x: tableStartX, y: currentY - rowHeight + 5 }, end: { x: tableStartX + tableWidth, y: currentY - rowHeight + 5 }, thickness: 0.5, color: rgb(0.7, 0.7, 0.7) });

//       currentY -= rowHeight;
//     });

//     page.drawRectangle({ x: tableStartX, y: currentY + 5, width: tableWidth, height: details.length * rowHeight, borderColor: rgb(0.05, 0.2, 0.5), borderWidth: 1 });

//     // Footer
//     const footerY = 50;
//     page.drawLine({ start: { x: 50, y: footerY + 20 }, end: { x: width - 50, y: footerY + 20 }, thickness: 0.5, color: rgb(0.7, 0.7, 0.7) });
//     const footerText = "Thank you for using MySANmarg!";
//     const footerTextWidth = font.widthOfTextAtSize(footerText, 12);
//     page.drawText(footerText, { x: (width - footerTextWidth) / 2, y: footerY, size: 12, font, color: rgb(0.05, 0.2, 0.5) });

//     const pdfBytes = await pdfDoc.save();
//     return new Response(new Uint8Array(pdfBytes), { status: 200, headers: { "Content-Type": "application/pdf", "Content-Disposition": `attachment; filename="${service}-receipt.pdf"` } });
//   } catch (err) {
//     console.error(err);
//     return new Response(JSON.stringify({ error: "Failed to generate PDF" }), { status: 500, headers: { "Content-Type": "application/json" } });
//   }
// }





import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { paymentDocId } = await req.json();
    if (!paymentDocId) {
      return NextResponse.json({ error: "Missing paymentDocId" }, { status: 400 });
    }

    // 🔹 Fetch payment data from Firestore
    const snap = await adminDb.collection("payments").doc(paymentDocId).get();
    if (!snap.exists) {
      return NextResponse.json({ error: "Payment document not found" }, { status: 404 });
    }
    const data = snap.data();

    // 🔹 Create PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595, 842]); // A4 size (points)
    const { width, height } = page.getSize();
    
    // Fonts
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    let currentY = height - 50;

    // 🔹 Add Logo in top left corner and Company Name next to it
    try {
      const logoPath = path.join(process.cwd(), "public", "logo3.png");
      const logoBytes = fs.readFileSync(logoPath);
      const logoImage = await pdfDoc.embedPng(logoBytes);
      const logoDims = logoImage.scale(0.08); // Much smaller logo
      
      // Place logo in top left corner
      page.drawImage(logoImage, {
        x: 50,
        y: currentY - 30,
        width: logoDims.width,
        height: logoDims.height,
      });
      
      // Company name next to logo
      page.drawText("MySanMarg", {
        x: 50 + logoDims.width + 10, // 10 points spacing after logo
        y: currentY - 20,
        size: 18,
        font: helveticaBoldFont,
        color: rgb(0, 0, 0),
      });
      
      currentY -= 60;
    } catch (logoError) {
      console.warn("Logo not found, proceeding without logo");
      page.drawText("MySanMarg", {
        x: 50,
        y: currentY - 20,
        size: 18,
        font: helveticaBoldFont,
        color: rgb(0, 0, 0),
      });
      currentY -= 40;
    }

    // 🔹 Payment Receipt Title (exactly as in PDF)
    page.drawText("Payment Receipt", {
      x: 50,
      y: currentY,
      size: 18,
      font: helveticaBoldFont,
      color: rgb(0, 0, 0),
    });
    currentY -= 25;

    // 🔹 Provider line (exactly as in PDF)
    page.drawText(`Provider: ${data?.provider || "p_id1234"}`, {
      x: 50,
      y: currentY,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    currentY -= 20;

    // 🔹 Receipt ID (exactly as in PDF format - ensure it fits on one line)
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const dateStr = `${year}${month}${day}`;
    const providerShort = (data?.provider || 'p_id1234').substring(0, 8); // Limit provider ID length
    const receiptId = `RCPT-${dateStr}-${providerShort}-${Math.floor(Math.random() * 900) + 100}`;
    
    page.drawText(`Receipt ID: ${receiptId}`, {
      x: 50,
      y: currentY,
      size: 10, // Smaller font to ensure it fits
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    currentY -= 35;

    // 🔹 Receipt details header (exactly as in PDF)
    page.drawText("Receipt details", {
      x: 50,
      y: currentY,
      size: 14,
      font: helveticaBoldFont,
      color: rgb(0, 0, 0),
    });
    currentY -= 25;

    // 🔹 Receipt details content (exactly as in PDF layout)
    page.drawText("Service:", {
      x: 50,
      y: currentY,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    page.drawText(data?.service || "Fuel", {
      x: 150,
      y: currentY,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    currentY -= 20;

    page.drawText("Provider ID:", {
      x: 50,
      y: currentY,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    page.drawText(data?.provider || "p_id1234", {
      x: 150,
      y: currentY,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    currentY -= 20;

    // Format date exactly like in PDF: 18/9/2025, 9:34:11 PM (Asia/Kolkata)
    const formatDate = (timestamp) => {
      if (!timestamp?._seconds) return "18/9/2025, 9:34:11 PM (Asia/Kolkata)";
      
      const date = new Date(timestamp._seconds * 1000);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const time = date.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      
      return `${day}/${month}/${year}, ${time} (Asia/Kolkata)`;
    };

    page.drawText("Date & Time:", {
      x: 50,
      y: currentY,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    page.drawText(formatDate(data?.createdAt), {
      x: 150,
      y: currentY,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    currentY -= 20;

    page.drawText("Status:", {
      x: 50,
      y: currentY,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    page.drawText(data?.status?.toUpperCase() || "PAID", {
      x: 150,
      y: currentY,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    currentY -= 35;

    // 🔹 Amount Paid section (exactly as in PDF)
    page.drawText("Amount Paid", {
      x: 50,
      y: currentY,
      size: 14,
      font: helveticaBoldFont,
      color: rgb(0, 0, 0),
    });
    currentY -= 25;

    const currency = data?.currency || "INR";
    const amount = data?.amount ? parseFloat(data.amount).toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) : "2,000.00";

    page.drawText(`${currency} ${amount}`, {
      x: 50,
      y: currentY,
      size: 14,
      font: helveticaBoldFont,
      color: rgb(0, 0, 0),
    });
    currentY -= 35;

    // 🔹 Item Description section (exactly as in PDF)
    page.drawText("Item Description", {
      x: 50,
      y: currentY,
      size: 14,
      font: helveticaBoldFont,
      color: rgb(0, 0, 0),
    });
    currentY -= 25;

    // Table layout exactly as in PDF
    const tableRows = [
      ["Service", data?.service || "Fuel"],
      ["Provider", data?.provider || "p_id1234"],
      ["Amount", `${currency} ${amount}`],
      ["Status", data?.status?.toUpperCase() || "PAID"],
      ["Date", formatDate(data?.createdAt)]
    ];

    tableRows.forEach(([label, value]) => {
      page.drawText(label, {
        x: 50,
        y: currentY,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      page.drawText(value, {
        x: 150,
        y: currentY,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      currentY -= 20;
    });

    currentY -= 25;

    // 🔹 Thank you message (exactly as in PDF)
    page.drawText("Thank you for your payment. If you have any questions about this receipt, please contact", {
      x: 50,
      y: currentY,
      size: 11,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    currentY -= 15;

    page.drawText("the service provider.", {
      x: 50,
      y: currentY,
      size: 11,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    currentY -= 40;

    // 🔹 Authorized Signature (exactly as in PDF)
    page.drawText("Authorized Signature", {
      x: 50,
      y: currentY,
      size: 12,
      font: helveticaBoldFont,
      color: rgb(0, 0, 0),
    });
    currentY -= 50;

    // 🔹 Generated timestamp (exactly as in PDF format)
    const now = new Date();
    const generatedDate = now.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    const generatedTime = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    
    page.drawText(`Generated on: ${generatedDate} ${generatedTime} (system time)`, {
      x: 50,
      y: currentY,
      size: 10,
      font: helveticaFont,
      color: rgb(0.4, 0.4, 0.4),
    });

    const pdfBytes = await pdfDoc.save();

    return new NextResponse(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="receipt-${paymentDocId}.pdf"`,
      },
    });
  } catch (err: any) {
    console.error("Receipt generation error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}




