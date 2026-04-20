import Link from "next/link";
import styles from "./page.module.css";

import SmartImage from "@/app/components/SmartImage";


const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

const missions = [
	{
		title: "Stériliser",
		body: "Nous stérilisons les chats errants et ceux des personnes en difficulté pour briser le cycle de la reproduction incontrôlée.",
	},
	{
		title: "Soigner",
		body: "Nous assurons les soins post-opératoires, les traitements et, face à la maladie incurable, une fin de vie digne.",
	},
	{
		title: "Protéger",
		body: "Nous intervenons en cas de maltraitance ou d'actes de cruauté, et poursuivons les auteurs en justice si nécessaire.",
	},
];

const stats = [
	{ value: "3 569", label: "Chats aidés depuis 2003" },
	{ value: `${new Date().getFullYear() - 2003}`, label: "Années d'engagement" },
	{ value: "140", label: "Chats errants nourris chaque jour" },
	{ value: "343", label: "Placements en famille" },
];

export default function Home() {
	return (
		<>
			<section className="page-head hero">
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
							SOS Chats Haute-Dordogne stérilise, soigne et place les chats errants du bassin de La Bourboule. Une association entièrement bénévole, reconnue d&apos;intérêt général.
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
						<SmartImage src={`${basePath}/img/hero.jpg`} />
					</div>
				</div>
			</section>

			<section className="section">
				<div className="guard margin-bottom-md">
					<div className={`mw-40 margin-bottom-md ${styles.sectionHead}`}>
						<span className="supertitle">Notre raison d'être</span>
						<h2>Trois grandes missions, un même engagement</h2>
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
				<div className="guard margin-bottom-md">
					<div className={`talign-center mw-40 margin-bottom-md ml balanced ${styles.sectionHead}`}>
						<h2>Le travail d'une vie, chat après chat</h2>
						<p className="margin-top-sm">Depuis la création de l'association, chaque chiffre représente un animal soulagé, un territoire apaisé, une famille accompagnée.</p>
					</div>
					<div className={styles.statsGrid}>
						{stats.map((s) => (
							<div key={s.label} className={styles.statCard}>
								<span className={styles.statValue}>{s.value}</span>
								<span className={styles.statLabel}>{s.label}</span>
							</div>
						))}
					</div>
					{/* <p className={`talign-center italic margin-top-md ${styles.statsFoot}`}>Et plus globalement, depuis 2003 : 1 691 stérilisations, 713 castrations, 636 soins et anesthésies, 343 placements.</p> */}
				</div>
			</section>

			<section className="section">
				<div className="guard margin-top-md margin-bottom-md">
					<div className={`mw-40 margin-bottom-md ${styles.sectionHead}`}>
						<span className="supertitle">Comment nous agissons</span>
						<h2>Un cycle patient, du piégeage au placement</h2>
					</div>
					<div className={styles.pillarList}>
						<article className={styles.pillar}>
							<div className="pillar-img--wrap">
								<SmartImage src={`${basePath}/img/stray.jpg`} />
							</div>
							<div>
								{/* <div className={styles.pillarNumber}>1</div> */}
								<h3>Piégeage et stérilisation</h3>
								<p>
									Enrayer la prolifération grâce au piégeage, la stérilisation et l’identification systématique des chats errants, pour permettre leur retour en liberté ou faciliter leur
									adoption responsable.
								</p>
							</div>
						</article>
						<article className={styles.pillar}>
							<div className="pillar-img--wrap">
								<SmartImage src={`${basePath}/img/vet.jpg`} />
							</div>
							<div>
								{/* <div className={styles.pillarNumber}>2</div> */}
								<h3>Soins et accompagnement</h3>
								<p>Offrir des soins vétérinaires, assurer le nourrissage régulier et soutenir les familles en difficulté ou isolées souhaitant prendre soin des chats de leur quartier.</p>
							</div>
						</article>
						<article className={styles.pillar}>
							<div className="pillar-img--wrap">
								<SmartImage src={`${basePath}/img/homeplace-2.jpg`} />
							</div>
							<div>
								{/* <div className={styles.pillarNumber}>3</div> */}
								<h3>Placement et protection</h3>
								<p>Placer les chats sociables en famille d’accueil ou les proposer à l’adoption, intervenir contre la maltraitance et promouvoir le respect des animaux dans la société.</p>
							</div>
						</article>
					</div>

					<div className="flex wrap margin-top-md ctas justify-center">
						<Link href="/nos-actions" className="button secondary">Découvrir nos actions en détail →</Link>
					</div>
					
				</div>
			</section>

			<section className={`bg-terracotta cta`}>
				<div className={`guard flex stack-mobile cta-inner`}>
					<div>
						<h2>Chaque geste peut nous aider</h2>
						<p className="margin-top-sm mw-30">Un don de 68 € couvre une stérilisation complète. Un sac de croquettes de 20 kg nourrit une colonie pendant deux semaines. Chaque geste compte.</p>
					</div>
					<div className='cta-actions'>
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
