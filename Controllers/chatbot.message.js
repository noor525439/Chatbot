import User from "../Models/user.model.js";
import Bot from "../Models/bot.model.js";
import  botResponses  from "../Data/botResponses.js"; 

export const Message = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text?.trim()) return res.status(400).json({ error: "Text cannot be empty" });


    const user = await User.create({ sender: "user", text });

    const normalizeText = text.toLowerCase().trim();


    const botReply = botResponses[normalizeText] || "Sorry, I don't understand that 😅";


    const bot = await Bot.create({ sender: "bot", text: botReply });

    return res.status(200).json({ userMessage: user.text, botMessage: bot.text });

  } catch (error) {
    console.error("Controller error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
