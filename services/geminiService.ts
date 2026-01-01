
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCoffeeAdvice = async (userPreference: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Bạn là một chuyên gia tư vấn cà phê tại "Hương Đất Coffee". 
      Dựa trên sở thích sau của khách hàng: "${userPreference}", hãy tư vấn loại cà phê phù hợp nhất 
      (Robusta Honey cho người thích đậm, Arabica Cầu Đất cho người thích thanh, hoặc Signature Blend cho sự cân bằng). 
      Hãy trả lời bằng tiếng Việt một cách ấm cúng và chuyên nghiệp.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API error:", error);
    return "Rất tiếc, chuyên gia của chúng tôi đang bận rang cà phê. Vui lòng thử lại sau!";
  }
};
