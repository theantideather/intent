import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { Features } from "./ui/features-8";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden py-16">
      {/* Problems we solve strip */}
      <div className="mx-auto w-full max-w-6xl px-6 mb-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-zinc-200">
          <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-4 shadow">
            <h3 className="font-semibold text-white mb-1">AI Psychosis & Mental Dependency</h3>
            <p className="text-sm text-zinc-300">Users develop false beliefs, paranoia, and emotional addiction from prolonged AI interaction. Chatbots can reinforce delusions, worsening mental health.</p>
          </div>
          <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-4 shadow">
            <h3 className="font-semibold text-white mb-1">Privacy Breaches</h3>
            <p className="text-sm text-zinc-300">Chats stored without legal protection can be subpoenaed or leaked. Current platforms lack encryption and user control.</p>
          </div>
          <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-4 shadow">
            <h3 className="font-semibold text-white mb-1">Hallucinations</h3>
            <p className="text-sm text-zinc-300">Confidently wrong answers in sensitive domains (medical/legal) undermine trust. Some models show 33–79% hallucination rates.</p>
          </div>
          <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-4 shadow">
            <h3 className="font-semibold text-white mb-1">Jailbreaks & Recursive Exploits</h3>
            <p className="text-sm text-zinc-300">Prompt-based jailbreaks bypass safety filters. Recursive loops repeat biased or harmful content, damaging reliability.</p>
          </div>
        </div>
      </div>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl md:text-6xl font-bold text-white">Features</h1>
          </>
        }
      >
        <div className="h-full w-full bg-black">
          <Features />
        </div>
      </ContainerScroll>
    </div>
  );
}
