import Link from "next/link";
import { Baby } from "lucide-react";
import { tokens } from "../lib/data";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 20px",
        borderBottom: `1px solid ${tokens.border}`,
        maxWidth: 480,
        margin: "0 auto",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: tokens.text }}>
        <div style={{ width: 32, height: 32, borderRadius: 10, background: tokens.babyblue, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Baby size={18} strokeWidth={1.5} color={tokens.primary} />
        </div>
        <span style={{ fontWeight: 700, fontSize: 16 }}>맘밀리터</span>
      </Link>
      <nav style={{ display: "flex", gap: 14 }}>
        <Link href="/" className="nav-link">홈</Link>
        <Link href="/#calc" className="nav-link">계산기</Link>
        <Link href="/brands" className="nav-link">브랜드</Link>
        <Link href="/guide" className="nav-link">가이드</Link>
      </nav>
    </header>
  );
}
