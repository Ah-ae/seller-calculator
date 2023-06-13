import Head from "next/head";

export default function Seo({ title }) {
  return (
    <>
      <Head>
        <title>{`온라인 셀러 계산기 | ${title}`}</title>
      </Head>
      <h2 className="pt-6 pb-4 text-4xl text-gray-500 max-md:text-3xl max-md:text-center dark:text-white">
        {title}
      </h2>
    </>
  );
}
