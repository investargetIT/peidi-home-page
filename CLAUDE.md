# 佩蒂官网（peidi-home-page）

React 19 + TypeScript + Vite + antd + Tailwind。页面在 `src/pages/`，新闻在
`src/pages/NewsCenter/News/components/News<N>/`，注册于
`News/RenderNews/index.tsx` 与 `News/constant.ts`。

## 硬性规则：不要用 Read 打开非 png/jpeg/webp 的图片

API 网关只接受这三种内联图片：`image/png`、`image/jpeg`、`image/webp`。

一旦用 Read 读了 `.gif`、`.ico`、`.bmp`、`.tiff`、`image/svg+xml` 等格式，工具结果会把
`image/gif` 这类块写进会话 transcript，之后**每一次请求都会失败**，且无法用 `/compact` 恢复：

```
API Error: 400 Only https image URLs are fetched ...
param: messages[N].content[1]
```

### 正确做法

```bash
# 先转换成网关可读格式，再 Read 输出文件
python scripts/img2webp.py <图片或目录>              # 转 webp（默认，取第 0 帧）
python scripts/img2webp.py <file> --png              # 转 png
python scripts/img2webp.py <file> --frame 5          # 动图取第 5 帧
python scripts/img2webp.py <dir> -o .tmpimg          # 指定输出目录
```

- 输出位置：默认 `%TEMP%\claude-img\`，文件名带路径哈希，重复执行会覆盖。
- 脚本会打印 `[safe]`（png/jpg/webp，直接 Read 即可）、`[ok]`（已转换）、
  `[skip]`（svg 等 Pillow 无法解码，需先截图成 png）。
- 依赖本机 Pillow（`python -c "import PIL"` 验证）。
- `.tmpimg/` 用完即删，不要提交。

### 本仓库里的坑

`News3 / News18 / News20~28 / News42 / News43 / News45` 的 `image1.gif`、
`News/images/cover3.gif`、`public/favicon.ico`、各 `play.svg` / `addr.svg` /
`email.svg` 都属于这类文件。

## 其他约定

- 新闻页结构：`components/News<N>/{index.tsx,index.less,images/}`，图片用 `import` 引入后
  `<img src={...} />`；封面图放 `News/images/cover<N>.jpg`。
- 改完跑 `pnpm build`（`tsc -b && vite build`）确认无类型错误。
- 临时抓取产物放 `.tmpnews/` 之类的临时目录，及时 `rm -rf`，不要进 git。
