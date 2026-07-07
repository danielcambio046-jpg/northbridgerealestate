"use client";

import { useSession, signOut } from "next-auth/react";

const SELLER_ROLES = ["SELLER", "AGENT", "DEVELOPER", "ADMIN"];

export function Nav() {
  const { data: session, status } = useSession();

  return (
    <nav className="site-nav">
      <a href="/" className="site-nav-brand">NorthBridge</a>
      <div className="site-nav-links">
        <a href="/properties">Marketplace</a>
        {status === "authenticated" && session.user.role && SELLER_ROLES.includes(session.user.role) && (
          <a href="/properties/new">List a property</a>
        )}
        {status === "authenticated" ? (
          <>
            <span className="site-nav-user">{session.user.name}</span>
            <button className="site-nav-signout" onClick={() => signOut({ callbackUrl: "/" })}>
              Sign out
            </button>
          </>
        ) : status === "unauthenticated" ? (
          <>
            <a href="/login">Log in</a>
            <a href="/register" className="site-nav-cta">Sign up</a>
          </>
        ) : null}
      </div>
    </nav>
  );
}
