const regions = [
  { id: "beijing", name: "北京", short: "京" },
  { id: "hebei_south", name: "河北南网", short: "冀南" },
  { id: "mengxi", name: "蒙西", short: "蒙西" },
  { id: "guangdong", name: "广东", short: "粤" },
  { id: "yunnan", name: "云南", short: "滇" },
  { id: "liaoning", name: "辽宁", short: "辽" },
  { id: "shaanxi", name: "陕西", short: "陕" }
];

const businesses = [
  { id: "retail", name: "售电业务" },
  { id: "green", name: "绿证绿电" },
  { id: "cross", name: "跨省跨区" }
];

const plans = [
  {
    id: "bj-fixed",
    region: "beijing",
    business: "retail",
    scale: ["small", "medium"],
    name: "北京固定价格代理套餐",
    mode: "固定价格",
    supplier: "平台认证售电商",
    tag: "适合预算锁定",
    price: "0.40 元/千瓦时",
    desc: "以 0.40 元/千瓦时固定价格为核心，便于企业做年度或季度用能预算。",
    features: ["合同周期：月度、季度、年度可选", "适合用电曲线稳定的工商业企业", "偏差责任和结算口径需按合同确认"]
  },
  {
    id: "bj-link",
    region: "beijing",
    business: "retail",
    scale: ["medium", "large"],
    name: "北京市场联动套餐",
    mode: "市场联动",
    supplier: "售电公司报价",
    tag: "跟随市场",
    price: "市场均价 + 0.05 元/千瓦时",
    desc: "按市场交易价格联动结算，适合能接受波动并希望参与市场化价格机会的客户。",
    features: ["可按月跟踪市场行情", "市场均价加 0.05 元/千瓦时", "适合中大型用电客户"]
  },
  {
    id: "bj-deviation",
    region: "beijing",
    business: "retail",
    scale: ["medium", "large"],
    name: "北京比例分成套餐",
    mode: "比例分成",
    supplier: "平台撮合",
    tag: "风险共担",
    price: "双方各承担 50%",
    desc: "针对希望采用比例分成方式的客户，提前约定双方各承担 50% 的结算安排。",
    features: ["双方各承担 50%", "适合负荷波动企业", "可叠加绿电咨询"]
  },
  {
    id: "hbn-fixed",
    region: "hebei_south",
    business: "retail",
    scale: ["small", "medium"],
    name: "河北南网年度固定价套餐",
    mode: "年度固定",
    supplier: "河北区域售电商",
    tag: "年度方案",
    price: "0.72 元/千瓦时起",
    desc: "适合希望提前锁定年度购电成本、减少价格波动影响的企业。",
    features: ["年度合同条款展示", "支持园区和单体企业需求", "可配置分月用电计划"]
  },
  {
    id: "hbn-month",
    region: "hebei_south",
    business: "retail",
    scale: ["medium", "large"],
    name: "河北南网月度联动套餐",
    mode: "月度联动",
    supplier: "售电商月度报价",
    tag: "灵活跟价",
    price: "全网均价 + 0 元服务费",
    desc: "以河北南网月度全网均价为基础展示，服务费暂按 0 元设计，适合希望保持价格透明和灵活度的企业。",
    features: ["月度计划动态调整", "服务费展示为 0 元", "适合负荷季节性变化明显客户"]
  },
  {
    id: "hbn-time",
    region: "hebei_south",
    business: "retail",
    scale: ["large"],
    name: "河北南网分时优化套餐",
    mode: "峰谷优化",
    supplier: "平台能源顾问",
    tag: "负荷优化",
    price: "0.73 元/千瓦时起",
    desc: "围绕峰谷用电结构进行方案建议，帮助企业识别可调整负荷和购电策略。",
    features: ["需要提供典型日负荷曲线", "适合连续生产企业", "可接入后续用电分析模块"]
  },
  {
    id: "mx-long",
    region: "mengxi",
    business: "retail",
    scale: ["medium", "large"],
    name: "蒙西长协直购套餐",
    mode: "中长期合约",
    supplier: "蒙西售电商",
    tag: "长协资源",
    price: "0.46 元/千瓦时起",
    desc: "面向用电规模较大的客户，重点展示中长期资源匹配和合同周期选择。",
    features: ["适合高耗能和园区客户", "支持年度及多月交易意向", "需确认市场准入和交易资格"]
  },
  {
    id: "mx-green-power",
    region: "mengxi",
    business: "retail",
    scale: ["medium", "large"],
    name: "蒙西绿电消纳套餐",
    mode: "绿电组合",
    supplier: "新能源资源方",
    tag: "绿电资源",
    price: "0.49 元/千瓦时起",
    desc: "结合蒙西新能源资源特点，面向有绿电消费诉求的企业做意向收集。",
    features: ["可叠加绿证材料服务", "适合出口和低碳供应链客户", "按项目资源和交易规则确认"]
  },
  {
    id: "mx-deviation",
    region: "mengxi",
    business: "retail",
    scale: ["small", "medium", "large"],
    name: "蒙西偏差风险托管套餐",
    mode: "风险托管",
    supplier: "售电服务商",
    tag: "偏差管理",
    price: "0.47 元/千瓦时起",
    desc: "帮助客户提前识别申报、结算和偏差风险，并由服务商提供管理建议。",
    features: ["适合负荷波动客户", "支持月度用电计划整理", "可输出风险提示清单"]
  },
  {
    id: "gd-fixed",
    region: "guangdong",
    business: "retail",
    scale: ["small", "medium"],
    name: "广东固定降费套餐",
    mode: "固定让利",
    supplier: "广东售电商",
    tag: "清晰报价",
    price: "0.78 元/千瓦时起",
    desc: "以清晰的固定让利或服务费结构展示，适合希望快速比较方案的客户。",
    features: ["适合中小工商业客户", "支持年度和月度对比", "报价需结合客户负荷和合同条款"]
  },
  {
    id: "gd-bid",
    region: "guangdong",
    business: "retail",
    scale: ["medium", "large"],
    name: "广东月度竞价联动套餐",
    mode: "竞价联动",
    supplier: "多服务商询价",
    tag: "市场机会",
    price: "月度均价 + 0.015 元/千瓦时服务费",
    desc: "围绕广东市场月度交易节奏，帮助企业提交需求并获取多方方案。",
    features: ["支持售电商比价", "适合有用电管理能力客户", "可对接后续报价单模块"]
  },
  {
    id: "gd-peak",
    region: "guangdong",
    business: "retail",
    scale: ["large"],
    name: "广东峰谷优化套餐",
    mode: "分时策略",
    supplier: "能源管理服务商",
    tag: "用能管理",
    price: "0.80 元/千瓦时起",
    desc: "结合峰谷价差和生产排班，识别可优化的用电结构和潜在节费空间。",
    features: ["适合制造业和冷链客户", "需要月度和典型日用电数据", "可拓展负荷画像分析"]
  },
  {
    id: "yn-fixed",
    region: "yunnan",
    business: "retail",
    scale: ["small", "medium"],
    name: "云南年度固定价套餐",
    mode: "年度固定",
    supplier: "云南区域售电商",
    tag: "水电资源",
    price: "0.50 元/千瓦时起",
    desc: "结合云南清洁能源资源特点，面向希望提前锁定年度用电预算的企业客户。",
    features: ["适合园区和稳定负荷企业", "支持年度和季度方案沟通", "最终报价需结合电压等级和用电曲线"]
  },
  {
    id: "yn-link",
    region: "yunnan",
    business: "retail",
    scale: ["medium", "large"],
    name: "云南市场联动套餐",
    mode: "市场联动",
    supplier: "售电商月度报价",
    tag: "灵活跟价",
    price: "市场均价 + 0.01 元/千瓦时服务费",
    desc: "按云南市场价格变化进行联动展示，适合希望保留市场价格机会的客户。",
    features: ["支持月度询价和方案调整", "适合中大型工商业用户", "可叠加绿电材料服务"]
  },
  {
    id: "yn-green",
    region: "yunnan",
    business: "retail",
    scale: ["medium", "large"],
    name: "云南绿电组合套餐",
    mode: "绿电组合",
    supplier: "清洁能源资源方",
    tag: "绿电资源",
    price: "0.52 元/千瓦时起",
    desc: "面向有绿色用能和供应链披露需求的企业，优先收集绿电采购和售电组合意向。",
    features: ["适合出口制造和低碳园区", "可关联绿证采购需求", "按资源情况确认交付口径"]
  },
  {
    id: "ln-fixed",
    region: "liaoning",
    business: "retail",
    scale: ["small", "medium"],
    name: "辽宁固定价格代理套餐",
    mode: "固定价格",
    supplier: "辽宁区域售电商",
    tag: "预算锁定",
    price: "0.63 元/千瓦时起",
    desc: "适合希望降低月度价格波动、提前明确预算区间的工商业客户。",
    features: ["支持年度和多月合同意向", "适合稳定生产负荷企业", "偏差和结算口径需合同确认"]
  },
  {
    id: "ln-link",
    region: "liaoning",
    business: "retail",
    scale: ["medium", "large"],
    name: "辽宁月度联动套餐",
    mode: "月度联动",
    supplier: "售电公司报价",
    tag: "市场联动",
    price: "月度均价 + 0.012 元/千瓦时服务费",
    desc: "围绕辽宁月度交易节奏进行方案展示，适合愿意跟随市场价格变化的客户。",
    features: ["月度更新价格策略", "支持多家服务商询价", "适合负荷变化较大的客户"]
  },
  {
    id: "ln-peak",
    region: "liaoning",
    business: "retail",
    scale: ["large"],
    name: "辽宁分时优化套餐",
    mode: "峰谷优化",
    supplier: "能源管理服务商",
    tag: "负荷优化",
    price: "0.65 元/千瓦时起",
    desc: "结合峰谷时段和生产排班，帮助客户识别分时用电优化空间。",
    features: ["适合装备制造和连续生产企业", "需要典型日用电数据", "可拓展用能诊断报告"]
  },
  {
    id: "sx-fixed",
    region: "shaanxi",
    business: "retail",
    scale: ["small", "medium"],
    name: "陕西年度固定价套餐",
    mode: "年度固定",
    supplier: "陕西区域售电商",
    tag: "年度方案",
    price: "0.58 元/千瓦时起",
    desc: "面向希望锁定年度购电成本的企业，提供固定价意向方案展示。",
    features: ["适合园区和制造业客户", "支持年度用电计划整理", "最终按合同和交易规则确认"]
  },
  {
    id: "sx-link",
    region: "shaanxi",
    business: "retail",
    scale: ["medium", "large"],
    name: "陕西市场联动套餐",
    mode: "市场联动",
    supplier: "售电商月度报价",
    tag: "跟随市场",
    price: "市场均价 + 0.012 元/千瓦时服务费",
    desc: "适合中大型用户按月关注市场价格变化，并通过服务商获取交易建议。",
    features: ["支持月度报价对比", "服务费与市场价格分开展示", "适合用电规模较大客户"]
  },
  {
    id: "sx-deviation",
    region: "shaanxi",
    business: "retail",
    scale: ["medium", "large"],
    name: "陕西偏差共担套餐",
    mode: "偏差共担",
    supplier: "平台撮合",
    tag: "风险共担",
    price: "0.60 元/千瓦时起",
    desc: "针对用电预测不稳定的客户，提前约定偏差处理和风险分担方式。",
    features: ["支持用电计划梳理", "适合负荷波动企业", "可转入后续顾问跟进"]
  },
  {
    id: "green-dual-non-2025",
    region: "all",
    business: "green",
    scale: ["small", "medium", "large"],
    name: "双非绿证（2025）",
    mode: "绿证交易",
    supplier: "平台绿证服务团队",
    tag: "2025 年份",
    desc: "适合需要 2025 年份绿色电力消费材料的企业，作为 ESG、供应链披露或客户验厂的需求入口。",
    features: ["按张数和使用场景确认需求", "支持材料整理和后续核销协助", "最终资源以可匹配库存为准"]
  },
  {
    id: "green-dual-non-2026",
    region: "all",
    business: "green",
    scale: ["small", "medium", "large"],
    name: "双非绿证（2026）",
    mode: "绿证交易",
    supplier: "平台绿证服务团队",
    tag: "2026 年份",
    desc: "面向提前规划 2026 年绿色电力消费声明和年度 ESG 披露的企业，便于锁定预算和采购计划。",
    features: ["适合年度预算提前锁定", "支持按项目类型和年份询价", "后续可对接批量采购方案"]
  },
  {
    id: "green-channel",
    region: "all",
    business: "green",
    scale: ["small", "medium", "large"],
    name: "通道绿证",
    mode: "绿证交易",
    supplier: "绿证资源方",
    tag: "通道资源",
    desc: "以通道资源匹配为主，适合对价格敏感、希望快速获取绿证报价的客户线索收集。",
    features: ["适合批量询价和快速沟通", "按资源可得性确认交付周期", "平台先收需求再匹配服务商"]
  },
  {
    id: "green-distributed-pv",
    region: "all",
    business: "green",
    scale: ["small", "medium", "large"],
    name: "分布式光伏绿证",
    mode: "绿证交易",
    supplier: "分布式光伏资源方",
    tag: "光伏资源",
    desc: "面向有分布式光伏绿证采购偏好的企业，适合低碳宣传、园区用能和供应链材料补充。",
    features: ["突出分布式光伏来源", "适合中小批量采购意向", "最终以资源方确认为准"]
  },
  {
    id: "green-subsidized",
    region: "all",
    business: "green",
    scale: ["small", "medium", "large"],
    name: "补贴绿证",
    mode: "绿证交易",
    supplier: "平台绿证服务团队",
    tag: "补贴资源",
    desc: "面向关注补贴属性及综合采购成本的企业，先确认项目、年份和资源可得性后匹配方案。",
    features: ["按项目和资源可得性询价", "适合批量采购及年度规划", "最终交付以交易规则和资源确认结果为准"]
  },
];

