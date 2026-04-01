import axios from "axios";

// Translate text from source language → target language
export async function translateText(text: string, source: string = "hi", target: string = "en") {
  try {
    const res = await axios.post("https://libretranslate.de/translate", {
      q: text,
      source,
      target,
      format: "text"
    });
    return res.data.translatedText;
  } catch (err) {
    console.error("Translation failed:", err);
    return text; // fallback to original
  }
}
