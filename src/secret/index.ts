import dotenv from "dotenv";
dotenv.config();

export const IGusername: string = process.env.IGusername || "";
export const IGpassword: string = process.env.IGpassword || "";

export const geminiApiKeys: string[] = process.env.GEMINI_API_KEYS
  ? process.env.GEMINI_API_KEYS.split(",").map((key) => key.trim())
  : [];
  
export const TARGET_POST_URLS: string[] = process.env.TARGET_POST_URLS
    ? process.env.TARGET_POST_URLS.split(',').map((url) => url.trim())
    : [];



