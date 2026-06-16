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
  { id: "retail", name: "售电套餐" },
  { id: "green", name: "绿证绿电" },
  { id: "cross", name: "跨省跨区" },
  { id: "carbon", name: "碳交易服务" }
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
    price: "0.69 元/千瓦时起",
    desc: "以约定周期内固定代理价为核心，便于企业做年度或季度用能预算。",
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
    price: "市场均价 + 0.012 元/千瓦时服务费",
    desc: "按市场交易价格联动结算，适合能接受波动并希望参与市场化价格机会的客户。",
    features: ["可按月跟踪市场行情", "服务费与交易价格分开展示", "适合中大型用电客户"]
  },
  {
    id: "bj-deviation",
    region: "beijing",
    business: "retail",
    scale: ["medium", "large"],
    name: "北京偏差共担套餐",
    mode: "偏差共担",
    supplier: "平台撮合",
    tag: "风险共担",
    price: "0.70 元/千瓦时起",
    desc: "针对实际用电和申报电量可能偏离的客户，提前约定偏差处理方式。",
    features: ["支持用电预测协助", "适合负荷波动企业", "可叠加绿电咨询"]
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
    price: "7 元/张",
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
    price: "9 元/张",
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
    price: "4.5 元/张",
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
    price: "3.5 元/张",
    desc: "面向有分布式光伏绿证采购偏好的企业，适合低碳宣传、园区用能和供应链材料补充。",
    features: ["突出分布式光伏来源", "适合中小批量采购意向", "最终以资源方确认为准"]
  },
  {
    id: "cross-match",
    region: "all",
    business: "cross",
    scale: ["large"],
    name: "跨省跨区资源撮合服务",
    mode: "资源撮合",
    supplier: "平台能源顾问",
    tag: "大客户适用",
    desc: "面向集团、园区和大用电客户，收集跨省跨区资源匹配、绿电消纳和交易咨询需求。",
    features: ["先确认企业资格和用电规模", "后续匹配资源方和售电公司", "不在前端承诺成交价格"]
  },
  {
    id: "carbon-service",
    region: "all",
    business: "carbon",
    scale: ["small", "medium", "large"],
    name: "碳交易与碳资产咨询包",
    mode: "碳服务",
    supplier: "碳资产服务机构",
    tag: "咨询撮合",
    desc: "面向有碳盘查、碳配额、CCER、低碳披露需求的企业，提供需求收集和服务商对接。",
    features: ["支持碳盘查和履约咨询", "可对接碳资产服务商", "一期不做实盘交易和支付"]
  }
];

let selectedRegion = "beijing";
let selectedBusiness = "retail";
let activePlanId = null;

const leads = [
  { company: "北京某精密制造公司", region: "北京", business: "售电套餐", volume: "50-300 万度", status: "待分配" },
  { company: "广东某电子园区", region: "广东", business: "绿证绿电", volume: "300 万度以上", status: "已联系" },
  { company: "蒙西某材料企业", region: "蒙西", business: "跨省跨区", volume: "300 万度以上", status: "待审核" }
];

const suppliers = [
  { name: "广东区域售电商", region: "广东", business: "售电套餐" },
  { name: "绿证服务机构", region: "北京", business: "绿证绿电" }
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
  const scaleValue = document.getElementById("scaleSelect")?.value || "all";
  const scaleMatch = scaleValue === "all" || plan.scale.includes(scaleValue);
  return regionMatch && businessMatch && scaleMatch;
}

function tagClass(plan) {
  if (plan.business === "green") return "blue";
  if (plan.business === "carbon") return "amber";
  return "";
}

function getServiceTerm(plan) {
  if (plan.mode.includes("月度")) return "月度签约";
  if (plan.mode.includes("年度")) return "年度签约";
  if (plan.mode.includes("中长期")) return "年度或多月签约";
  if (plan.business === "green") return "按采购批次确认";
  return "按客户需求和合同约定确认";
}

