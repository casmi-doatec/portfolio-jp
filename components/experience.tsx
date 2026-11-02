import { Section, cardClass } from "@/components/section";
import { accentAt } from "@/components/accents";

const expertiseAreas = [
  {
    title: "LLM・AIチャットボット",
    description:
      "Webサイトに設置する生成AIチャットボットの機能実装や、OpenAI APIを使った診断レポートの自動生成を手がけてきました。プロンプトを調整しながら回答の精度を上げています。オンライン講義の試験でのAI顔認証や自動採点など、AIをサービスの機能として組み込む開発も経験しています。",
  },
  {
    title: "業務システム・SaaS",
    description:
      "予約管理、在庫管理、物流の入出庫管理といった業務システムを、要件定義から設計・実装・運用保守まで担当してきました。Next.js・TypeScript・PostgreSQLを中心に、本部・加盟店・スタッフの多階層の権限管理、WebSocketによるリアルタイム同期、レポート集計や請求明細の出力などを実装しています。Excel VBAでは、約120名が使う基幹データ連携システムを4名のチームでリードしました。",
  },
  {
    title: "EC・Webサイト",
    description:
      "ShopifyではLiquidでカスタムテーマを作ってStripe決済を組み込み、Next.jsとCMSを組み合わせたECサイトではフロントエンドを担当しました。美容室、クリニック、パーソナルジムなどのサイトも、デザインからWordPressでの構築、ドメイン設定、公開まで一貫して対応しています。",
  },
  {
    title: "モバイル・外部サービス連携",
    description:
      "FlutterでiOS/Androidアプリを開発し、Firebaseの認証・データ管理、FCMのプッシュ通知、SalesforceのCRM連携、SendGridのメール配信までつなげてきました。マッチングアプリでは、WebSocketのリアルタイムチャットとStripeの課金機能も担当しています。FlutterFlowなどのローコードも使います。",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      tone="sky"
      label="Expertise"
      title="得意分野"
      intro="AIを絡めたプロダクト開発を、設計からリリースまでまるっと見れるのが強みです。「こういうのAIでできないかな？」という段階から一緒に考えます。"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {expertiseAreas.map((area, i) => (
          <article key={area.title} className={cardClass}>
            <span
              className={`${accentAt(i).badge} mb-4 inline-flex size-12 items-center justify-center rounded-full text-lg font-black`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-black text-cocoa md:text-xl">{area.title}</h3>
            <p className="mt-3 text-sm leading-8 text-cocoa/80">{area.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
