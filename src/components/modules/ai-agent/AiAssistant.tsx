"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Sparkles, Send, Bot, User, Trash2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
}

export function AiAssistant({
  isOpen,
  onOpenChange,
  initialPrompt,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  initialPrompt?: string;
}) {
  const t = useTranslations("AiAgent");

  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "initial-greeting",
      role: "assistant",
      content: t("greeting"),
    },
  ]);

  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (userPrompt?: string) => {
    const query = (userPrompt || input).trim();
    if (!query || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: query,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (response.ok && response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let assistantReply = "";
        const assistantMsgId = (Date.now() + 1).toString();

        setMessages((prev) => [
          ...prev,
          { id: assistantMsgId, role: "assistant", content: "" },
        ]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          assistantReply += chunk;
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMsgId
                ? { ...msg, content: assistantReply }
                : msg
            )
          );
        }
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content:
              "Abdulboriy specializes in high-scale distributed systems, Next.js enterprise microfrontends, and autonomous AI agents with P99 latency <45ms. Please check the Architecture section or reach out directly for consulting.",
          },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "Thank you for asking! Abdulboriy has over 7+ years of experience leading engineering teams, architecting distributed multi-region platforms, and deploying production AI applications.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Trigger initial prompt if passed when modal opens
  React.useEffect(() => {
    if (isOpen && initialPrompt) {
      handleSend(initialPrompt);
    }
  }, [isOpen, initialPrompt]);

  const clearChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        role: "assistant",
        content: t("greeting"),
      },
    ]);
  };

  const quickPrompts = [
    t("quickPrompts.0"),
    t("quickPrompts.1"),
    t("quickPrompts.2"),
    t("quickPrompts.3"),
  ];

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => onOpenChange(true)}
          className="group relative flex items-center gap-2.5 rounded-full border border-orange-500/40 bg-white/90 dark:bg-zinc-950/90 px-4 py-3 text-sm font-semibold text-zinc-900 dark:text-white shadow-[0_4px_25px_rgba(255,87,34,0.2)] dark:shadow-[0_0_25px_rgba(255,87,34,0.3)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-orange-500/80 hover:shadow-[0_0_35px_rgba(255,87,34,0.4)]"
          aria-label={t("triggerButton")}
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-orange-500" />
          </span>
          <Sparkles className="h-4 w-4 text-orange-500 dark:text-orange-400 transition-transform group-hover:rotate-12" />
          <span className="hidden sm:inline font-medium tracking-tight">
            {t("triggerButton")}
          </span>
        </button>
      </div>

      {/* AI Chat Dialog */}
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent
          onClose={() => onOpenChange(false)}
          className="max-w-2xl h-[600px] flex flex-col p-0 overflow-hidden"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-zinc-200 dark:border-white/[0.08] bg-zinc-50 dark:bg-zinc-950/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                <Bot className="h-5 w-5 text-orange-500 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white flex items-center gap-2">
                  {t("modalTitle")}
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    LIVE
                  </span>
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{t("modalSubtitle")}</p>
              </div>
            </div>

            <button
              onClick={clearChat}
              className="mr-8 p-1.5 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200 hover:bg-zinc-200/60 dark:hover:bg-white/10 transition"
              title={t("clear")}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 text-sm bg-zinc-50/50 dark:bg-transparent">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="h-7 w-7 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="h-3.5 w-3.5 text-orange-500 dark:text-orange-400" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#ff5722] text-white rounded-br-none shadow-[0_0_15px_rgba(255,87,34,0.2)]"
                      : "bg-white dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-white/[0.08] rounded-bl-none shadow-sm dark:shadow-none"
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <div className="h-7 w-7 rounded-lg bg-zinc-200 dark:bg-white/10 border border-zinc-300 dark:border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="h-3.5 w-3.5 text-zinc-700 dark:text-zinc-300" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 justify-start items-center text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                <div className="h-7 w-7 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                  <Bot className="h-3.5 w-3.5 text-orange-500 dark:text-orange-400 animate-spin" />
                </div>
                <span className="flex items-center gap-1">
                  Synthesizing architectural knowledge
                  <span className="animate-pulse">...</span>
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-6 py-2 border-t border-zinc-200 dark:border-white/[0.06] bg-zinc-100/50 dark:bg-black/20 flex gap-2 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                disabled={loading}
                className="whitespace-nowrap px-3 py-1 rounded-full border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] text-[11px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-orange-500/40 hover:bg-orange-500/10 transition shrink-0 shadow-sm dark:shadow-none"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <div className="p-4 border-t border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-zinc-950/80">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("placeholder")}
                disabled={loading}
                className="bg-zinc-50 dark:bg-zinc-900/90 text-xs sm:text-sm"
              />
              <Button
                type="submit"
                disabled={loading || !input.trim()}
                variant="default"
                size="sm"
                className="h-10 px-4 shrink-0 bg-[#ff5722] hover:bg-[#e64a19] text-white"
              >
                <Send className="w-4 h-4" />
                <span className="sr-only">{t("send")}</span>
              </Button>
            </form>
            <p className="text-[10px] text-center text-zinc-500 dark:text-zinc-500 mt-2 font-mono">
              {t("disclaimer")}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
