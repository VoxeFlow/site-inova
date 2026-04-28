import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Stethoscope } from "lucide-react";

import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { clinicData, primaryCtas } from "@/lib/content/site";
import { absoluteUrl, buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/schema";

const faqs = [
  {
    question: "Alinhadores invisíveis funcionam mesmo?",
    answer:
      "Sim, quando há indicação correta e acompanhamento. O resultado depende do planejamento, da constância de uso e dos retornos clínicos.",
  },
  {
    question: "Invisalign e alinhador invisível são a mesma coisa?",
    answer:
      "Invisalign é uma marca de alinhadores. A avaliação define qual estratégia é mais indicada para o seu caso e para o objetivo do seu sorriso.",
  },
  {
    question: "Quanto custa alinhador invisível em Betim?",
    answer:
      "O valor varia conforme complexidade, tempo de tratamento e quantidade de placas. A consulta inicial organiza o plano com clareza.",
  },
  {
    question: "Dói para usar alinhadores?",
    answer:
      "É comum sentir leve pressão nos primeiros dias de cada etapa. Em geral, é uma adaptação esperada e monitorada na clínica.",
  },
  {
    question: "Quanto tempo dura o tratamento com alinhadores?",
    answer:
      "Depende do grau de movimentação necessário. Casos simples e moderados costumam ter cronogramas diferentes, definidos após avaliação.",
  },
];

const journey = [
  {
    title: "Diagnóstico e escuta",
    description: "Você explica o que incomoda no seu sorriso e o que espera do tratamento.",
  },
  {
    title: "Planejamento digital",
    description: "A movimentação é planejada para dar previsibilidade e orientar cada etapa.",
  },
  {
    title: "Uso orientado",
    description: "Você recebe orientações claras de rotina, trocas e cuidados no dia a dia.",
  },
  {
    title: "Acompanhamento próximo",
    description: "Retornos periódicos garantem ajustes e segurança durante o processo.",
  },
];

const cases = [
  {
    title: "Caso 1 · Sorriso discreto no trabalho",
    summary:
      "Paciente adulta que buscava alinhar os dentes sem aparelho metálico. O foco foi discrição no dia a dia e rotina de manutenção simples.",
  },
  {
    title: "Caso 2 · Organização da mordida",
    summary:
      "Paciente com queixa funcional e estética. O plano priorizou previsibilidade de etapas e acompanhamento próximo para evolução segura.",
  },
  {
    title: "Caso 3 · Segurança para sorrir novamente",
    summary:
      "Paciente que evitava fotos e reuniões. O tratamento começou com orientação clara sobre expectativas, tempo e cuidados durante o uso.",
  },
];

export const metadata = buildMetadata({
  title: "Alinhadores Invisíveis em Betim | Clínica Inova",
  description:
    "Alinhadores invisíveis em Betim com planejamento individual, acompanhamento profissional e foco em discrição, conforto e previsibilidade.",
  path: "/alinhadores-invisiveis-betim",
  keywords: [
    "alinhadores invisíveis em betim",
    "invisalign betim",
    "aparelho invisível em betim",
    "dentista em betim",
    "clínica odontológica em betim",
  ],
});

export default function AlinhadoresInvisiveisPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Início", url: absoluteUrl("/") },
            { name: "Alinhadores invisíveis em Betim", url: absoluteUrl("/alinhadores-invisiveis-betim") },
          ]),
          buildFaqSchema(faqs),
          buildServiceSchema({
            name: "Alinhadores invisíveis em Betim",
            description:
              "Tratamento com alinhadores invisíveis em Betim para pacientes que buscam discrição, previsibilidade e acompanhamento profissional.",
            url: absoluteUrl("/alinhadores-invisiveis-betim"),
          }),
        ]}
      />

      <section className="relative overflow-hidden py-12 lg:py-20">
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(197,164,126,0.2),transparent_46%),radial-gradient(circle_at_top_right,rgba(45,90,39,0.12),transparent_34%)]" />
        <Container className="relative z-10 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-forest)]">
              <Sparkles className="h-4 w-4" />
              Alinhadores invisíveis em Betim
            </p>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Alinhe seu sorriso com discrição, clareza e segurança no seu ritmo
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--foreground-muted)]">
              Se você busca alinhadores invisíveis em Betim, o primeiro passo é entender seu caso com precisão. Na Clínica Inova,
              você recebe orientação clara sobre tempo, investimento e possibilidades reais, antes de qualquer decisão.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <LinkButton href={primaryCtas.whatsappHref} className="group">
                Quero avaliar meu caso
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </LinkButton>
              <LinkButton href="#como-funciona" variant="secondary">
                Entender como funciona
              </LinkButton>
            </div>
            <p className="mt-4 text-sm text-[var(--foreground-subtle)]">
              Atendimento local em {clinicData.city} com foco em previsibilidade e acompanhamento próximo.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(160deg,rgba(255,255,255,0.95),rgba(245,241,236,0.88))] p-4 shadow-[0_24px_80px_rgba(26,26,26,0.08)] sm:p-6">
            <div className="overflow-hidden rounded-[1.6rem]">
              <Image
                src="/images/alinhadores-invisiveis-betim.jpg"
                alt="Paciente em avaliação para alinhadores invisíveis na Clínica Inova em Betim"
                width={1200}
                height={900}
                className="h-[20rem] w-full object-cover sm:h-[28rem]"
                priority
              />
            </div>
            <div className="mt-5 grid gap-3 rounded-[1.5rem] bg-white/85 p-4 text-sm text-[var(--foreground-muted)] sm:grid-cols-2">
              <p className="rounded-xl border border-[var(--border)] bg-white px-3 py-2">Mais discrição na rotina pessoal e profissional</p>
              <p className="rounded-xl border border-[var(--border)] bg-white px-3 py-2">Planejamento individual para cada nível de complexidade</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 pt-2">
        <Container className="grid gap-5 md:grid-cols-3">
          {[
            "Insegurança para sorrir em fotos e reuniões",
            "Incômodo com aparelho metálico no dia a dia",
            "Dúvida sobre valor, tempo e previsibilidade",
          ].map((item) => (
            <article key={item} className="rounded-[1.6rem] border border-[var(--border)] bg-white p-6 shadow-[0_10px_30px_rgba(26,26,26,0.04)]">
              <p className="text-sm leading-7 text-[var(--foreground-muted)]">{item}</p>
            </article>
          ))}
        </Container>
      </section>

      <section id="como-funciona" className="bg-[var(--surface)] py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Como funciona"
            title="Uma jornada simples para decidir com confiança"
            description="Você entende cada etapa antes de começar. Sem promessa vazia, sem pressão e com acompanhamento real em todas as fases."
          />
          <div className="grid gap-4">
            {journey.map((item, index) => (
              <div key={item.title} className="rounded-[1.7rem] border border-[var(--border)] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-forest)]">Etapa {index + 1}</p>
                <h2 className="mt-2 text-lg font-medium text-[var(--foreground)]">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-[var(--foreground-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(155deg,rgba(255,255,255,0.95),rgba(245,241,236,0.88))] p-5 shadow-[0_20px_70px_rgba(26,26,26,0.08)]">
            <div className="overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/doctor-jefferson.avif"
                alt="Dr. Jefferson Reis na Clínica Inova em Betim"
                width={900}
                height={1200}
                className="h-[24rem] w-full object-cover object-top sm:h-[30rem]"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Autoridade e pessoalidade"
              title="Seu caso acompanhado por quem planeja com você, etapa por etapa"
              description="A decisão por alinhadores invisíveis fica mais segura quando você recebe explicação clara, planejamento individual e acompanhamento contínuo."
            />
            <div className="mt-6 rounded-[1.7rem] border border-[var(--border)] bg-white p-6">
              <h2 className="font-serif text-3xl text-[var(--foreground)]">Dr. Jefferson Reis</h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent-forest)]">Invisalign Doctor · CRO-MG 34107</p>
              <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)]">
                Invisalign Doctor, com foco em planejamento digital e condução clínica humanizada para pacientes que querem corrigir
                o sorriso sem abrir mão da naturalidade.
              </p>
              <p className="mt-4 rounded-2xl bg-[var(--surface)] px-4 py-3 text-sm leading-7 text-[var(--foreground-muted)]">
                &quot;Aqui, o objetivo é simples: te explicar com clareza o que faz sentido para o seu caso, sem pressa e sem promessa
                genérica.&quot;
              </p>
            </div>
            <div className="mt-6">
              <LinkButton href={primaryCtas.whatsappHref}>Falar com a clínica no WhatsApp</LinkButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-24">
        <Container>
            <SectionHeading
              eyebrow="Casos acompanhados"
              title="Histórias reais de pacientes que buscavam mais segurança ao sorrir"
              description="Sem promessas exageradas. Cada pessoa chega com uma história diferente e recebe um planejamento compatível com seu momento."
            />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {cases.map((item) => (
              <article key={item.title} className="rounded-[1.8rem] border border-[var(--border)] bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-forest)]">Planejamento individual</p>
                <h2 className="mt-3 text-xl font-medium text-[var(--foreground)]">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">{item.summary}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Dúvidas comuns antes de começar com alinhadores"
              description="Respostas objetivas para quem está pesquisando alinhadores invisíveis, Invisalign e aparelho invisível em Betim."
            />
            <div className="mt-8 grid gap-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-[1.7rem] border border-[var(--border)] bg-white p-6">
                  <summary className="cursor-pointer list-none text-lg font-medium text-[var(--foreground)]">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(140deg,rgba(26,26,26,0.98),rgba(45,90,39,0.9),rgba(197,164,126,0.5))] p-8 text-white shadow-[0_20px_70px_rgba(26,26,26,0.16)] lg:sticky lg:top-28 lg:h-fit">
            <p className="text-xs uppercase tracking-[0.18em] text-white/70">Próximo passo</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight">Quer entender se alinhadores invisíveis são para você?</h2>
            <p className="mt-4 text-sm leading-7 text-white/85">
              Chame no WhatsApp e receba uma orientação inicial para entender indicação, etapas e investimento do seu caso.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              <LinkButton href={primaryCtas.whatsappHref} className="bg-white text-[var(--foreground)] hover:bg-white/90">
                Quero alinhar meu sorriso
              </LinkButton>
              <LinkButton
                href="/invisalign-betim"
                variant="secondary"
                className="border-white/35 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                Ver página de Invisalign
              </LinkButton>
            </div>
            <div className="mt-6 border-t border-white/20 pt-6 text-sm text-white/75">
              <p className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                Clínica odontológica em Betim com atendimento humanizado e foco em previsibilidade.
              </p>
              <p className="mt-3 flex items-start gap-2">
                <Stethoscope className="mt-0.5 h-4 w-4 shrink-0" />
                Também atendemos casos de implante dentário em Betim para reabilitação funcional e estética.
              </p>
              <Link href="/implante-dentario-betim" className="mt-4 inline-flex items-center gap-2 text-white underline underline-offset-4">
                Conhecer implante dentário em Betim
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
