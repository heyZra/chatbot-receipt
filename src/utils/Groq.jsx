import Groq from "groq-sdk";
const GROQ_API = import.meta.env.VITE_GROQ;
const groq = new Groq({ apiKey: GROQ_API, dangerouslyAllowBrowser: true });
export const requestGroqAI = async (content) => {
  const reply = await groq.chat.completions.create({
    messages: [{ role: "user", content }],
    // model: "llama-3.1-8b-instant",
    model: "gemma2-9b-it",
  });
  return reply.choices[0].message.content;
};
