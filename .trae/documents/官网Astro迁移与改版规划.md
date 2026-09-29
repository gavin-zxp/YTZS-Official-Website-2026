# 烟台众昇金属官网 · Astro 迁移与改版规划

> 本文档为**会话存档**，记录截至当前的全部探索结论、已确认决策与待定夺的开放问题。
> 用户暂停评估中，待其决定站点结构后回到本会话续接实施。**无需重新探索代码库**。

- 创建时间：2026-07-24
- 状态：规划阶段（Phase 1 探索完成 / Phase 2 待最终确认 1 个开放问题 / Phase 3 计划草案如下）
- 模式：Plan Mode（当前仅写本文件，未做任何代码改动）

---

## 一、当前状态分析（Phase 1 探索结论）

### 1.1 项目概况
- **公司**：烟台众昇金属结构有限公司（Yantai Ston Metal Co., Ltd.），B2B 轻钢结构供应商
- **主营**：钢格栅、钢格板、钢护栏（球接栏杆）、舾装件、管支架、电仪支撑等
- **市场**：中国 + 澳大利亚项目业绩
- **域名**：`www.stonmetal.cn`（[CNAME](file:///d:/Program/TraeProject/YTZS-OfficialWebsite/CNAME)）
- **托管**：GitHub Pages（静态站点，无服务端）

### 1.2 技术栈现状
- 纯静态 HTML，**无构建工具、无 package.json、无框架**
- Bootstrap 5.3.0（jsdelivr CDN 引入）提供栅格 + 轮播 + 表单组件
- 自定义 CSS 仅 27 行：[style.css](file:///d:/Program/TraeProject/YTZS-OfficialWebsite/style.css)（bg 图、hr、btn、rectangle_icon、en_desc）
- 原生 JS 表单处理：[form-submission-handler.js](file:///d:/Program/TraeProject/YTZS-OfficialWebsite/form-submission-handler.js)（honeypot 防垃圾 + XHR 提交）
- Google Ads / Analytics gtag（AW-11440963960，转化追踪）
- 表单后端：Google Apps Script → Google Sheet → 自动发邮件（用户已确认保留）

### 1.3 文件结构
- [index.html](file:///d:/Program/TraeProject/YTZS-OfficialWebsite/index.html) — 根，仅做 JS 语言跳转（zh-CN → /zh，其余 → /en），body 为空
- [zh/index.html](file:///d:/Program/TraeProject/YTZS-OfficialWebsite/zh/index.html) — 中文单页，约 408 行
- [en/index.html](file:///d:/Program/TraeProject/YTZS-OfficialWebsite/en/index.html) — 英文单页，约 432 行，结构与中文几乎完全重复
- 单页区块（锚点）：`#AboutUs` `#OurValue` `#OurProducts` `#OurTeam` `#Contact` `#SendMessage`
- `img/` — 9 张图，多张过大（见 1.5）
- [sitemap.xml](file:///d:/Program/TraeProject/YTZS-OfficialWebsite/sitemap.xml) — 停留 2023-11-12
- [CNAME](file:///d:/Program/TraeProject/YTZS-OfficialWebsite/CNAME) — `www.stonmetal.cn`

### 1.4 响应式现状
- 已用 Bootstrap 栅格（col-md/col-lg）+ viewport meta，理论可适配
- **但移动端体验弱**：
  - 无导航栏 / 汉堡菜单，落地后无法跳转区块
  - Hero `height: 100vh` + `display-3` 大字在手机上易溢出
  - 图片无 srcset / 响应式变体
  - 中英文两份 HTML 重复，维护成本高

### 1.5 图片体积（拖累移动端 LCP / Core Web Vitals）
| 文件 | KB |
|---|---|
| vessel_handrail.jpg | 768 |
| steel_grating.jpg | 749 |
| handrail.jpg | 699 |
| drainage_cover.jpg | 635 |
| our_team.jpg | 298 |
| bg.png | 262 |
| outfitting.jpg | 216 |
| map_en.png | 148 |
| iso_9001.jpg | 13 |
| logo.ico | 2 |

### 1.6 已发现的问题 / Bug
1. **[en/index.html](file:///d:/Program/TraeProject/YTZS-OfficialWebsite/en/index.html#L2) `lang="zh-CN"` 误标**（应为 `en`）— SEO 问题
2. 每页含**两个 `<h1>`**（hero 中英双标题）— 应只保留一个
3. **根 [index.html](file:///d:/Program/TraeProject/YTZS-OfficialWebsite/index.html) 为空 body 的 JS 跳转** — 爬虫抓不到内容，SEO 不友好
4. [en/index.html](file:///d:/Program/TraeProject/YTZS-OfficialWebsite/en/index.html#L31-L57) `showThankYouMessage()` 重复绑定 gtag 转化监听（已在外层 load 绑过一次）
5. **无 robots.txt**
6. **无 hreflang / canonical / JSON-LD / OG 标签**
7. [sitemap.xml](file:///d:/Program/TraeProject/YTZS-OfficialWebsite/sitemap.xml) 引用了不存在的团队头像图（Li_huipeng.jpg、Li_mengran.jpg、Xu_xiaoxia.jpg）
8. 大图未优化，无 srcset，无 WebP/AVIF

---

## 二、已确认的决策

| # | 决策项 | 结论 | 来源 |
|---|---|---|---|
| D1 | **技术架构** | 迁移到 **Astro** | 用户选择（推荐项） |
| D2 | **内容更新范围** | 文案/公司介绍 + 产品信息 + 联系方式/资质 + 图片素材 | 用户多选确认 |
| D3 | **留言表单后端** | **保留** Google Apps Script → Google Sheet → 自动发邮件（Astro 静态页可直接 POST，无需 JS） | 用户要求保留 |
| D4 | **表单备选方案** | 若后续想要托管型：Formspark / Formspree（备选，当前不切换） | 用户开放，我已评估当前方案足够 |
| D5 | **SEO 目标** | 面向 Google / Bing / 百度，旧失效 SEO 内容可改/删 | 用户要求 |
| D6 | **托管与 URL** | 继续 GitHub Pages；**保留 `/zh` `/en` URL 结构**（不损失既有收录与外链） | 我方决策（SEO 友好） |
| D7 | **样式方案（拟）** | 迁移后继续用 Bootstrap（npm 引入，复用现有视觉与团队熟悉度），降低学习成本 | 我方建议，可在评审时推翻 |

---

## 三、待定夺的开放问题（⚠️ 阻塞实施 — 需用户最终选择）

### 站点结构：单页 vs 多页 vs 混合

用户原话：「我正在评估是否把单页面改为多页面，比如在导航栏链接到产品信息页面、联系方式页面等，但我现在还没完全确定是否这样调整。」

**三个选项（含我方推荐）**：

#### 选项 A：多页面（⭐ 推荐）
- 拆为：`/` 首页 · `/products` 产品列表 · `/products/[slug]` 产品详情 · `/about` 关于我们 · `/contact` 联系我们
- **每个产品类别独立详情页**，各自独立 title / meta / 关键词 → **SEO 最强**，产品也易扩展
- Astro 文件路由让多页成本极低
- 影响路由、导航、SEO 每页关键词布局

#### 选项 B：混合
- 首页保持单页滚动（低打扰、保留现有品牌体验）
- 同时新增独立的产品详情页 `/products/[slug]` 吃 SEO
- 介于 A 与 C 之间

#### 选项 C：单页（改进现有）
- 保持现有单页 + 锚点导航，仅加粘性导航栏
- 最简单、上线最快
- 但每个产品无法独立被搜索引擎收录，SEO 提升有限

> **我方推荐 A**：B2B 供应商站点的核心 SEO 价值在于「每个产品/关键词簇拥有独立可收录页」，Astro 让多页几乎零成本。若担心改动过大，B 是稳妥折中。

---

## 四、拟实施计划草案（待开放问题确认后细化）

> 以下为骨架，待用户确认站点结构（A/B/C）后补全每步的具体文件与做法。

### 4.1 Astro 项目初始化
- 在仓库根新建 Astro 项目（保留原静态文件作迁移参考，最终替换）
- 集成：`@astrojs/sitemap`、`@astrojs/check`（TypeScript）
- 配置 `site: https://www.stonmetal.cn`，`i18n` 路由 `zh` / `en`
- GitHub Pages 部署适配（`outDir` / base 路径）

### 4.2 组件化重构（消除中英重复）
- 抽出共享组件：`Navbar`、`Hero`、`Section`、`Footer`、`LanguageSwitcher`、`ProductCard`
- i18n 内容层：单一翻译字典（JSON / content collection），一套布局出中英两套页面
- 保留 `/zh` `/en` URL 结构

### 4.3 响应式与移动端体验
- 移动优先布局；粘性导航栏 + 汉堡菜单
- 修复 Hero：响应式高度、`clamp()` 文字尺寸、单一 `<h1>`
- 站点结构按开放问题选项落地（A/B/C）

### 4.4 图片优化（Astro `<Image>`）
- 自动生成 WebP + 响应式 srcset，解决大图 LCP
- 大图压缩（vessel_handrail / steel_grating / handrail / drainage_cover 均需处理）
- Hero 背景图改为可语义化标记或优化加载

### 4.5 SEO 全套（Google / Bing / 百度）
- 每页独立 `<title>` / meta description / canonical
- `hreflang` 中英互指
- JSON-LD：`Organization` + `LocalBusiness`（含联系方式、地址、统一信用代码）
- Open Graph + Twitter Card
- 修 `lang` 标签（en 页改 `en`）
- 生成 `robots.txt`、自动 `sitemap.xml`（含图片 sitemap）
- 清理失效引用（不存在的团队头像图）
- 根路径处理：用真正落地页或 meta refresh / 301 替代空 body JS 跳转
- 提交到 Google Search Console / Bing Webmaster / 百度站长平台

### 4.6 留言表单迁移
- 复用 Google Apps Script 端点（D3）
- 移植 honeypot 防垃圾逻辑
- 保留 gtag 转化追踪（修掉重复绑定 bug）
- 保留感谢提示 UX（可升级为内联提示替代 `alert`）

### 4.7 内容更新（按 D2 范围）
- 文案/公司介绍、产品信息、联系方式/资质、图片素材 → 待用户提供具体新内容后填入 i18n 内容层
- 联系方式（电话/邮箱/地址/ISO 证书/统一信用代码）变更需用户给出最新值

### 4.8 部署
- GitHub Actions 自动构建 → 发布到 GitHub Pages
- 验证 CNAME 生效、URL 结构不变、收录不受损

### 4.9 验证清单
- [ ] PC + 移动端多断点浏览体验（375 / 768 / 1024 / 1440）
- [ ] Lighthouse：SEO / Performance / Accessibility / Best Practices ≥ 90
- [ ] Core Web Vitals（LCP / CLS / INP）达标
- [ ] sitemap / robots 可访问，hreflang 校验通过
- [ ] 留言表单提交 → 收到邮件
- [ ] 中英两套页面 lang / hreflang 正确

---

## 五、续接指引（用户回来后）

1. **请用户确认**：站点结构选 A / B / C（见第三节）
2. **请用户提供**：
   - 文案/公司介绍的新内容
   - 产品信息（分类、规格描述、新产品）
   - 联系方式/资质最新值（电话、邮箱、地址、ISO、统一信用代码）
   - 新图片素材（或确认沿用现有图，由我方优化压缩）
3. 确认后退出 Plan 模式，按第四节细化执行，使用 todo-list 逐步实施。
4. 实施时**先读本文件**刷新上下文，再按既定方案执行，不重新规划。
