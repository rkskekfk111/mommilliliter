import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";
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
      <Seo
        title="분유 브랜드 목록"
        description="매일유업, 남양유업, 파스퇴르, 압타밀, 루비락 등 국산·수입 분유 브랜드와 제품별 조유 비율 정보를 확인해보세요."
        path="/brands"
      />
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
