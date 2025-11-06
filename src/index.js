import Fastify from "fastify";
import { Telegraf } from "telegraf";

const app = Fastify({ logger: true });

const BOT_TOKEN = "8582609346";
const ADMIN_CHAT_ID = 8490375470:AAGpuHaX37fEKmpEU--Kx23-W36-ZBJh68o;

const bot = new Telegraf(BOT_TOKEN);

// ✅ Webhook endpoint Telegram-a deyir: buraya mesaj göndər
app.post("/webhook", async (req, reply) => {
  await bot.handleUpdate(req.body);
  reply.send({ ok: true });
});

// ✅ Telegram-a webhook URL təyin edirik
bot.telegram.setWebhook(${process.env.RENDER_EXTERNAL_URL}/webhook);

// ✅ Bot komandaları
bot.start((ctx) => ctx.reply("Brat, sistem aktivdir ✅"));
bot.command("status", (ctx) => ctx.reply("Status ✅ Sistem aktivdir, Brat."));
bot.command("approve", (ctx) => ctx.reply("✅ Təsdiqləndi Brat."));
bot.command("report", (ctx) => ctx.reply("📊 Hesabat: hər şey qaydasındadır."));

// ✅ Server test route
app.get("/", (req, reply) => {
  reply.send("Agent API Brat ✅ Running");
});

// ✅ Serveri işə salmaq
app.listen({ port: process.env.PORT || 3000, host: "0.0.0.0" });
