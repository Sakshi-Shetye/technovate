// lib/llava.ts
// Simple helper to call your local Ollama llava:7b model
// Make sure Ollama is running: `ollama run llava:7b`

export async function runLLava(prompt: string): Promise<string> {
  try {
    const res = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llava:7b",
        prompt,
        stream: false,
      }),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    // Ollama returns { response: "text..." }
    return data.response || "";
  } catch (err) {
    console.error("LLava call failed:", err);
    return "Sorry, I couldn't process that right now.";
  }
}
