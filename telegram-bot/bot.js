const TelegramBot = require("node-telegram-bot-api");

const token = "7101083607:AAFBaPZ96CN8ibOnYisPPmIYxdoGHnDlXJ8"; // Replace with your own bot token
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === "/start") {
    bot.sendMessage(chatId, "Hello skyash!");
  }
});
