import Link from "next/link";
import { tokens } from "../lib/data";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "18px 20px",
        borderTop: `1px solid ${tokens.border}`,
        display: "flex",
        flexWrap: "wrap",
        gap: 12,
        fontSize: 12,
        color: tokens.sub,
        maxWidth: 480,
        margin: "0 auto",
      }}
    >
      <Link href="/privacy" style={{ color: tokens.sub }}>개인정보처리방침</Link>
      <Link href="/terms" style={{ color: tokens.sub }}>이용약관</Link>
      <Link href="/disclaimer" style={{ color: tokens.sub }}>면책조항</Link>
      <Link href="/contact" style={{ color: tokens.sub }}>문의하기</Link>
    </footer>
  );
}
