import Image from "next/image";
import { artist } from "@/data/artist";

export function VkArtistCard() {
  const url = artist.platforms.find((platform) => platform.label === "VK Музыка")!.url;
  return <aside className="vk-artist-card" aria-labelledby="vk-artist-title">
    <div className="vk-artist-photo"><Image src="/images/artem-popov-portrait.png" alt="" fill sizes="(max-width: 600px) 88vw, 220px" /></div>
    <div className="vk-artist-copy"><span className="eyebrow accent">VK Музыка / Страница артиста</span><h3 id="vk-artist-title">{artist.name}</h3><p>Треки, альбомы и новые релизы — в каталоге VK Музыки.</p><a className="button primary" href={url} target="_blank" rel="noreferrer">Открыть релизы в ВК <span aria-hidden="true">↗</span></a><span className="vk-artist-note">Откроется страница артиста на vk.ru</span></div>
    <span className="vk-artist-decoration" aria-hidden="true">↗</span>
  </aside>;
}
