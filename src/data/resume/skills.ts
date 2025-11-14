// 保留源文件的接口定义（必须原样保留，否则类型报错）
export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

// 你的技能数据（严格适配Skill接口）
const skills: Skill[] = [
  {
    title: "文案撰写", // 原name→title
    competency: 5, // 原level→competency
    category: ["内容创作", "文案"], // 数字→字符串数组（可多分类）
  },
  {
    title: "内容策划",
    competency: 4,
    category: ["内容创作", "策划"],
  },
  {
    title: "视觉设计（基础）",
    competency: 3,
    category: ["创意设计", "工具使用"],
  },
  {
    title: "IP形象设计",
    competency: 3,
    category: ["创意设计", "品牌"],
  },
  {
    title: "活动创意",
    competency: 4,
    category: ["内容创作", "活动策划"],
  },
  {
    title: "用户需求分析",
    competency: 4,
    category: ["用户洞察", "分析"],
  },
  {
    title: "基础数据分析",
    competency: 3,
    category: ["用户洞察", "数据工具"],
  },
  {
    title: "办公软件（Word/Excel/PPT）",
    competency: 5,
    category: ["工具掌握", "办公"],
  },
  {
    title: "新媒体工具（公众号/秀米/剪映）",
    competency: 4,
    category: ["工具掌握", "新媒体"],
  },
  {
    title: "PS/Canva",
    competency: 4,
    category: ["工具掌握", "设计"],
  },
  {
    title: "AI设计与互动网页搭建",
    competency: 3,
    category: ["工具掌握", "创意设计"],
  },
];

// 保留源文件的颜色数组（可按需调整颜色，数量≥分类数即可）
const colors: string[] = [
  '#6968b3', // 紫色（内容创作）
  '#37b1f5', // 蓝色（创意设计）
  '#40494e', // 深灰（用户洞察）
  '#515dd4', // 靛蓝（工具掌握）
  '#e47272', // 红色（策划）
  '#cc7b94', // 粉紫（文案）
  '#3896e2', // 浅蓝（分析）
  '#64cb7b', // 绿色（办公/新媒体）
];

// 保留源文件“自动提取分类+分配颜色”的逻辑（无需手动写categories）
const categories: Category[] = Array.from(new Set(skills.flatMap(({ category }) => category)))
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index], // 按分类顺序分配颜色
  }));

export { categories, skills };
