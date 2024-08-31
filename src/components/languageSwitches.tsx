import { useState, useEffect } from "react";
import styles from "@/styles/LanguageSwitches.module.scss";
import { useTranslation } from "react-i18next";

type LanguageSwitchesProps = {};

export default function LanguageSwitches({}: LanguageSwitchesProps): JSX.Element {
  const { i18n } = useTranslation();
  const [announcement, setAnnouncement] = useState<string>("");

  const changeLanguage = (lng: string) => {
    if (lng !== i18n.language) {
      i18n.changeLanguage(lng);
      localStorage.setItem("preferredLanguage", lng);
      setAnnouncement(
        lng === "en"
          ? "Language switched to English"
          : "言語が日本語に切り替わりました",
      );
    }
  };

  const currentLanguage = i18n.language.split("-")[0];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnnouncement("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [announcement]);

  return (
    <section className={styles.wrapper}>
      <button
        onClick={() => changeLanguage("en")}
        lang="en"
        aria-label="Switch language to English"
        className={currentLanguage === "en" ? styles.active : ""}
        aria-pressed={currentLanguage === "en"}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("ja")}
        lang="ja"
        aria-label="言語を日本語に切り替える"
        className={currentLanguage === "ja" ? styles.active : ""}
        aria-pressed={currentLanguage === "ja"}
      >
        にほんご
      </button>
      <div
        aria-live="polite"
        aria-atomic="true"
        className={styles.announcement}
        role="status"
      >
        {announcement}
      </div>
    </section>
  );
}
