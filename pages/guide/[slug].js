import Link from "next/link";
import { MessageCircleQuestion } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";
import { tokens, GUIDES } from "../../lib/data";

export async function getStaticPaths() {
  return {
    paths: GUIDES.map((g) => ({ params: { slug: g.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const guide = GUIDES.find((g) => g.slug === params.slug);
  if (!guide) return { notFound: true };
  return { props: { slug: guide.slug } };
}

export default function GuideDetailPage({ slug }) {
  const guide = GUIDES.find((g) => g.slug === slug);

  return (
    <>
      <Seo title={guide.title} description={guide.desc} path={`/guide/${guide.slug}`} />
      <Header />
      <main className="page-wrap" style={{ padding: "20px" }}>
        <Link href="/guide" style={{ fontSize: 12, color: tokens.sub }}>← 가이드 목록</Link>
        <h1 style={{ fontSize: 20, fontWeight: 700, margin: "10px 0 16px" }}>{guide.title}</h1>

        {guide.body.map((p, i) => (
          <p key={i} style={{ fontSize: 14, color: tokens.text, lineHeight: 1.8, margin: "0 0 12px" }}>{p}</p>
        ))}

        <div style={{ display: "flex", gap: 8, background: "#FEF3E2", border: "1px solid #FDE4B8", borderRadius: 10, padding: "10px 12px", margin: "16px 0" }}>
          <MessageCircleQuestion size={16} strokeWidth={1.5} color="#B45309" style={{ flexShrink: 0, marginTop: 1 }} />
          <span style={{ fontSize: 12, color: "#92400E", lineHeight: 1.6 }}>
            일반적으로 통용되는 육아 정보 수준으로 정리했어요. 전문 의료 조언을 대체하지 않으니, 정확한 판단은 소아과 등 전문가와 상담해 주세요.
          </span>
        </div>

        <div style={{ fontSize: 12, color: tokens.sub, marginBottom: 4 }}>참고 자료</div>
        {guide.sources.map((s) => (
          <a key={s.url} href={s.url} target="_blank" rel="noreferrer" className="source-line">· {s.name}</a>
        ))}
      </main>
      <Footer />
    </>
  );
}
