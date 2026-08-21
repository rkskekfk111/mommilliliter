import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { tokens, POLICIES, CONTACT_EMAIL } from "../lib/data";

export default function PrivacyPage() {
  const policy = POLICIES.privacy;
  return (
    <>
      <Head><title>{policy.title} — 맘밀리터</title></Head>
      <Header />
      <main className="page-wrap" style={{ padding: "20px" }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>{policy.title}</h1>
        {policy.body.map((p, i) => (
          <p key={i} style={{ fontSize: 14, color: tokens.text, lineHeight: 1.8, margin: "0 0 12px" }}>{p}</p>
        ))}
        <div style={{ fontSize: 13, color: tokens.sub, marginTop: 8 }}>문의: {CONTACT_EMAIL}</div>
      </main>
      <Footer />
    </>
  );
}
