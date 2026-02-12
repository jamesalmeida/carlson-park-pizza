import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #b91c1c 0%, #dc2626 40%, #ea580c 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: "60px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 100, marginBottom: 20 }}>🍕</div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 24,
            letterSpacing: "-0.02em",
          }}
        >
          Save Carlson Park
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 32,
            letterSpacing: "-0.02em",
          }}
        >
          Pizza Wednesdays
        </div>
        <div
          style={{
            fontSize: 28,
            opacity: 0.9,
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          Help save our 4-year neighborhood tradition in Culver City. Sign up to support the city council vote.
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
