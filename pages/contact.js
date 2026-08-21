import Head from "next/head";
import { Mail } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { tokens, CONTACT_EMAIL } from "../lib/data";

export default function ContactPage() {
  return (
    <>
      <Head><title>문의하기 — 맘밀리터</title></Head>
      <Header />
      <main className="page-wrap" style={{ padding: "20px" }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>문의하기</h1>
        <p style={{ fontSize: 14, color: tokens.text, lineHeight: 1.8, marginBottom: 16 }}>
          제품 데이터 오류 제보, 서비스 관련 문의는 아래 이메일로 보내주세요. 특히 스푼당 ml 비율처럼 정확도가 중요한 정보는 실제 제품 라벨 사진을 함께 보내주시면 반영에 큰 도움이 돼요.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("맘밀리터 문의")}`}
          className="btn-primary"
          style={{ textDecoration: "none", maxWidth: 280 }}
        >
          <Mail size={18} strokeWidth={1.5} /> {CONTACT_EMAIL}
        </a>
      </main>
      <Footer />
    </>
  );
}
