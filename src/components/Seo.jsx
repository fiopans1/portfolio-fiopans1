import { Helmet } from "react-helmet-async";
import { siteMetadata } from "../data/seo";

const {
  SITE_NAME,
  SITE_URL,
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  DEFAULT_KEYWORDS,
} = siteMetadata;

function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE,
  url,
  type = "website",
  jsonLd,
  children,
}) {
  const fullTitle = title ? `${title} | fiopans1` : SITE_NAME;
  const canonical = url ? `${SITE_URL}${url}` : SITE_URL;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Diego Suárez Ramos" />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonical} />
      <meta property="og:site_name" content="fiopans1" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dualwarepc" />
      <meta name="twitter:creator" content="@dualwarepc" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
      {children}
    </Helmet>
  );
}

export default Seo;
