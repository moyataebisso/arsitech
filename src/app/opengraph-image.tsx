import { ImageResponse } from "next/og";

export const alt = "Arsi Technology Group — Websites, business IT, and HIPAA compliance for Minnesota.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)",
          color: "#F8FAFC",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <div
            style={{
              position: "relative",
              width: "120px",
              height: "120px",
              display: "flex",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "16px",
                top: "28px",
                width: "28px",
                height: "28px",
                borderRadius: "9999px",
                background: "#F8FAFC",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "46px",
                top: "20px",
                width: "28px",
                height: "28px",
                borderRadius: "9999px",
                background: "#F59E0B",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "76px",
                top: "28px",
                width: "28px",
                height: "28px",
                borderRadius: "9999px",
                background: "#F8FAFC",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "56px",
                top: "48px",
                width: "8px",
                height: "60px",
                borderRadius: "4px",
                background: "#F8FAFC",
              }}
            />
          </div>
          <div
            style={{
              fontSize: "40px",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            Arsi Technology Group
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: "1000px",
            }}
          >
            Websites, business IT, and HIPAA compliance.
          </div>
          <div
            style={{
              fontSize: "32px",
              color: "#CBD5E1",
              fontWeight: 500,
            }}
          >
            For small businesses and healthcare providers in Minnesota.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "24px",
            color: "#94A3B8",
          }}
        >
          <div style={{ display: "flex" }}>arsitechgroup.com</div>
          <div style={{ display: "flex", color: "#F59E0B", fontWeight: 600 }}>
            Minneapolis · Saint Paul · Statewide
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
