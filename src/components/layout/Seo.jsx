import { Helmet } from "react-helmet-async";

export default function Seo({
  title = "Mona Protect | Smartphone Protection, Repairs & Flexible Payments",
  description = "Official protection, repairs, and flexible pay-later options for eligible iPhone, Samsung Galaxy, and Google Pixel devices in Nigeria.",
  canonical,
  schema
}) {
  const fullTitle = title.includes("Mona Protect") ? title : `${title} | Mona Protect`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