let selectedRegion = "beijing";
let selectedBusiness = "retail";
let activePlanId = null;
const OPERATOR_ACCESS_CODE = "admin2026";
const OPERATOR_ACCESS_KEY = "sales-platform-operator-access";

const leads = [
  { company: "北京某精密制造公司", region: "北京", business: "售电业务", volume: "50-300 万度", status: "待分配" },
  { company: "广东某电子园区", region: "广东", business: "绿证绿电", volume: "300 万度以上", status: "已联系" },
  { company: "蒙西某材料企业", region: "蒙西", business: "跨省跨区", volume: "300 万度以上", status: "待审核" }
];

const marketDemands = [
  {
    title: "广东电子制造企业年度购电需求",
    business: "售电业务",
    region: "广东",
    volume: "月用电量 300 万度以上",
    note: "希望比较固定让利和月度竞价联动方案。",
    time: "刚刚"
  },
  {
    title: "河北南网企业月度联动咨询",
    business: "售电业务",
    region: "河北南网",
    volume: "月用电量 50-300 万度",
    note: "关注全网均价 + 0 元服务费和偏差考核承担方式。",
    time: "18 分钟前"
  },
  {
    title: "出口型工厂绿证采购需求",
    business: "绿证绿电",
    region: "全国统一",
    volume: "预计采购 5,000 张",
    note: "需要双非绿证和材料整理，用于供应链披露。",
    time: "1 小时前"
  },
  {
    title: "园区跨省跨区资源咨询",
    business: "跨省跨区",
    region: "蒙西",
    volume: "集团多厂区合计用电",
    note: "希望评估绿电消纳和跨区资源匹配路径。",
    time: "今天"
  }
];

