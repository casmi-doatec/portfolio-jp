const categories = [
  {
    title: "AI・LLM",
    en: "Artificial Intelligence",
    skills: ["OpenAI API", "Anthropic Claude API", "Google Gemini API", "LangChain", "LangGraph", "RAG", "AI Agent開発", "MCP"],
  },
  {
    title: "フロントエンド",
    en: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS"],
  },
  {
    title: "バックエンド",
    en: "Backend",
    skills: ["Python / FastAPI / Django", "Node.js / NestJS / Express", "PHP / Laravel", "Ruby on Rails"],
  },
  {
    title: "モバイルアプリ",
    en: "Mobile",
    skills: ["Flutter", "Dart", "React Native", "Firebase", "FCM"],
  },
  {
    title: "クラウド・インフラ",
    en: "Cloud / Infrastructure",
    skills: ["AWS (EC2 / ECS / Lambda / S3 / RDS)", "GCP", "Docker", "Terraform", "Vercel"],
  },
  {
    title: "データベース",
    en: "Database",
    skills: ["PostgreSQL", "MySQL", "Redis", "Supabase", "Firebase Firestore"],
  },
  {
    title: "AI・MLOps",
    en: "Machine Learning Ops",
    skills: ["PyTorch", "TensorFlow", "OpenCV", "vLLM", "Model Deployment"],
  },
  {
    title: "ノーコード・ローコード",
    en: "No-code / Low-code",
    skills: ["Bubble"],
  },
];

export function Skills() {
  return (
    <section id="skills">
      <h2>技術スタック (Skills)</h2>
      <p>AIからインフラまで一気通貫で対応</p>

      {categories.map((cat) => (
        <div key={cat.title}>
          <h3>
            {cat.title} ({cat.en})
          </h3>
          <ul>
            {cat.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
