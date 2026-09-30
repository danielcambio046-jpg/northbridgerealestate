"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Market",          href: "/market" },
  { label: "Opportunities",   href: "/opportunities" },
  { label: "Intelligence",    href: "/intelligence" },
  { label: "Property Law",    href: "/law" },
  { label: "Due Diligence",   href: "/due-diligence" },
  { label: "Investor Center", href: "/investor-center" },
  { label: "Network",         href: "/network" },
  { label: "Reports",         href: "/reports" },
];

export function Nav() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="site-nav">
        <Link href="/" className="site-nav-brand">
          <span className="site-nav-brand-name">NorthBridge</span>
          <span className="site-nav-brand-tag">Venezuela Real Estate Intelligence</span>
        </Link>

        {/* Desktop nav */}
        <ul className="site-nav-links" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* User actions — separate from main nav */}
        <div className="site-nav-user-actions">
          {status === "authenticated" ? (
            <>
              <span className="site-nav-user-name">{session.user.name}</span>
              <button
                className="site-nav-action-btn"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Sign out
              </button>
            </>
          ) : status === "unauthenticated" ? (
            <>
              <Link href="/login" className="site-nav-action-link">Log in</Link>
              <Link href="/register" className="site-nav-cta">Request Advisory</Link>
            </>
          ) : null}
          {/* Mobile hamburger */}
          <button
            className="site-nav-hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="site-nav-mobile">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="site-nav-mobile-divider" />
          {status === "authenticated" ? (
            <button onClick={() => { setOpen(false); signOut({ callbackUrl: "/" }); }}>
              Sign out
            </button>
          ) : (
            <>
              <Link href="/login" onClick={() => setOpen(false)}>Log in</Link>
              <Link href="/register" onClick={() => setOpen(false)}>Request Advisory</Link>
            </>
          )}
        </div>
      )}
    </>
  );
}
