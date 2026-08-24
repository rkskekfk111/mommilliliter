import Head from "next/head";
import { SITE_URL } from "../lib/data";

export default function Seo({ title, description, path = "" }) {
  const fullTitle = title ? `${title} — 맘밀리터` : "맘밀리터 — 분유량 계산기";
  const url = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="맘밀리터" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}
