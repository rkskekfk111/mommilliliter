import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { ChevronDown, ChevronUp, MessageCircleQuestion } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Calculator from "../components/Calculator";
import { tokens, BRANDS, GUIDES } from "../lib/data";

export default function Home() {
  const [openGuide, setOpenGuide] = useState(null);

  return (
    <>
      <Head>
        <title>맘밀리터 — 분유량 계산기</title>
        <meta name="description" content="브랜드·제품별 스푼 비율을 반영한 분유량 계산기와 육아 가이드" />
      </Head>

      <Header />

      <main className="page-wrap">
        {/* 히어로 */}
        <section style={{ padding: "28px 20px", background: `linear-gradient(180deg, ${tokens.babyblue}, #fff)` }}>
          <h1 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 6px", lineHeight: 1.6, paddingTop: 2 }}>
            몇 스푼, 물 몇 ml인지<br />딱 떨어지게 알려드려요
          </h1>
          <p style={{ fontSize: 14, color: tokens.sub, margin: 0 }}>
            제품·단계별 스푼 비율을 반영한 정밀 계산기
          </p>
        </section>

        <Calculator />

        {/* 인기 가이드 */}
        <section id="guides" style={{ padding: "8px 20px 20px" }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 12px" }}>인기 육아 가이드</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {GUIDES.map((g) => {
              const isOpen = openGuide === g.slug;
              return (
                <div key={g.slug} className="card">
                  <button
                    onClick={() => setOpenGuide(isOpen ? null : g.slug)}
                    style={{ all: "unset", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}
                  >
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 3 }}>{g.title}</div>
                      <div style={{ fontSize: 12, color: tokens.sub }}>{g.desc}</div>
                    </div>
                    {isOpen ? <ChevronUp size={16} strokeWidth={1.5} color={tokens.sub} /> : <ChevronDown size={16} strokeWidth={1.5} color={tokens.sub} />}
                  </button>

                  {isOpen && (
                    <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${tokens.border}` }}>
                      {g.body.map((p, i) => (
                        <p key={i} style={{ fontSize: 13, color: tokens.text, lineHeight: 1.7, margin: "0 0 10px" }}>{p}</p>
                      ))}
                      <div style={{ display: "flex", gap: 6, background: "#FEF3E2", border: "1px solid #FDE4B8", borderRadius: 10, padding: "8px 10px", marginBottom: 10 }}>
                        <MessageCircleQuestion size={14} strokeWidth={1.5} color="#B45309" style={{ flexShrink: 0, marginTop: 1 }} />
                        <span style={{ fontSize: 11, color: "#92400E", lineHeight: 1.5 }}>
                          일반적으로 통용되는 육아 정보 수준으로 정리했어요. 전문 의료 조언을 대체하지 않으니, 정확한 판단은 소아과 등 전문가와 상담해 주세요.
                        </span>
                      </div>
                      <div style={{ fontSize: 11, color: tokens.sub, marginBottom: 2 }}>참고 자료</div>
                      {g.sources.map((s) => (
                        <a key={s.url} href={s.url} target="_blank" rel="noreferrer" className="source-line">· {s.name}</a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 광고 영역 (더미) */}
        <div style={{ margin: "0 20px 20px", padding: "24px", textAlign: "center", background: tokens.surface, border: `1px dashed ${tokens.border}`, borderRadius: 10, fontSize: 12, color: tokens.sub }}>
          광고 영역 (AD)
        </div>

        {/* 브랜드 둘러보기 */}
        <section id="brands" style={{ padding: "0 20px 20px" }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 4px" }}>브랜드 둘러보기</h2>
          <p style={{ fontSize: 12, color: tokens.sub, margin: "0 0 12px" }}>탭하면 브랜드 소개와 제품 목록 페이지로 이동해요.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {BRANDS.map((b) => (
              <Link key={b.id} href={`/brands/${b.id}`} className="card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2 }}>{b.name}</div>
                <div style={{ fontSize: 11, color: tokens.sub, marginBottom: 6 }}>{b.products.length}개 제품 · {b.origin}</div>
                <div style={{ fontSize: 11, color: tokens.sub, lineHeight: 1.5 }}>{b.intro}</div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
