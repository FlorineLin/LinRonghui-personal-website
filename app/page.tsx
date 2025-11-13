import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  description:
    "林蓉徽的职业探索作品集，聚焦内容创作、文案撰写、创意设计与社会洞察等核心能力，展示多元实践与作品，寻求内容、创意、产品、用户研究、公关传媒等相关职业发展机会。",
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">关于林蓉徽的个人网站</Link>
            </h2>
            <p>
             一个记录内容创作、创意实践与多元尝试的平台，展现职业探索期的思考与沉淀。
              Javascript.
            </p>
          </div>
        </header>
        <p>
          {' '}
          欢迎来到我的职业探索作品集。欢迎浏览我的职业探索作品集。您可以了解 <Link href="/about">我的背景与核心能力</Link>，查看我的 <Link href="/resume">经历与参与项目</Link>、<Link href="/projects">核心作品与成果</Link>，或通过 <Link href="/contact">联系我获取简历，进一步沟通岗位适配性</Link>。
        </p>
        <p>
          {' '}
          我以内容创作、文案撰写、创意设计、社会洞察为核心能力底座，正多元探索内容、创意营销、产品、用户研究、公关传媒等相关方向，不局限于单一领域，期待找到能发挥沉淀型思考优势的契合机会，也欢迎前辈、HR给予宝贵建议。
        </p>
      </article>
    </PageWrapper>
  );
}
