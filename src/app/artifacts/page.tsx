import Link from "next/link";
import { ArtifactCard } from "@/components/ArtifactCard";

export default function Home() {

  return (
    <div>
      <div>
        <ArtifactCard artifact={{
          title: "mien.jp",
          link: "https://mien.jp/",
          description: "親が経営している中華料理屋のホームページ"
        }} />

        <ArtifactCard artifact={{
          title: "健康管理アプリ",
          link: "https://my-hea1th.netlify.app/",
          description: "食事/体重/筋トレの記録を管理するためのアプリ"
        }} />

        <ArtifactCard artifact={{
          title: "デジタル本棚",
          link: "https://my-bookshelf-158547558797.asia-northeast1.run.app/bookshelf",
          description: "持っている紙製の本を管理するためのアプリ"
        }} />

        <ArtifactCard artifact={{
          title: "筋トレ用語",
          link: "https://claude.ai/public/artifacts/e9b49868-f4ed-4e14-bc6f-cde40dc909d0",
          description: "筋トレ用語、中国語/日本語/英語"
        }} />

        <ArtifactCard artifact={{
          title: "ソールライクゲーム",
          link: "https://claude.ai/public/artifacts/2b52f25e-0e8e-4381-8c38-e8bbc84065cb",
          description: "２DソールライクWebゲーム"
        }} />

        <ArtifactCard artifact={{
          title: "前頭葉テスト",
          link: "https://claude.ai/public/artifacts/d7e5e15b-2cd8-4986-a735-7690c059573c",
          description: "前頭葉の健康診断アプリ"
        }} />

        <ArtifactCard artifact={{
          title: "旅行先国選定",
          link: "https://claude.ai/public/artifacts/8bdef560-f49f-4639-8990-d705bae9b9f8",
          description: "9月の長期休暇は海外旅行したいけど3カ国で迷っているので比較してみたアプリ"
        }} />
      </div>
    </div>
  );
}
