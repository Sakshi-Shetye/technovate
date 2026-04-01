export async function handleStripePayment(item: any) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ service: item.service, amount: item.cost }),
  });

  const data = await res.json();
  if (data.url) {
    window.location.href = data.url;
  } else {
    alert("Payment initialization failed");
  }
}