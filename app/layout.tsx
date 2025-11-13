import React from 'react';

import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "林蓉徽的职业探索作品集",
    template: "%s | 林蓉徽的作品集",
  },
  description:
    "林蓉徽的职业探索作品集，聚焦内容创作、创意设计与社会洞察，展示多元实践与作品，探索内容、产品、创意营销、用户研究、公关传媒等相关方向。",
  keywords: [
    "林蓉徽",
    '内容创作与文案撰写',
    'AI+创意设计',
    '社会洞察与用户研究',
    '公关传媒',
    '作品集',
  ],
  authors: [{ name: "林蓉徽" }],
  creator: "林蓉徽",
  metadataBase: new URL('https://FlorineLin.github.io/LingRonghui-personal-website'),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://FlorineLin.github.io/LingRonghui-personal-website',
    siteName: "林蓉徽的职业探索作品集",
    title: "林蓉徽的职业探索作品集",
    description: '聚焦内容创作与AI+创意生产、社会洞察、用户与产品研究的作品集',
    images: [
      {
        url: '/images/me.jpg',
        width: 1200,
        height: 630,
        alt: "林蓉徽",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh_CN" className={`${sourceSans.variable} ${raleway.variable}`}>
      <body>
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
