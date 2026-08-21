import { useState, useMemo } from "react";
import { ChevronDown, ArrowRight, AlertCircle, ShieldCheck, Clock, Droplet, Calculator as CalculatorIcon } from "lucide-react";
import {
  tokens, BRANDS, CONFIDENCE_BADGE, MIX_METHOD_TEXT,
  DAILY_CAP_ML, PER_FEED_CAP_ML, referenceDaily,
} from "../lib/data";

export default function Calculator({ initialBrandId, initialProductId }) {
  const [weightKg, setWeightKg] = useState(4.5);
  const [ageMonths, setAgeMonths] = useState(1);
  const [feedsPerDay, setFeedsPerDay] = useState(7);

  const [brandId, setBrandId] = useState(initialBrandId || BRANDS[0].id);
  const [productId, setProductId] = useState(initialProductId || BRANDS[0].products[0].id);
  const [stageIndex, setStageIndex] = useState(0);
  const [targetMl, setTargetMl] = useState(200);
  const [showMixResult, setShowMixResult] = useState(false);

  const brand = BRANDS.find((b) => b.id === brandId);
  const product = brand?.products.find((p) => p.id === productId);
  const stage = product?.stages[Math.min(stageIndex, product.stages.length - 1)];

  const effectiveWeight = Math.max(0, Number(weightKg) || 0);
  const refDailyRaw = Math.round(effectiveWeight * 150);
  const refDaily = referenceDaily(effectiveWeight);
  const wasCapped = refDailyRaw > DAILY_CAP_ML;
  const safeFeeds = Math.max(1, Number(feedsPerDay) || 1);
  const refPerFeed = Math.round(refDaily / safeFeeds);
  const perFeedOverCap = refPerFeed > PER_FEED_CAP_ML;

  const mix = useMemo(() => {
    if (!stage || !stage.mlPerScoop) return null;
    const target = Math.max(0, Number(targetMl) || 0);
    const spoonCount = Math.max(0, Math.round(target / stage.mlPerScoop));
    const actualTotal = spoonCount * stage.mlPerScoop;
    const waterMlRaw = Math.max(0, actualTotal - spoonCount * 2);
    const waterMl = Math.round(waterMlRaw / 10) * 10;
    const gram = stage.gramPerScoop ? Math.round(stage.gramPerScoop * spoonCount * 10) / 10 : null;
    return { spoonCount, actualTotal, waterMl, gram };
  }, [stage, targetMl]);

  const handleBrandChange = (id) => {
    setBrandId(id);
    const nb = BRANDS.find((b) => b.id === id);
    setProductId(nb.products[0].id);
    setStageIndex(0);
    setShowMixResult(false);
  };
  const handleProductChange = (id) => {
    setProductId(id);
    setStageIndex(0);
    setShowMixResult(false);
  };

  const badge = stage ? CONFIDENCE_BADGE[stage.confidence] : null;

  return (
    <>
      {/* STEP 1 */}
      <section style={{ padding: "20px 20px 0" }}>
        <div className="card">
          <h2 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 4px" }}>1. 참고 수유량 확인 (선택)</h2>
          <p style={{ fontSize: 12, color: tokens.sub, margin: "0 0 12px" }}>
            개월수·체중·하루 수유 횟수를 함께 넣으면 흔히 쓰이는 참고치를 보여드려요. 이미 알고 계신 양이 있다면 아래 2단계에서 바로 입력하셔도 돼요.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
            <div>
              <label className="field-label">개월수</label>
              <input className="field-input" type="number" step="1" min="0" max="24" value={ageMonths} onChange={(e) => setAgeMonths(e.target.value)} />
            </div>
            <div>
              <label className="field-label">체중 (kg)</label>
              <input className="field-input" type="number" step="0.1" min="1" max="20" value={weightKg} onChange={(e) => setWeightKg(e.target.value)} />
            </div>
          </div>

          <div style={{ marginBottom: 10 }}>
            <label className="field-label">하루 수유 횟수</label>
            <input className="field-input" type="number" step="1" min="1" max="12" value={feedsPerDay} onChange={(e) => setFeedsPerDay(e.target.value)} />
          </div>

          <div style={{ display: "flex", gap: 10, background: tokens.mint, borderRadius: 10, padding: "10px 12px", fontSize: 13, flexWrap: "wrap" }}>
            <span style={{ color: tokens.sub }}>참고 하루 총량 <b style={{ color: tokens.text }}>{refDaily}ml</b></span>
            <span style={{ color: tokens.sub }}>· 1회 약 <b style={{ color: tokens.text }}>{refPerFeed}ml</b></span>
          </div>

          {wasCapped && (
            <div style={{ fontSize: 11, color: "#B45309", marginTop: 6, lineHeight: 1.5 }}>
              체중 기준 계산값은 {refDailyRaw}ml이지만, 하루 총 분유량은 1000ml를 넘지 않도록 하는 게 흔히 권장되는 상한이라 1000ml로 제한했어요.
            </div>
          )}
          {perFeedOverCap && (
            <div style={{ fontSize: 11, color: "#B45309", marginTop: 4, lineHeight: 1.5 }}>
              1회 {refPerFeed}ml는 1회 최대 권장량으로 자주 언급되는 240ml를 넘어요 — 수유 횟수를 늘리는 것도 고려해보세요.
            </div>
          )}
          <div style={{ fontSize: 10, color: tokens.sub, marginTop: 6 }}>
            참고: 체중 1kg당 하루 약 150ml, 하루 총량 1000ml 이내, 1회 최대 약 240ml — 소아과 상담·자문 콘텐츠에서 공통으로 언급되는 수치예요. 실제 필요량은 아기마다 달라 참고용으로만 봐주세요.
          </div>

          <a href="#calc" className="btn-primary" style={{ marginTop: 12, textDecoration: "none" }}>
            <CalculatorIcon size={18} strokeWidth={1.5} /> 계산하기
          </a>
        </div>
      </section>

      {/* STEP 2 */}
      <section id="calc" style={{ padding: "16px 20px 20px" }}>
        <div className="card">
          <h2 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 12px", display: "flex", alignItems: "center", gap: 6 }}>
            <Droplet size={18} strokeWidth={1.5} color={tokens.primary} /> 2. 스푼·물 양 계산
          </h2>

          <div style={{ marginBottom: 12 }}>
            <label className="field-label">분유 브랜드</label>
            <div style={{ position: "relative" }}>
              <select className="field-select" value={brandId} onChange={(e) => handleBrandChange(e.target.value)}>
                {BRANDS.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}
              </select>
              <ChevronDown size={18} strokeWidth={1.5} style={{ position: "absolute", right: 12, top: 12, pointerEvents: "none", color: tokens.sub }} />
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <label className="field-label">제품 (라인)</label>
            <div style={{ position: "relative" }}>
              <select className="field-select" value={productId} onChange={(e) => handleProductChange(e.target.value)}>
                {brand.products.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
              <ChevronDown size={18} strokeWidth={1.5} style={{ position: "absolute", right: 12, top: 12, pointerEvents: "none", color: tokens.sub }} />
            </div>
            {(product.note || brand.note) && (
              <div style={{ fontSize: 11, color: tokens.sub, marginTop: 6, lineHeight: 1.5 }}>ℹ️ {product.note || brand.note}</div>
            )}
          </div>

          <div style={{ marginBottom: 4 }}>
            <label className="field-label">단계</label>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {product.stages.map((s, idx) => (
                <button
                  key={s.stage}
                  className={`btn-toggle ${stageIndex === idx ? "active" : ""}`}
                  style={{ flex: "0 0 auto", padding: "8px 12px" }}
                  onClick={() => { setStageIndex(idx); setShowMixResult(false); }}
                >
                  {s.stage}
                </button>
              ))}
            </div>
          </div>
          {badge && (
            <div style={{ margin: "8px 0 4px" }}>
              <span className="badge" style={{ color: badge.color, background: badge.bg }}>
                {stage.confidence === "official" ? <ShieldCheck size={12} strokeWidth={2} /> : <AlertCircle size={12} strokeWidth={2} />}
                {badge.label}
              </span>
              {stage.mlPerScoop ? (
                <span style={{ fontSize: 11, color: tokens.sub, marginLeft: 6 }}>{stage.mlPerScoop}ml당 1스푼 기준</span>
              ) : (
                <span style={{ fontSize: 11, color: tokens.sub, marginLeft: 6 }}>스푼당 ml 값을 찾지 못했어요</span>
              )}
              <div style={{ fontSize: 11, color: tokens.sub, marginTop: 4 }}>{MIX_METHOD_TEXT[stage.mixMethod || "domestic"]}</div>
            </div>
          )}

          <div style={{ margin: "14px 0" }}>
            <label className="field-label">원하는 조유량 (ml)</label>
            <input className="field-input" type="number" step="10" min="10" max="400" value={targetMl} onChange={(e) => { setTargetMl(e.target.value); setShowMixResult(false); }} />
          </div>

          {stage && !stage.mlPerScoop ? (
            <div style={{ display: "flex", gap: 8, background: "#FFE4D6", border: "1px solid #FDBA95", borderRadius: 10, padding: "10px 12px", fontSize: 12, color: "#7C2D12", lineHeight: 1.5 }}>
              <AlertCircle size={16} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 1 }} />
              이 제품은 스푼당 ml 비율을 확인하지 못해 계산할 수 없어요. 실제 제품 라벨을 확인한 뒤 데이터를 채워주세요.
            </div>
          ) : (
            <button className="btn-primary" onClick={() => setShowMixResult(true)}>
              계산하기 <ArrowRight size={16} strokeWidth={1.5} />
            </button>
          )}

          {showMixResult && mix && (
            <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${tokens.border}` }}>
              <p style={{ fontSize: 13, color: tokens.sub, margin: "0 0 10px" }}>
                입력하신 <b style={{ color: tokens.text }}>{targetMl}ml</b>와 가장 가까운 스푼 수예요.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                <div style={{ background: tokens.babyblue, borderRadius: 10, padding: "12px 14px" }}>
                  <div style={{ fontSize: 12, color: tokens.sub, marginBottom: 4 }}>분유 스푼</div>
                  <div style={{ fontSize: 22, fontWeight: 700 }}>{mix.spoonCount}스푼{mix.gram ? <span style={{ fontSize: 12, fontWeight: 500, color: tokens.sub }}> ({mix.gram}g)</span> : null}</div>
                </div>
                <div style={{ background: tokens.mint, borderRadius: 10, padding: "12px 14px" }}>
                  <div style={{ fontSize: 12, color: tokens.sub, marginBottom: 4 }}>넣을 물의 양</div>
                  <div style={{ fontSize: 22, fontWeight: 700 }}>{mix.waterMl}ml</div>
                </div>
              </div>
              <div className="card" style={{ background: tokens.ivory, marginBottom: 12 }}>
                <div style={{ fontSize: 13, color: tokens.sub }}>
                  물 {mix.waterMl}ml에 분유 {mix.spoonCount}스푼을 녹이면 실제 조유량은 약 <b style={{ color: tokens.text }}>{mix.actualTotal}ml</b>가 돼요.
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: tokens.sub, marginBottom: 10 }}>
                <Clock size={14} strokeWidth={1.5} /> 3~4시간 간격 수유가 흔히 권장돼요
              </div>
              <div style={{ display: "flex", gap: 8, background: "#FEF3E2", border: "1px solid #FDE4B8", borderRadius: 10, padding: "10px 12px", marginBottom: 8 }}>
                <AlertCircle size={16} strokeWidth={1.5} color="#B45309" style={{ flexShrink: 0, marginTop: 1 }} />
                <span style={{ fontSize: 12, color: "#92400E", lineHeight: 1.5 }}>
                  물의 양은 분유가 녹으며 늘어나는 부피(스푼당 약 2ml)를 감안한 근사치예요. 정확한 물·스푼 양은 실제 제품 라벨의 조유표를 우선해 주세요. 이 계산 결과는 참고용이며, 정확한 수유량은 소아과 상담을 권장합니다.
                </span>
              </div>
              <div style={{ fontSize: 11, color: tokens.sub }}>출처: {stage.source}</div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
