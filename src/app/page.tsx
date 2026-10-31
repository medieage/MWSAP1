import { Header } from "@/components/header";
import { artist } from "@/data/artist";
import { VkFeed } from "@/components/vk-feed";
import Image from "next/image";
import { MusicMarquee } from "@/components/music-marquee";
import { VkArtistCard } from "@/components/vk-artist-card";

function SectionTitle({ index, title, label }: { index: string; title: string; label: string }) {
  return <div className="section-heading"><span className="eyebrow">{index} / {label}</span><h2>{title}</h2></div>;
}

export default function Home() {
  return <><a href="#main" className="skip-link">Перейти к содержимому</a><Header /><main id="main">
    <section className="hero" id="home">
      <div className="hero-top"><span className="eyebrow"><i className="dot" /> Автор песен</span><span className="eyebrow">Артём Попов</span></div>
      <h1><span>АРТЁМ</span><span className="outlined">ПОПОВ<span className="name-star" aria-hidden="true">✳</span></span></h1>
      <div className="hero-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="art-line" /><span className="art-label">AP / SOUND IN MOTION</span></div>
      <div className="hero-bottom"><p>Звук. Момент.<br />Всё, что между нами.</p><a className="button primary" href="#music">К музыке <span>↗</span></a><a className="scroll-link" href="#music">Листай вниз ↓</a></div>
    </section>
    <div className="artist-ribbon" aria-hidden="true">{Array.from({ length: 8 }, (_, index) => <span key={index}>АРТЁМ ПОПОВ <i>✳</i> МУЗЫКА БЛИЖЕ <i>✳</i></span>)}</div>
    <MusicMarquee />
    <section className="section" id="music"><SectionTitle index="01" label="В наушниках" title="Музыка" />
      {artist.releases.length ? <div className="release-grid">{artist.releases.map((release) => <article className="release" key={release.title}><div className="record-art" aria-hidden="true">АП</div><span className="eyebrow">{release.kind}</span><h3>{release.title}</h3>{release.audio && <audio controls preload="none" src={release.audio}>Ваш браузер не поддерживает аудио.</audio>}{release.url && <a className="text-link" href={release.url} target="_blank" rel="noreferrer">Слушать на платформе ↗</a>}</article>)}</div> : <div className="music-placeholder"><div className="record" aria-hidden="true"><div className="record-portrait"><span className="portrait-crop"><Image src="/images/artem-popov-portrait.png" alt="" fill sizes="224px" /></span></div></div><div className="empty-copy"><span className="eyebrow accent">На своей частоте</span><h3>Здесь будет<br />твоя новая любимая.</h3><p>Слушайте песни на удобной платформе — все ссылки собраны ниже.</p><span className="status"><i className="dot" /> Музыка на четырёх платформах</span></div></div>}
      {artist.platforms.length > 0 && <div className="platforms" aria-label="Музыкальные платформы">{artist.platforms.map((social) => <a href={social.url} key={social.url} target="_blank" rel="noreferrer">{social.label} ↗</a>)}</div>}
      <VkArtistCard />
    </section>
    <section className="section" id="upcoming"><SectionTitle index="02" label="Новая песня" title="Премьера" /><div className="service-feature upcoming-feature"><Image className="service-poster" src="/images/upcoming-release.jpg" alt="Обложка песни «Просто обниму» Артёма Попова." width={1254} height={1254} sizes="(max-width: 900px) 88vw, (max-width: 1600px) 43vw, 680px" /><div className="service-body"><div><span className="eyebrow accent">Премьера состоялась</span><h3>Новая песня.<br />«Просто обниму».</h3><p>Песня «Просто обниму» уже вышла! Слушайте новинку и делитесь впечатлениями в группе ВКонтакте.</p></div><div className="service-order"><span className="service-deadline">Статус <strong>Уже доступна</strong></span><a className="button primary" href={artist.socials[0].url} target="_blank" rel="noreferrer">Слушать в группе ВК ↗</a><a className="text-link" href={artist.socials[0].url} target="_blank" rel="noreferrer">Следить за новостями ↗</a></div></div></div></section>
    <section className="section about-section" id="about"><SectionTitle index="03" label="Об авторе" title="Биография" /><div className="about-body"><figure className="artist-portrait"><Image src="/images/artem-popov-portrait.png" alt="Артём Попов" loading="eager" width={1254} height={1254} sizes="(max-width: 600px) 88vw, 44vw" /><figcaption>Артём Попов <span>Автор песен</span></figcaption></figure><div><span className="eyebrow accent">Человек. Голос. История.</span><h3>Ближе,<br />чем кажется.</h3><div className="biography-copy">{artist.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="biography-songs"><p className="biography-songs-label">Среди близких мне работ</p><ul>{artist.biographySongs.map((title) => <li key={title}>{title}</li>)}</ul></div><p>{artist.biographyOutro}</p></div><a className="text-link" href="#contact">На связи ↗</a></div></div></section>
    <section className="section" id="services">
      <SectionTitle index="04" label="Для ваших моментов" title="Услуги" />
      <div className="service-feature">
      <Image className="service-poster" src="/images/writing-service.png" alt="Тексты на заказ для вас: поздравления, тосты и речи. Перо и конверт в графитовых и лаймовых тонах." width={1254} height={1254} sizes="(max-width: 900px) 88vw, (max-width: 1600px) 43vw, 680px" />
      <div className="service-body"><div><span className="eyebrow accent">Слова, которые останутся</span><h3>Личные истории.<br />Особенные слова.</h3><p>Поздравить близкого, сказать главное или собрать всех вместе. Напишу текст для вашего человека и вашего повода.</p></div><div className="service-order"><span className="service-deadline">Срок выполнения <strong>{artist.writing.turnaround}</strong></span><a className="button primary" href={artist.writing.orderUrl} target="_blank" rel="noreferrer">Заказать текст ↗</a><a className="text-link" href={artist.vkGroup.url} target="_blank" rel="noreferrer">Все вопросы — в сообщения группы</a></div></div>
      </div>
      <div className="writing-formats">{artist.writing.formats.map((format, index) => <article key={format.title}><span className="eyebrow accent">0{index + 1}</span><h3>{format.title}</h3><p>{format.description}</p></article>)}</div>
      <div className="writing-details"><div className="writing-process"><h3>Как это работает</h3><ol>{artist.writing.steps.map((step) => <li key={step}>{step}</li>)}</ol></div><div className="writing-prices"><span className="eyebrow accent">Стоимость</span>{artist.writing.prices.map((item) => <div className="writing-price" key={item.title}><h3>{item.title}</h3><strong>{item.price}</strong></div>)}<p>До трёх бесплатных правок.</p></div></div>
      <div className="service-feature service-feature-follow" id="art-management">
        <div className="social-poster" aria-hidden="true">
          <span className="social-poster-kicker">AP / ART MANAGEMENT</span>
          <div className="social-poster-orbits"><i /><i /><i /></div>
          <div className="social-poster-copy"><span>АРТ</span><span>МЕНЕДЖМЕНТ</span></div>
          <ul className="social-poster-feed">
            <li><span>ВК</span><strong>Новый пост</strong><em>Охват растёт</em></li>
            <li><span>TG</span><strong>Канал в ритме</strong><em>По возможности</em></li>
            <li><span>AP</span><strong>Вы творите</strong><em>Сеть на нас</em></li>
          </ul>
        </div>
        <div className="service-body"><div><span className="eyebrow accent">Без лишней суеты</span><h3>Арт-менеджмент.<br />Ведение соцсетей.</h3><p>{artist.artManagement.description}</p></div><div className="service-order"><span className="service-deadline">Оплата {artist.artManagement.pricePeriod} <strong>{artist.artManagement.price}</strong></span><a className="button primary" href={artist.artManagement.orderUrl} target="_blank" rel="noreferrer">Заказать ведение ↗</a><a className="text-link" href={artist.vkGroup.url} target="_blank" rel="noreferrer">Все вопросы — в сообщения группы</a></div></div>
      </div>
      <p className="service-platforms-note">{artist.artManagement.platformsNote}</p>
      <div className="writing-formats writing-formats-two">{artist.artManagement.platforms.map((platform, index) => <article key={platform.title}><span className="eyebrow accent">0{index + 1}</span><h3>{platform.title}</h3><p>{platform.description}</p></article>)}</div>
    </section>
    <section className="section" id="news"><SectionTitle index="05" label="На связи" title="Новости из ВКонтакте" /><VkFeed groupId={artist.vkGroup.id} groupUrl={artist.vkGroup.url} /></section>
    <section className="section contact-section" id="contact"><span className="eyebrow">06 / Есть идея?</span><h2>Давай создадим<br /><span>что-то громкое.</span></h2><div className="contact-bottom"><p>Тексты на заказ, ведение соцсетей<br />и другие хорошие поводы написать.</p>{artist.email ? <a className="button primary" href={`mailto:${artist.email}`}>Написать Артёму ↗</a> : <div className="contact-pending"><span>Контакты команды</span><small>Скоро появятся здесь</small></div>}</div><a className="contact-email" href={`mailto:${artist.email}`}>{artist.email}</a><div className="platforms social-links" aria-label="Соцсети и связь">{artist.socials.map((social) => <a key={social.url} href={social.url} target="_blank" rel="noreferrer">{social.label} ↗</a>)}</div></section>
  </main><footer><a href="#home" className="logo">АП<span>®</span></a><span>© {new Date().getFullYear()} {artist.name}</span><a href="#home">Наверх ↑</a></footer></>;
}
