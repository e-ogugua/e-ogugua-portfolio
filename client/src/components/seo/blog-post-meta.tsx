import { Helmet } from 'react-helmet-async';

interface BlogPostMetaProps {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  publishDate: string;
  author: string;
  tags?: string[];
}

export function BlogPostMeta({
  title,
  excerpt,
  slug,
  image,
  publishDate,
  author,
  tags = []
}: BlogPostMetaProps) {
  const url = `https://eogugua.com/blog/${slug}`;
  const siteName = "Emmanuel Ogugua";
  const fullTitle = `${title} | ${siteName}`;
  const imageUrl = image.startsWith('http') ? image : `https://eogugua.com${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={excerpt} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={excerpt} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="article:published_time" content={new Date(publishDate).toISOString()} />
      <meta property="article:author" content={author} />
      {tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@eogugua" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={excerpt} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* JSON-LD */}
      <script type="application/ld+json">
        {`${JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: title,
          description: excerpt,
          image: imageUrl,
          author: {
            '@type': 'Person',
            name: author,
          },
          publisher: {
            '@type': 'Person',
            name: author,
            logo: {
              '@type': 'ImageObject',
              url: 'https://eogugua.com/logo.png',
            },
          },
          datePublished: publishDate,
          dateModified: publishDate,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
          },
        })}`}
      </script>
    </Helmet>
  );
}
