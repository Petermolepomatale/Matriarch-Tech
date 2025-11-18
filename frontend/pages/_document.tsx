import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon - Multiple sizes for all devices */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* OpenGraph / Social Media */}
        <meta property="og:title" content="Matriarch Tech — Guided by Wisdom, Built on Strength" />
        <meta property="og:description" content="Transforming Your Ideas into Robust, Intelligent Digital Solutions" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Matriarch Tech" />
        <meta name="twitter:description" content="Guided by Wisdom, Built on Strength" />
        <meta name="twitter:image" content="/logo.png" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#2C3E50" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
