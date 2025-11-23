import { Database, Layout, Zap } from "lucide-react";
import style from "./Stack.module.scss";
import { useReveal } from "../useReveal";

const stackItems = [
  {
    title: "Frontend",
    description:
      "Современный стек → быстрые интерфейсы и лёгкая поддержка проекта.",
    icon: <Layout size={22} />,
    color: "blue",
    tags: ["React", "Redux Toolkit", "TypeScript", "SCSS", "HTML5/CSS3"],
  },
  {
    title: "Backend",
    description:
      "Надёжная серверная часть → стабильная работа и готовность к росту нагрузки.",
    icon: <Database size={22} />,
    color: "green",
    tags: ["Node.js", "Express", "PostgreSQL", "SQLite", "Supabase"],
  },
  {
    title: "AI Acceleration",
    description:
      "Использую топовые нейросети для ускорения разработки в 2-3 раза.",
    icon: <Zap size={22} />,
    color: "purple",
    tags: ["Gemini 2.5 Pro", "GPT-5 Thinking", "Deep Research", "Git"],
  },
];

export default function Stack() {
  const { ref, showed } = useReveal<HTMLElement>();

  return (
    <section
      id="stack"
      ref={ref}
      className={`${style.Stack} ${showed ? style.Stack_showed : ""}`}
    >
      <div className={style.Stack__container}>
        <div className={style.Stack__header}>
          <h2 className={style.Stack__title}>Технологии, которые работают на вас</h2>
          <p className={style.Stack__subtitle}>
            Подбираю инструменты под задачу, чтобы продукт был быстрым, стабильным и готовым к росту.
          </p>
        </div>

        <div className={style.Stack__grid}>
          {stackItems.map((item) => (
            <article
              key={item.title}
              className={`${style.Stack__card} ${style[`Stack__card_${item.color}`]}`}
            >
              <div className={style.Stack__icon}>{item.icon}</div>
              <h3 className={style.Stack__cardTitle}>{item.title}</h3>
              <p className={style.Stack__cardText}>{item.description}</p>
              <div className={style.Stack__tags}>
                {item.tags.map((tag) => (
                  <span key={tag} className={style.Stack__tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
