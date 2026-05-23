import { MapleLeaf } from "./maple-leaf";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-bg-elevated/30">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-maple/15 border border-maple/20 flex items-center justify-center">
              <MapleLeaf className="h-3.5 w-3.5 text-maple" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-fg tracking-tight leading-none">
                Northvale
              </span>
              <span className="text-[8px] uppercase tracking-[0.15em] text-fg-subtle leading-none mt-0.5">
                Capital
              </span>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "Client Relationship Model", "IIROC AdvisorReport"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-fg-muted hover:text-fg transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </nav>

          <p className="text-[10px] text-fg-subtle">
            &copy; {new Date().getFullYear()} Northvale Capital Inc.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30">
          <p className="text-[10px] text-fg-subtle/60 text-center max-w-3xl mx-auto leading-relaxed">
            Northvale Capital Inc. is a member of the Canadian Investment
            Regulatory Organization (CIRO) and the Canadian Investor Protection
            Fund (CIPF). Trading and investing carry risk. The value of
            investments can go down as well as up. This website does not
            constitute financial, tax, or legal advice. Please consult a
            qualified professional before making investment decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
