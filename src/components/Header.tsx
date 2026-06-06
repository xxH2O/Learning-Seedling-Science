"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipboardCheck, Home, Sprout } from "lucide-react";

const navItems = [
  { href: "/", label: "首页", icon: Home },
  { href: "/quiz", label: "自测", icon: ClipboardCheck }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-forest-100 bg-[#fbf8ee]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link href="/" className="focus-ring inline-flex w-fit items-center rounded-md text-forest-900">
          <span className="mr-2 flex h-9 w-9 items-center justify-center rounded-md bg-forest-700 text-white">
            <Sprout className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold">林木种苗学入门学习站</span>
        </Link>

        <nav className="flex gap-2" aria-label="主导航">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-forest-700 text-white"
                    : "text-forest-800 hover:bg-forest-100 hover:text-forest-900"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="mr-1.5 h-4 w-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
