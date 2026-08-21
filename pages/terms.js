import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { tokens, POLICIES } from "../lib/data";

export default function TermsPage() {
  const policy = POLICIES.terms;
  return (
    <>
      <Head><title>{policy.title} — 맘밀리터</title></Head>
      <Header />
      <main className="page-wrap" style={{ padding: "20px" }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>{policy.title}</h1>
        {policy.body.map((p, i) => (
          <p key={i} style={{ fontSize: 14, color: tokens.text, lineHeight: 1.8, margin: "0 0 12px" }}>{p}</p>
        ))}
      </main>
      <Footer />
    </>
  );
}