const serviceProviders = [
  {
    name: "XX新能源综合能源服务团队",
    type: "平台运营",
    areas: ["北京", "河北南网", "蒙西", "广东"],
    tags: ["央企背景", "绿电资源", "方案顾问"],
    rating: "4.9",
    customers: "500+"
  },
  {
    name: "河北区域售电服务商",
    type: "售电公司",
    areas: ["河北南网"],
    tags: ["中长期交易", "0元服务费", "偏差管理"],
    rating: "4.8",
    customers: "120+"
  },
  {
    name: "全国绿证服务团队",
    type: "绿证服务",
    areas: ["全国统一"],
    tags: ["双非绿证", "分布式光伏", "材料整理"],
    rating: "4.9",
    customers: "300+"
  },
  {
    name: "工业园区能效顾问",
    type: "增值服务",
    areas: ["广东", "辽宁", "陕西"],
    tags: ["能耗分析", "峰谷优化", "用电诊断"],
    rating: "4.7",
    customers: "80+"
  }
];

const regionContacts = {
  beijing: { title: "北京负责人", name: "张三", phone: "13800000001", wechat: "zhangsan-energy" },
  hebei_south: { title: "河北南网负责人", name: "李四", phone: "13800000002", wechat: "lisi-power" },
  mengxi: { title: "蒙西负责人", name: "王五", phone: "13800000003", wechat: "wangwu-mx" },
  guangdong: { title: "广东负责人", name: "赵六", phone: "13800000004", wechat: "zhaoliu-gd" },
  yunnan: { title: "云南负责人", name: "xxx", phone: "xxx", wechat: "xxx" },
  liaoning: { title: "辽宁负责人", name: "xxx", phone: "xxx", wechat: "xxx" },
  shaanxi: { title: "陕西负责人", name: "xxx", phone: "xxx", wechat: "xxx" }
};

const greenContact = {
  title: "绿证负责人",
  name: "xxx",
  phone: "xxx",
  wechat: "xxx"
};

const regionalPriceReferences = {
  beijing: {
    green: "0.40 元/千瓦时",
    greenPrice: 0.4,
    conventional: "0.38 元/千瓦时",
    conventionalPrice: 0.38,
    marketProxy: "0.3845 元/千瓦时",
    marketProxyPrice: 0.3845,
    marketProxyNote: "2026 年 6 月国网北京市电力公司公布的代理购电价格；不含上网环节线损、输配电价、系统运行费及政府性基金附加。",
    proxyAdder: 0
  },
  hebei_south: { green: "资源询价", conventional: "0.72 元/千瓦时起", marketProxy: "全网均价 + 0 元服务费", conventionalPrice: 0.72, proxyAdder: 0 },
  mengxi: { green: "资源询价", conventional: "0.46 元/千瓦时起", marketProxy: "市场均价 + 服务费询价", conventionalPrice: 0.46, proxyAdder: 0 },
  guangdong: { green: "资源询价", conventional: "0.78 元/千瓦时起", marketProxy: "月度均价 + 0.015 元/千瓦时", conventionalPrice: 0.78, proxyAdder: 0.015 },
  yunnan: { green: "资源询价", conventional: "0.50 元/千瓦时起", marketProxy: "市场均价 + 0.01 元/千瓦时", conventionalPrice: 0.5, proxyAdder: 0.01 },
  liaoning: { green: "资源询价", conventional: "0.63 元/千瓦时起", marketProxy: "月度均价 + 0.012 元/千瓦时", conventionalPrice: 0.63, proxyAdder: 0.012 },
  shaanxi: { green: "资源询价", conventional: "0.58 元/千瓦时起", marketProxy: "市场均价 + 0.012 元/千瓦时", conventionalPrice: 0.58, proxyAdder: 0.012 }
};

const crossProvinceRecords = [
  {
    type: "已成交电能量价",
    path: "安徽绿电经云霄直流外送",
    price: "339.0 元/兆瓦时",
    note: "2026 年 6 月首笔云霄直流输电权交易，成交绿电 534 万千瓦时。"
  },
  {
    type: "通道输电价",
    path: "云南送广东",
    price: "75.5 元/兆瓦时",
    note: "含线损，方案披露线损率为 6.57%。"
  },
  {
    type: "通道输电价",
    path: "贵州送广东",
    price: "75.5 元/兆瓦时",
    note: "含线损，方案披露线损率为 7.05%。"
  },
  {
    type: "通道输电价",
    path: "云南送广西",
    price: "53.8 元/兆瓦时",
    note: "含线损，方案披露线损率为 2.98%。"
  },
  {
    type: "通道输电价",
    path: "广西送广东",
    price: "21.7 元/兆瓦时",
    note: "含线损，适用于南方区域跨省点对点交易方案。"
  }
];

function getRegionName(id) {
  if (id === "all") return "全国统一";
  return regions.find((region) => region.id === id)?.name || id;
}

function getBusinessName(id) {
  return businesses.find((business) => business.id === id)?.name || id;
}

function getPlanRegionLabel(plan) {
  if (plan.business === "green") return "全国统一价";
  return getRegionName(plan.region);
}

function renderTabs(containerId, items, selectedId, onClick) {
  const container = document.getElementById(containerId);
  container.innerHTML = items
    .map(
      (item) => `
        <button type="button" class="${item.id === selectedId ? "is-active" : ""}" data-id="${item.id}">
          ${item.name}
        </button>
      `
    )
    .join("");
  container.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => onClick(button.dataset.id));
  });
}

