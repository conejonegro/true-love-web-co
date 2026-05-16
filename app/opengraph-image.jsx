import { ImageResponse } from "next/og";

export const alt = "True Love Web Co — Desarrollo web con corazón";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#05070A",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid decorativo de fondo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,245,160,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,160,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow central */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,245,160,0.07) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Contenido */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            position: "relative",
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              color: "#00F5A0",
              fontSize: "20px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              margin: 0,
              opacity: 0.8,
            }}
          >
            // Guadalajara, México
          </p>

          {/* Nombre */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span
              style={{
                fontSize: "72px",
                fontWeight: 900,
                color: "#F8FAFC",
                lineHeight: 1,
              }}
            >
              True Love
            </span>
            <span
              style={{
                fontSize: "72px",
                fontWeight: 900,
                color: "#00F5A0",
                lineHeight: 1,
              }}
            >
              Web Co
            </span>
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: "28px",
              color: "#94A3B8",
              margin: 0,
              textAlign: "center",
            }}
          >
            Desarrollo web con corazón — sitios, tiendas y apps
          </p>

          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0,245,160,0.1)",
              border: "1px solid rgba(0,245,160,0.3)",
              borderRadius: "100px",
              padding: "10px 28px",
              marginTop: "8px",
            }}
          >
            <span style={{ color: "#00F5A0", fontSize: "18px" }}>
              truelove.webco
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
