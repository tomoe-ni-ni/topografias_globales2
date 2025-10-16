"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "¡Hola! Soy el asistente virtual. Pregúntame sobre el proyecto.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.response,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Error al conectar con el servidor.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <Card className="rounded-none border-x-0 border-t-0 flex-shrink-0">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Bot className="w-8 h-8 text-primary" />
            Asistente BOT
          </h1>
          <p className="text-sm text-muted-foreground">
            Pregúntame sobre el proyecto
          </p>
        </div>
      </Card>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={cn(
              "flex gap-3",
              msg.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            {msg.role === "assistant" && (
              <Avatar className="w-8 h-8 flex-shrink-0">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <Bot className="w-5 h-5" />
                </AvatarFallback>
              </Avatar>
            )}

            <Card
              className={cn(
                "max-w-2xl p-4",
                msg.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-card-foreground"
              )}
            >
              {msg.role === "assistant" ? (
                <ReactMarkdown
                  components={{
                    p: ({ node, ...props }) => (
                      <p className="mb-2 last:mb-0" {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul
                        className="list-disc ml-4 mb-2 space-y-1"
                        {...props}
                      />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol
                        className="list-decimal ml-4 mb-2 space-y-1"
                        {...props}
                      />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="mb-1" {...props} />
                    ),
                    strong: ({ node, ...props }) => (
                      <strong className="font-bold" {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3 className="font-bold text-lg mb-2 mt-2" {...props} />
                    ),
                    code: ({ node, ...props }) => (
                      <code
                        className="bg-muted px-1 py-0.5 rounded text-sm font-mono"
                        {...props}
                      />
                    ),
                  }}
                >
                  {msg.content}
                </ReactMarkdown>
              ) : (
                <p>{msg.content}</p>
              )}
            </Card>

            {msg.role === "user" && (
              <Avatar className="w-8 h-8 flex-shrink-0">
                <AvatarFallback className="bg-secondary text-secondary-foreground">
                  <User className="w-5 h-5" />
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex gap-3">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-primary text-primary-foreground">
                <Bot className="w-5 h-5" />
              </AvatarFallback>
            </Avatar>
            <Card className="bg-card p-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-primary rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-primary rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </Card>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <Card className="rounded-none border-x-0 border-b-0 flex-shrink-0">
        <div className="p-4">
          <div className="max-w-4xl mx-auto flex gap-2">
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && !e.shiftKey && handleSend()
              }
              placeholder="Escribe tu pregunta aquí..."
              disabled={loading}
              className="flex-1"
            />
            <Button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              size="default"
            >
              <Send className="w-5 h-5 mr-2" />
              Enviar
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}