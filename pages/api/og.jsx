import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

const image = fetch(new URL("../../public/og-image.png", import.meta.url)).then(
  (res) => res.arrayBuffer()
);

export default async function handler() {
  const imageData = await image;
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "#377CFB",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img width="192" height="64" src={imageData} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
