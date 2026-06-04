"use client";

import { useState } from "react";
import { SITE, whatsappLink } from "@/lib/site";

const PROJECT_TYPES = [
  "Residencial",
  "Corporativo",
  "Arquiteto ou escritório",
  "Outro",
];

type Fields = {
  nome: string;
  empresa: string;
  cidade: string;
  tipo: string;
  mensagem: string;
};

const EMPTY: Fields = {
  nome: "",
  empresa: "",
  cidade: "",
  tipo: PROJECT_TYPES[0],
  mensagem: "",
};

function compose(f: Fields) {
  const lines = [
    `Olá! Meu nome é ${f.nome.trim()}.`,
    f.empresa.trim() && `Empresa: ${f.empresa.trim()}`,
    `Cidade: ${f.cidade.trim()}`,
    `Tipo de projeto: ${f.tipo}`,
    f.mensagem.trim() && `\n${f.mensagem.trim()}`,
  ].filter(Boolean);
  return lines.join("\n");
}

const inputClass =
  "mt-2 w-full border border-paper/20 bg-transparent px-4 py-3 text-paper placeholder-paper/30 transition-colors duration-300 focus:border-gold focus:outline-none";

export default function ContactForm() {
  const [f, setF] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, boolean>>>({});

  const set = (k: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setF((p) => ({ ...p, [k]: e.target.value }));

  function validate() {
    const next = { nome: !f.nome.trim(), cidade: !f.cidade.trim() };
    setErrors(next);
    return !next.nome && !next.cidade;
  }

  function sendWhatsApp() {
    if (!validate()) return;
    window.open(whatsappLink(compose(f)), "_blank", "noopener,noreferrer");
  }

  function sendEmail() {
    if (!validate()) return;
    const subject = `Contato pelo site — ${f.nome.trim()}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(compose(f))}`;
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        sendWhatsApp();
      }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="label text-[0.62rem] text-paper/60">
            Nome <span className="text-gold-soft">*</span>
          </label>
          <input
            id="nome"
            type="text"
            value={f.nome}
            onChange={set("nome")}
            className={`${inputClass} ${errors.nome ? "border-corten-bright" : ""}`}
            placeholder="Seu nome"
          />
          {errors.nome && (
            <p className="mt-1.5 text-xs text-corten-bright">Informe seu nome.</p>
          )}
        </div>
        <div>
          <label htmlFor="empresa" className="label text-[0.62rem] text-paper/60">
            Empresa
          </label>
          <input
            id="empresa"
            type="text"
            value={f.empresa}
            onChange={set("empresa")}
            className={inputClass}
            placeholder="Opcional"
          />
        </div>
        <div>
          <label htmlFor="cidade" className="label text-[0.62rem] text-paper/60">
            Cidade <span className="text-gold-soft">*</span>
          </label>
          <input
            id="cidade"
            type="text"
            value={f.cidade}
            onChange={set("cidade")}
            className={`${inputClass} ${errors.cidade ? "border-corten-bright" : ""}`}
            placeholder="Sua cidade"
          />
          {errors.cidade && (
            <p className="mt-1.5 text-xs text-corten-bright">Informe sua cidade.</p>
          )}
        </div>
        <div>
          <label htmlFor="tipo" className="label text-[0.62rem] text-paper/60">
            Tipo de projeto
          </label>
          <select
            id="tipo"
            value={f.tipo}
            onChange={set("tipo")}
            className={`${inputClass} appearance-none`}
          >
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t} className="bg-ink text-paper">
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="mensagem" className="label text-[0.62rem] text-paper/60">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          rows={4}
          value={f.mensagem}
          onChange={set("mensagem")}
          className={`${inputClass} resize-none`}
          placeholder="Conte um pouco sobre o seu projeto"
        />
      </div>

      <p className="text-xs leading-relaxed text-paper/45">
        Tem imagens ou o projeto arquitetônico? Anexe diretamente na conversa do
        WhatsApp ou no e-mail.
      </p>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row">
        <button
          type="submit"
          className="label group inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-[0.72rem] text-ink transition-all duration-300 hover:bg-gold-soft"
        >
          Enviar pelo WhatsApp
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
        <button
          type="button"
          onClick={sendEmail}
          className="label inline-flex items-center justify-center border border-paper/35 px-8 py-4 text-[0.72rem] text-paper transition-all duration-300 hover:border-paper hover:bg-paper/5"
        >
          Enviar por e-mail
        </button>
      </div>
    </form>
  );
}
