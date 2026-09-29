import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.stonmetal.cn',
  output: 'static',
  integrations: [
    sitemap({
      // i18n: 自动生成 hreflang 交替链接
      // locales 的 key 是 URL 中的路径片段（如 /en/ 中的 "en"）
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          zh: 'zh-CN',
        },
      },
      // serialize: 为每个 URL 设定 changefreq / priority / lastmod
      serialize(item) {
        const url = item.url;
        const isMain = url.endsWith('/zh/') || url.endsWith('/en/');
        // 用当前构建日期作为 lastmod，每次 build 自动更新
        const now = new Date().toISOString().slice(0, 10);
        return {
          ...item,
          changefreq: 'monthly',
          priority: isMain ? 1.0 : 0.3,
          lastmod: now,
        };
      },
      // customPages: 补充根路径（跳转页）
      customPages: [
        'https://www.stonmetal.cn/',
      ],
    }),
  ],
});
