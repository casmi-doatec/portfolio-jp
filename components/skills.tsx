import { Section, cardClass } from "@/components/section";
import { accentAt } from "@/components/accents";

const categories = [
  {
    title: "AI・LLM",
    en: "Artificial Intelligence",
    skills: ["OpenAI API", "Anthropic Claude API", "Google Gemini API", "Dify", "LangChain", "LangGraph", "RAG", "AI Agent開発", "MCP", "プロンプトエンジニアリング"],
  },
  {
    title: "フロントエンド",
    en: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Tailwind CSS", "HTML / CSS", "PWA"],
  },
  {
    title: "バックエンド",
    en: "Backend",
    skills: ["Python / FastAPI / Django", "Node.js / NestJS / Express", "PHP / Laravel / Yii", "Ruby on Rails", "C# / .NET", "REST API", "WebSocket / WebRTC"],
  },
  {
    title: "データベース",
    en: "Database",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "Redis", "Supabase", "Firebase Firestore", "Prisma", "Entity Framework"],
  },
  {
    title: "クラウド・インフラ",
    en: "Cloud / Infrastructure",
    skills: ["AWS (EC2 / ECS / Lambda / S3 / RDS)", "GCP", "Azure", "Docker", "Terraform", "Vercel", "Apache"],
  },
  {
    title: "モバイルアプリ",
    en: "Mobile",
    skills: ["Flutter", "Dart", "React Native", "Firebase", "FCM"],
  },
  {
    title: "ノーコード・ローコード",
    en: "No-code / Low-code",
    skills: ["FlutterFlow", "Bubble"],
  },
  {
    title: "EC・CMS・決済",
    en: "E-commerce / CMS / Payment",
    skills: ["WordPress", "Shopify / Liquid", "Stripe"],
  },
  {
    title: "外部サービス連携",
    en: "Integrations",
    skills: ["Salesforce", "Twilio SendGrid", "Zendesk", "LINE連携", "Google Sign-In", "OpenStreetMap"],
  },
  {
    title: "業務自動化",
    en: "Automation",
    skills: ["Google Apps Script", "Excel VBA", "Access", "Power Query", "ADO / ODBC", "Webスクレイピング"],
  },
  {
    title: "AI・MLOps",
    en: "Machine Learning Ops",
    skills: ["PyTorch", "TensorFlow", "OpenCV", "vLLM", "Model Deployment"],
  },
  {
    title: "デザイン・開発ツール",
    en: "Design / Dev Tools",
    skills: ["Figma", "UI/UXデザイン", "Git / GitHub", "GitHub Copilot", "Microsoft Clarity"],
  },
];

export function Skills() {
  return (
    <Section id="skills" tone="blush" label="Skills" title="技術スタック" intro="AIからインフラまで一気通貫で対応">
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat, i) => {
          const accent = accentAt(i);
          return (
            <article key={cat.title} className={cardClass}>
              <div className="mb-4 flex items-center gap-3">
                <span className={`${accent.badge} inline-flex size-10 items-center justify-center rounded-full text-sm font-black`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-black leading-tight text-cocoa">{cat.title}</h3>
                  <p className="text-[11px] font-bold tracking-wider text-cocoa-soft">{cat.en}</p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className={`${accent.chip} rounded-full px-3 py-1 text-xs font-bold`}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