function getPlanDetails(plan) {
  if (plan.id === "hbn-month") {
    return [
      ["价格构成", "河北南网全网中长期直接交易合同加权平均价"],
      ["服务费", "0元固定服务费"],
      ["偏差考核", "供方承担100%偏差考核"],
      ["服务期限", "月度签约"],
      ["增值服务", "用电咨询、能耗分析"]
    ];
  }

  if (plan.business === "green") {
    return [
      ["价格构成", `${plan.name}，全国统一意向价 ${plan.price || "询价后确认"}`],
      ["服务费", "按采购数量和资源方交付要求确认"],
      ["交付口径", "按项目类型、年份、采购数量和资源库存确认"],
      ["服务期限", "按采购批次确认"],
      ["增值服务", "绿证询价、资源匹配、材料整理、核销协助"]
    ];
  }

  if (plan.business === "cross") {
    return [
      ["价格构成", "按跨省跨区资源、交易路径和客户准入条件综合确认"],
      ["服务费", "按资源匹配难度和服务范围确认"],
      ["偏差考核", "按交易规则及双方合同约定执行"],
      ["服务期限", "按项目周期或交易周期确认"],
      ["增值服务", "资源撮合、交易路径咨询、绿电消纳建议"]
    ];
  }

  if (plan.business === "carbon") {
    return [
      ["价格构成", "按碳盘查、碳资产咨询或履约服务范围报价"],
      ["服务费", "按服务事项和交付材料确认"],
      ["履约口径", "按企业行业、排放边界和监管要求确认"],
      ["服务期限", "按项目周期确认"],
      ["增值服务", "碳盘查、履约咨询、CCER线索梳理、低碳披露支持"]
    ];
  }

  return [
    ["价格构成", `${getRegionName(plan.region)}市场化交易价格或合同约定价格，当前意向报价为 ${plan.price || "询价后确认"}`],
    ["服务费", plan.price?.includes("服务费") ? plan.price.replace(/^.*\+\s*/, "") : "按最终报价和服务协议确认"],
    ["偏差考核", "按交易规则及双方合同约定执行，可在对接时确认承担方式"],
    ["服务期限", getServiceTerm(plan)],
    ["增值服务", "用电咨询、能耗分析、报价比选、合同条款提示"]
  ];
}

function renderPlans() {
  const grid = document.getElementById("planGrid");
  const visiblePlans = plans.filter(planMatches);
  renderContactCard();

  grid.innerHTML = visiblePlans.length
    ? visiblePlans
        .map(
          (plan) => `
            <article class="plan-card">
              <div class="card-top">
                <span class="tag ${tagClass(plan)}">${plan.tag}</span>
                <span class="tag">${getPlanRegionLabel(plan)}</span>
              </div>
              <h3>${plan.name}</h3>
              <div class="price-row">
                <span>意向报价</span>
                <strong>${plan.price || "询价后确认"}</strong>
              </div>
              <p>${plan.desc}</p>
              <ul class="feature-list">
                ${plan.features.map((feature) => `<li>${feature}</li>`).join("")}
              </ul>
              <div class="card-foot">
                <span>${plan.mode} · ${plan.supplier}</span>
                <div class="card-actions">
                  <button class="text-btn" type="button" data-plan-detail="${plan.id}">查看详情</button>
                  <button class="text-btn" type="button" data-plan="${plan.name}">咨询</button>
                </div>
              </div>
            </article>
          `
        )
        .join("")
    : `<article class="plan-card"><h3>暂无匹配套餐</h3><p>当前筛选条件下没有套餐，可发布定制需求，由平台人工匹配服务商。</p><div class="card-foot"><span>定制需求</span><a class="text-btn" href="#demand">去发布</a></div></article>`;

  document.querySelectorAll("[data-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      const form = document.getElementById("demandForm");
      form.querySelector('[name="business"]').value = selectedBusiness;
      form.querySelector('[name="region"]').value = selectedBusiness === "green" ? regions[0].id : selectedRegion;
      form.querySelector('[name="note"]').value = `我想咨询「${button.dataset.plan}」，请联系我提供报价方案。`;
      document.getElementById("demand").scrollIntoView({ behavior: "smooth" });
      showToast("已把套餐名称带入需求表单。");
    });
  });

  document.querySelectorAll("[data-plan-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      openPlanModal(button.dataset.planDetail);
    });
  });

  document.getElementById("planCount").textContent = plans.length;
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
  document.getElementById("supplierCount").textContent = suppliers.length;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
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

  document.getElementById("scaleSelect").addEventListener("change", renderPlans);

  document.querySelectorAll("[data-modal-close]").forEach((button) => {
    button.addEventListener("click", closePlanModal);
  });

  document.getElementById("modalConsultBtn").addEventListener("click", () => {
    const plan = plans.find((item) => item.id === activePlanId);
    if (!plan) return;

    selectedBusiness = plan.business;
    if (plan.region !== "all") selectedRegion = plan.region;
    populateFormSelects();

    const form = document.getElementById("demandForm");
    form.querySelector('[name="business"]').value = plan.business;
    form.querySelector('[name="region"]').value = plan.business === "green" ? regions[0].id : selectedRegion;
    form.querySelector('[name="note"]').value = `我想咨询「${plan.name}」，请联系我提供报价方案。`;
    closePlanModal();
    document.getElementById("demand").scrollIntoView({ behavior: "smooth" });
    showToast("已把套餐名称带入需求表单。");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePlanModal();
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

  document.getElementById("supplierForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    suppliers.unshift({
      name: data.supplier,
      region: data.business === "green" ? "全国统一" : getRegionName(data.region),
      business: getBusinessName(data.business)
    });
    renderLeads();
    event.currentTarget.reset();
    populateFormSelects();
    showToast("商家入驻信息已模拟提交，后台待审核数量已更新。");
  });
}

function init() {
  syncControls();
  populateFormSelects();
  setupEvents();
  renderPlans();
  renderLeads();
}

init();
