"use client";

import { useState } from "react";
import { Button } from "@repo/ui/button";

const Chat = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput(e.target.value);
  };

  return (
    <div className="dark min-h-screen bg-black p-4 flex flex-col">
      {/* Chat content goes here */}
      <div className="flex-1"></div>

      {/* Fixed input container at the bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-black p-4">
        <div className="max-w-4xl mx-auto w-full">
          <div className="relative group">
            <div className="rounded-xl border border-neutral-800 bg-[#0C0C0C] hover:border-neutral-700 transition-colors">
              <div className="min-h-[68px] relative px-4 py-5">
                <textarea
                  placeholder="Ask a question..."
                  value={input}
                  onChange={handleInputChange}
                  className="w-full h-full bg-transparent text-white placeholder-neutral-600 resize-none focus:outline-none scrollbar-hide"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-8 rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-500 hover:bg-neutral-900 hover:text-neutral-400"
                  >
                    ↑
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
