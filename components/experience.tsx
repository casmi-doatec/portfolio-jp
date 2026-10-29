const expertiseAreas = [
  {
    title: "LLM・RAG・AIエージェント",
    description:
      "OpenAI・Claude APIを使ったチャットボットや社内ドキュメント検索（RAG）、要約・分類・レポート自動生成など幅広く実装してきました。LangChainやPinecone・pgvectorと組み合わせながらプロンプトを調整して精度を上げ、現場で実際に使えるレベルに仕上げるのが得意です。",
  },
  {
    title: "AIを組み込んだプロダクト開発",
    description:
      "WebアプリにAI機能をそのまま組み込みます。AI顔認証・自動採点・画像認識・相性診断レポートなど、UIからバックエンドの推論APIまで一人でまとめて設計・実装してきました。OpenCV・PyTorch・Whisperを使った画像・音声処理の経験もあります。",
  },
  {
    title: "Webシステム・SaaS・EC",
    description:
      "Next.js・FastAPI・Node.js・Laravelを使ったフルスタック開発が得意です。予約管理・在庫管理・ECサイト・SaaSなど、Supabase（認証・DB・Storage）・Stripe決済・WebSocket/WebRTCリアルタイム通信・PWAまで、必要な機能をまとめて実装します。",
  },
  {
    title: "モバイル・外部サービス連携",
    description:
      "FlutterでのiOS/Androidアプリ開発をはじめ、Salesforce・Kintone・ShopifyなどのSaaS連携、REST API設計、Firebase認証・FCMプッシュ通知まで対応しています。既存の業務システムとAI・Webサービスをつなぐ統合開発も得意です。",
  },
];

export function Experience() {
  return (
    <section id="experience">
      <h2>得意分野 (Expertise)</h2>
      <p>
        AIを絡めたプロダクト開発を、設計からリリースまでまるっと見れるのが強みです。「こういうのAIでできないかな？」という段階から一緒に考えます。
      </p>

      {expertiseAreas.map((area) => (
        <article key={area.title}>
          <h3>{area.title}</h3>
          <p>{area.description}</p>
        </article>
      ))}
    </section>
  );
}
