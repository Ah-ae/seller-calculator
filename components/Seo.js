import Head from "next/head";

export default function Seo({ title, style }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h2
        className={
          "pt-6 pb-4 text-4xl text-gray-500 max-md:text-3xl max-md:text-center"
        }
      >
        {title}
      </h2>
    </>
  );
}
