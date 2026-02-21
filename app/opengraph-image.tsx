import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

// Image metadata
export const alt = "ACTALENT Solutions Partners";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Load the logo image
  const logoPath = join(process.cwd(), "public", "logo.png");
  const logoData = await readFile(logoPath);
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a3a4a 0%, #0d1f2a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <img
            src={logoSrc}
            alt="ACTALENT Logo"
            width={300}
            height={300}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#ffffff",
            textAlign: "center",
            marginBottom: "20px",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Strategic Recruitment Partner
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#1E88E5",
            textAlign: "center",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Connecting Talent. Building Success.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