function setSegmentedDisabled(containerId, disabled) {
  const container = document.getElementById(containerId);
  container.classList.toggle("is-disabled", disabled);
  container.querySelectorAll("button").forEach((button) => {
    button.disabled = disabled;
  });
}

function populateSelect(select, items, selectedId) {
  select.innerHTML = items
    .map((item) => `<option value="${item.id}" ${item.id === selectedId ? "selected" : ""}>${item.name}</option>`)
    .join("");
}

function planMatches(plan) {
  const regionMatch = plan.region === selectedRegion || plan.region === "all";
  const businessMatch = plan.business === selectedBusiness;
  return regionMatch && businessMatch;
}

function tagClass(plan) {
  if (plan.business === "green") return "blue";
  return "";
}

function getPlanBadge(plan) {
  if (plan.business === "green") return "绿证";
  if (plan.business === "cross") return "撮合";
  if (plan.id === "hbn-month" || plan.id === "gd-bid" || plan.id === "yn-green") return "热门";
  if (plan.name.includes("绿电") || plan.tag.includes("绿电")) return "绿电";
  if (plan.mode.includes("年度") || plan.mode.includes("固定")) return "稳定";
  return "推荐";
}

function badgeClass(plan) {
  const badge = getPlanBadge(plan);
  if (badge === "热门") return "red";
  if (badge === "绿电" || badge === "绿证") return "green";
  return "blue";
}

function getServiceTerm(plan) {
  if (plan.mode.includes("月度")) return "月度签约";
  if (plan.mode.includes("年度")) return "年度签约";
  if (plan.mode.includes("中长期")) return "年度或多月签约";
  if (plan.business === "green") return "按采购批次确认";
  return "按客户需求和合同约定确认";
}

function getApplicableCustomers(plan) {
  if (plan.business === "green") return "出口型企业、园区、集团客户、需要 ESG 或供应链披露的企业";
  if (plan.business === "cross") return "集团客户、园区客户、大型工商业用户";
  if (plan.scale.includes("large")) return "月用电量 300 万度以上或负荷波动较大的企业";
  if (plan.scale.includes("medium")) return "月用电量 50-300 万度的工商业企业";
  return "月用电量 10-50 万度、希望快速比价的工商业客户";
}

function getRiskNotice(plan) {
  if (plan.business === "green") return "绿证资源、年份、项目类型和核销材料以实际库存及交易规则为准。";
  if (plan.business === "cross") return "跨省跨区交易需确认企业准入、交易路径和资源可得性，前端展示不构成成交承诺。";
  return "展示价格为意向报价，最终价格、偏差考核和结算方式以交易中心规则及正式合同为准。";
}

function enhancePlanDetails(plan, details) {
  return [
    ...details,
    ["适用客户", getApplicableCustomers(plan)],
    ["服务商信息", `${plan.supplier}，当前为平台展示口径，正式合作前需完成资质和服务范围确认。`],
    ["服务亮点", plan.features.join("；")],
    ["风险提示", getRiskNotice(plan)],
    ["下一步对接", plan.business === "green" ? "提交买入或出售需求后，由绿证负责人确认资源类型、年份、数量及交付安排。" : "提交需求后，由区域负责人或平台运营联系确认用电数据、合同周期和报价方案。"]
  ];
}

function getPlanDetails(plan) {
  if (plan.id === "bj-fixed") {
    return enhancePlanDetails(plan, [
      ["价格构成", "固定价格 0.40 元/千瓦时"],
      ["服务费", "已包含在意向报价中，具体以正式合同为准"],
      ["偏差考核", "按交易规则及双方合同约定执行"],
      ["服务期限", "月度、季度、年度可选"],
      ["增值服务", "用电咨询、能耗分析、报价比选"]
    ]);
  }

  if (plan.id === "bj-link") {
    return enhancePlanDetails(plan, [
      ["价格构成", "北京市场均价 + 0.05 元/千瓦时"],
      ["服务费", "0.05 元/千瓦时"],
      ["偏差考核", "按交易规则及双方合同约定执行"],
      ["服务期限", "按客户需求和合同约定确认"],
      ["增值服务", "市场行情跟踪、用电咨询、能耗分析"]
    ]);
  }

  if (plan.id === "bj-deviation") {
    return enhancePlanDetails(plan, [
      ["价格构成", "按双方确认的市场交易价格及结算口径执行"],
      ["比例分成", "双方各承担 50%"],
      ["偏差考核", "按交易规则及双方合同约定执行"],
      ["服务期限", "按客户需求和合同约定确认"],
      ["增值服务", "用电预测协助、偏差分析、绿电咨询"]
    ]);
  }

  if (plan.id === "hbn-month") {
    return enhancePlanDetails(plan, [
      ["价格构成", "河北南网全网中长期直接交易合同加权平均价"],
      ["服务费", "0元固定服务费"],
      ["偏差考核", "供方承担100%偏差考核"],
      ["服务期限", "月度签约"],
      ["增值服务", "用电咨询、能耗分析"]
    ]);
  }

  if (plan.business === "green") {
    return enhancePlanDetails(plan, [
      ["资源类型", plan.name],
      ["资源数量", "以实时库存及资源方确认结果为准"],
      ["交易方向", "支持企业采购绿证，也接受资源方出售计划登记"],
      ["交付口径", "按项目类型、年份、采购数量和资源库存确认"],
      ["服务期限", "按采购批次确认"],
      ["增值服务", "资源匹配、材料整理、核销协助"]
    ]);
  }

  if (plan.business === "cross") {
    return enhancePlanDetails(plan, [
      ["价格构成", "按跨省跨区资源、交易路径和客户准入条件综合确认"],
      ["服务费", "按资源匹配难度和服务范围确认"],
      ["偏差考核", "按交易规则及双方合同约定执行"],
      ["服务期限", "按项目周期或交易周期确认"],
      ["增值服务", "资源撮合、交易路径咨询、绿电消纳建议"]
    ]);
  }

  return enhancePlanDetails(plan, [
    ["价格构成", `${getRegionName(plan.region)}市场化交易价格或合同约定价格，当前意向报价为 ${plan.price || "询价后确认"}`],
    ["服务费", plan.price?.includes("服务费") ? plan.price.replace(/^.*\+\s*/, "") : "按最终报价和服务协议确认"],
    ["偏差考核", "按交易规则及双方合同约定执行，可在对接时确认承担方式"],
    ["服务期限", getServiceTerm(plan)],
    ["增值服务", "用电咨询、能耗分析、报价比选、合同条款提示"]
  ]);
}

