import type { Metadata } from "next";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "林木种苗学入门学习站",
  description: "用知识卡片和自测题快速学习巩固林木种苗学基础概念。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
