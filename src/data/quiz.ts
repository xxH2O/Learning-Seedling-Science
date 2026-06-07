export type QuizQuestion = {
  id: string;
  topicId: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "seed-source-zoning-1",
    topicId: "seed-source-zoning",
    question: "林木种源在造林生产中的核心意义是什么？",
    options: ["决定种子的包装方式", "影响林木遗传适应性和造林成败", "只决定种子净度", "只用于区分种子颜色"],
    answer: "影响林木遗传适应性和造林成败",
    explanation: "同一树种不同种源长期适应不同生态环境，具有不同遗传特性。种源与造林地条件差异过大，会造成生长不良甚至造林失败。"
  },
  {
    id: "seed-source-zoning-2",
    topicId: "seed-source-zoning",
    question: "“良种”的完整含义应同时包括哪两类品质？",
    options: ["树高品质和树皮品质", "遗传品质和播种品质", "采收品质和运输品质", "外观品质和包装品质"],
    answer: "遗传品质和播种品质",
    explanation: "良种既要求速生、丰产、优质、抗逆等遗传品质，也要求净度、千粒重、发芽率、水分等播种品质优良。"
  },
  {
    id: "seed-source-zoning-3",
    topicId: "seed-source-zoning",
    question: "制定种子区划和合理调运用种的重要科学依据是什么？",
    options: ["种源试验结果", "苗木销售价格", "苗圃建筑面积", "木材加工方式"],
    answer: "种源试验结果",
    explanation: "种源试验通过同一立地条件下比较不同种源表现，筛选优良种源并揭示地理变异规律，可为种子区划和调运用种提供依据。"
  },
  {
    id: "seed-base-production-1",
    topicId: "seed-base-production",
    question: "下列哪一项属于林木良种基地的主要形式？",
    options: ["母树林", "木材仓库", "家具加工厂", "造纸车间"],
    answer: "母树林",
    explanation: "林木良种基地主要包括母树林、种子园和采穗圃，专门用于良种或优良繁殖材料生产。"
  },
  {
    id: "seed-base-production-2",
    topicId: "seed-base-production",
    question: "与种子园相比，母树林的典型特点是什么？",
    options: ["投产快、投资少但遗传增益较低", "遗传增益最高但永不结实", "只生产接穗不生产种子", "必须完全在温室中建设"],
    answer: "投产快、投资少但遗传增益较低",
    explanation: "母树林通常利用现有优良林分改建，获得种子快、投资较少，但遗传改良程度低于新建的种子园。"
  },
  {
    id: "seed-base-production-3",
    topicId: "seed-base-production",
    question: "提高良种基地种子产量和质量时，下列措施最合理的是哪一组？",
    options: ["修剪树体、诱导花芽、肥水管理和防治病虫", "降低净度、减少授粉、长期干旱", "只增加包装材料", "采后立即混入杂质"],
    answer: "修剪树体、诱导花芽、肥水管理和防治病虫",
    explanation: "良种基地高产优质经营应围绕树体结构、合理树形、花芽诱导、肥水管理和病虫害防治进行。"
  },
  {
    id: "seed-maturity-collection-1",
    topicId: "seed-maturity-collection",
    question: "生产上通常以哪一成熟阶段作为确定采种期的主要标志？",
    options: ["形态成熟", "种子死亡", "包装完成", "木材成熟"],
    answer: "形态成熟",
    explanation: "形态成熟时种子已有发芽能力，且果实和种子出现成熟外观特征，便于生产中观察和确定采种期。"
  },
  {
    id: "seed-maturity-collection-2",
    topicId: "seed-maturity-collection",
    question: "银杏等少数树种种实外观成熟但种胚尚未完全发育，采后需层积处理，这种现象称为？",
    options: ["生理后熟", "机械休眠", "净种", "劣变"],
    answer: "生理后熟",
    explanation: "生理后熟是形态上已成熟，但种胚尚未发育完全，采后经层积等处理后才逐渐具备正常发芽能力。"
  },
  {
    id: "seed-maturity-collection-3",
    topicId: "seed-maturity-collection",
    question: "成熟后易随风飞散的小粒带翅或带毛种子，适宜的采种策略是？",
    options: ["成熟后脱落前及时采收", "等全部腐烂后采收", "只采树皮", "长期挂树以提高净度"],
    answer: "成熟后脱落前及时采收",
    explanation: "杨、柳、榆等小粒且易飞散的种子应在成熟后、脱落前及时采收，以减少散失。"
  },
  {
    id: "seed-processing-quality-1",
    topicId: "seed-processing-quality",
    question: "种实调制的主要目的是什么？",
    options: ["获得纯净并适宜贮藏运输和播种的优质种子", "增加种子杂质", "降低种子发芽能力", "改变树种名称"],
    answer: "获得纯净并适宜贮藏运输和播种的优质种子",
    explanation: "调制通过干燥、脱粒、净种和分级等处理，提高种子纯净度与适用性。"
  },
  {
    id: "seed-processing-quality-2",
    topicId: "seed-processing-quality",
    question: "含水量较高的种实进行干燥脱粒时，一般宜采用哪种方法？",
    options: ["阴干法", "强烈火烤", "浸泡发酵一个月", "密封高温蒸煮"],
    answer: "阴干法",
    explanation: "含水量高的种实若直接强晒或高温处理易伤害种子生命力，通常宜采用阴干法。"
  },
  {
    id: "seed-processing-quality-3",
    topicId: "seed-processing-quality",
    question: "发芽势主要反映种子的哪一方面品质？",
    options: ["发芽速度和整齐程度", "种源经度", "苗圃面积", "砧木年龄"],
    answer: "发芽速度和整齐程度",
    explanation: "发芽势表示发芽过程中达到高峰时正常发芽种子的比例，主要反映发芽速度和整齐程度。"
  },
  {
    id: "seed-storage-longevity-1",
    topicId: "seed-storage-longevity",
    question: "种子劣变的本质是？",
    options: ["种子生命力在不良条件下不可逆下降", "种子被重新命名", "种子净度升高", "种子自动完成分级"],
    answer: "种子生命力在不良条件下不可逆下降",
    explanation: "劣变指种子生命力不可逆下降，会降低发芽力、生活力和播种价值。"
  },
  {
    id: "seed-storage-longevity-2",
    topicId: "seed-storage-longevity",
    question: "对于多数普通干藏种子，贮藏管理中最关键的控制因素之一是？",
    options: ["种子含水量", "标签颜色", "包装字体", "仓库门牌号"],
    answer: "种子含水量",
    explanation: "种子含水量直接影响呼吸强度、微生物活动和劣变速度，是种子寿命控制的关键因子。"
  },
  {
    id: "seed-storage-longevity-3",
    topicId: "seed-storage-longevity",
    question: "湿藏主要适用于哪类种子？",
    options: ["休眠型种子和顽拗性种子", "已经加工成木材的材料", "完全死亡的种子", "不需要保持生活力的样品"],
    answer: "休眠型种子和顽拗性种子",
    explanation: "休眠型种子可通过湿藏逐渐解除休眠，顽拗性种子不耐脱水，也需湿润条件维持生活力。"
  },
  {
    id: "seed-dormancy-germination-1",
    topicId: "seed-dormancy-germination",
    question: "种子休眠是指什么？",
    options: ["有生命力的种子在适宜条件下仍不能萌发", "所有死亡种子不能萌发", "种子已经完成包装", "苗木停止销售"],
    answer: "有生命力的种子在适宜条件下仍不能萌发",
    explanation: "休眠强调种子仍有生命力，但由于种皮、胚发育或抑制物质等原因，在适宜条件下不能萌发。"
  },
  {
    id: "seed-dormancy-germination-2",
    topicId: "seed-dormancy-germination",
    question: "低温层积催芽的主要条件组合是？",
    options: ["低温、湿润和通气", "高温、干燥和密闭", "强光、缺水和无氧", "高盐、干热和遮光"],
    answer: "低温、湿润和通气",
    explanation: "低温层积催芽通常将种子与湿沙、泥炭等材料混合或分层放置，控制低温、湿度和通气以解除休眠。"
  },
  {
    id: "seed-dormancy-germination-3",
    topicId: "seed-dormancy-germination",
    question: "低温层积催芽与湿藏的主要区别是什么？",
    options: ["操作相似但目的不同", "完全没有共同点", "湿藏只用于木材", "层积只用于包装"],
    answer: "操作相似但目的不同",
    explanation: "两者常采用湿润、低温和通气条件，但催芽目标是解除休眠并促进萌发，湿藏目标是保持生活力。"
  },
  {
    id: "nursery-establishment-1",
    topicId: "nursery-establishment",
    question: "按使用期限划分，苗圃可分为哪两类？",
    options: ["长期苗圃和临时苗圃", "红色苗圃和蓝色苗圃", "木材苗圃和家具苗圃", "干藏苗圃和湿藏苗圃"],
    answer: "长期苗圃和临时苗圃",
    explanation: "苗圃按使用期限通常分为长期苗圃和临时苗圃，按面积和任务还可进一步分类。"
  },
  {
    id: "nursery-establishment-2",
    topicId: "nursery-establishment",
    question: "苗圃地选择时，下列哪项最符合土壤条件要求？",
    options: ["通气保水适中的肥沃壤土", "长期积水的重盐碱地", "完全无水源的裸岩地", "病虫害严重且无法治理的地块"],
    answer: "通气保水适中的肥沃壤土",
    explanation: "壤土通气性和保水性较协调，若肥力较好，有利于苗木根系和地上部分生长。"
  },
  {
    id: "nursery-establishment-3",
    topicId: "nursery-establishment",
    question: "苗圃地一般应避免选择在哪类区域？",
    options: ["低洼易涝或小流域下游洪涝风险区", "交通便利且水源稳定区域", "地势平坦区域", "劳动力较充足区域"],
    answer: "低洼易涝或小流域下游洪涝风险区",
    explanation: "低洼或洪涝风险大的区域容易造成苗木水害和生产损失，不利于稳定育苗。"
  },
  {
    id: "nursery-soil-fertility-1",
    topicId: "nursery-soil-fertility",
    question: "苗圃土壤耕作的主要作用不包括哪一项？",
    options: ["提高家具销售量", "疏松加深耕作层", "混拌肥料", "改善幼芽出土条件"],
    answer: "提高家具销售量",
    explanation: "土壤耕作可改善土壤理化性质、混拌肥料、减少蒸发并创造播种出苗条件，与家具销售无关。"
  },
  {
    id: "nursery-soil-fertility-2",
    topicId: "nursery-soil-fertility",
    question: "苗圃长期不施肥可能导致的主要后果是？",
    options: ["地力衰退和苗木质量下降", "种子区自动扩大", "砧木亲和力必然提高", "所有苗木立即进入休眠"],
    answer: "地力衰退和苗木质量下降",
    explanation: "苗木消耗养分多、培育周期长且出圃带走养分，不施肥会造成土壤肥力下降并影响苗木质量。"
  },
  {
    id: "nursery-soil-fertility-3",
    topicId: "nursery-soil-fertility",
    question: "微生物肥料促进苗木生长的合理机制是？",
    options: ["有益微生物与根系共生或伴生，促进养分吸收", "直接替代所有水分", "使土壤完全失去通气性", "把苗木转化为种子"],
    answer: "有益微生物与根系共生或伴生，促进养分吸收",
    explanation: "菌根、根瘤菌等有益微生物可扩大吸收范围或固定氮素，提高植物营养吸收和健康水平。"
  },
  {
    id: "seedling-nutrition-deficiency-1",
    topicId: "seedling-nutrition-deficiency",
    question: "诊断苗木缺素症时，哪种做法最能提高判断可靠性？",
    options: ["外部症状观察与速效元素反馈结合", "只看苗木价格", "只听销售人员描述", "只检查包装袋颜色"],
    answer: "外部症状观察与速效元素反馈结合",
    explanation: "原始诊断方法中，外部形态异常分析与施用速效营养元素观察反馈结合，通常可得出较可靠诊断。"
  },
  {
    id: "seedling-nutrition-deficiency-2",
    topicId: "seedling-nutrition-deficiency",
    question: "苗木缺素诊断时必须与哪类现象加以区别？",
    options: ["病虫感染和遗传因素差异", "苗圃名称变化", "运输车辆型号", "题库数量变化"],
    answer: "病虫感染和遗传因素差异",
    explanation: "缺素症状可能与病虫害或遗传差异造成的异常相似，诊断时必须排除这些干扰。"
  },
  {
    id: "seedling-nutrition-deficiency-3",
    topicId: "seedling-nutrition-deficiency",
    question: "通过分析异常苗木体内化学元素含量并与正常苗木比较，主要用于判断什么？",
    options: ["苗木是否存在营养元素异常", "苗木是否已经变成木材", "种子包装是否合格", "采穗圃面积是否扩大"],
    answer: "苗木是否存在营养元素异常",
    explanation: "苗体化学元素分析可直接反映元素含量差异，与正常苗木比较有助于确认缺素或营养异常。"
  },
  {
    id: "seedling-growth-management-1",
    topicId: "seedling-growth-management",
    question: "播种苗年生长过程通常包括哪一组阶段？",
    options: ["出苗期、幼苗期、速生期、苗木硬化期", "开花期、结果期、采伐期、加工期", "包装期、运输期、销售期、退货期", "休眠期、家具期、木材期、纸浆期"],
    answer: "出苗期、幼苗期、速生期、苗木硬化期",
    explanation: "播种苗年生长节律通常分为出苗期、幼苗期、速生期和苗木硬化期，各阶段管理重点不同。"
  },
  {
    id: "seedling-growth-management-2",
    topicId: "seedling-growth-management",
    question: "苗木速生期的水肥管理重点是？",
    options: ["水肥需求最大，追肥和灌溉以前期为主", "完全停止供水", "立即断根并长期遮光", "只进行包装"],
    answer: "水肥需求最大，追肥和灌溉以前期为主",
    explanation: "速生期苗木生长量大，对水分和养分需求最高，应把握前期追肥和灌溉以促进生长。"
  },
  {
    id: "seedling-growth-management-3",
    topicId: "seedling-growth-management",
    question: "苗木硬化期的管理目标是什么？",
    options: ["促进木质化并提高抗逆性", "继续无限制促长", "增加杂草竞争", "降低根系发育"],
    answer: "促进木质化并提高抗逆性",
    explanation: "硬化期应停止促进旺长的措施，促使苗木组织成熟和木质化，提高抗寒、抗旱等能力。"
  },
  {
    id: "vegetative-grafting-1",
    topicId: "vegetative-grafting",
    question: "营养繁殖的主要优势是什么？",
    options: ["保持母本优良性状，后代性状较整齐", "必然降低成活率", "只能用于死亡枝条", "完全不需要管理"],
    answer: "保持母本优良性状，后代性状较整齐",
    explanation: "营养繁殖属于无性繁殖，可保持母本优良性状，后代性状整齐一致。"
  },
  {
    id: "vegetative-grafting-2",
    topicId: "vegetative-grafting",
    question: "提高嫁接成活率时，砧木与接穗选择首先应强调什么？",
    options: ["亲缘关系近、亲和力强", "颜色必须完全相同", "采自任意死亡枝条", "越干燥越好"],
    answer: "亲缘关系近、亲和力强",
    explanation: "同种或同属等亲缘关系较近的砧穗组合通常亲和力较强，有利于接口愈合和嫁接成活。"
  },
  {
    id: "vegetative-grafting-3",
    topicId: "vegetative-grafting",
    question: "嫁接操作中“准”的核心含义是？",
    options: ["形成层对准", "包装日期准确", "苗圃面积准确", "题号准确"],
    answer: "形成层对准",
    explanation: "嫁接愈合依赖形成层活动，操作中切口平滑、新鲜、形成层对准、快速和绑扎严密都很重要，其中形成层对准是核心。"
  },
  {
    id: "container-industrial-quality-1",
    topicId: "container-industrial-quality",
    question: "工厂化育苗的基本特征是？",
    options: ["人工控制优良环境下的规模化、标准化、机械化生产", "完全依赖野外自然散播", "只生产家具", "不控制任何环境条件"],
    answer: "人工控制优良环境下的规模化、标准化、机械化生产",
    explanation: "工厂化育苗强调人工控制环境和现代技术应用，实现规模化、标准化、机械化苗木生产。"
  },
  {
    id: "container-industrial-quality-2",
    topicId: "container-industrial-quality",
    question: "根生长潜力 RGP 主要用于评价苗木的哪一类指标？",
    options: ["苗木活力", "种子净度", "果实颜色", "采种工具重量"],
    answer: "苗木活力",
    explanation: "RGP 反映苗木移栽后根系再生能力，是评价苗木活力和造林适应表现的重要指标。"
  },
  {
    id: "container-industrial-quality-3",
    topicId: "container-industrial-quality",
    question: "茎根比表示什么？",
    options: ["地上部分干重与地下部分干重之比", "种子重量与包装重量之比", "嫁接口长度与接穗长度之比", "苗圃面积与道路面积之比"],
    answer: "地上部分干重与地下部分干重之比",
    explanation: "茎根比用于描述苗木地上部分与地下根系的生物量分配关系，是苗木质量评价中的重要参考指标。"
  }
];
