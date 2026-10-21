"use client";

import { useState } from "react";
import { artist } from "@/data/artist";

export function MusicMarquee() {
  const [paused, setPaused] = useState(false);
  return <div className={`music-marquee${paused ? " is-paused" : ""}`}>
    <div className="music-marquee-heading"><span className="eyebrow"><i className="dot" /> На цифровых площадках</span><button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Продолжить →" : "Пауза Ⅱ"}</button></div>
    <div className="music-marquee-window" role="region" aria-label="Слушать Артёма Попова на музыкальных платформах">
      <div className="music-marquee-track">{[0, 1].map((copy) => <div className="music-marquee-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{[0, 1].map((repeat) => artist.platforms.map((platform, index) => <a href={platform.url} key={`${repeat}-${platform.url}`} target="_blank" rel="noreferrer" tabIndex={copy === 1 || repeat === 1 ? -1 : undefined}><span className="platform-number" aria-hidden="true">0{index + 1}</span><span>{platform.label}</span><span className="platform-arrow" aria-hidden="true">↗</span></a>))}</div>)}</div>
    </div>
  </div>;
}
