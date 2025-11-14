import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import Cell from '@/components/Projects/Cell';
import data from '@/data/projects';

import PageWrapper from '../components/PageWrapper';

export const metadata: Metadata = {
  title: '核心作品与成果',
  description: "林蓉徽的内容创作、创意设计与调研作品展示，包含项目成果与实践案例。",
};

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2>
              <Link href="/projects">核心作品与成果</Link>
            </h2>
            <p>精选内容创作、创意设计、社会调研等领域的实践项目与落地成果</p>
          </div>
        </header>
        {data.map((project) => (
          <Cell data={project} key={project.title} />
        ))}
      </article>
    </PageWrapper>
  );
}
