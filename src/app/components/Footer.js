import Link from "next/link";
import ProtectedEmail from "@/app/components/ProtectedEmail";

export default function Footer() {
  return (
    <footer>
      <div className="guard footer-grid">
        <div className="footer-about">
          <h3 className="footer-heading">SOS Chats Haute-Dordogne</h3>
          <p>
            Association loi 1901 au service des chats errants du Puy-de-Dôme depuis 2004.
            Stérilisation, soins, placement et lutte contre la maltraitance animale.
          </p>
        </div>

        <div>
          <h4 className="footer-subheading">Contact</h4>
          <ul className="footer-list">
            <li>
              <a href="tel:+33473211081">04 73 21 10 81</a>
            </li>
            <li>
              <a href="tel:+33473811816">04 73 81 18 16</a>
            </li>
            <li>
              <ProtectedEmail user="mapouget" domain="wanadoo.fr" />
              {/* <a href="mailto:mapouget@wanadoo.fr">mapouget@wanadoo.fr</a> */}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer-subheading">L&apos;association</h4>
          <ul className="footer-list">
            <li>
              <Link href="/nos-actions">Nos actions</Link>
            </li>
            <li>
              <Link href="/nous-aider">Nous aider</Link>
            </li>
            <li>
              <Link href="/nous-aider#don">Faire un don</Link>
            </li>
            <li>
              <Link href="/contact">Nous contacter</Link>
            </li>
            <li>
              <Link href="/mentions-legales">Mentions légales</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="guard footer-bottom">
        <p>© {new Date().getFullYear()} SOS Chats Haute-Dordogne —  {new Date().getFullYear() - 2004} ans d&apos;engagement</p>
        <p className="footer-reduction">Les dons donnent droit à un reçu fiscal.</p>
      </div>
    </footer>
  );
}
