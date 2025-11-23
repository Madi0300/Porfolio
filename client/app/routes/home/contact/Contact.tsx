import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle, Mail, Phone, Send } from "lucide-react";
import style from "./Contact.module.scss";
import { useReveal } from "../useReveal";

type FormStatus = "idle" | "sending" | "success";

export default function Contact() {
  const { ref, showed } = useReveal<HTMLElement>();
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  useEffect(() => {
    let timeout: number | undefined;

    if (formStatus === "success") {
      timeout = window.setTimeout(() => setFormStatus("idle"), 2800);
    }

    return () => {
      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
  }, [formStatus]);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("sending");

    window.setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", contact: "", message: "" });
    }, 1400);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`${style.Contact} ${showed ? style.Contact_showed : ""}`}
    >
      <div className={style.Contact__container}>
        <div className={style.Contact__header}>
          <h2 className={style.Contact__title}>
            Расскажите о проекте — дам варианты решения и примерный бюджет в течение 24 часов
          </h2>
        </div>

        <div className={style.Contact__grid}>
          <div className={style.Contact__channels}>
            <div>
              <h4 className={style.Contact__question}>Где удобно обсудить?</h4>
              <div className={style.Contact__options}>
                <a
                  className={`${style.Contact__option} ${style.Contact__option_blue}`}
                  href="https://t.me/your_username"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={style.Contact__optionIcon}>
                    <Send size={18} />
                  </div>
                  <div className={style.Contact__optionText}>
                    <span className={style.Contact__optionTitle}>Telegram</span>
                    <span className={style.Contact__optionHint}>Самый быстрый ответ</span>
                  </div>
                </a>

                <a
                  className={`${style.Contact__option} ${style.Contact__option_green}`}
                  href="https://wa.me/77000000000"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={style.Contact__optionIcon}>
                    <Phone size={18} />
                  </div>
                  <div className={style.Contact__optionText}>
                    <span className={style.Contact__optionTitle}>WhatsApp</span>
                  </div>
                </a>

                <a className={style.Contact__option} href="mailto:your.email@gmail.com">
                  <div className={style.Contact__optionIcon}>
                    <Mail size={18} />
                  </div>
                  <div className={style.Contact__optionText}>
                    <span className={style.Contact__optionTitle}>Email</span>
                  </div>
                </a>
              </div>
            </div>

            <div className={style.Contact__note}>
              "Не уверены в ТЗ? Напишите «Хочу консультацию» — созвонимся на 15 минут, и я помогу
              сформулировать задачи."
            </div>
          </div>

          <form className={style.Contact__form} onSubmit={handleSubmit}>
            <label className={style.Contact__label}>
              <span className={style.Contact__labelText}>Как вас зовут</span>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Иван"
                className={style.Contact__input}
                type="text"
              />
            </label>

            <label className={style.Contact__label}>
              <span className={style.Contact__labelText}>Телефон или Telegram</span>
              <input
                required
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="+7 777 ... или @username"
                className={style.Contact__input}
                type="text"
              />
            </label>

            <label className={style.Contact__label}>
              <span className={style.Contact__labelText}>О проекте</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={style.Contact__textarea}
                rows={4}
                placeholder="Опишите задачу: что за бизнес, что хотите улучшить, есть ли дизайн..."
              />
            </label>

            <button
              type="submit"
              className={`${style.Contact__submit} ${
                formStatus === "success" ? style.Contact__submit_success : ""
              }`}
              disabled={formStatus === "sending" || formStatus === "success"}
            >
              {formStatus === "sending"
                ? "Отправка..."
                : formStatus === "success"
                  ? "Отправлено"
                  : "Получить предложение"}
              {formStatus === "success" ? <CheckCircle size={18} /> : <ArrowRight size={18} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
