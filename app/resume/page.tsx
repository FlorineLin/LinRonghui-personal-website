import React from 'react';

import type { Metadata } from 'next';

import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import Skills from '@/components/Resume/Skills';

import degrees from '@/data/resume/degrees';
import work from '@/data/resume/work';
import { categories, skills } from '@/data/resume/skills';

export const metadata: Metadata = {
  title: '实践经历与核心能力',
  description:
    "林蓉徽的实践经历与核心能力展示，包括教育背景、项目实践与技能特长。",
};

const sections = [
  { name: '教育背景', id: 'education' },
  { name: '实践经历', id: 'experience' },
  { name: '核心能力', id: 'skills' },
];

export default function ResumePage() {
  return (
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>实践经历与核心能力</h2>
          <div className="link-container">
            {sections.map((section) => (
              <h4 key={section.id}>
                <a href={`#${section.id}`}>{section.name}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>

      <section id="education" className="education">
        <div className="link-to" />
        <Education data={degrees} />
      </section>

      <section id="experience" className="experience">
        <div className="link-to" />
        <Experience data={work} />
      </section>

      <section id="skills" className="skills">
        <div className="link-to" />
        <Skills skills={skills} categories={categories} />
      </section>

    </article>
  );
}
