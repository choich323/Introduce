/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { DATA } from "@/data/resume";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <div className="w-full grid gap-6">
      {DATA.work.map((work) => (
        <div key={work.company} className="w-full grid gap-3">
          {/* 헤더: 회사명 + 직함 + 기간 */}
          <div className="flex items-center gap-x-3 justify-between w-full">
            <div className="flex items-center gap-x-3 flex-1 min-w-0">
              <LogoImage src={work.logoUrl} alt={work.company} />
              <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                <div className="font-semibold leading-none">
                  {work.company}
                </div>
                <div className="font-sans text-sm text-muted-foreground">
                  {work.title}
                </div>
              </div>
            </div>
            <div className="text-xs tabular-nums text-muted-foreground text-right flex-none">
              {work.start} - {work.end ?? "Present"}
            </div>
          </div>

          {/* 설명: 바로 표시 */}
          <div className="ml-11 md:ml-13 text-xs sm:text-sm text-muted-foreground flex flex-col gap-1">
            {work.description.split("\n").map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
