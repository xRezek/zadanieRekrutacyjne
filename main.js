import OpenAI from "openai";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const openai = new OpenAI({apiKey: process.env["OPENAI_API_KEY"]});

async function ChatGPTResponse(message) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Błąd podczas komunikacji z API:", error);
  }
}

const filePath = "article.txt";

try {
  const data = fs.readFileSync(filePath, "utf8");

  const chatResponse = await ChatGPTResponse(data + "Zredaguj ten tekst zgodnie z gramatyką języka polskiego." +
    " Użyj odpowiednich tagów HTML do strukturyzacji artykułu do nagłówków używaj znaczników h oraz tekst ma opływać obrazy" +
    ` Przy każdym akapicie po lewej stronie ma być miejsce na zdjęcie oznacz je z użyciem
      tagu <img> z atrybutem src="image_placeholder.jpg". Dodaj atrybut alt do
      każdego obrazka z dokładnym promptem, którego można użyć do wygenerowania grafiki.
      Umieść podpisy pod grafikami używając odpowiedniego tagu HTML.` +
    ` Zwrócony kod powinien zawierać wyłącznie zawartość do
      wstawienia pomiędzy tagami <body>. Nie dołączaj znaczników <html>,
      <head> ani <body>. Nie dodawaj też żadnego stylu css ani skryptów js.`  
  );

  fs.writeFileSync("artykul.html", chatResponse, "utf8");
} catch (err) {
  console.error("Błąd odczytu pliku:", err);
}








