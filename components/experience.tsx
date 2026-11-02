import { Section, cardClass } from "@/components/section";
import { accentAt } from "@/components/accents";

const expertiseAreas = [
  {
    title: "LLM・AIチャットボット",
    description:
      "おりこうAIコンシェルジュでは、Webサイトに設置する生成AIチャットボットの機能を実装しました。ソウルシンクではOpenAI APIで相性診断のレポートを自動生成し、プロンプトの調整で精度を上げています。オンライン講義では、試験時のAI顔認証と自動採点も組み込みました。",
  },
  {
    title: "業務システム・SaaS",
    description:
      "出張買取プラスでは要件定義から運用まで担当し、本部・加盟店・スタッフの権限管理や、WebSocketによる予約のリアルタイム同期を実装しました。物流向けのタイヤ保管・入出庫管理や在庫管理システムも手がけています。Excel VBAの基幹システムでは、約120名が使う仕組みを4名のチームでリードしました。",
  },
  {
    title: "EC・Webサイト",
    description:
      "LA・JOLLA HALEではShopifyでテーマを組んでStripe決済を導入し、FASではNext.jsとCMSでECサイトのフロントエンドを担当しました。tomoLinksやL'Oréal Paris Japanなど、デザインからWordPressでの構築まで行ったコーポレートサイトも多数あります。",
  },
  {
    title: "モバイル・外部サービス連携",
    description:
      "もし活ではFlutterとFirebaseでアプリを作り、SalesforceのCRM連携、SendGridのメール配信、FCMのプッシュ通知までつなげました。マッチングアプリではWebSocketのリアルタイムチャットとStripe課金を担当しています。FlutterFlowなどのローコードも使います。",
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
