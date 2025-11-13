import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '页面未找到',
  description: '抱歉，您访问的页面不存在',
};

export default function NotFound() {
  return (
    <div id="wrapper">
      <div id="main">
        <article className="post" id="contact">
          <header>
            <div className="title">
              <h2>页面未找到</h2>
            </div>
          </header>
          <Link href="/">返回首页</Link>
        </article>
      </div>
    </div>
  );
}
