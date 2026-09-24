"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export function Nav() {
  const { data: session, status } = useSession();
  return (
    <nav className="site-nav">
      <Link href="/" className="site-nav-brand">
        <span className="site-nav-brand-name">NorthBridge</span>
        <span className="site-nav-brand-tag">Venezuela Property Advisory</span>
      </Link>
      <ul className="site-nav-links">
        <li><Link href="/properties">Properties</Link></li>
        <li><Link href="/market">Market Intelligence</Link></li>
        <li><Link href="/law">Property Law</Link></li>
        <li><Link href="/foreign-investor">Foreign Investor</Link></li>
        <li><Link href="/due-diligence">Due Diligence™</Link></li>
        {status === "authenticated" ? (
          <>
            <li><span className="site-nav-user">{session.user.name}</span></li>
            <li><button className="site-nav-cta site-nav-signout" onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button></li>
          </>
        ) : (
          <>
            <li><Link href="/login">Log in</Link></li>
            <li><Link href="/register" className="site-nav-cta">Request Advisory</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}
