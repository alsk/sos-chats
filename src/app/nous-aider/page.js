import Link from "next/link";
import styles from "./page.module.css";


const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';





export const metadata = {
  title: "Nous aider",
  description:
    "Don, adhésion, parrainage, bénévolat ou adoption : toutes les façons de soutenir SOS Chats Haute-Dordogne.",
};

const ways = [
  {
    id: "don",
    title: "Faire un don",
    icon: "€",
    body:
      "Chaque euro sert directement au terrain : stérilisations, croquettes, frais vétérinaires. Envoyez votre chèque à l'ordre de « SOS Chats Haute-Dordogne », BP 21, 63150 La Bourboule. Un reçu fiscal vous sera systématiquement envoyé.",
    accent: true,
  },
  {
    id: "croquettes",
    title: "Offrir des croquettes",
    icon: "🥣",
    body:
      "Un sac de 20 kg nourrit une colonie pendant deux semaines. Vous pouvez aussi acheminer directement des croquettes à un point de collecte : contactez-nous pour convenir d'un rendez-vous.",
  },
  {
    id: "adhesion",
    title: "Adhérer à l'association",
    icon: "✎",
    body:
      "Devenir adhérent, c'est nous aider à peser auprès des communes et des partenaires. Nous demandons simplement votre adresse et, si possible, votre e-mail pour faciliter les échanges.",
  },
  {
    id: "adoption",
    title: "Adopter un chat",
    icon: "❤",
    body:
      "Nous plaçons chaque année une quinzaine de chats stérilisés et identifiés. Si vous souhaitez ouvrir votre foyer, appelez-nous pour rencontrer les chats actuellement à l'adoption.",
  },
  {
    id: "nourrir",
    title: "Nourrir une colonie",
    icon: "🐾",
    body:
      "Vous connaissez des chats errants dans votre voisinage ? Nous pouvons vous fournir un sac de 20 kg de croquettes contre une participation de 10 €, et organiser leur stérilisation.",
  },
  {
    id: "benevolat",
    title: "Devenir bénévole",
    icon: "✋",
    body:
      "Piégeage, transports chez le vétérinaire, nourrissage, couture de coussins : chaque paire de mains est précieuse. Contactez-nous pour rejoindre notre équipe.",
  },
];

const tariffs = [
  { label: "Stérilisation d'une chatte", value: "68 €" },
  { label: "Castration d'un chat", value: "39 €" },
  { label: "Chatte gestante", value: "94 €" },
  { label: "Tests FIV / leucose", value: "45 €" },
  { label: "Identification par puce", value: "45 €" },
];

export default function Aider() {
  return (
    <>
      <section className="page-head">
        <div className="guard">
          <div className="logo-simple">
						<img src={`${basePath}/assets/logo-simple.svg`} alt="" />
					</div>
          <span className="supertitle">Nous aider</span>
          <h1 className={`mw-50 ${styles.headTitle}`}>
            Chaque geste, <em>même petit</em>, change une vie féline.
          </h1>
          <p className="mw-40 margin-top-sm">
            L&apos;association fonctionne uniquement grâce à ses bénévoles, ses donateurs et ses
            adhérents. Voici toutes les façons de nous épauler.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="guard">
          <div className={styles.grid}>
            {ways.map((w) => (
              <article
                id={w.id}
                key={w.id}
                className={`${styles.card} ${w.accent ? styles.cardAccent : ""}`}
              >
                <span className={styles.icon} aria-hidden="true">
                  {w.icon}
                </span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
                {w.accent ? (
                  <Link href="/contact" className={styles.cardLink}>
                    Nous contacter →
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`bg-ink ${styles.tariffs}`}>
        <div className={`guard flex stack-mobile align-start ${styles.tariffsInner}`}>
          <div>
            <span className="supertitle on-dark">Transparence</span>
            <h2>À quoi sert votre don ?</h2>
            <p className="mw-30 margin-top-sm">
              Nous couvrons intégralement les frais vétérinaires des chats errants que nous
              prenons en charge. Voici les coûts que l&apos;association assume concrètement.
            </p>
          </div>
          <dl className={styles.tariffsList}>
            {tariffs.map((t) => (
              <div key={t.label} className={styles.tariffRow}>
                <dt>{t.label}</dt>
                <dd>{t.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* <section className={`section talign-center ${styles.quote}`}>
        <div className="guard">
          <blockquote>
            <p className={styles.quoteText}>
              « Les animaux ne sont pas des jouets que l&apos;on peut jeter. »
            </p>
            <cite className={styles.quoteCite}>— L&apos;équipe SOS Chats Haute-Dordogne</cite>
          </blockquote>
        </div>
      </section> */}
    </>
  );
}
