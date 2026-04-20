import Link from "next/link";
import Nav from '@/app/components/Nav'



const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/nos-actions", label: "Nos actions" },
  { href: "/nous-aider", label: "Nous aider" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    // <header className="nav">
    //   <div className="guard nav-content">
    //     <Link href="/" className="logo" aria-label="SOS Chats Haute-Dordogne, accueil">
    //       <img src="/assets/logo.png" alt="" />
    //     </Link>

    //     <nav className="links" aria-label="Navigation principale">
    //       {navLinks.map((link) => (
    //         <Link key={link.href} href={link.href}>
    //           {link.label}
    //         </Link>
    //       ))}
    //       <Link href="/nous-aider#don" className="cta">
    //         Faire un don
    //       </Link>
    //     </nav>
    //   </div>
    // </header>

    <Nav/>
  );
}
