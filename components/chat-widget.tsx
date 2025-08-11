"use client"

import { useState } from "react"
import { MessageCircle, Send, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: "user" | "agent"; text: string }[]>([
    { role: "agent", text: "سلام! چطور می‌تونم کمکتون کنم؟" },
  ])
  const [text, setText] = useState("")

  function send() {
    if (!text.trim()) return
    setMessages((m) => [...m, { role: "user", text }])
    setText("")
    setTimeout(() => {
      setMessages((m) => [...m, { role: "agent", text: "در اسرع وقت پاسخ می‌دم ☺️" }])
    }, 600)
  }

  function goBack() {
    if (typeof window !== "undefined") {
      if (window.history.length > 1) window.history.back()
      else setOpen(false)
    }
  }

  return (
    <>
      {!open && (
        <Button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 left-5 rounded-full h-12 w-12 bg-amber-500 hover:bg-amber-600 shadow-lg"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}
      {open && (
        <Card className="fixed bottom-5 left-5 w-[90vw] max-w-sm p-3 shadow-xl border-amber-100 dark:border-amber-900/30">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold">{"پشتیبانی آنلاین شیکستون"}</div>
            <div className="flex items-center gap-2">
              <button className="text-sm text-amber-600" onClick={goBack} title="بازگشت">
                <span className="inline-flex items-center gap-1">
                  <ArrowRight className="h-4 w-4" />
                  {"بازگشت"}
                </span>
              </button>
              <button className="text-sm text-neutral-500" onClick={() => setOpen(false)}>
                {"بستن"}
              </button>
            </div>
          </div>
          <div className="h-48 overflow-y-auto space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                  m.role === "agent"
                    ? "bg-amber-50 dark:bg-amber-950/20 ms-auto"
                    : "bg-neutral-100 dark:bg-neutral-800 me-auto"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Input
              placeholder="پیام خود را بنویسید..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              dir="rtl"
            />
            <Button onClick={send} className="bg-amber-500 hover:bg-amber-600">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}
    </>
  )
}
