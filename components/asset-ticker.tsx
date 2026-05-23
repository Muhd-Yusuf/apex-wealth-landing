"use client";

import { useState, useEffect } from "react";

const assets = [
  { symbol: "TSX", base: 22450.3 },
  { symbol: "RY.TO", base: 135.42 },
  { symbol: "TD.TO", base: 82.15 },
  { symbol: "SHOP.TO", base: 98.67 },
  { symbol: "ENB.TO", base: 52.30 },
  { symbol: "CAD/USD", base: 0.7425 },
  { symbol: "XIU.TO", base: 33.18 },
  { symbol: "S&P 500", base: 5234.18 },
  { symbol: "XAU/CAD", base: 3195.40 },
  { symbol: "BTC/CAD", base: 91250.0 },
];

const seedChanges = [0.45, 0.87, -0.34, 1.52, 0.28, -0.12, 0.65, 0.33, 1.12, 0.78];

export function AssetTicker() {
  const [prices, setPrices] = useState(
    assets.map((a, i) => ({ ...a, pct: seedChanges[i] }))
  );

  useEffect(() => {
    const iv = setInterval(() => {
      setPrices((p) =>
        p.map((a) => ({
          ...a,
          pct: +(a.pct + (Math.random() - 0.48) * 0.15).toFixed(2),
        }))
      );
    }, 4000);
    return () => clearInterval(iv);
  }, []);

  const items = [...prices, ...prices];

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-bg/70 backdrop-blur-md border-b border-border/50">
      <div className="overflow-hidden">
        <div className="animate-ticker flex whitespace-nowrap py-2">
          {items.map((a, i) => (
            <div key={`${a.symbol}-${i}`} className="inline-flex items-center gap-2.5 px-5">
              <span className="text-[11px] font-medium text-fg-muted">{a.symbol}</span>
              <span className={`text-[11px] font-mono ${a.pct >= 0 ? "text-mint" : "text-rose"}`}>
                {a.pct >= 0 ? "+" : ""}{a.pct}%
              </span>
              <span className="text-border">·</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
