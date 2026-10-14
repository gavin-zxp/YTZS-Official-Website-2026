// 烟台众昇金属官网 · 双语内容单一数据源
// 修改内容只需改此文件，中英文两套页面自动生成

export type Lang = 'zh' | 'en';

export interface NavItem { id: string; label: string }
export interface TimelineItem { year: string; title: string; desc: string }
export interface Product { name: string; desc: string; img: string; alt: string }
export interface RecordItem { customer: string; project: string; products: string; location: string; year: string; qty: string }
export interface GalleryItem { img: string; caption: string }

export interface Content {
  lang: Lang;
  htmlLang: string;
  title: string;
  metaDescription: string;
  nav: NavItem[];
  hero: {
    title: string;
    subtitle: string;
    enterBtn: string;
    langBtn: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    img: string;
    imgAlt: string;
  };
  values: {
    title: string;
    intro: string;
    items: { title: string; desc: string }[];
  };
  team: {
    title: string;
    intro: string;
    categories: { label: string; members: string }[];
    img: string;
    imgAlt: string;
  };
  history: {
    title: string;
    timeline: TimelineItem[];
  };
  marketing: {
    title: string;
    intro: string;
    img: string;
    imgAlt: string;
    events: { name: string; year: string }[];
  };
  products: {
    title: string;
    intro: string;
    items: Product[];
  };
  records: {
    title: string;
    intro: string;
    tableHeaders: string[];
    rows: RecordItem[];
    gallery: GalleryItem[];
  };
  qc: {
    title: string;
    intro: string;
    items: { name: string; desc: string }[];
    certImg: string;
    certAlt: string;
  };
  contact: {
    title: string;
    items: { label: string; value: string }[];
    mapImg: string;
    mapAlt: string;
  };
  message: {
    title: string;
    fields: { name: string; label: string; type: string; required: boolean }[];
    submitBtn: string;
    thankYou: string;
  };
  footer: {
    copyright: string;
    icp: string;
  };
}

