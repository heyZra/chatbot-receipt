import Groq from "groq-sdk";
const GROQ_API = import.meta.env.VITE_GROQ;
const groq = new Groq({ apiKey: GROQ_API, dangerouslyAllowBrowser: true });
export const requestGroqAI = async (content) => {
  const reply = await groq.chat.completions.create({
    messages: [{ role: "user", content }],
    // model: "llava-v1.5-7b-4096-preview",
    model: "llama3-70b-8192",
    // model: "llama-3.1-70b-versatile",
    // model: "llama-3.1-8b-instant",
  });
  return reply.choices[0].message.content;
};
