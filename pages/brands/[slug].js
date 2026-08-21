import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Calculator from "../../components/Calculator";
import { tokens, BRANDS } from "../../lib/data";

export async function getStaticPaths() {
  return {
    paths: BRANDS.map((b) => ({ params: { slug: b.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const brand = BRANDS.find((b) => b.id === params.slug);
  if (!brand) return { notFound: true };
  return { props: { brandId: brand.id } };
}

export default function BrandDetailPage({ brandId }) {
  const brand = BRANDS.find((b) => b.id === brandId);

  return (
    <>
      <Head><title>{brand.name} — 맘밀리터</title></Head>
      <Header />
      <main className="page-wrap" style={{ padding: "20px" }}>
        <Link href="/brands" style={{ fontSize: 12, color: tokens.sub }}>← 브랜드 목록</Link>
        <h1 style={{ fontSize: 20, fontWeight: 700, margin: "10px 0 6px" }}>{brand.name}</h1>
        <div style={{ fontSize: 12, color: tokens.sub, marginBottom: 12 }}>{brand.products.length}개 제품 · {brand.origin}</div>
        <p style={{ fontSize: 14, color: tokens.text, lineHeight: 1.7, marginBottom: 8 }}>{brand.intro}</p>
        {brand.note && (
          <div style={{ fontSize: 12, color: "#B45309", lineHeight: 1.5, marginBottom: 16 }}>ℹ️ {brand.note}</div>
        )}

        <h2 style={{ fontSize: 15, fontWeight: 700, margin: "16px 0 10px" }}>제품 목록</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
          {brand.products.map((p) => (
            <div key={p.id} className="card">
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2 }}>{p.name}</div>
              <div style={{ fontSize: 11, color: tokens.sub }}>{p.stages.length}단계 구성</div>
              {p.note && <div style={{ fontSize: 11, color: "#B45309", marginTop: 4, lineHeight: 1.5 }}>ℹ️ {p.note}</div>}
            </div>
          ))}
        </div>
      </main>

      <Calculator initialBrandId={brand.id} initialProductId={brand.products[0].id} />
      <Footer />
    </>
  );
}
