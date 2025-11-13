// 技能分类
export const categories = [
  { id: 1, name: "内容创作" },
  { id: 2, name: "创意设计" },
  { id: 3, name: "用户洞察" },
  { id: 4, name: "工具掌握" }
];

// 具体技能（熟练度1-5，5为最高）
export const skills = [
  { id: 1, name: "文案撰写", level: 5, category: 1, description: "擅长科普、品牌、活动类文案，兼顾专业性与传播性" },
  { id: 2, name: "内容策划", level: 4, category: 1, description: "能独立完成从选题、框架到落地的全流程内容规划" },
  { id: 3, name: "视觉设计（基础）", level: 3, category: 2, description: "掌握PS、Canva，可完成IP形象、海报、文创产品设计；可利用AI设计并搭建互动网页" },
  { id: 4, name: "活动创意", level: 4, category: 2, description: "擅长结合用户需求设计互动性强的传播活动" },
  { id: 5, name: "用户需求分析", level: 3, category: 3, description: "通过量化数据或质性反馈提炼用户偏好，指导内容优化" },
  { id: 6, name: "基础数据分析", level: 3, category: 3, description: "使用Excel、问卷星进行数据整理与趋势分析" },
  { id: 7, name: "办公软件", level: 5, category: 4, description: "熟练使用Word、Excel、PPT（含数据可视化）" },
  { id: 8, name: "新媒体工具", level: 4, category: 4, description: "掌握公众号后台、秀米、剪映等内容生产工具" }
];