function renderPlans() {
  const grid = document.getElementById("planGrid");
  const visiblePlans = plans.filter(planMatches);
  renderGreenBusinessPanel();
  renderContactCard();
  renderRegionalPricePanel();
  renderCrossProvincePanel();
  renderPackageRecommendation();

  grid.hidden = selectedBusiness === "green" || selectedBusiness === "cross";
  grid.innerHTML = selectedBusiness === "green" || selectedBusiness === "cross" ? "" : visiblePlans.length
    ? visiblePlans
        .map(
          (plan) => `
            <article class="plan-card">
              <div class="card-top">
                <div class="tag-row">
                  <span class="tag ${tagClass(plan)}">${plan.tag}</span>
                  <span class="tag ${badgeClass(plan)}">${getPlanBadge(plan)}</span>
                </div>
                <span class="tag">${getPlanRegionLabel(plan)}</span>
              </div>
              <h3>${plan.name}</h3>
              ${plan.business === "green" ? "" : `<div class="price-row"><span>${plan.business === "retail" ? "代理购电价格" : "意向报价"}</span><strong>${plan.price || "询价后确认"}</strong></div>`}
              <p>${plan.desc}</p>
              <ul class="feature-list">
                ${plan.features.map((feature) => `<li>${feature}</li>`).join("")}
              </ul>
              <div class="card-foot">
                <span>${plan.mode} · ${plan.supplier}</span>
                <div class="card-actions">
                  <button class="text-btn" type="button" data-plan-detail="${plan.id}">查看详情</button>
                  <button class="text-btn" type="button" data-plan="${plan.name}">${plan.business === "green" ? "登记需求" : "咨询"}</button>
                </div>
              </div>
            </article>
          `
        )
        .join("")
    : `<article class="plan-card"><h3>暂无匹配业务</h3><p>当前筛选条件下没有可展示业务，可联系小新助手提交定制需求，由平台人工匹配方案。</p><div class="card-foot"><span>定制需求</span><button class="text-btn" type="button" data-open-assistant>咨询小新助手</button></div></article>`;

  document.querySelectorAll("[data-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      openAssistantPanel();
      showToast(`已打开小新助手，请留下「${button.dataset.plan}」需求。`);
    });
  });

  document.querySelectorAll("[data-open-assistant]").forEach((button) => {
    button.addEventListener("click", openAssistantPanel);
  });

  document.querySelectorAll("[data-plan-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      openPlanModal(button.dataset.planDetail);
    });
  });

  document.getElementById("planCount").textContent = plans.length;
}

function renderGreenBusinessPanel() {
  const panel = document.getElementById("greenBusinessPanel");
  const greenBusiness = document.getElementById("green");
  if (!panel.contains(greenBusiness)) panel.appendChild(greenBusiness);
  greenBusiness.hidden = selectedBusiness !== "green";
}

function renderRegionalPricePanel() {
  const panel = document.getElementById("regionalPricePanel");
  if (selectedBusiness !== "retail") {
    panel.innerHTML = "";
    panel.hidden = true;
    return;
  }

  const reference = regionalPriceReferences[selectedRegion];
  panel.hidden = false;
  panel.innerHTML = `
    <div class="price-reference-heading">
      <div>
        <p class="eyebrow">${getRegionName(selectedRegion)}价格参考</p>
        <h3>最近历史成交价格</h3>
      </div>
    </div>
    <div class="price-reference-grid">
      <article>
        <span>绿电价格</span>
        <strong>${reference.green}</strong>
        <p>按绿电资源、交易周期和交付口径确认。</p>
      </article>
      <article>
        <span>常规电能量价格</span>
        <strong>${reference.conventional}</strong>
        <p>展示当前区域已列业务的意向参考价。</p>
      </article>
      <article>
        <span>电网代理购电价格</span>
        <strong>${reference.marketProxy}</strong>
        <p>${reference.marketProxyNote || "按市场均价与区域服务费口径计算。"}</p>
      </article>
    </div>
  `;

}

function renderCrossProvincePanel() {
  const panel = document.getElementById("crossProvincePanel");
  if (selectedBusiness !== "cross") {
    panel.innerHTML = "";
    panel.hidden = true;
    return;
  }

  panel.hidden = false;
  panel.innerHTML = `
    <div class="price-reference-heading">
      <div>
        <p class="eyebrow">${getRegionName(selectedRegion)}跨省跨区服务</p>
        <h3>通道成本与 2026 年价格参考</h3>
      </div>
    </div>
    <div class="cross-province-grid">
      <article>
        <span>输配电价计算器</span>
        <strong>按合同参数测算</strong>
        <p>输入受端电量、送端电能量价、输配电价和线损率，测算预估落地电能量成本。</p>
        <button class="secondary-line-btn" type="button" id="openTransmissionCalculator">打开计算器</button>
      </article>
      <article class="cross-price-list">
        <span>2026 年公开成交及通道价格参考</span>
        <strong>跨省跨区价格数据</strong>
        <div class="cross-record-list">
          ${crossProvinceRecords
            .map(
              (record) => `
                <div>
                  <span>${record.type}</span>
                  <b>${record.path}</b>
                  <strong>${record.price}</strong>
                  <small>${record.note}</small>
                </div>
              `
            )
            .join("")}
        </div>
        <small>已成交电能量价与通道输电价口径不同，测算时请分别填入对应字段，并以交易公告、通道规则和正式合同为准。</small>
      </article>
    </div>
  `;

  document.getElementById("openTransmissionCalculator").addEventListener("click", openTransmissionCalculatorModal);
}

function getPackagePlanPrice(plan, reference) {
  if (plan.mode === "比例分成") return reference.conventionalPrice;

  const priceText = plan.price || "";
  const numericValues = [...priceText.matchAll(/\d+(?:\.\d+)?/g)].map((match) => Number(match[0]));
  if (priceText.includes("市场均价") || priceText.includes("全网均价") || priceText.includes("月度均价")) {
    return reference.conventionalPrice + (numericValues.at(-1) || 0);
  }
  return numericValues[0] || reference.conventionalPrice;
}

function getRecommendationFactors(tariffType) {
  return tariffType === "two_part" ? { peak: 1.6, valley: 0.4 } : { peak: 1.8, valley: 0.3 };
}

function getRecommendationNumber(name) {
  const input = document.querySelector(`#packageRecommendationForm [name="${name}"]`);
  const value = Number(input?.value);
  return Number.isFinite(value) && value >= 0 ? value : 0;
}

