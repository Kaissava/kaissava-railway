const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Bot çalışıyor, hoşgeldin!");
});

bot.on("polling_error", (error) => {
  console.error("Polling error:", error);
});
