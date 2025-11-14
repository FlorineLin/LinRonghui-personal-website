// 保留源文件的接口定义（必须原样保留，否则类型报错）
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

// 你的实践经历数据（严格适配Position接口）
const work: Position[] = [
  {
    name: "南京大学心理健康教育与研究中心", // 原company→name
    position: "情绪彩虹糖栏目（心理健康科普栏目）成员", // 职位字段不变
    url: "https://njuxlzx.nju.edu.cn/main.htm", // 补充公司/机构官网链接
    startDate: "2024-09", // 补全日，格式统一为“年-月-日”
    summary: "负责心理科普内容创作，以“故事化+专业性”为核心，主导或参与制作《一生要出片的中国人：我们真的被相机“绑架”了吗？》等推文10余篇，累计阅读量达1.2W+；策划并参与暖冬奶茶活动，方案在新生学院、文学院等学院均落地执行，参与人数超200。", // 原description数组→字符串
    highlights: ["爆款内容创作", "活动策划执行", "数据驱动优化"] // 亮点数组不变
  },
  {
    name: "宝洁（P&G）校园大使团队", // 原company→name
    position: "品宣部核心成员", // 职位字段不变
    url: "https://www.pg.com.cn", // 补充宝洁中国官网链接
    startDate: "2025-06-27", // 补全日，格式统一为“年-月-日”
    summary: "主导负责PGC团队IP“鲸小宝”形象设计与周边开发，落地钥匙扣、毛毡袋等文创产品；撰写品牌年轻化传播文案，其中主导美编的团队启动推文单篇阅读量破千，协助提升品牌在学生群体中的认知度；参与推动宝洁&南大社群搭建，实现秋招活动期内社群人数从0到1000+突破，秋招线下宣讲会到场人数增长为往年3倍。", // 原description数组→字符串
    highlights: ["IP设计落地", "社群与用户洞察", "主题活动策划"] // 亮点数组不变
  }
];

export default work;
