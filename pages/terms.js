import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { tokens, POLICIES } from "../lib/data";

export default function TermsPage() {
  const policy = POLICIES.terms;
  return (
    <>
      <Seo title={policy.title} description="맘밀리터 서비스 이용에 관한 약관입니다." path="/terms" />
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
