import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Shield, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background flex justify-center px-5 py-10 sm:py-16">
      <div
        className={`w-full max-w-sm space-y-8 transition-all duration-700 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to site</span>
        </button>

        {/* Success icon + message */}
        <div className="text-center space-y-4 pt-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
            <CheckCircle2 className="h-8 w-8 text-accent" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-foreground">
            You're all set!
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
            Your ad-free access is now active. Every article on Vintage Aviation News is yours to read — clean, fast, and uninterrupted.
          </p>
        </div>

        {/* Confirmation card */}
        <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
          <div className="h-1 bg-accent" />
          <div className="px-8 py-8 text-center space-y-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Subscription Confirmed
            </p>

            <div className="space-y-1">
              <p className="text-3xl font-serif font-bold text-foreground">$20</p>
              <p className="text-sm text-muted-foreground">per year • renews annually</p>
            </div>

            <div className="mx-auto h-px w-16 bg-border" />

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Ad-free access to all articles</p>
              <p>Cancel anytime from your account</p>
            </div>

            <p className="text-[10px] text-muted-foreground">{today}</p>
          </div>
        </div>

        {/* Identity badge */}
        <div className="flex items-center justify-center gap-2 rounded-xl border border-primary/15 bg-primary/5 px-4 py-3">
          <Shield className="h-3.5 w-3.5 text-primary shrink-0" />
          <p className="text-xs text-primary font-medium">
            Ad-free reader of Vintage Aviation News
          </p>
        </div>

        {/* Start reading */}
        <div className="text-center">
          <Button variant="cta" size="lg" onClick={() => navigate("/")}>
            Start Reading
          </Button>
        </div>
      </div>
    </div>
  );
}
