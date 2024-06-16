import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { clsx } from "clsx";
import { readFileSync } from "node:fs";

const markdown = readFileSync("./app/page.mdx", "utf-8");

const nameMatch = /<Name>(.*?)<\/Name>/.exec(markdown);
const name = nameMatch?.[1] ?? "Curriculum Vitae";

const summaryMatch = /<Section.*?>(.*?)<\/Section>/s.exec(markdown);
const summary = summaryMatch?.[1] ?? "";

export const metadata: Metadata = {
  title: name,
  description: summary,
  openGraph: {
    title: name,
    description: summary,
    type: "website",
    url: "https://harishkumar.dev",
    images: [`/api/og?name=${name}&summary=${summary}`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className="bg-neutral-50">
        <main
          className={clsx(
            "container shadow-lg print:shadow-none relative mx-auto scroll-my-12 bg-white overflow-auto mt-0 max-w-screen-md sm:p-12 p-[10vw]"
          )}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
