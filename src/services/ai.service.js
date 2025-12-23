const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});
async function genrateCaption(base64ImageFile, prompt) {
  try {
    const contents = [
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: base64ImageFile,
        },
      },
      { text: prompt },
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config: {
        systemInstruction: `You are a helpful assistant that generates image captions based on the image and user prompt provided. Image caption should be concise and relevant to the content of the image. you must use hastags and emojis in the caption. caption should be engaging and creative and short.`,
      },
    });

    return response.text;
  } catch (error) {
    console.log(error);
  }
}

module.exports = genrateCaption;
