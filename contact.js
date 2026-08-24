import { useState } from "react";
import { Send } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { tokens, CONTACT_FORM_ENDPOINT } from "../lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Seo title="문의하기" description="제품 데이터 오류 제보, 서비스 관련 문의는 아래 폼으로 보내주세요." path="/contact" />
      <Header />
      <main className="page-wrap" style={{ padding: "20px" }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>문의하기</h1>
        <p style={{ fontSize: 14, color: tokens.text, lineHeight: 1.8, marginBottom: 20 }}>
          제품 데이터 오류 제보, 서비스 관련 문의는 아래 폼으로 남겨주세요. 특히 스푼당 ml 비율처럼 정확도가 중요한 정보는 실제 제품 라벨 사진을 함께 첨부해 주시면 반영에 큰 도움이 돼요.
        </p>

        {status === "sent" ? (
          <div className="card" style={{ background: tokens.mint }}>
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>문의가 접수됐어요</div>
            <div style={{ fontSize: 13, color: tokens.sub }}>보내주신 내용 확인 후 답변드릴게요. 감사합니다!</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 12 }}>
              <label className="field-label">이름 (선택)</label>
              <input className="field-input" type="text" value={form.name} onChange={handleChange("name")} />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label className="field-label">답변받을 이메일</label>
              <input className="field-input" type="email" required value={form.email} onChange={handleChange("email")} />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label className="field-label">문의 내용</label>
              <textarea
                className="field-input"
                required
                rows={6}
                value={form.message}
                onChange={handleChange("message")}
                style={{ resize: "vertical", fontFamily: "inherit" }}
              />
            </div>

            <button className="btn-primary" type="submit" disabled={status === "sending"}>
              <Send size={16} strokeWidth={1.5} /> {status === "sending" ? "보내는 중..." : "문의 보내기"}
            </button>

            {status === "error" && (
              <div style={{ fontSize: 12, color: "#B91C1C", marginTop: 10 }}>
                전송에 실패했어요. 잠시 후 다시 시도해 주세요.
              </div>
            )}
          </form>
        )}
      </main>
      <Footer />
    </>
  );
}
