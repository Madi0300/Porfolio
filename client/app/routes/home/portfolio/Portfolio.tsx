import {
  CheckCircle,
  Clock,
  Cpu,
  Github,
  Layout,
  Smartphone,
  Zap,
} from "lucide-react";
import style from "./Portfolio.module.scss";
import { useReveal } from "../useReveal";

export default function Portfolio() {
  const { ref, showed } = useReveal<HTMLElement>();

  return (
    <section
      id="portfolio"
      ref={ref}
      className={`${style.Portfolio} ${showed ? style.Portfolio_showed : ""}`}
    >
      <div className={style.Portfolio__container}>
        <div className={style.Portfolio__header}>
          <div>
            <h2 className={style.Portfolio__title}>Избранные проекты</h2>
            <p className={style.Portfolio__subtitle}>Реальные задачи и измеримые результаты</p>
          </div>
          <a
            className={style.Portfolio__link}
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} />
            Смотреть код на GitHub
          </a>
        </div>

        <div className={style.Portfolio__grid}>
          <article className={`${style.Portfolio__card} ${style.Portfolio__card_featured}`}>
            <div className={style.Portfolio__label}>PET-PROJECT / IN PROGRESS</div>
            <div className={style.Portfolio__featuredBody}>
              <div className={style.Portfolio__visual}>
                <Cpu size={72} />
                <p className={style.Portfolio__visualCaption}>AI Interface</p>
              </div>
              <div className={style.Portfolio__content}>
                <h3 className={style.Portfolio__cardTitle}>AI English Learning Platform</h3>
                <div className={style.Portfolio__tags}>
                  <span className={style.Portfolio__tag}>EdTech</span>
                  <span className={style.Portfolio__tag}>React + Gemini API</span>
                </div>
                <p className={style.Portfolio__text}>
                  Обучающая платформа, заменяющая репетитора. ИИ не просто дает шаблоны, а создает уникальные
                  упражнения (SRS, эссе) под контекст пользователя.
                </p>
                <div className={style.Portfolio__result}>
                  <Clock size={18} />
                  <p>
                    <span className={style.Portfolio__resultAccent}>Результат:</span> Сократил время подготовки
                    персонального задания для студента с 20 минут до 5 секунд.
                  </p>
                </div>
                <div className={style.Portfolio__actions}>
                  <button type="button" className={style.Portfolio__button}>
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          </article>

          <article className={style.Portfolio__card}>
            <div className={style.Portfolio__thumb}>
              <Layout size={48} />
            </div>
            <div className={style.Portfolio__cardBody}>
              <div className={style.Portfolio__cardTop}>
                <h3 className={style.Portfolio__cardTitle}>E-Commerce Shop</h3>
                <span className={style.Portfolio__pill}>SPA</span>
              </div>
              <p className={style.Portfolio__text}>
                Полноценный интернет-магазин с каталогом, фильтрацией и корзиной.
              </p>
              <div className={style.Portfolio__resultInline}>
                <Zap size={16} />
                <p>
                  <strong>Результат:</strong> Каталог загружается менее 1 сек даже на 3G.
                </p>
              </div>
              <div className={style.Portfolio__meta}>
                <span>#React</span>
                <span>#Redux</span>
              </div>
            </div>
          </article>

          <article className={style.Portfolio__card}>
            <div className={style.Portfolio__thumb}>
              <Smartphone size={48} />
            </div>
            <div className={style.Portfolio__cardBody}>
              <div className={style.Portfolio__cardTop}>
                <h3 className={style.Portfolio__cardTitle}>Коллекция лендингов</h3>
                <span className={style.Portfolio__pill}>UI/Layout</span>
              </div>
              <p className={style.Portfolio__text}>Серия адаптивных лендингов с pixel-perfect версткой.</p>
              <div className={style.Portfolio__resultInline}>
                <CheckCircle size={16} />
                <p>
                  <strong>Результат:</strong> 100% соответствие макетам Figma. Green Zone по PageSpeed.
                </p>
              </div>
              <div className={style.Portfolio__meta}>
                <span>#HTML/SCSS</span>
                <span>#Animation</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
