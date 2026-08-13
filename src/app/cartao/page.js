"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Check, Download, Instagram, Link2, MapPin, MessageCircle, Phone, Share2, Smartphone, X } from "lucide-react";
import styles from "./page.module.css";

const whatsapp = "https://wa.me/553126260038?text=Ol%C3%A1%2C%20Dr.%20Jefferson!%20Vim%20pelo%20seu%20cart%C3%A3o.";
const map = "https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+Inova%2C+Betim%2C+MG";

function downloadContact() {
  const vcard = ["BEGIN:VCARD", "VERSION:3.0", "N:Reis;Jefferson;;;", "FN:Dr. Jefferson Reis", "ORG:Clínica Inova", "TITLE:Cirurgião-dentista", "TEL;TYPE=CELL:+553126260038", "URL:https://instagram.com/dr.jeffersonreis", "END:VCARD"].join("\r\n");
  const url = URL.createObjectURL(new Blob([vcard], { type: "text/vcard;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "dr-jefferson-reis.vcf";
  link.click();
  URL.revokeObjectURL(url);
}

export default function CardPage() {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showInstallHelp, setShowInstallHelp] = useState(false);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    setIsIos(ios);
    const handleInstall = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };
    window.addEventListener("beforeinstallprompt", handleInstall);
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js").catch(() => {});
    return () => window.removeEventListener("beforeinstallprompt", handleInstall);
  }, []);

  async function shareCard() {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: "Dr. Jefferson Reis", text: "Cartão de visitas digital", url });
      return;
    }
    await navigator.clipboard?.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  function save() {
    downloadContact();
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  }

  async function saveToPhone() {
    if (installPrompt) {
      installPrompt.prompt();
      await installPrompt.userChoice;
      setInstallPrompt(null);
      return;
    }
    setShowInstallHelp(true);
  }

  return <main className={styles.page}>
    <div className={styles.card}>
      <header className={styles.header}>
        <div className={styles.wordmark}><span className={styles.symbol}>i</span><span><b>INOVA</b><small>CLÍNICA ODONTOLÓGICA</small></span></div>
        <button className={styles.shareIcon} onClick={shareCard} aria-label="Compartilhar cartão"><Share2 size={17} /></button>
      </header>
      <section className={styles.identity}>
        <div className={styles.photoFrame}><Image src="/assets/Dr Jeff_edited.avif" alt="Dr. Jefferson Reis" fill sizes="116px" className={styles.photo} priority /><span className={styles.check}><Check size={12} strokeWidth={3} /></span></div>
        <p className={styles.overline}>DR.</p><h1>Jefferson <strong>Reis</strong></h1><p className={styles.title}>Cirurgião-dentista</p><p className={styles.place}>Clínica Inova <span>·</span> Betim, MG</p>
      </section>
      <div className={styles.actions}><a href={whatsapp} target="_blank" rel="noreferrer" className={`${styles.action} ${styles.whatsapp}`}><MessageCircle size={18} fill="currentColor" /> WhatsApp</a><button onClick={save} className={`${styles.action} ${styles.save}`}><Download size={17} /> {saved ? "Contato salvo" : "Salvar contato"}</button></div>
      <button onClick={saveToPhone} className={styles.install}><Smartphone size={16} /> Salvar cartão no celular</button>
      <div className={styles.list}>
        <a href="tel:+553126260038" className={styles.row}><span className={styles.rowIcon}><Phone size={16} /></span><span><small>TELEFONE</small><b>(31) 2626-0038</b></span></a>
        <a href="https://instagram.com/dr.jeffersonreis" target="_blank" rel="noreferrer" className={styles.row}><span className={styles.rowIcon}><Instagram size={16} /></span><span><small>INSTAGRAM</small><b>@dr.jeffersonreis</b></span></a>
        <a href="https://instagram.com/clinicainova" target="_blank" rel="noreferrer" className={styles.row}><span className={styles.rowIcon}><Instagram size={16} /></span><span><small>CLÍNICA INOVA</small><b>@clinicainova</b></span></a>
        <a href={map} target="_blank" rel="noreferrer" className={styles.row}><span className={styles.rowIcon}><MapPin size={16} /></span><span><small>LOCALIZAÇÃO</small><b>Como chegar à Clínica Inova</b></span></a>
      </div>
      <footer className={styles.footer}><p>Toque, salve e mantenha meu contato.</p><button onClick={shareCard}>{copied ? <><Check size={14} /> Link copiado</> : <><Link2 size={14} /> Compartilhar cartão</>}</button></footer>
    </div>
    {showInstallHelp && <div className={styles.modalBackdrop} role="dialog" aria-modal="true" aria-label="Salvar cartão no celular"><div className={styles.modal}><button className={styles.close} onClick={() => setShowInstallHelp(false)} aria-label="Fechar"><X size={17} /></button><Smartphone size={24} className={styles.modalIcon} /><h2>{isIos ? "Salvar no iPhone" : "Salvar no celular"}</h2>{isIos ? <p>Toque em <strong>Compartilhar</strong> no navegador e depois em <strong>Adicionar à Tela de Início</strong>.</p> : <p>Abra o menu do navegador e escolha <strong>Adicionar à tela inicial</strong> ou <strong>Instalar aplicativo</strong>.</p>}<button className={styles.modalButton} onClick={() => setShowInstallHelp(false)}>Entendi</button></div></div>}
  </main>;
}
