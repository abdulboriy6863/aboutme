import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_INSTRUCTION = `
You are the AI Digital Twin and Copilot for Abdulboriy.
Key Profile & Expertise:
- Role: Production AI & Systems Architect based in Seoul, South Korea (Seulda · doimiy ish va kontraktga ochiq).
- Work Scope: Solo builder, shipping end-to-end production AI systems, EV charging station management platforms (CSMS), RAG pipelines, and high-load web architectures.
- Major Engineering Milestone: Engineered core backend and real-time infrastructure for Blue Networks' E-Chae-Um EV Charging Station Management System (CSMS) across 1,600+ chargers and 500+ locations in Korea using Java 17, Spring Boot, MyBatis, OCPP 1.6J / 2.0.1 protocols, bidirectional WebSockets, OTA firmware distribution, KECO roaming, and Smartro PG settlements.
- Architecture: High-throughput distributed systems, Next.js 15, TypeScript, Java 17 / Spring Boot, Go, PostgreSQL, Redis, Docker, and Vercel AI SDK.
- Latency & Scale: Sub-50ms live charger telemetry sync, 99.99% production SLA.
- Personality: Direct, professional, insightful, developer-first, and helpful. Never claim active current employment at previous companies; frame achievements as proven production architectures delivered.
Answer the user's questions concisely and smartly in the same language they ask (Uzbek, English, or Korean).
`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const lastUserMessage = messages?.[messages.length - 1]?.content || "";

    const apiKey = process.env.GEMINI_API_KEY || "AIzaSyDTbwSoO1uV035Z_-134itwFXdHw28pgDw";

    // Attempt Gemini API streaming
    if (apiKey) {
      const models = ["gemini-flash-latest", "gemini-3.6-flash", "gemini-2.5-flash-lite"];

      for (const model of models) {
        try {
          const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${apiKey}`;

          const geminiContents = [
            {
              role: "user",
              parts: [
                {
                  text: `${SYSTEM_INSTRUCTION}\n\nUser Question: ${lastUserMessage}`,
                },
              ],
            },
          ];

          const geminiRes = await fetch(geminiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: geminiContents }),
          });

          if (geminiRes.ok && geminiRes.body) {
            const reader = geminiRes.body.getReader();
            const decoder = new TextDecoder();
            const encoder = new TextEncoder();

            const stream = new ReadableStream({
              async start(controller) {
                let buffer = "";
                try {
                  while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    buffer += decoder.decode(value, { stream: true });

                    const lines = buffer.split("\n");
                    buffer = lines.pop() || "";

                    for (const line of lines) {
                      if (line.startsWith("data: ")) {
                        const jsonStr = line.replace("data: ", "").trim();
                        if (jsonStr) {
                          try {
                            const parsed = JSON.parse(jsonStr);
                            const text =
                              parsed.candidates?.[0]?.content?.parts?.[0]?.text;
                            if (text) {
                              controller.enqueue(encoder.encode(text));
                            }
                          } catch {
                            // ignore parse errors for partial chunks
                          }
                        }
                      }
                    }
                  }
                } catch {
                  // If stream interrupted, close cleanly
                } finally {
                  controller.close();
                }
              },
            });

            return new Response(stream, {
              headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "Transfer-Encoding": "chunked",
              },
            });
          }
        } catch {
          // try next model
        }
      }
    }

    // Fallback Domain-Knowledge Streaming
    let fallbackText = "";
    const lower = lastUserMessage.toLowerCase();

    if (lower.includes("murakkab") || lower.includes("complex") || lower.includes("qurgan")) {
      fallbackText = `Eng murakkab loyihalarimdan biri — Blue Networks'ning E-Chae-Um elektromobil zaryadlash stansiyalari boshqaruv tizimi (CSMS). Unda Koreya bo'ylab 1,600+ stansiyalarni boshqarish uchun OCPP 1.6J/2.0.1 protokoli, real-vaqt WebSocket telemetriyasi, ommaviy OTA proshivka tarqatish, KECO rouming va Smartro PG to'lov klasteri to'liq Java 17, Spring Boot, MyBatis va PostgreSQL/Redis yordamida amalga oshirilgan.`;
    } else if (lower.includes("tez") || lower.includes("fast") || lower.includes("yolg'iz") || lower.includes("solo")) {
      fallbackText = `Yakka o'zim (solo) to'liq arxitektura, backend, frontend va AI integratsiyasini 0 dan production darajasigacha 2-4 hafta ichida mustaqil yetkazib bera olaman. CI/CD, infratuzilma va type-safety boshidan to'g'ri qurilgani sababli ortiqcha kechikishlar bo'lmaydi.`;
    } else if (lower.includes("stek") || lower.includes("stack") || lower.includes("texnologik")) {
      fallbackText = `Mening asosiy texnologik stekim:
- Frontend: Next.js 15 (App Router), TypeScript (Strict), React 19, Tailwind CSS.
- Backend & Systems: Java 17 / Spring Boot, MyBatis, Go (Golang), Node.js / NestJS, OCPP 1.6J / 2.0.1, WebSockets.
- Data & Cache: PostgreSQL, MySQL (Sharded), Redis, Kafka.
- AI & RAG: Vercel AI SDK, pgvector, LangChain, Google Gemini / Claude / OpenAI.
- Infra: Docker, NGINX, Linux, AWS, GCP.`;
    } else if (lower.includes("seul") || lower.includes("seoul") || lower.includes("yollash") || lower.includes("hire")) {
      fallbackText = `Seulda yashayman va 2023-yildan beri Koreya texnologik muhitida muvaffaqiyatli ishlab kelmoqdaman. Koreys, ingliz va rus tillarida erkin so'zlasha olaman. Hozirda doimiy (full-time) yoki yuqori ta'sirli kontrakt loyihalarga ochiqman.`;
    } else {
      fallbackText = `Men Abdulboriy — Seulda joylashgan Production AI va taqsimlangan tizimlar arxitektoriman. Blue Networks EV CSMS (OCPP 1.6J/2.0.1, WebSockets), enterprise AI tizimlari va yuqori yuklamali platformalarni mustaqil noldan production darajasigacha qura olaman. Menga istalgan arxitektura yoki hamkorlik bo'yicha savolingizni berishingiz mumkin!`;
    }

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const words = fallbackText.split(" ");
        for (let i = 0; i < words.length; i++) {
          const chunk = (i === 0 ? "" : " ") + words[i];
          controller.enqueue(encoder.encode(chunk));
          await new Promise((resolve) => setTimeout(resolve, 20));
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process chat" },
      { status: 500 }
    );
  }
}
