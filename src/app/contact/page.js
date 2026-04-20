import styles from "./page.module.css";
import ProtectedEmail from "@/app/components/ProtectedEmail";

export const metadata = {
	title: "Contact",
	description: "Contacter SOS Chats Haute-Dordogne : téléphone, courrier, e-mail. Bureau à La Bourboule, Puy-de-Dôme.",
};

const team = [
	{ role: "Présidente", name: "Annie Pouget" },
	{ role: "Vice-présidente", name: "Nicole Sauvat" },
	{ role: "Trésorier", name: "Louis Chevillon" },
	{ role: "Secrétaire", name: "Marie-Laure Combes" },
];

export default function Contact() {
	return (
		<>
			<section className="page-head">
				<div className="guard">
					<span className="supertitle">Contact</span>
					<h1>Parlons-en.</h1>
					<p className="mw-40 margin-top-sm">
						Vous avez repéré un chat errant, souhaitez adopter, faire un don ou signaler une situation de maltraitance ? N&apos;hésitez pas à nous joindre — nous répondons à chaque appel.
					</p>
				</div>
			</section>

			<section className="section">
				<div className="guard">
					<div className={styles.grid}>
						<div className={styles.card}>
							<h3 className={styles.cardTitle}>Téléphone</h3>
							<ul className={styles.links}>
								<li>
									<a href="tel:+33473211081">04 73 21 10 81</a>
								</li>
								<li>
									<a href="tel:+33473811816">04 73 81 18 16</a>
								</li>
							</ul>
							<p className={styles.note}>Un message peut être laissé si nous sommes sur le terrain.</p>
						</div>

						<div className={styles.card}>
							<h3 className={styles.cardTitle}>Courrier</h3>
							<address className={styles.address}>
								SOS Chats Haute-Dordogne
								<br />
								BP 21
								<br />
								63150 La Bourboule
							</address>
							<p className={styles.note}>Les chèques sont à libeller à l&apos;ordre de « SOS Chats Haute-Dordogne ».</p>
						</div>

						<div className={styles.card}>
							<h3 className={styles.cardTitle}>E-mail</h3>
							<ProtectedEmail user="mapouget" domain="wanadoo.fr" />
							{/* <a className={styles.email} href="mailto:mapouget@wanadoo.fr">
                mapouget@wanadoo.fr
              </a> */}
							<p className={styles.note}>Les adhérents joignables par e-mail nous facilitent le travail.</p>
						</div>
					</div>
				</div>
			</section>

			<section className={`section bg-cream-soft ${styles.team}`}>
				<div className="guard">
					<div className="mw-40 margin-bottom-lg">
						<span className="supertitle">Le bureau</span>
						<h2>Celles et ceux qui font tenir l&apos;association.</h2>
					</div>
					<div className={styles.teamGrid}>
						{team.map((m) => (
							<div key={m.name} className={styles.teamCard}>
								<span className={styles.teamRole}>{m.role}</span>
								<span className={styles.teamName}>{m.name}</span>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
