import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

const API_KEY = process.env.API_KEY || '';

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (!API_KEY) {
    console.warn("Gemini API Key is missing.");
    // We return a dummy object or throw, but for safety in this demo we'll return null-ish handling in component
    throw new Error("API Key missing"); 
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: AI_SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<GenerateContentResponse>> => {
  if (!chatSession) {
    try {
        initializeChat();
    } catch (e) {
        throw new Error("Unable to initialize AI chat. Please check API configuration.");
    }
  }
  
  if (chatSession) {
      return await chatSession.sendMessageStream({ message });
  }
  throw new Error("Chat session not active");
};
