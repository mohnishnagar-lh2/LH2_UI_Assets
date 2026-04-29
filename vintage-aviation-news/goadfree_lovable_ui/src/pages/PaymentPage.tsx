import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SITE_NAME = "Vintage Aviation News";
const LOGO_URL = "/LH2_UI_Assets/vintage-aviation-news/assets/van-logo.png";
const EMAIL = "vintageaviationlh2@gmail.com";

type Method = "card" | "cashapp" | "bank";
type Currency = "INR" | "USD";

const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif";

const COUNTRIES = [
  "India", "United States", "United Kingdom", "Canada", "Australia",
  "Germany", "France", "Netherlands", "Japan", "Singapore",
];

export default function PaymentPage() {
  const navigate = useNavigate();
  const [currency, setCurrency] = useState<Currency>("USD");
  const [method, setMethod] = useState<Method>("card");
  const [country, setCountry] = useState("India");
  const [saveInfo, setSaveInfo] = useState(false);

  const price = currency === "USD" ? "$1.00" : "₹83.00";

  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: FONT, color: "#30313d" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
          maxWidth: 1180,
          margin: "0 auto",
          minHeight: "100vh",
        }}
        className="payment-grid"
      >
        {/* ============ LEFT COLUMN ============ */}
        <div
          style={{
            padding: "48px 56px 48px 56px",
            borderRight: "1px solid #e6e6e6",
          }}
          className="payment-left"
        >
          {/* Back + brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
            <button
              onClick={() => navigate("/")}
              aria-label="Back"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#6d6e78",
                fontSize: 18,
                padding: 0,
                lineHeight: 1,
              }}
            >
              ←
            </button>
            <img
              src={LOGO_URL}
              alt={SITE_NAME}
              style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover" }}
            />
            <span style={{ fontSize: 14, fontWeight: 600, color: "#30313d" }}>{SITE_NAME}</span>
          </div>

          {/* Description */}
          <p style={{ fontSize: 15, color: "#6d6e78", lineHeight: 1.5, margin: "0 0 16px", maxWidth: 360 }}>
            Subscribe to {SITE_NAME} to remove ads and get a 3X faster experience.
          </p>

          {/* Price */}
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 28 }}>
            <span style={{ fontSize: 38, fontWeight: 600, color: "#30313d", letterSpacing: -0.5 }}>
              {price}
            </span>
            <span style={{ fontSize: 13, color: "#6d6e78", lineHeight: 1.2 }}>
              per
              <br />
              month
            </span>
          </div>

          {/* Currency tabs */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, maxWidth: 360, marginBottom: 8 }}>
            <button
              onClick={() => setCurrency("INR")}
              style={{
                padding: "10px 16px",
                border: `1px solid ${currency === "INR" ? "#30313d" : "#e6e6e6"}`,
                background: "#fff",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 500,
                color: "#30313d",
                cursor: "pointer",
                fontFamily: FONT,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <span style={{ fontSize: 14 }}>🇮🇳</span> INR
            </button>
            <button
              onClick={() => setCurrency("USD")}
              style={{
                padding: "10px 16px",
                border: `1px solid ${currency === "USD" ? "#30313d" : "#e6e6e6"}`,
                background: "#fff",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 500,
                color: "#30313d",
                cursor: "pointer",
                fontFamily: FONT,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <span style={{ fontSize: 14 }}>🇺🇸</span> USD
            </button>
          </div>
          <p style={{ fontSize: 12, color: "#6d6e78", margin: "0 0 32px" }}>
            Exchange rate and fees of your bank may apply
          </p>

          {/* Line item */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 24,
              maxWidth: 360,
              paddingTop: 20,
            }}
          >
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#30313d", margin: 0, lineHeight: 1.45 }}>
                {SITE_NAME} to remove ads and get a 3X faster experience.
              </p>
              <p style={{ fontSize: 12, color: "#6d6e78", margin: "6px 0 0" }}>Billed monthly</p>
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#30313d", whiteSpace: "nowrap" }}>{price}</span>
          </div>
        </div>

        {/* ============ RIGHT COLUMN ============ */}
        <div style={{ padding: "48px 56px" }} className="payment-right">
          {/* Express buttons */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
            <button
              style={{
                background: "#33c481",
                border: "none",
                borderRadius: 6,
                padding: "12px 18px",
                color: "#000",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                fontFamily: FONT,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              Pay with{" "}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  background: "#000",
                  color: "#33c481",
                  padding: "2px 8px 2px 6px",
                  borderRadius: 999,
                  fontWeight: 800,
                }}
              >
                <span style={{ fontSize: 10 }}>▶</span> link
              </span>
            </button>
            <button
              style={{
                background: "#ffc439",
                border: "none",
                borderRadius: 6,
                padding: "12px 18px",
                fontFamily: FONT,
                fontSize: 16,
                fontWeight: 700,
                color: "#000",
                cursor: "pointer",
                letterSpacing: 0,
              }}
            >
              <span style={{ fontStyle: "italic" }}>amazon</span>
              <span> pay</span>
            </button>
          </div>

          {/* OR divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0 24px" }}>
            <div style={{ flex: 1, height: 1, background: "#e6e6e6" }} />
            <span style={{ fontSize: 12, color: "#6d6e78", fontWeight: 500 }}>OR</span>
            <div style={{ flex: 1, height: 1, background: "#e6e6e6" }} />
          </div>

          {/* Contact info */}
          <h3 style={{ fontSize: 15, fontWeight: 600, color: "#30313d", margin: "0 0 12px" }}>
            Contact information
          </h3>
          <div
            style={{
              background: "#f6f6f6",
              border: "1px solid #e6e6e6",
              borderRadius: 6,
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 28,
            }}
          >
            <span style={{ fontSize: 13, color: "#6d6e78", flexShrink: 0 }}>Email</span>
            <span style={{ fontSize: 13, color: "#30313d", textAlign: "right", marginLeft: "auto" }}>
              {EMAIL}
            </span>
          </div>

          {/* Payment method */}
          <h3 style={{ fontSize: 15, fontWeight: 600, color: "#30313d", margin: "0 0 12px" }}>Payment method</h3>

          {/* Card option (expanded) */}
          <div
            style={{
              border: "1px solid #e6e6e6",
              borderRadius: 6,
              marginBottom: 8,
              overflow: "hidden",
              background: "#fff",
            }}
          >
            <button
              onClick={() => setMethod("card")}
              style={{
                width: "100%",
                background: "#fff",
                border: "none",
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                gap: 12,
                cursor: "pointer",
                fontFamily: FONT,
                textAlign: "left",
              }}
            >
              <Radio selected={method === "card"} />
              <CardIcon />
              <span style={{ fontSize: 14, fontWeight: 500, color: "#30313d" }}>Card</span>
            </button>

            {method === "card" && (
              <div style={{ padding: "0 16px 16px" }}>
                <Label>Card information</Label>
                <div
                  style={{
                    border: "1px solid #d1d5db",
                    borderRadius: 6,
                    overflow: "hidden",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", padding: "0 12px" }}>
                    <input
                      type="text"
                      placeholder="1234 1234 1234 1234"
                      style={{
                        flex: 1,
                        border: "none",
                        outline: "none",
                        padding: "12px 0",
                        fontSize: 14,
                        fontFamily: FONT,
                        color: "#30313d",
                      }}
                    />
                    <CardBrands />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid #d1d5db" }}>
                    <input
                      type="text"
                      placeholder="MM / YY"
                      style={{
                        border: "none",
                        outline: "none",
                        padding: "12px",
                        fontSize: 14,
                        fontFamily: FONT,
                        color: "#30313d",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        borderLeft: "1px solid #d1d5db",
                        padding: "0 12px",
                      }}
                    >
                      <input
                        type="text"
                        placeholder="CVC"
                        style={{
                          flex: 1,
                          border: "none",
                          outline: "none",
                          padding: "12px 0",
                          fontSize: 14,
                          fontFamily: FONT,
                          color: "#30313d",
                        }}
                      />
                      <CvcIcon />
                    </div>
                  </div>
                </div>

                <Label style={{ marginTop: 14 }}>Cardholder name</Label>
                <input
                  type="text"
                  placeholder="Full name on card"
                  style={{
                    width: "100%",
                    border: "1px solid #d1d5db",
                    borderRadius: 6,
                    padding: "12px",
                    fontSize: 14,
                    fontFamily: FONT,
                    outline: "none",
                    color: "#30313d",
                    boxSizing: "border-box",
                  }}
                />

                <Label style={{ marginTop: 14 }}>Country or region</Label>
                <div style={{ position: "relative" }}>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    style={{
                      width: "100%",
                      border: "1px solid #d1d5db",
                      borderRadius: 6,
                      padding: "12px",
                      fontSize: 14,
                      fontFamily: FONT,
                      outline: "none",
                      color: "#30313d",
                      background: "#fff",
                      appearance: "none",
                      cursor: "pointer",
                    }}
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <span
                    style={{
                      position: "absolute",
                      right: 14,
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                      color: "#6d6e78",
                      fontSize: 10,
                    }}
                  >
                    ▼
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Cash App Pay */}
          <button
            onClick={() => setMethod("cashapp")}
            style={{
              width: "100%",
              background: "#fff",
              border: "1px solid #e6e6e6",
              borderRadius: 6,
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              cursor: "pointer",
              fontFamily: FONT,
              textAlign: "left",
              marginBottom: 8,
            }}
          >
            <Radio selected={method === "cashapp"} />
            <CashAppIcon />
            <span style={{ fontSize: 14, fontWeight: 500, color: "#30313d" }}>Cash App Pay</span>
          </button>

          {/* Bank */}
          <button
            onClick={() => setMethod("bank")}
            style={{
              width: "100%",
              background: "#fff",
              border: "1px solid #e6e6e6",
              borderRadius: 6,
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              cursor: "pointer",
              fontFamily: FONT,
              textAlign: "left",
              marginBottom: 16,
            }}
          >
            <Radio selected={method === "bank"} />
            <BankIcon />
            <span style={{ fontSize: 14, fontWeight: 500, color: "#30313d" }}>Bank</span>
          </button>

          {/* Save info checkbox */}
          <div
            style={{
              border: "1px solid #e6e6e6",
              borderRadius: 6,
              padding: "14px 16px",
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              marginBottom: 16,
            }}
          >
            <input
              id="saveInfo"
              type="checkbox"
              checked={saveInfo}
              onChange={(e) => setSaveInfo(e.target.checked)}
              style={{ marginTop: 2, width: 16, height: 16, accentColor: "#5469d4", cursor: "pointer" }}
            />
            <label htmlFor="saveInfo" style={{ flex: 1, cursor: "pointer" }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#30313d", margin: 0 }}>
                Save my information for faster checkout
              </p>
              <p style={{ fontSize: 12, color: "#6d6e78", margin: "4px 0 0", lineHeight: 1.4 }}>
                Pay securely at {SITE_NAME} and everywhere{" "}
                <span style={{ textDecoration: "underline" }}>Link</span> is accepted.
              </p>
            </label>
          </div>

          {/* Subscribe button */}
          <button
            onClick={() => navigate("/success")}
            style={{
              width: "100%",
              background: "#5469d4",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "14px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: FONT,
              transition: "background 0.15s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#4456b3")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#5469d4")}
          >
            Subscribe
          </button>

          {/* Disclaimer */}
          <p style={{ fontSize: 12, color: "#6d6e78", margin: "16px 0 24px", textAlign: "center", lineHeight: 1.5 }}>
            By subscribing, you authorize {SITE_NAME} to charge you according to the terms until you cancel.
          </p>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              fontSize: 12,
              color: "#6d6e78",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
              Powered by <span style={{ fontStyle: "italic", fontWeight: 700, color: "#30313d" }}>stripe</span>
            </span>
            <span style={{ color: "#d1d5db" }}>|</span>
            <a href="#" style={{ color: "#6d6e78", textDecoration: "none" }}>Terms</a>
            <a href="#" style={{ color: "#6d6e78", textDecoration: "none" }}>Privacy</a>
          </div>
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 880px) {
          .payment-grid { grid-template-columns: 1fr !important; }
          .payment-left { border-right: none !important; border-bottom: 1px solid #e6e6e6 !important; padding: 32px 24px !important; }
          .payment-right { padding: 32px 24px !important; }
        }
      `}</style>
    </div>
  );
}

/* ────────── Sub-components ────────── */

function Radio({ selected }: { selected: boolean }) {
  return (
    <span
      style={{
        width: 16,
        height: 16,
        borderRadius: "50%",
        border: `1.5px solid ${selected ? "#30313d" : "#d1d5db"}`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {selected && (
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#30313d" }} />
      )}
    </span>
  );
}

function Label({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ fontSize: 13, color: "#30313d", margin: "0 0 6px", fontWeight: 500, ...style }}>
      {children}
    </p>
  );
}

function CardIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
      <rect x="0.5" y="0.5" width="21" height="15" rx="2" stroke="#30313d" />
      <rect x="1" y="4" width="20" height="3" fill="#30313d" />
    </svg>
  );
}

function CardBrands() {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
      <span
        style={{
          background: "#1a1f71",
          color: "#fff",
          fontSize: 9,
          fontWeight: 700,
          padding: "3px 5px",
          borderRadius: 3,
          fontStyle: "italic",
        }}
      >
        VISA
      </span>
      <span
        style={{
          width: 24,
          height: 16,
          borderRadius: 3,
          background: "linear-gradient(90deg, #eb001b 50%, #f79e1b 50%)",
          display: "inline-block",
        }}
      />
      <span
        style={{
          background: "#006fcf",
          color: "#fff",
          fontSize: 8,
          fontWeight: 700,
          padding: "3px 4px",
          borderRadius: 3,
        }}
      >
        AMEX
      </span>
      <span
        style={{
          background: "#0079be",
          color: "#fff",
          fontSize: 8,
          fontWeight: 700,
          padding: "3px 4px",
          borderRadius: 3,
        }}
      >
        ◐
      </span>
    </div>
  );
}

function CvcIcon() {
  return (
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" style={{ flexShrink: 0 }}>
      <rect x="0.5" y="0.5" width="23" height="15" rx="2" stroke="#6d6e78" />
      <rect x="3" y="4" width="10" height="2" fill="#6d6e78" />
      <text x="14" y="11" fontSize="6" fill="#6d6e78" fontFamily="sans-serif">123</text>
    </svg>
  );
}

function CashAppIcon() {
  return (
    <span
      style={{
        width: 22,
        height: 22,
        borderRadius: 4,
        background: "#00d54b",
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 14,
      }}
    >
      $
    </span>
  );
}

function BankIcon() {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
      <path d="M10 1L1 5h18L10 1z" stroke="#30313d" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M3 7v8M7 7v8M13 7v8M17 7v8" stroke="#30313d" strokeWidth="1.2" />
      <path d="M1 16h18" stroke="#30313d" strokeWidth="1.2" />
    </svg>
  );
}
