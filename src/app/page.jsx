import Link from "next/link";
import styles from "./page.module.css";

const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';



const missions = [
  {
    title: "Stériliser",
    body:
      "Nous stérilisons les chats errants et ceux des personnes en difficulté pour briser le cycle de la reproduction incontrôlée.",
  },
  {
    title: "Soigner",
    body:
      "Nous assurons les soins post-opératoires, les traitements et, face à la maladie incurable, une fin de vie digne.",
  },
  {
    title: "Protéger",
    body:
      "Nous intervenons en cas de maltraitance ou d'actes de cruauté, et poursuivons les auteurs en justice si nécessaire.",
  },
];

const stats = [
  { value: "3 569", label: "Chats aidés depuis 2003" },
  { value: "22", label: "Années d'engagement" },
  { value: "140", label: "Chats errants nourris chaque jour" },
  { value: "343", label: "Placements en famille" },
];

const pillars = [
  {
    number: "01",
    img: 'img/food.jpg',
    title: "Piégeage et capture",
    body:
      "Patiemment, pendant plusieurs jours, nos bénévoles habituent les chats à un point de nourrissage avant de poser le piège. Un travail de longue haleine qui exige confiance et régularité.",
  },
  {
    number: "02",
    img: 'img/vet-2.jpg',
    title: "Stérilisation vétérinaire",
    body:
      "Chaque chat capturé est conduit chez un vétérinaire partenaire pour être stérilisé, testé et identifié. Les chats non adoptables retrouvent leur territoire ; les autres sont proposés à l'adoption.",
  },
  {
    number: "03",
    img: 'img/food.jpg',
    title: "Nourrissage et veille",
    body:
      "Nos bénévoles nourrissent quotidiennement environ 140 chats sur le territoire, avec l'aide de donateurs et de particuliers qui construisent parfois eux-mêmes des abris.",
  },
];

export default function Home() {
  return (
    <>
      <section className='page-head hero'>
        <div className={`guard ${styles.heroInner}`}>
          <div>
            {/* <span className="supertitle pill">
              Association loi 1901 — La Bourboule, Puy-de-Dôme
            </span> */}

            <div className="hero-logo">
              <img src={`${basePath}/assets/logo.svg`} alt="" />
            </div>

				    {/* <h3>SOS Chats Haute-Dordogne</h3> */}
            <h1 className={styles.heroTitle}>
              Pour les chats qui n&apos;ont <em>pas de foyer</em>, nous sommes là depuis {new Date().getFullYear() - 2003} ans.
         
            </h1>
            <p className={styles.heroLead}>
              SOS Chats Haute-Dordogne stérilise, soigne et place les chats errants du bassin de
              La Bourboule. Une association entièrement bénévole, reconnue d&apos;intérêt général.
            </p>
            <div className="flex wrap margin-top-md ctas">
              <Link href="/nous-aider#don" className="button primary">
                Faire un don
              </Link>
              <Link href="/nos-actions" className="button secondary">
                Découvrir nos actions →
              </Link>
            </div>
          </div>
			<div>
				<img src="img/hero.jpg" alt="" />
			</div>
        </div>
      </section>

      <section className="section">
        <div className="guard">
          <div className={`mw-40 margin-bottom-md ${styles.sectionHead}`}>
            <span className="supertitle">Notre raison d'être</span>
            <h2>Trois missions, un même engagement</h2>
          </div>
          <div className={styles.missionsGrid}>
            {missions.map((m) => (
              <article key={m.title} className={styles.missionCard}>
                <h3 className="color-terracotta">{m.title}</h3>
                <p>{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`bg-ink ${styles.stats}`}>
        <div className="guard">
          <div className={`talign-center mw-40 margin-bottom-lg ml balanced ${styles.sectionHead}`}>
            <h2>Le travail d'une vie, chat après chat.</h2>
            <p className="margin-top-sm">
              Depuis la création de l'association, chaque chiffre représente un animal
              soulagé, un territoire apaisé, une famille accompagnée.
            </p>
          </div>
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
          <p className={`talign-center italic margin-top-md ${styles.statsFoot}`}>
            Depuis 2003 : 1 691 stérilisations, 713 castrations, 636 soins et anesthésies,
            343 placements.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="guard">
          <div className={`mw-40 margin-bottom-lg ${styles.sectionHead}`}>
            <span className="supertitle">Comment nous agissons</span>
            <h2>Un cycle patient, du piégeage au placement</h2>
          </div>
          <div className={styles.pillarList}>
            {pillars.map((p) => (
              <article key={p.number} className={styles.pillar}>
                <div className="pillar-img--wrap">
                  <img src={p.img} alt="" />
                </div>
                <div>
                  <div className={styles.pillarNumber}>{p.number}</div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </article>
            ))}
          </div>
          <Link href="/nos-actions" className={`${styles.pillarLink} margin-top-md`}>
            Tout savoir sur nos actions →
          </Link>
        </div>
      </section>

      <section className={`bg-terracotta ${styles.cta}`}>
        <div className={`guard flex stack-mobile ${styles.ctaInner}`}>
          <div>
            <h2>Sans vous, aucune patte ne serait sauvée.</h2>
            <p className="margin-top-sm mw-30">
              Un don de 30 € couvre une stérilisation complète. Un sac de croquettes de 20 kg
              nourrit une colonie pendant deux semaines. Chaque geste compte.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/nous-aider#don" className="button primary on-dark">
              Faire un don
            </Link>
            <Link href="/nous-aider" className="button ghost">
              Autres façons d&apos;aider
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
