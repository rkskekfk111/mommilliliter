import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { tokens, POLICIES } from "../lib/data";

export default function DisclaimerPage() {
  const policy = POLICIES.disclaimer;
  return (
    <>
      <Seo title={policy.title} description="분유량 계산 결과와 콘텐츠에 대한 면책조항입니다." path="/disclaimer" />
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
