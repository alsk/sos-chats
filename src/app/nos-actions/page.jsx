import Link from "next/link";
import styles from "./page.module.css";

import SmartImage from "@/app/components/SmartImage";

const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

export const metadata = {
	title: "Nos actions",
	description: "Piégeage, stérilisation, soins, nourrissage et placement : découvrez le travail de terrain de SOS Chats Haute-Dordogne.",
};

export default function Actions() {
	return (
		<>
			<section className="page-head">
				<div className="guard">
					<div className="logo-simple">
						<img src={`${basePath}/assets/logo-simple.svg`} alt="" />
					</div>
					<span className="supertitle">Nos actions</span>
					<h1 className="mw-50">Un travail de terrain, chat par chat, depuis 2003.</h1>
					<p className="mw-40 margin-top-sm">
						Chaque chat aidé par l&apos;association suit le même chemin patient : piégeage, stérilisation, identification, soins, puis retour dans son territoire ou placement en famille. Voici
						comment nous procédons concrètement.
					</p>
				</div>
			</section>

			<section className="section">
				<div className="guard">
					<article className={styles.chapter}>
						<SmartImage src={`${basePath}/img/stray.jpg`} />

						<div className={styles.chapterSide}>
							{/* <span className="supertitle">Étape 1</span> */}
							<h2>Le piégeage des chats errants</h2>
							<div className={styles.chapterContent}>
								<p>
									Piéger un chat demande du temps et de la patience. Pendant plusieurs jours, nos bénévoles déposent de la nourriture au même endroit, à la même heure, pour créer une routine
									que l&apos;animal va apprendre à associer à un lieu sûr.
								</p>
								<p>
									Le piège est ensuite installé avec des sardines ou du thon, auxquels les chats résistent rarement. Une fois capturé, l&apos;animal est immédiatement conduit chez le
									vétérinaire. S&apos;il est sociable, nous tentons un placement ; sinon, il retrouve son territoire après les soins.
								</p>
								<p>
									Nous avons besoin de l&apos;accord des mairies pour piéger sur leur commune.
								</p>

								<div className="note">Le Code rural (articles L211-11 à 28) rappelle que le maire est responsable des animaux errants sur sa commune.</div>
							</div>
						</div>
					</article>
					<article className={styles.chapter}>
						<SmartImage src={`${basePath}/img/vet.jpg`} />

						<div className={styles.chapterSide}>
							{/* <span className="supertitle">Étape 2</span> */}
							<h2>Stérilisation, soins et identifications</h2>
							<div className={styles.chapterContent}>
								<p>
									Chaque chat capturé est stérilisé ou castré, identifié par puce électronique et testé pour les maladies transmissibles (FIV, leucose). Les animaux porteurs de maladies
									incurables ne sont pas remis dans la nature : ils seraient un danger de contamination pour les autres, et malheureusement, une euthanasie est alors décidée.
								</p>
								<p>
									<strong>En 2025</strong>, l&apos;association a pris en charge 51 stérilisations de chattes (dont 6 gestantes), 36 castrations de chats, 16 soins, 14 placements et a dû
									procéder à 1 euthanasie pour maladie ou accident.
								</p>

								<aside className={styles.aside}>
									<h4>Coûts vétérinaires pris en charge</h4>
									<ul>
										<li>Stérilisation d'une chatte : 68 €</li>
										<li>Castration d'un chat : 39 €</li>
										<li>Chatte gestante : 94 €</li>
										<li>Tests FIV / leucose : 45 €</li>
										<li>Euthanasie (si maladie incurable) : 21 €</li>
									</ul>
								</aside>
							</div>
						</div>
					</article>
					<article className={styles.chapter}>
						<SmartImage src={`${basePath}/img/food.jpg`} />

						<div className={styles.chapterSide}>
							{/* <span className="supertitle">Étape 3</span> */}
							<h2>Nourrir, abriter, veiller</h2>
							<div className={styles.chapterContent}>
								<p>
									Nos bénévoles nourrissent quotidiennement environ <strong>140 chats errants</strong> sur le territoire. Nous soutenons aussi les personnes âgées, seules ou en difficulté
									financière qui souhaitent continuer à nourrir les chats de leur voisinage : pour 10 €, nous leur remettons un sac de 20 kg de croquettes.
								</p>
								<p>
									Certaines familles accueillantes vont plus loin en construisant des abris pour que les chats errants puissent se protéger du froid. Au fil du temps, tous les chats errants
									régulièrement nourris sont stérilisés ou castrés.
								</p>
								<p>S&apos;ajoutent à ce réseau nos 54 chats pris en charge directement par l&apos;association.</p>
							</div>
						</div>
					</article>
					<article className={styles.chapter}>
						<SmartImage src={`${basePath}/img/homeplace-2.jpg`} />

						<div className={styles.chapterSide}>
							{/* <span className="supertitle">Étape 4</span> */}
							<h2>Placements et adoptions</h2>
							<div className={styles.chapterContent}>
								<p>
									Nous ne plaçons que des chats stérilisés et identifiés. Les adoptants s&apos;engagent à respecter l&apos;animal : les chats ne sont pas des jouets que l&apos;on peut jeter.
								</p>
								<p>Pour les personnes en difficulté qui veulent garder un chat que nous leur avons apporté, l&apos;identification reste obligatoire — elle coûte 45 €.</p>
								<p>
									Pour les particuliers qui nous demandent de stériliser un chat errant de leur voisinage, nous demandons une participation de 30 € par chat. Si la situation financière est
									difficile, un minimum de 10 € est possible. Chaque don donne lieu à un reçu fiscal.
								</p>
							</div>
						</div>
					</article>
					<article className={styles.chapter}>
						<SmartImage src={`${basePath}/img/sad.jpg`} />

						<div className={styles.chapterSide}>
							{/* <span className="supertitle">Étape 5</span> */}
							<h2>Intervenir contre la maltraitance</h2>
							<div className={styles.chapterContent}>
								<p>
									L&apos;association intervient également en cas de mauvais traitements ou d&apos;actes de cruauté sur des chats, et peut en poursuivre les auteurs en justice. La protection
									animale est au cœur de notre mission et de nos statuts.
								</p>
								<p>Si vous êtes témoin d&apos;une situation inquiétante, contactez-nous par téléphone ou par courrier — nous agirons avec discrétion et détermination.</p>
							</div>
						</div>
					</article>
				</div>
			</section>

			<section className={`bg-ink ${styles.banner}`}>
				<div className="guard flex between wrap stack-mobile">
					<h2 className="heading-md">Vous souhaitez nous soutenir ?</h2>
					<Link href="/nous-aider" className="button primary">
						Voir comment nous aider →
					</Link>
				</div>
			</section>
		</>
	);
}
