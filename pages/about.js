import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { tokens } from "../lib/data";

export default function AboutPage() {
  return (
    <>
      <Head><title>소개 — 맘밀리터</title></Head>
      <Header />
      <main className="page-wrap" style={{ padding: "20px" }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>맘밀리터 소개</h1>
        <p style={{ fontSize: 14, color: tokens.text, lineHeight: 1.8, marginBottom: 12 }}>
          맘밀리터는 신생아·영유아 부모님이 브랜드·제품별 조유 비율에 맞춰 분유량을 빠르게 계산할 수 있도록 돕는 사이트예요.
        </p>
        <p style={{ fontSize: 14, color: tokens.text, lineHeight: 1.8, marginBottom: 12 }}>
          제품 데이터는 공식몰·라벨을 확인한 자료와, 아직 확인되지 않은 참고 자료를 신뢰도 배지로 구분해서 보여드리고 있어요. 정확도를 높이기 위해 계속 업데이트하고 있으며, 오류를 발견하시면 문의하기를 통해 제보해 주세요.
        </p>
      </main>
      <Footer />
    </>
  );
}
