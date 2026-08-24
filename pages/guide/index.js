import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";
import { tokens, GUIDES } from "../../lib/data";

export default function GuideListPage() {
  return (
    <>
      <Seo
        title="육아 가이드"
        description="월령별 분유량, 분유 타는 법, 혼합수유, 분유 거부·트림 대처법 등 신생아·영유아 부모를 위한 육아 가이드 모음입니다."
        path="/guide"
      />
      <Header />
      <main className="page-wrap" style={{ padding: "20px" }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>육아 가이드</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {GUIDES.map((g) => (
            <Link key={g.slug} href={`/guide/${g.slug}`} className="card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 3 }}>{g.title}</div>
              <div style={{ fontSize: 12, color: tokens.sub }}>{g.desc}</div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