function renderPackageRecommendation() {
  const panel = document.getElementById("packageRecommendation");
  if (selectedBusiness !== "retail") {
    panel.hidden = true;
    panel.innerHTML = "";
    return;
  }

  const regionalPlans = plans.filter((plan) => plan.business === "retail" && plan.region === selectedRegion);
  const defaultIds = regionalPlans.slice(0, 3).map((plan) => plan.id);
  const options = regionalPlans.map((plan) => `<option value="${plan.id}">${plan.name}</option>`).join("");
  panel.hidden = false;
  panel.innerHTML = `
    <div class="package-recommendation-heading">
      <div>
        <p class="eyebrow">${getRegionName(selectedRegion)}售电业务</p>
        <h3>套餐推荐</h3>
      </div>
      <p>输入用电结构与绿电比例，比较三种套餐和电网代理购电的电能量费用。</p>
    </div>
    <form class="recommendation-form" id="packageRecommendationForm">
      <label>
        电价类型
        <select name="tariffType">
          <option value="single">单一制</option>
          <option value="two_part">两部制</option>
        </select>
      </label>
      <label>
        总用电量（千瓦时）
        <input name="totalKwh" type="number" min="0" step="1" value="100000" />
      </label>
      <label>
        峰段电量（千瓦时）
        <input name="peakKwh" type="number" min="0" step="1" value="30000" />
      </label>
      <label>
        平段电量（千瓦时）
        <input name="flatKwh" type="number" min="0" step="1" value="50000" />
      </label>
      <label>
        谷段电量（千瓦时）
        <input name="valleyKwh" type="number" min="0" step="1" value="20000" />
      </label>
      <label>
        绿电比例（%）
        <input name="greenRatio" type="number" min="0" max="100" step="1" value="0" />
      </label>
      <div class="recommendation-plan-selects wide">
        <span>套餐选择</span>
        <div>
          <label>方案一<select name="planOne">${options}</select></label>
          <label>方案二<select name="planTwo">${options}</select></label>
          <label>方案三<select name="planThree">${options}</select></label>
        </div>
      </div>
    </form>
    <div class="recommendation-results" id="packageRecommendationResults" aria-live="polite"></div>
    <p class="recommendation-note" id="packageRecommendationNote"></p>
  `;

  ["planOne", "planTwo", "planThree"].forEach((name, index) => {
    const select = panel.querySelector(`[name="${name}"]`);
    select.value = defaultIds[index] || defaultIds[0] || "";
  });
  panel.querySelector("form").addEventListener("input", updatePackageRecommendation);
  panel.querySelector("form").addEventListener("change", updatePackageRecommendation);
  updatePackageRecommendation();
}

function updatePackageRecommendation() {
  const results = document.getElementById("packageRecommendationResults");
  if (!results) return;

  const reference = regionalPriceReferences[selectedRegion];
  const tariffType = document.querySelector('#packageRecommendationForm [name="tariffType"]').value;
  const totalKwh = getRecommendationNumber("totalKwh");
  const peakKwh = getRecommendationNumber("peakKwh");
  const flatKwh = getRecommendationNumber("flatKwh");
  const valleyKwh = getRecommendationNumber("valleyKwh");
  const periodKwh = peakKwh + flatKwh + valleyKwh;
  const greenRatio = Math.min(getRecommendationNumber("greenRatio"), 100) / 100;
  const factors = getRecommendationFactors(tariffType);
  const weightedKwh = peakKwh * factors.peak + flatKwh + valleyKwh * factors.valley;
  const greenPrice = reference.greenPrice || reference.conventionalPrice;
  const selectedPlans = ["planOne", "planTwo", "planThree"]
    .map((name) => plans.find((plan) => plan.id === document.querySelector(`#packageRecommendationForm [name="${name}"]`).value))
    .filter(Boolean);

  const planResults = selectedPlans.map((plan, index) => {
    const conventionalPrice = getPackagePlanPrice(plan, reference);
    const blendedPrice = conventionalPrice * (1 - greenRatio) + greenPrice * greenRatio;
    return {
      label: `方案${index + 1}`,
      title: plan.name,
      price: blendedPrice,
      cost: blendedPrice * weightedKwh,
      note: `绿电比例 ${Math.round(greenRatio * 100)}%，按峰平谷电量折算。`
    };
  });

  const gridPrice = reference.marketProxyPrice || reference.conventionalPrice + reference.proxyAdder;
  const gridResult = {
    label: "对照项",
    title: "电网代理购电",
    price: gridPrice,
    cost: gridPrice * weightedKwh,
    note: reference.marketProxyNote || "按当前区域电网代理购电参考价格测算。"
  };

  results.innerHTML = [...planResults, gridResult]
    .map(
      (item) => `
        <article>
          <span>${item.label}</span>
          <h3>${item.title}</h3>
          <dl>
            <div><dt>折算平段价</dt><dd>${item.price.toFixed(4)} 元/千瓦时</dd></div>
            <div><dt>预估电能量费用</dt><dd>${formatAmount(item.cost)} 元</dd></div>
          </dl>
          <p>${item.note}</p>
        </article>
      `
    )
    .join("");

  const note = document.getElementById("packageRecommendationNote");
  const difference = totalKwh - periodKwh;
  const totalCheck = Math.abs(difference) < 1 ? "总用电量与峰平谷电量合计一致。" : `当前峰平谷合计为 ${formatAmount(periodKwh)} 千瓦时，与总用电量相差 ${formatAmount(Math.abs(difference))} 千瓦时。`;
  const tariffNote = tariffType === "two_part" ? "两部制仅测算电能量费用，未计入基本电费。" : "单一制按电能量费用测算。";
  note.textContent = `${totalCheck}${tariffNote} 输配电价、系统运行费及政府性基金等电网费用未纳入。`;
}

function getTransmissionNumber(name) {
  const input = document.querySelector(`#transmissionCalculatorForm [name="${name}"]`);
  if (!input || input.value.trim() === "") return null;
  const value = Number(input.value);
  return Number.isFinite(value) && value >= 0 ? value : null;
}

function updateTransmissionCalculator() {
  const deliveredKwh = getTransmissionNumber("deliveredKwh") || 0;
  const sourceEnergyPrice = getTransmissionNumber("sourceEnergyPrice");
  const transmissionPrice = getTransmissionNumber("transmissionPrice");
  const lossRate = Math.min(getTransmissionNumber("lossRate") || 0, 99) / 100;
  const sourceKwh = lossRate < 1 ? deliveredKwh / (1 - lossRate) : 0;
  const lossKwh = Math.max(sourceKwh - deliveredKwh, 0);
  const energyFee = sourceEnergyPrice === null ? null : sourceKwh * sourceEnergyPrice;
  const transmissionFee = transmissionPrice === null ? null : deliveredKwh * transmissionPrice;
  const totalCost = energyFee === null || transmissionFee === null ? null : energyFee + transmissionFee;
  const landedPrice = totalCost === null || deliveredKwh === 0 ? null : totalCost / deliveredKwh;

  document.getElementById("transmissionSourceKwh").textContent = `${formatAmount(sourceKwh)} 千瓦时`;
  document.getElementById("transmissionLossKwh").textContent = `${formatAmount(lossKwh)} 千瓦时`;
  document.getElementById("transmissionEnergyFee").textContent = energyFee === null ? "待输入成交价格" : `${formatAmount(energyFee)} 元`;
  document.getElementById("transmissionFee").textContent = transmissionFee === null ? "待输入输配电价" : `${formatAmount(transmissionFee)} 元`;
  document.getElementById("transmissionTotalCost").textContent = totalCost === null ? "待补充价格参数" : `${formatAmount(totalCost)} 元`;
  document.getElementById("transmissionLandedPrice").textContent = landedPrice === null ? "请填写送端电能量价格和输配电价" : `预估落地电能量单价 ${landedPrice.toFixed(3)} 元/千瓦时`;
}

