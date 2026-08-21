import Link from "next/link";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { tokens, BRANDS } from "../../lib/data";

export default function BrandsPage() {
  const domestic = BRANDS.filter((b) => b.origin === "국산");
  const imported = BRANDS.filter((b) => b.origin !== "국산");

  const renderList = (list) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {list.map((b) => (
        <Link key={b.id} href={`/brands/${b.id}`} className="card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>{b.name}</div>
          <div style={{ fontSize: 11, color: tokens.sub, marginBottom: 6 }}>{b.products.length}개 제품 · {b.origin}</div>
          <div style={{ fontSize: 12, color: tokens.sub, lineHeight: 1.5 }}>{b.intro}</div>
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <Head><title>브랜드 목록 — 맘밀리터</title></Head>
      <Header />
      <main className="page-wrap" style={{ padding: "20px" }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>브랜드 목록</h1>

        <h2 style={{ fontSize: 14, fontWeight: 700, color: tokens.sub, margin: "0 0 8px" }}>국산</h2>
        {renderList(domestic)}

        <h2 style={{ fontSize: 14, fontWeight: 700, color: tokens.sub, margin: "20px 0 8px" }}>수입</h2>
        {renderList(imported)}
      </main>
      <Footer />
    </>
  );
}
