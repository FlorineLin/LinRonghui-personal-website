// 保持源文件的接口定义不变（必须保留，否则类型报错）
export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

// 你的教育背景数据（适配接口字段）
const degrees: Degree[] = [
  {
    school: "南京大学", // 对应原数据的"institution"，字段名改为"school"
    degree: "社会学本科（辅修新传中）", // 简洁描述学位及辅修方向
    link: "https://www.nju.edu.cn", // 补充学校官网链接（必填）
    year: 2028, // 毕业年份（取原数据的"endDate"年份）
  },
];

export default degrees;
