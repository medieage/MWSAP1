"use client";

import Script from "next/script";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

type VkWindow = Window & {
  VK?: { Widgets: { Group: (id: string, options: Record<string, string | number>, groupId: number) => unknown } };
};

export function VkFeed({ groupId, groupUrl }: { groupId: number; groupUrl: string }) {
  const id = `vk-feed-${useId().replace(/:/g, "")}`;
  const container = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const host = container.current;
    const vk = (window as VkWindow).VK;
    if (!ready || !host || !vk) return;

    let width = 0;
    let timer: ReturnType<typeof setTimeout>;
    const render = () => {
      const nextWidth = Math.floor(host.getBoundingClientRect().width);
      if (!nextWidth || nextWidth === width) return;
      width = nextWidth;
      host.replaceChildren();
      try {
        vk.Widgets.Group(id, { mode: 4, wide: 1, width, height: 620, color1: "191C17", color2: "F0F0E7", color3: "64762E" }, groupId);
      } catch {
        setFailed(true);
      }
    };
    // The SDK inserts an iframe; title it for screen readers.
    const mutations = new MutationObserver(() => {
      const frame = host.querySelector("iframe");
      if (frame) frame.title = "Новости группы Артёма Попова ВКонтакте";
    });
    mutations.observe(host, { childList: true, subtree: true });
    const observer = new ResizeObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(render, 200);
    });
    observer.observe(host);
    render();
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutations.disconnect();
      host.replaceChildren();
    };
  }, [ready, id, groupId]);

  return <div className="vk-feed">
    <Script src="https://vk.com/js/api/openapi.js?169" strategy="lazyOnload" onReady={() => setReady(true)} onError={() => setFailed(true)} />
    <div className="vk-feed-header">
      <div className="vk-feed-identity"><span className="vk-feed-avatar"><span className="portrait-crop"><Image src="/images/artem-popov-portrait.png" alt="" fill sizes="96px" /></span></span><div><span className="eyebrow">Дневник автора</span><h3>Артём Попов</h3></div></div>
      <a className="vk-feed-badge" href={groupUrl} target="_blank" rel="noreferrer" aria-label="Группа Артёма Попова ВКонтакте"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.162 18.994c-6.554 0-10.292-4.504-10.448-12h3.283c.108 5.502 2.528 7.833 4.445 8.314V6.994h3.091v4.746c1.893-.204 3.882-2.367 4.553-4.746h3.091c-.515 2.932-2.672 5.095-4.205 5.984 1.533.72 3.99 2.607 4.925 6.016h-3.402c-.731-2.283-2.552-4.049-4.962-4.289v4.289h-.371Z" /></svg><span aria-hidden="true">↗</span></a>
    </div>
    <div className="vk-feed-body">
      {(!ready || failed) && <p className="vk-feed-status" role="status">{failed ? "Не удалось загрузить ленту. Новости доступны в группе ВКонтакте." : "Загружаем новости ВКонтакте…"}</p>}
      <div id={id} ref={container} className="vk-feed-widget" />
    </div>
    <div className="vk-feed-footer"><p className="vk-feed-note">Песни, премьеры и немного закулисья.</p><a className="text-link" href={groupUrl} target="_blank" rel="noreferrer">Вся история в группе ↗</a></div>
  </div>;
}
