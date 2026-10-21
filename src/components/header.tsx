"use client";
import { useState } from "react";

const links = [["Биография", "about"], ["Музыка", "music"], ["Будущий релиз", "upcoming"], ["Тексты на заказ", "services"], ["Новости", "news"]];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header"><a className="logo" href="#home" aria-label="Артём Попов — на главную">АП<span>®</span></a>
    <button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? "Закрыть −" : "Меню +"}</button>
    <nav id="navigation" className={open ? "navigation open" : "navigation"} aria-label="Основная навигация">{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Связаться ↗</a></nav>
  </header>;
}