const zh: Content = {
  lang: 'zh',
  htmlLang: 'zh-CN',
  title: '烟台众昇金属结构有限公司 | 钢格栅、钢护栏、舾装件供应商',
  metaDescription: '烟台众昇金属结构有限公司，专业的二类和三类钢结构供应商，为海工FPSO/FLNG、船舶、矿山等项目提供钢格栅、护栏、平台、爬梯、直梯、管道支架、电仪支架等产品。服务中集来福士、惠生海工等客户。',
  nav: [
    { id: 'AboutUs', label: '关于我们' },
    { id: 'Values', label: '价值观' },
    { id: 'Team', label: '团队' },
    { id: 'History', label: '历程' },
    { id: 'Marketing', label: '营销' },
    { id: 'Products', label: '产品' },
    // { id: 'Records', label: '业绩' },
    { id: 'QC', label: '质检' },
    { id: 'Contact', label: '联系' },
    { id: 'Message', label: '留言' }
  ],
  hero: {
    title: '烟台众昇金属结构有限公司',
    subtitle: '致力于为海工行业制造二类和三类结构件',
    enterBtn: '进入中文站',
    langBtn: 'English',
  },
  about: {
    title: '关于我们',
    paragraphs: [
      '怀着成为服务工业工程专业的二类或三类钢结构供应商的梦想，三位有行业经验的老同事于2019年创立了烟台众昇金属结构有限公司。',
      '2024年5月，受创始人刘学昌先生托付，我们的合作伙伴烟台京禾钢结构有限公司加入众昇，团队规模增加到28人。',
      '自创立伊始，我们即把"人"作为公司最重要的资产。因此，我们在工作中不遗余力的培养和训练员工队伍，并会重点关注能让团队学习并持续提升的项目。',
      '得益于团队的努力，作为市场中的新进入者，烟台众昇已经在中国和澳大利亚的众多项目（主要海工和矿山项目）中完成供货，基于这些良好的业绩，我们也得到客户越来越多的认可。',
    ],
    img: '/img/outfitting.jpg',
    imgAlt: '钢格栅、钢护栏、舾装件等轻钢结构产品',
  },
  values: {
    title: '我们的价值观',
    intro: '对于一家新创立的企业来说，如果承诺在每项工作中都能做到绝对的正直、诚实和专业，可能并不容易。但是我们坚信这些品质对保障企业的长远发展是必须的。',
    items: [
      { title: '持续改进', desc: '凝心聚力，日日提升。' },
      { title: '用对的人', desc: '信任他们，培养他们，帮助他们。' },
      { title: '为梦想努力', desc: '让我们的职工和伙伴更有尊严的工作。' },
      { title: '好名声比利润重要', desc: '这句话说起来容易，要践行很难，但我们依然坚信好的声誉一定会在适当时候带来更多的回报。' },
    ],
  },
  team: {
    title: '我们的团队',
    intro: '我们拥有一支小而精的团队，平均行业经验10年，多数成员自2020年起与公司共同成长。',
    categories: [
      { label: '管理层', members: '李慧鹏、李梦然' },
      { label: '项目团队', members: '张婷婷、牟一帆、李慧慷、李妤墨、何世峰、刘兴乾' },
      { label: '车间管理', members: '侯万鹏' },
    ],
    img: '/img/our_team.jpg',
    imgAlt: '烟台众昇金属结构有限公司团队合影',
  },
  history: {
    title: '我们的历程',
    timeline: [
      { year: '2019', title: '公司成立', desc: '9月在烟台设立，以出口镀锌格栅和栏杆的中间品为主。' },
      { year: '2020', title: '尝试进入EPC供应链', desc: '成立第二年遭遇新冠疫情封锁，期间通过厦门一家公司给澳大利亚力拓矿山供应护栏，出口印尼EMI公司格栅和栏杆。' },
      { year: '2021', title: '海工项目的突破', desc: '通过南通惠生重工参与的澳大利亚FMG铁桥项目是我们在海工方面的第一次尝试，供应了澳标球接栏杆和钢格栅。' },
      { year: '2023', title: '持续的团队建设', desc: '作为南通惠生供应商，在其承接的风电安装船和发电船等项目中供应梯子、栏杆、格栅等结构件。' },
      { year: '2024', title: '兼并扩张', desc: '基于与创始人刘学昌先生长期合作关系，烟台京禾钢结构成为我们的子公司，公司也因此成为烟台中集来福士公司长协供应商。' },
      { year: '2025', title: '我们继续成长', desc: '除梯子栏杆格栅等产品外，我们的业务拓展到大型设备基座、设备结构等产品，海工业务增长40%，矿山项目增长20%。' },
    ],
  },
  marketing: {
    title: '我们的营销',
    intro: '我们积极参与行业展会，与全球客户建立联系。',
    img: '/img/exhibition.jpg',
    imgAlt: '烟台众昇参加国际海工油气展会',
    events: [
      { name: 'GASTECH 海工油气展', year: '2023 · 新加坡' },
      { name: 'CIPPE 北京石油化工展', year: '2024 · 北京' },
      { name: 'GASTECH 海工油气展', year: '2025 · 米兰' },
      { name: '上海海事展', year: '2025 · 上海' },
      { name: 'CIPPE 新疆石油化工展', year: '2026 · 新疆' },
      { name: '中国海洋装备博览会', year: '2026 · 福州' }
    ],
  },
  products: {
    title: '我们的产品',
    intro: '我们为海工行业FPSO、FSRU、FLNG和造船提供二类和三类结构件，包括：',
    items: [
      { name: '钢格栅 Steel Grating', desc: '平台格栅、楼梯踏步、井盖、格栅防护栏等。', img: '/img/steel_grating.jpg', alt: '钢格栅' },
      { name: '钢护栏 Handrails', desc: '球接护栏、立柱、相贯线护栏等。', img: '/img/handrail.jpg', alt: '钢护栏' },
      { name: '平台 Platforms', desc: '设备平台、走道平台、安全平台等。', img: '/img/platform.jpg', alt: '平台结构' },
      { name: '爬梯 Stairs', desc: '带防滑条踏步、斜梯等。', img: '/img/stair.jpg', alt: '爬梯踏步' },
      { name: '直梯 Ladders', desc: '直梯、螺旋梯、带笼直梯、登船梯等。', img: '/img/ladder.jpg', alt: '直梯' },
      { name: '管道支架 & 电仪支架 Pipe Supports & Electrical Supports', desc: '各类管道和电仪支架等。', img: '/img/pipe_support.jpg', alt: '各类管道和电仪支架等' },
      { name: '设备基座 Equipment Supports', desc: '设备基座等。', img: '/img/equipment_support.jpg', alt: '设备基座' },
      { name: '其他轻型结构 Other Light Structures', desc: '船舶舾装件、基座、安全防护结构等。', img: '/img/other_light_structures.jpg', alt: '其他轻型结构' }
    ],
  },
  records: {
    title: '我们的业绩',
    intro: '以下为主要项目供货记录，覆盖海工、矿山、船舶等领域。',
    tableHeaders: ['客户', '项目', '供货内容', '项目地址', '年份', '数量'],
    rows: [
      { customer: '中钢澳大利亚 Sinosteel Australia', project: 'Bendigo金属公司', products: '钢格栅和护栏', location: '澳大利亚珀斯', year: '2017-2019', qty: '1,400MT' },
      { customer: '威海三进船业 Weihai Samjin', project: 'H3020/21/22/23 船舶', products: '钢格栅', location: '中国威海', year: '2017-2019', qty: '40MT' },
      { customer: '印尼PT. EMI', project: '赞比亚Sentinel项目', products: '钢格栅和球接栏杆', location: '印尼雅加达', year: '2020-2021', qty: '80MT' },
      { customer: '惠生南通 Wison Nantong', project: 'FMG铁桥 N142/144船舶', products: '格栅、护栏、平台、管道支架', location: '中国南通', year: '2021-至今', qty: '250MT' },
      { customer: '马来西亚KARISMA', project: '多项目', products: 'FRP玻璃钢格栅', location: '马来西亚巴生', year: '2020-2024', qty: '8,000㎡' },
      { customer: '澳大利亚Flagship', project: '多项目', products: '重型钢格栅', location: '西澳大利亚', year: '2020-至今', qty: '650MT' },
      { customer: '中集来福士 CIMC Raffles', project: '巴西石油P80/83/84/85等FPSO', products: '铁舾装件', location: '中国烟台/海阳', year: '2021-至今', qty: '2,400MT' },
      { customer: '海德堡水泥 Heidelberg Materials', project: 'CBI水泥厂', products: '钢格栅', location: '加纳特马', year: '2023', qty: '110MT' },
      { customer: '惠生海工 Wison Offshore', project: 'F445/S363/F462 FPSO/FLNG', products: '铁舾装件', location: '中国南通/舟山', year: '2024-至今', qty: '450MT' },
      { customer: '湖南华菱 Valin Resources', project: 'FMG铁桥、Pilbara矿山等', products: '护栏、钢格栅、平台', location: '西澳大利亚', year: '2024-至今', qty: '80MT' },
      { customer: 'MGW Technologies', project: 'Yinson巴西FPSO', products: '梁夹、护栏', location: '巴西', year: '2024', qty: '5MT' },
    ],
    gallery: [
      { img: '/img/2025/登船梯.jpg', caption: '登船梯 · 中集来福士 H589 风电安装船' },
      { img: '/img/2025/P84-P85.jpg', caption: '直梯与护栏 · 巴西石油 P84/P85 FPSO' },
      { img: '/img/2025/平台.jpg', caption: '平台结构 · 中集来福士' },
      { img: '/img/2025/F407斜梯.jpg', caption: '斜梯 · 俄罗斯ROSATOM MFPU F407' },
      { img: '/img/2025/踏步.jpg', caption: '带防滑条踏步' },
      { img: '/img/2024/F445 ENI.jpg', caption: '管道支架 · ENI FLNG Congo F445' },
    ],
  },
  qc: {
    title: '我们的质检体系',
    intro: '我们建立了完整的质检体系，从设计到出厂全流程管控，确保产品符合客户与国际标准。',
    items: [
      { name: '设计 Design', desc: '依据项目规范进行结构与详图设计。' },
      { name: '焊接工艺评定 WPS & PQR', desc: '焊接工艺评定与记录，确保焊接质量。' },
      { name: '原料检测 Raw Material Testing', desc: '原材料进厂检测，追溯材质证明。' },
      { name: '过程监造 Supervision', desc: '生产过程监造，关键节点见证。' },
      { name: '出厂前抽检 EX Work Inspection', desc: '出厂前最终抽检与尺寸核对。' },
      { name: '指导安装 Instruct Erection', desc: '可提供现场安装指导服务。' },
    ],
    certImg: '/img/iso_9001.jpg',
    certAlt: 'ISO 9001 质量管理体系认证证书',
  },
  contact: {
    title: '联系我们',
    items: [
      { label: '电话', value: '+86 535 2165 218' },
      { label: '手机', value: '+86 139 1182 6436' },
      { label: '邮箱', value: 'li.huipeng@stonmetal.cn' },
      { label: '注册地址', value: '山东省烟台市经济技术开发区嵩山路11号三和星海花园3122室' },
      { label: '车间地址', value: '山东省烟台市福山区门楼工业园丽水路50号' },
      { label: '统一社会信用代码', value: '91370600MA3QHXHD3K' },
    ],
    mapImg: '/img/map_en.png',
    mapAlt: '烟台众昇金属位置地图',
  },
  message: {
    title: '给我们留言',
    fields: [
      { name: 'fullname', label: '姓名', type: 'text', required: true },
      { name: 'email', label: '邮箱', type: 'email', required: true },
      { name: 'message', label: '留言', type: 'textarea', required: true },
    ],
    submitBtn: '提交',
    thankYou: '感谢您的留言，我们将在稍后与您取得联系！',
  },
  footer: {
    copyright: '烟台众昇金属结构有限公司',
    icp: '',
  },
};

