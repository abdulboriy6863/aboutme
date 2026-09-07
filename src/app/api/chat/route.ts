import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_INSTRUCTION = `
You are the AI Digital Twin and Copilot for Abdulboriy.
Key Profile & Expertise:
- Role: Production AI & Systems Architect based in Seoul, South Korea (Seulda · doimiy ish va kontraktga ochiq).
- Work Scope: Solo builder, shipping end-to-end production AI systems, AI SaaS platforms, RAG pipelines, and LLM orchestration.
- Upwork: Top Rated, 100% Job Success score.
- Architecture: High-throughput distributed systems, Next.js 15, Go, PostgreSQL, Redis, Kafka, Kubernetes, and Vercel AI SDK.
- Latency & Scale: Handled 10M+ daily telemetry events with sub-45ms P99 latency and 99.99% production SLA.
- Personality: Direct, professional, insightful, developer-first, and helpful.
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
      fallbackText = `Eng murakkab loyihalarimdan biri — kunlik 10M+ telemetriya va energiya yuklamasini bashorat qiluvchi taqsimlangan oqim platformasi. Unda Go (Golang) da yozilgan hodisaviy mikroservislar, multi-region Redis kesh va PostgreSQL klasteri orqali global P99 kechikish 45ms dan pastga tushirilgan.`;
    } else if (lower.includes("tez") || lower.includes("fast") || lower.includes("yolg'iz") || lower.includes("solo")) {
      fallbackText = `Yakka o'zim (solo) to'liq arxitektura, backend, frontend va AI integratsiyasini 0 dan production darajasigacha 2-4 hafta ichida mustaqil yetkazib bera olaman. CI/CD, infratuzilma va type-safety boshidan to'g'ri qurilgani sababli ortiqcha kechikishlar bo'lmaydi.`;
    } else if (lower.includes("stek") || lower.includes("stack") || lower.includes("texnologik")) {
      fallbackText = `Mening asosiy texnologik stekim:
- Frontend: Next.js 15 (App Router), TypeScript (Strict), React 19, Tailwind CSS.
- Backend & Systems: Go (Golang), Node.js / Bun, PostgreSQL, Redis, Kafka, gRPC.
- AI & RAG: Vercel AI SDK, pgvector, LangChain, Google Gemini / OpenAI streaming.
- Infra: Docker, Kubernetes, AWS, Cloudflare Edge.`;
    } else if (lower.includes("seul") || lower.includes("seoul") || lower.includes("yollash") || lower.includes("hire")) {
      fallbackText = `Seulda yashayman va mahalliy koreys kompaniyalari bilan to'g'ridan-to'g'ri (on-site / hybrid) yoki global masofaviy mijozlar bilan kontrakt asosida ishlashga tayyorman. Upwork'da Top Rated (100% Job Success) darajasidaman va koreys mahsulot jamoalari talablarini yaxshi tushunaman.`;
    } else {
      fallbackText = `Men Abdulboriy — Seulda joylashgan Production AI va taqsimlangan tizimlar arxitektoriman. AI SaaS platformalari, RAG konveyerlari va yuqori yuklamali veb arxitekturasini noldan oxirigacha yakka o'zim qura olaman. Menga istalgan arxitektura yoki hamkorlik bo'yicha savolingizni berishingiz mumkin!`;
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
