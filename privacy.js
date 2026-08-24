import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { tokens, POLICIES } from "../lib/data";

export default function PrivacyPage() {
  const policy = POLICIES.privacy;
  return (
    <>
      <Seo title={policy.title} description="맘밀리터의 개인정보 수집·이용에 대한 안내입니다." path="/privacy" />
      <Header />
      <main className="page-wrap" style={{ padding: "20px" }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>{policy.title}</h1>
        {policy.body.map((p, i) => (
          <p key={i} style={{ fontSize: 14, color: tokens.text, lineHeight: 1.8, margin: "0 0 12px" }}>{p}</p>
        ))}
        <div style={{ fontSize: 13, color: tokens.sub, marginTop: 8 }}>
          개인정보 관련 문의는 <Link href="/contact" style={{ color: tokens.primary }}>문의하기 페이지</Link>를 이용해 주세요.
        </div>
      </main>
      <Footer />
    </>
  );
}
