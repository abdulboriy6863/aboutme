import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const PORTFOLIO_KNOWLEDGE = `
You are the AI Digital Twin and Principal Architecture Copilot for Abdulboriy.
Abdulboriy is a Principal Full-Stack & Distributed Systems Architect with 7+ years of experience leading engineering teams.
Key Highlights:
- Specializes in high-throughput distributed systems, microfrontends, Next.js 15, React 19, TypeScript strict mode, Go, PostgreSQL, Redis, and Cloudflare/AWS Edge architectures.
- Built systems serving 10M+ daily events with sub-45ms P99 global latency and 99.99% production SLA.
- Deep expertise in AI-native engineering: Vercel AI SDK, autonomous agent orchestration, RAG pipelines with pgvector/Pinecone.
- Leadership: Mentors senior engineering teams, drives RFC architecture reviews, enforces 100/100 Lighthouse performance budgets and SOC2 zero-trust compliance.
`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const lastUserMessage = messages?.[messages.length - 1]?.content || "";

    // Simulated high-throughput streaming response
    let responseText = "";

    const lower = lastUserMessage.toLowerCase();
    if (lower.includes("latency") || lower.includes("sub-50ms") || lower.includes("speed")) {
      responseText = `To achieve sub-45ms global P99 latency, Abdulboriy employs:
1. **Edge Routing & SSR**: Next.js 15 App Router deployed across multi-region Cloudflare / AWS edge nodes.
2. **Predictive Caching**: Multi-tiered Redis caching with stale-while-revalidate and deterministic cache invalidation tags.
3. **Zero Bloat Bundles**: Tree-shaken ESM modules with strict sub-80KB initial JS budgets and critical CSS inlining.
4. **Optimized DB Connections**: Read-replicas with connection pooling (PgBouncer) and distributed indexes on PostgreSQL.`;
    } else if (lower.includes("stack") || lower.includes("technolog") || lower.includes("tech")) {
      responseText = `Abdulboriy's core technology matrix spans:
- **Frontend Architecture**: Next.js 15 (App Router), TypeScript (Strict Mode), React 19, Tailwind CSS, Framer Motion.
- **Backend & Distributed Systems**: Go (Golang), Node.js / Bun, PostgreSQL, Redis, Kafka, gRPC.
- **Cloud & DevOps**: Kubernetes, Docker, AWS, Cloudflare Workers, Terraform, GitHub Actions CI/CD.
- **AI & ML Integration**: Vercel AI SDK, LangChain, Pinecone / pgvector, OpenAI / Gemini streaming endpoints.`;
    } else if (lower.includes("ai") || lower.includes("agent") || lower.includes("sdk")) {
      responseText = `Abdulboriy designs AI-native enterprise solutions using:
- **Vercel AI SDK & Next.js Streaming**: Real-time token streaming with low time-to-first-byte (TTFB).
- **Multi-Agent Orchestration**: Specialized subagents with strict tool-calling schemas and fallback error recovery.
- **Retrieval-Augmented Generation (RAG)**: Hybrid dense/sparse vector search with reranking for high factual accuracy.`;
    } else {
      responseText = `Abdulboriy is a Principal Full-Stack & Systems Architect specializing in building mission-critical web platforms, resilient distributed backends (Go/Node.js), and AI-native applications.

He brings 7+ years of experience leading engineering initiatives, scaling systems to 10M+ daily events, and ensuring 99.99% availability. Feel free to explore the Bento Grid sections or ask specific questions about database architecture, microfrontends, or cloud infrastructure!`;
    }

    // Stream the text chunk by chunk for ultra-realistic streaming experience
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const words = responseText.split(" ");
        for (let i = 0; i < words.length; i++) {
          const chunk = (i === 0 ? "" : " ") + words[i];
          controller.enqueue(encoder.encode(chunk));
          // Small delay to simulate streaming token generation
          await new Promise((resolve) => setTimeout(resolve, 25));
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
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate AI response" },
      { status: 500 }
    );
  }
}
