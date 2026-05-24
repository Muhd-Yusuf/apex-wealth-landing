import type { Metadata } from "next";
import "./prelander.css";

export const metadata: Metadata = {
  title: "PM Carney announces new financial initiative for Canadian citizens — CBC News",
  description: "In an exclusive interview, Prime Minister Mark Carney discusses Canada's new wealth-building program available to all citizens.",
};

export default function PrelanderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="prelander-root">
      {children}
    </div>
  );
}
