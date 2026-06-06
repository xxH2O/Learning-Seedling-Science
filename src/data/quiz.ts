export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "生产上通常以哪一种成熟作为确定采种期的标志？",
    options: ["生理成熟", "形态成熟", "生理后熟", "胚乳成熟"],
    answer: "形态成熟",
    explanation: "生产上多以形态成熟作为采种期标志，因为此时果实和种子已经表现出成熟特征，便于判断。"
  },
  {
    id: "q2",
    question: "“种源”主要指什么？",
    options: ["种子的重量", "种子的生活力", "取得种子或繁殖材料的地理来源", "种子的发芽速度"],
    answer: "取得种子或繁殖材料的地理来源",
    explanation: "种源是取得种子或其他繁殖材料的地理来源或原产地，与遗传适应性密切相关。"
  },
  {
    id: "q3",
    question: "下列哪一项属于种实调制内容？",
    options: ["脱粒", "嫁接", "起苗", "假植"],
    answer: "脱粒",
    explanation: "种实调制包括脱粒、净种、种子干燥和种粒分级。"
  },
  {
    id: "q4",
    question: "发芽势主要反映种子的什么特征？",
    options: ["种子大小", "发芽速度和整齐程度", "种子来源", "苗木高度"],
    answer: "发芽速度和整齐程度",
    explanation: "发芽势表示发芽高峰时正常发芽种子所占比例，主要反映发芽速度和整齐程度。"
  },
  {
    id: "q5",
    question: "提高苗圃土壤肥力的措施不包括哪一项？",
    options: ["土壤耕作", "苗圃施肥", "轮作", "降低种子净度"],
    answer: "降低种子净度",
    explanation: "提高苗圃土壤肥力主要依靠土壤耕作、施肥和轮作。降低种子净度与土壤肥力无关。"
  },
  {
    id: "q6",
    question: "苗木年生长过程通常不包括以下哪一阶段？",
    options: ["出苗期", "幼苗期", "速生期", "开花盛期"],
    answer: "开花盛期",
    explanation: "播种苗年生长过程通常包括出苗期、幼苗期、速生期和苗木硬化期。"
  }
];
