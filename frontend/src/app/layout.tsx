import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});
export const metadata: Metadata = {
    title: "Form Builder",
    description: "A Web App to create forms",
};
import Providers from "@/components/ui/provider";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                suppressHydrationWarning
            >
                <Providers>
                    {<div suppressHydrationWarning>{children}</div>}
                </Providers>
            </body>
        </html>
    );
}
