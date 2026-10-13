import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReActEdge | Stay Ahead of Every Threat",
  description: "Real-time threat intelligence for OT, defense, and critical infrastructure.",
  metadataBase: new URL("https://reactedge-rosy.vercel.app"),
  openGraph: {
    title: "ReActEdge | Stay Ahead of Every Threat",
    description: "Resilient Action at Edge — powering real-time threat intelligence.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
