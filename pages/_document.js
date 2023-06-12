import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="온라인, 셀러, 계산기, 마진, 마진율, 판매가, 할인율, 행사가, 행사가 환원, 쇼핑몰, MD"
        />
        <meta
          name="description"
          content="마진, 판매가, 행사가 환원 등을 계산할 수 있는 웹 앱 계산기"
        />
        <meta name="author" content="Ahae Kim" />
        <meta property="og:title" content="온라인 셀러 계산기" />
        <meta
          property="og:url"
          content="https://seller-calculator.vercel.app"
        />
        <meta property="og:site_name" content="셀러 계산기" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="마진, 판매가, 행사가 환원 등을 계산할 수 있는 웹 앱 계산기"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/seller-calculator-5d44a.appspot.com/o/og-image.svg?alt=media&token=c8e9319f-826d-48d5-ab22-a59b5f2676b7"
        />
        <meta property="og:local" content="ko-KR" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
