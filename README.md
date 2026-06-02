# [ISHI Blog](https://ishi.blog)

Next.js (App Router) + MDX で作る、シンプルなブログサイトです。

## 使い方

### 開発サーバー

```bash
npm run dev
```

`http://localhost:3000` で確認。

### 本番ビルド

```bash
npm run build
npm start
```

## 記事を書く

`content/posts/` に `.mdx` ファイルを1つ追加するだけで記事が増えます。
ファイル名（拡張子を除く）がそのまま URL の slug になります。

例: `content/posts/my-first-post.mdx` → `/posts/my-first-post`

### frontmatter

各ファイルの先頭に、次のメタ情報を書きます。

```yaml
---
title: "記事タイトル"
date: "2026-06-02"        # 新しい順で一覧に並ぶ
description: "短い説明"     # 一覧・メタ情報に使う
tags: ["タグA", "タグB"]   # /tags/タグ名 でまとめて読める
draft: false              # true にすると非公開（下書き）
---
```

本文は frontmatter の下に Markdown / MDX で書きます。

## 構成

| 場所 | 役割 |
| --- | --- |
| `content/posts/*.mdx` | 記事の本体 |
| `src/lib/posts.ts` | 記事の読み込み・一覧・タグ集計 |
| `src/app/page.tsx` | トップ（記事一覧） |
| `src/app/posts/[slug]/page.tsx` | 記事ページ |
| `src/app/tags/[tag]/page.tsx` | タグ別一覧 |
| `src/components/` | ヘッダー・テーマ切替・カード等 |

## 公開（デプロイ）

[Vercel](https://vercel.com) にこのリポジトリを連携して push すれば、設定なしで公開できます。

## 後から足しやすいもの

- シンタックスハイライト: `rehype-pretty-code` を MDX のプラグインに追加
- RSS: `src/app/feed.xml/route.ts` を追加し `getAllPosts()` を利用
- OGP 画像 / 検索 / ページネーション など