const en: Content = {
  lang: 'en',
  htmlLang: 'en',
  title: 'Yantai Ston Metal Co., Ltd. | Steel Grating, Handrails & Offshore Outfitting Supplier',
  metaDescription: 'Yantai Ston Metal Co., Ltd. — professional supplier of secondary and tertiary steel structures for offshore FPSO/FLNG, vessel and mining projects. Products include steel grating, handrails, platforms, stairs, ladders, pipe supports and electric supports. Serving CIMC Raffles, Wison Offshore and more.',
  nav: [
    { id: 'AboutUs', label: 'About' },
    { id: 'Values', label: 'Values' },
    { id: 'Team', label: 'Team' },
    { id: 'History', label: 'History' },
    { id: 'Marketing', label: 'Marketing' },
    { id: 'Products', label: 'Products' },
    // { id: 'Records', label: 'Records' },
    { id: 'QC', label: 'QC' },
    { id: 'Contact', label: 'Contact' },
    { id: 'Message', label: 'Message' }
  ],
  hero: {
    title: 'Yantai Ston Metal Co., Ltd.',
    subtitle: 'Dedicated to fabricating secondary and tertiary steel structures for offshore projects',
    enterBtn: 'Enter English',
    langBtn: '简体中文',
  },
  about: {
    title: 'About Us',
    paragraphs: [
      'Bearing the dream of being a professional supplier of secondary and tertiary steel structures serving industry engineering projects, three experienced colleagues founded Yantai Ston Metal Co., Ltd. in Yantai, China in 2019.',
      'In May 2024, entrusted by founder Mr. Liu Xuechang, our partner Yantai Jinghe Steel Structure Co., Ltd. joined us, enlarging our team to 28 employees.',
      'From the beginning, we regard "people" as the most important asset of the company. Therefore, we are dedicated to projects which allow the team to learn and improve continuously.',
      'Thanks to the efforts of our team, as a new player in the market, we have successfully fulfilled the supply in several projects both in China and Australia(mainly offshore and mining projects). Through these records, the company is getting more and more recognition from our customers.',
    ],
    img: '/img/outfitting.jpg',
    imgAlt: 'Steel grating, handrails, outfitting and light steel structures',
  },
  values: {
    title: 'Our Values',
    intro: 'When a new company starts its business, it is not easy to promise absolute integrity, honesty and professionalism in every job. We firmly believe these qualities are essential for long-term business development.',
    items: [
      { title: 'Continuous Improvement', desc: 'United common people and improve day by day.' },
      { title: 'Appoint Right People', desc: 'Trust them, train them, help them.' },
      { title: 'Work for Dream', desc: 'Let our employees and partners work with respect.' },
      { title: 'Reputation Over Profit', desc: 'It is easy to say, hard to perform, but we are convinced good reputation will definitely bring payback in due time.' },
    ],
  },
  team: {
    title: 'Our Team',
    intro: 'We have a small but diligent team, with an average of 10 years of industry experience. Most members have been with us since 2020.',
    categories: [
      { label: 'Management', members: 'Mr. Li Huipeng & Ms. Li Mengran' },
      { label: 'Project Team', members: 'Ms. Zhang Tingting, Ms. Mu Yifan, Mr. Li Huikang, Ms. Li Yumo, Mr. He Shifeng, Mr. Liu Xingqian' },
      { label: 'Workshop Management', members: 'Mr. Hou Wanpeng' },
    ],
    img: '/img/our_team.jpg',
    imgAlt: 'Yantai Ston Metal team photo',
  },
  history: {
    title: 'Our History',
    timeline: [
      { year: '2019', title: 'Established', desc: 'Registered in Yantai in September, mainly exporting galvanized grating and handrails.' },
      { year: '2020', title: 'Attempting EPC Supply Chain', desc: 'Encountering COVID-19, supplied handrails to Rio Tinto mining in Australia via a Xiamen partner, and grating & handrails to PT. EMI in Indonesia.' },
      { year: '2021', title: 'Offshore Breakthrough', desc: 'FMG Iron Bridge project via Wison Nantong was our first offshore attempt, supplying Australian-standard ball-joint handrails and steel grating.' },
      { year: '2023', title: 'Continuous Team Building', desc: 'As Wison Nantong supplier, supplied ladders, handrails and grating to wind turbine installation vessels and power generation vessels.' },
      { year: '2024', title: 'Merge & Acquisition', desc: 'Based on long-term collaboration with founder Mr. Liu Xuechang, Yantai Jinghe Steel Structure became our subsidiary, making us a strategic supplier of CIMC Raffles.' },
      { year: '2025', title: 'Continuously Growing', desc: 'In addition to products such as ladders, railings, and gratings, our business has expanded to include large equipment bases, equipment structures, and other products. Our offshore engineering business has grown by 40%, and our mining projects have grown by 20%.' },
    ],
  },
  marketing: {
    title: 'Our Marketing',
    intro: 'We actively participate in industry exhibitions to connect with global customers.',
    img: '/img/exhibition.jpg',
    imgAlt: 'Yantai Ston Metal at international offshore oil & gas exhibition',
    events: [
      { name: 'GASTECH', year: '2023 · Singapore' },
      { name: 'CIPPE', year: '2024 · Beijing' },
      { name: 'GASTECH', year: '2025 · Milan' },
      { name: 'Maritime China', year: '2025 · Shanghai' },
      { name: 'CIPPE', year: '2026 · Xinjiang' },
      { name: 'Maritime Equipment Expo', year: '2026 · Fuzhou' }
    ],
  },
  products: {
    title: 'Our Products',
    intro: 'We fabricate secondary and tertiary structures for offshore projects including FPSO, FSRU, FLNG and vessels:',
    items: [
      { name: 'Steel Grating', desc: 'Platform grating, stair treads, access covers, grating barriers.', img: '/img/steel_grating.jpg', alt: 'Steel Grating' },
      { name: 'Handrails', desc: 'Ball-joint safety barriers, stanchions, balustrades, guardrails.', img: '/img/handrail.jpg', alt: 'Handrails' },
      { name: 'Platforms', desc: 'Equipment platforms, walkway platforms, safety platforms.', img: '/img/platform.jpg', alt: 'Platforms' },
      { name: 'Stairs', desc: 'Stair treads with abrasive nosing, inclined stairs.', img: '/img/stair.jpg', alt: 'Stairs' },
      { name: 'Ladders', desc: 'Vertical ladders, spiral ladders, ladders with cage, boat ladders.', img: '/img/ladder.jpg', alt: 'Ladders' },
      { name: 'Pipe Supports & Electrical Supports', desc: 'Various pipe supports and electrical supports.', img: '/img/pipe_support.jpg', alt: 'Pipe Supports & Electrical Supports' },
      { name: 'Equipment Supports', desc: 'Equipment supports.', img: '/img/equipment_support.jpg', alt: 'Equipment Supports' },
      { name: 'Other Light Structures', desc: 'Vessel outfitting, foundations, safety protective structures.', img: '/img/other_light_structures.jpg', alt: 'Other Light Structures' }
    ],
  },
  records: {
    title: 'Our Records',
    intro: 'Below are major project supply records covering offshore, mining and shipbuilding sectors.',
    tableHeaders: ['Customer', 'Project', 'Products', 'Location', 'Year', 'Qty'],
    rows: [
      { customer: 'Sinosteel Australia', project: 'Bendigo Metals', products: 'Grating and Handrails', location: 'Perth, Australia', year: '2017-2019', qty: '1,400MT' },
      { customer: 'Weihai Samjin Shipbuilding', project: 'H3020/21/22/23 Vessels', products: 'Grating', location: 'Weihai, China', year: '2017-2019', qty: '40MT' },
      { customer: 'PT. EMI Indonesia', project: 'Sentinel Project, Zambia', products: 'Grating and Ball-joint Handrails', location: 'Jakarta, Indonesia', year: '2020-2021', qty: '80MT' },
      { customer: 'Wison Nantong', project: 'FMG Iron Bridge, N142/144 Vessels', products: 'Grating, handrails, platform, pipe support', location: 'Nantong, China', year: '2021-now', qty: '250MT' },
      { customer: 'KARISMA Malaysia', project: 'Multiple Projects', products: 'FRP Grating', location: 'Klang, Malaysia', year: '2020-2024', qty: '8,000㎡' },
      { customer: 'Flagship Int. Australia', project: 'Multiple Projects', products: 'Heavy duty grating', location: 'West Australia', year: '2020-now', qty: '650MT' },
      { customer: 'CIMC Raffles', project: 'Petrobras P80/83/84/85 FPSO', products: 'Steel outfittings', location: 'Yantai/Haiyang, China', year: '2021-now', qty: '2,400MT' },
      { customer: 'Heidelberg Materials', project: 'CBI Cement Plant', products: 'Grating', location: 'Tema, Ghana', year: '2023', qty: '110MT' },
      { customer: 'Wison Offshore', project: 'F445/S363/F462 FPSO/FLNG', products: 'Steel outfittings', location: 'Nantong/Zhoushan, China', year: '2024-now', qty: '450MT' },
      { customer: 'Valin Resources', project: 'Iron Bridge, Pilbara Mining', products: 'Handrails, gratings, platforms', location: 'West Australia', year: '2024-now', qty: '80MT' },
      { customer: 'MGW Technologies', project: 'Yinson Brazil FPSO', products: 'Beam Clamp, Handrail', location: 'Brazil', year: '2024', qty: '5MT' },
    ],
    gallery: [
      { img: '/img/2025/登船梯.jpg', caption: 'Boat Ladder · CIMC Raffles H589 Wind Installation Vessel' },
      { img: '/img/2025/P84-P85.jpg', caption: 'Ladders & Handrails · Petrobras P84/P85 FPSO' },
      { img: '/img/2025/平台.jpg', caption: 'Platform · CIMC Raffles' },
      { img: '/img/2025/F407斜梯.jpg', caption: 'Inclined Ladder · ROSATOM MFPU F407, Russia' },
      { img: '/img/2025/踏步.jpg', caption: 'Stair Treads with Abrasive Nosing' },
      { img: '/img/2024/F445 ENI.jpg', caption: 'Pipe Support · ENI FLNG Congo F445' },
    ],
  },
  qc: {
    title: 'Our QC System',
    intro: 'We maintain a complete quality control system covering the full process from design to delivery, ensuring products meet customer and international standards.',
    items: [
      { name: 'Design', desc: 'Structure and detail design per project specifications.' },
      { name: 'WPS & PQR', desc: 'Welding Procedure Specification and Qualification Records.' },
      { name: 'Raw Material Testing', desc: 'Incoming material inspection with MTR traceability.' },
      { name: 'Supervision', desc: 'In-process supervision with witness at key hold points.' },
      { name: 'EX Work Inspection', desc: 'Final inspection and dimensional check before delivery.' },
      { name: 'Instruct Erection', desc: 'On-site installation guidance available.' },
    ],
    certImg: '/img/iso_9001.jpg',
    certAlt: 'ISO 9001 Quality Management System Certification',
  },
  contact: {
    title: 'Contact Us',
    items: [
      { label: 'Tel', value: '+86 535 2165 218' },
      { label: 'Mob', value: '+86 139 1182 6436' },
      { label: 'Email', value: 'li.huipeng@stonmetal.cn' },
      { label: 'Registered Address', value: 'Rm. 3122, Sanhexinghaihuayuan, No.11 Songshan Rd., Yantai ETDZ, Shandong, China' },
      { label: 'Workshop', value: 'No.50 Lishui Rd, Menglou Industry Park, Fushan, Yantai, China' },
      { label: 'Unified Social Credit No.', value: '91370600MA3QHXHD3K' },
    ],
    mapImg: '/img/map_en.png',
    mapAlt: 'Yantai Ston Metal location map',
  },
  message: {
    title: 'Send a Message',
    fields: [
      { name: 'fullname', label: 'Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'message', label: 'Message', type: 'textarea', required: true },
    ],
    submitBtn: 'Submit',
    thankYou: 'Thank you for your message. We will contact you later!',
  },
  footer: {
    copyright: 'Yantai Ston Metal Co., Ltd.',
    icp: '',
  },
};

export const content: Record<Lang, Content> = { zh, en };