function openTransmissionCalculatorModal() {
  const modal = document.getElementById("transmissionCalculatorModal");
  document.getElementById("transmissionCalculatorEyebrow").textContent = `${getRegionName(selectedRegion)}跨省跨区服务`;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  updateTransmissionCalculator();
}

function closeTransmissionCalculatorModal() {
  const modal = document.getElementById("transmissionCalculatorModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function openPlanModal(planId) {
  const plan = plans.find((item) => item.id === planId);
  if (!plan) return;

  activePlanId = plan.id;
  document.getElementById("planModalTitle").textContent = plan.name;
  document.getElementById("planModalEyebrow").textContent = `${getPlanRegionLabel(plan)} · ${plan.mode}`;
  document.getElementById("planModalSummary").textContent = plan.desc;
  document.getElementById("planModalDetails").innerHTML = getPlanDetails(plan)
    .map(
      ([label, value]) => `
        <div>
          <dt>${label}</dt>
          <dd>${value}</dd>
        </div>
      `
    )
    .join("");

  const modal = document.getElementById("planModal");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closePlanModal() {
  const modal = document.getElementById("planModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function formatAmount(value) {
  return new Intl.NumberFormat("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Number.isFinite(value) ? value : 0);
}

function renderContactCard() {
  const contact = selectedBusiness === "green" ? greenContact : regionContacts[selectedRegion];
  const scope = selectedBusiness === "green" ? "全国统一绿证业务" : `${getRegionName(selectedRegion)}区域业务`;
  const phoneValue = contact.phone === "xxx" ? contact.phone : `<a href="tel:${contact.phone}">${contact.phone}</a>`;

  document.getElementById("contactCard").innerHTML = `
    <div>
      <p class="eyebrow">对接联系人</p>
      <h3>${contact.title}</h3>
      <span>${scope}</span>
    </div>
    <dl>
      <div>
        <dt>姓名</dt>
        <dd>${contact.name}</dd>
      </div>
      <div>
        <dt>电话</dt>
        <dd>${phoneValue}</dd>
      </div>
      <div>
        <dt>微信</dt>
        <dd>${contact.wechat}</dd>
      </div>
    </dl>
  `;
}

function renderMarketDemands() {
  document.getElementById("marketDemandGrid").innerHTML = marketDemands
    .map(
      (demand) => `
        <article class="demand-card">
          <div class="card-top">
            <span class="tag green">${demand.business}</span>
            <span class="tag">${demand.region}</span>
          </div>
          <h3>${demand.title}</h3>
          <p>${demand.note}</p>
          <div class="demand-meta">
            <span>${demand.volume}</span>
            <span>${demand.time}</span>
          </div>
          <button class="text-btn" type="button" data-demand-template="${demand.title}">发布类似需求</button>
        </article>
      `
    )
    .join("");

  document.querySelectorAll("[data-demand-template]").forEach((button) => {
    button.addEventListener("click", () => {
      const form = document.getElementById("demandForm");
      form.querySelector('[name="note"]').value = `我想发布类似需求：「${button.dataset.demandTemplate}」，请联系我确认方案。`;
      document.getElementById("demand").scrollIntoView({ behavior: "smooth" });
      showToast("已把需求方向带入表单。");
    });
  });
}

function renderServiceProviders() {
  document.getElementById("providerGrid").innerHTML = serviceProviders
    .map(
      (provider) => `
        <article class="provider-card">
          <div class="provider-avatar">${provider.name.slice(0, 1)}</div>
          <h3>${provider.name}</h3>
          <p>${provider.type} · 服务客户 ${provider.customers} · 评分 ${provider.rating}</p>
          <div class="provider-areas">${provider.areas.map((area) => `<span>${area}</span>`).join("")}</div>
          <div class="provider-tags">${provider.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </article>
      `
    )
    .join("");
}

function syncControls() {
  renderTabs("businessTabs", businesses, selectedBusiness, (id) => {
    selectedBusiness = id;
    document.getElementById("businessSelect").value = id;
    syncControls();
    renderPlans();
  });

  renderTabs("regionTabs", regions, selectedRegion, (id) => {
    selectedRegion = id;
    document.getElementById("regionSelect").value = id;
    syncControls();
    renderPlans();
  });

  populateSelect(document.getElementById("regionSelect"), regions, selectedRegion);
  populateSelect(document.getElementById("businessSelect"), businesses, selectedBusiness);
  updateRegionFilterState();
}

function populateFormSelects() {
  document.querySelectorAll('select[name="region"]').forEach((select) => {
    populateSelect(select, regions, selectedRegion);
  });
  document.querySelectorAll('select[name="business"]').forEach((select) => {
    populateSelect(select, businesses, selectedBusiness);
  });
}

function updateRegionFilterState() {
  const regionSelect = document.getElementById("regionSelect");
  const regionHint = document.getElementById("regionHint");
  const heroRegionHint = document.getElementById("heroRegionHint");
  const regionLabel = document.getElementById("regionFilterLabel");
  const isGreenBusiness = selectedBusiness === "green";

  regionSelect.disabled = isGreenBusiness;
  regionLabel.classList.toggle("is-disabled", isGreenBusiness);
  regionHint.textContent = isGreenBusiness ? "绿证业务全国统一价，不按区域筛选" : "";
  heroRegionHint.textContent = isGreenBusiness ? "绿证业务全国统一价，无需选择区域" : "";
  setSegmentedDisabled("regionTabs", isGreenBusiness);
}

function renderLeads() {
  document.getElementById("leadTable").innerHTML = leads
    .map((lead, index) => {
      const actions =
        lead.status === "待审核"
          ? `
            <div class="table-actions">
              <button class="mini-btn approve" type="button" data-lead-action="approve" data-lead-index="${index}">通过</button>
              <button class="mini-btn reject" type="button" data-lead-action="reject" data-lead-index="${index}">驳回</button>
            </div>
          `
          : `
            <div class="table-actions">
              <button class="mini-btn" type="button" data-lead-action="follow" data-lead-index="${index}">转跟进</button>
            </div>
          `;

      return `
        <tr>
          <td>${lead.company}</td>
          <td>${lead.region}</td>
          <td>${lead.business}</td>
          <td>${lead.volume}</td>
          <td><span class="status">${lead.status}</span></td>
          <td>${actions}</td>
        </tr>
      `;
    })
    .join("");
  document.getElementById("demandCount").textContent = leads.length;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function initializeAssistantIcons() {
  window.lucide?.createIcons();
}

function openAssistantPanel() {
  const launcher = document.getElementById("assistantLauncher");
  if (launcher?.getAttribute("aria-expanded") !== "true") launcher.click();
}

function getOperatorAccess() {
  try {
    return window.sessionStorage.getItem(OPERATOR_ACCESS_KEY) === "granted";
  } catch {
    return false;
  }
}

function setOperatorAccess(granted, shouldScroll = false) {
  const operatorArea = document.getElementById("operatorArea");
  operatorArea.hidden = !granted;

  try {
    if (granted) {
      window.sessionStorage.setItem(OPERATOR_ACCESS_KEY, "granted");
    } else {
      window.sessionStorage.removeItem(OPERATOR_ACCESS_KEY);
    }
  } catch {
    // Private browsing may prevent session storage; visibility still works for this page.
  }

  if (granted && shouldScroll) operatorArea.scrollIntoView({ behavior: "smooth" });
}

function openBackendAccessModal() {
  const modal = document.getElementById("backendAccessModal");
  const error = document.getElementById("backendAccessError");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  error.hidden = true;
  window.setTimeout(() => modal.querySelector('[name="accessCode"]').focus(), 0);
}

function closeBackendAccessModal() {
  const modal = document.getElementById("backendAccessModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function setupEvents() {
  document.getElementById("regionSelect").addEventListener("change", (event) => {
    selectedRegion = event.target.value;
    syncControls();
    renderPlans();
  });

  document.getElementById("businessSelect").addEventListener("change", (event) => {
    selectedBusiness = event.target.value;
    syncControls();
    renderPlans();
  });

  document.querySelectorAll("[data-modal-close]").forEach((button) => {
    button.addEventListener("click", closePlanModal);
  });

  document.querySelectorAll("[data-transmission-close]").forEach((button) => {
    button.addEventListener("click", closeTransmissionCalculatorModal);
  });

  document.querySelectorAll("[data-backend-access-close]").forEach((button) => {
    button.addEventListener("click", closeBackendAccessModal);
  });

  document.getElementById("openBackendAccess").addEventListener("click", openBackendAccessModal);
  document.getElementById("closeBackend").addEventListener("click", () => {
    setOperatorAccess(false);
    document.getElementById("plans").scrollIntoView({ behavior: "smooth" });
    showToast("已退出运营后台。");
  });

  document.getElementById("backendAccessForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const accessCode = new FormData(event.currentTarget).get("accessCode");
    const error = document.getElementById("backendAccessError");

    if (accessCode !== OPERATOR_ACCESS_CODE) {
      error.hidden = false;
      event.currentTarget.querySelector('[name="accessCode"]').focus();
      return;
    }

    event.currentTarget.reset();
    closeBackendAccessModal();
    setOperatorAccess(true, true);
    showToast("已进入运营后台。");
  });

  document.getElementById("openAssistantFromHero").addEventListener("click", openAssistantPanel);

  document.getElementById("transmissionCalculatorForm").addEventListener("input", updateTransmissionCalculator);

  document.getElementById("greenContactShortcut").addEventListener("click", () => {
    selectedBusiness = "green";
    syncControls();
    populateFormSelects();
    renderPlans();
    document.getElementById("plans").scrollIntoView({ behavior: "smooth" });
    showToast("已切换至绿证绿电业务，可查看绿证负责人联系方式。");
  });

  document.getElementById("greenDemandForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    leads.unshift({
      company: data.company,
      region: "全国统一",
      business: `${data.tradeSide}绿证需求`,
      volume: data.quantity ? `${data.quantity} 张` : "待沟通",
      status: "待审核"
    });
    renderLeads();
    event.currentTarget.reset();
    showToast("绿证买卖需求已提交，绿证负责人将联系您确认资源与交付安排。");
  });

  const assistantPanel = document.getElementById("assistantPanel");
  const assistantLauncher = document.getElementById("assistantLauncher");
  const assistantOptions = document.getElementById("assistantOptions");
  const assistantForm = document.getElementById("assistantLeadForm");
  const assistantSelection = document.getElementById("assistantSelection");
  let assistantBusiness = "retail";
  let assistantDemand = "";

  const closeAssistant = () => {
    assistantPanel.hidden = true;
    assistantLauncher.setAttribute("aria-expanded", "false");
  };

  const resetAssistant = () => {
    assistantForm.reset();
    assistantForm.hidden = true;
    assistantOptions.hidden = false;
    assistantDemand = "";
  };

  assistantLauncher.addEventListener("click", () => {
    const willOpen = assistantPanel.hidden;
    assistantPanel.hidden = !willOpen;
    assistantLauncher.setAttribute("aria-expanded", String(willOpen));
    if (willOpen) assistantPanel.querySelector("[data-assistant-demand]").focus();
  });

  document.getElementById("assistantClose").addEventListener("click", closeAssistant);
  document.getElementById("assistantReset").addEventListener("click", resetAssistant);

  assistantOptions.querySelectorAll("[data-assistant-demand]").forEach((button) => {
    button.addEventListener("click", () => {
      assistantBusiness = button.dataset.assistantBusiness;
      assistantDemand = button.dataset.assistantDemand;
      assistantSelection.textContent = `已选择：${assistantDemand}`;
      assistantOptions.hidden = true;
      assistantForm.hidden = false;
      assistantForm.querySelector('[name="company"]').focus();
    });
  });

  assistantForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(assistantForm).entries());
    leads.unshift({
      company: data.company,
      region: assistantBusiness === "green" ? "全国统一" : getRegionName(selectedRegion),
      business: assistantDemand,
      volume: data.volume || "待沟通",
      status: "待审核"
    });
    renderLeads();
    resetAssistant();
    closeAssistant();
    showToast("需求已提交，平台工作人员将尽快与您联系。");
  });

  document.getElementById("modalConsultBtn").addEventListener("click", () => {
    const plan = plans.find((item) => item.id === activePlanId);
    if (!plan) return;

    closePlanModal();
    openAssistantPanel();
    showToast(`已打开小新助手，请留下「${plan.name}」需求。`);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePlanModal();
      closeTransmissionCalculatorModal();
      closeBackendAccessModal();
      closeAssistant();
    }
  });

  document.getElementById("leadTable").addEventListener("click", (event) => {
    const button = event.target.closest("[data-lead-action]");
    if (!button) return;

    const index = Number(button.dataset.leadIndex);
    const lead = leads[index];
    if (!lead) return;

    const action = button.dataset.leadAction;
    if (action === "approve") {
      lead.status = "审核通过";
      showToast(`已通过「${lead.company}」的需求，建议转入客户跟进。`);
    }
    if (action === "reject") {
      lead.status = "已驳回";
      showToast(`已驳回「${lead.company}」的需求。`);
    }
    if (action === "follow") {
      lead.status = "跟进中";
      showToast(`「${lead.company}」已转为跟进中。`);
    }

    renderLeads();
  });

  document.getElementById("demandForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    leads.unshift({
      company: data.company,
      region: data.business === "green" ? "全国统一" : getRegionName(data.region),
      business: getBusinessName(data.business),
      volume: data.volume,
      status: "待审核"
    });
    renderLeads();
    event.currentTarget.reset();
    populateFormSelects();
    showToast("需求已模拟提交，并进入后台线索列表。");
    document.getElementById("console").scrollIntoView({ behavior: "smooth" });
  });

}

function init() {
  syncControls();
  populateFormSelects();
  setupEvents();
  setOperatorAccess(getOperatorAccess());
  renderPlans();
  renderMarketDemands();
  renderServiceProviders();
  renderLeads();
}

init();
window.addEventListener("DOMContentLoaded", initializeAssistantIcons);
