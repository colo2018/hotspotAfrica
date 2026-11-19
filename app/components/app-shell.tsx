"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { isActivePath, navigation } from "../lib/navigation";

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M6 6l12 12M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-white/10 px-5 py-5">
        <p className="text-xs font-semibold tracking-[0.16em] text-teal-200/80">
          HMA
        </p>
        <p className="mt-1 text-sm font-medium text-white">Exploitation Wi-Fi</p>
      </div>
      <nav aria-label="Navigation principale" className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    active
                      ? "bg-white text-teal-950 font-semibold"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <p className="px-5 py-4 text-xs leading-5 text-slate-400">
        Phase 1 — socle. Aucune connexion routeur ni paiement.
      </p>
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-full flex-1 bg-[var(--background)] text-[var(--foreground)]">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 bg-[var(--brand)] text-white lg:block">
        <Sidebar />
      </aside>

      {menuOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Fermer le menu"
            className="absolute inset-0 bg-slate-950/50"
            onClick={() => setMenuOpen(false)}
          />
          <aside
            id="menu-mobile"
            className="relative flex h-full w-72 max-w-[85vw] flex-col bg-[var(--brand)] text-white shadow-xl"
          >
            <div className="flex justify-end px-3 pt-3">
              <button
                type="button"
                aria-label="Fermer le menu"
                className="rounded-md p-2 text-white hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>
            <Sidebar onNavigate={() => setMenuOpen(false)} />
          </aside>
        </div>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex items-center gap-3 px-4 py-3 sm:px-6">
            <button
              type="button"
              className="rounded-md border border-slate-200 p-2 text-slate-700 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              onClick={() => setMenuOpen(true)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              <MenuIcon />
            </button>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold tracking-wide text-slate-950 sm:text-base">
                HOTSPOT MANAGER AFRICA
              </p>
              <p className="truncate text-xs text-slate-500">
                Espace opérateur — aperçu sans compte
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800">
              Démonstration
            </span>
          </div>
        </header>
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
