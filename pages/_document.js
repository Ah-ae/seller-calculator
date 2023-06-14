import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const setThemeMode = `
    function setTheme() {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add('dark');
      } else {
        localStorage.removeItem("theme");
        document.documentElement.classList.remove('dark');
      }
    }

    function handleThemeChange(e) {
      if (e.matches) {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add('dark');
      } else {
        localStorage.removeItem("theme");
        document.documentElement.classList.remove('dark');
      }
    }

    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeQuery.addListener(handleThemeChange);
    setTheme();
  `;

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
          content="마진, 판매가, 행사가 환원 등을 계산할 수 있는 웹 계산기 앱"
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
          content="마진, 판매가, 행사가 환원 등을 계산할 수 있는 웹 계산기 앱"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/seller-calculator-5d44a.appspot.com/o/og-image-704x352.png?alt=media&token=1f7762d3-954a-43a2-9f09-0fe7fa087b08"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="704" />
        <meta property="og:image:height" content="352" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="온라인 셀러 계산기" />
        <meta
          name="twitter:url"
          content="https://seller-calculator.vercel.app"
        />
        <meta
          name="twitter:description"
          content="마진, 판매가, 행사가 환원 등을 계산할 수 있는 웹 계산기 앱"
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/seller-calculator-5d44a.appspot.com/o/og-image-704x352.png?alt=media&token=1f7762d3-954a-43a2-9f09-0fe7fa087b08"
        />
        <meta property="og:local" content="ko-KR" />
        <link rel="manifest" href="/manifest.json" />
        <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />
      </Head>
      <body className="h-screen dark:bg-dark-blue-200 dark:text-dark-blue-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
