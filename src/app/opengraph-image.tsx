import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "El Aula Tutoring Services";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "#ff8c00",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          fontFamily: "Arial",
        }}
      >
        El Aula
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
