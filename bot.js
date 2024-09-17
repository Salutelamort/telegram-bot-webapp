require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;
const webAppUrl = process.env.WEBAPP_URL;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === '/start') {
    bot.sendMessage(chatId, 'Добро пожаловать! Нажмите кнопку ниже, чтобы открыть веб-приложение.', {
      reply_markup: {
        keyboard: [[{ text: 'Открыть веб-приложение', web_app: { url: webAppUrl } }]],
        resize_keyboard: true,
        one_time_keyboard: false
      }
    });
  }
});

console.log('Bot is running...');

module.exports = bot;