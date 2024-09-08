import styles from "@/styles/works.module.scss";
import NewTabIcon from "@/components/newTabIcon";
import { useTranslation } from "react-i18next";

export type ProjectType = {
  name: string;
  overview: string;
  link: string;
  repository?: string;
  image: string;
  front: string;
  hosting: string;
  design: string;
  designLink?: string;
  challenges: string;
};

type ProjectProps = {
  data: ProjectType[];
};

export function Projects({ data }: ProjectProps): JSX.Element {
  const { t } = useTranslation("Common");

  return (
    <section className={styles.worksWrapper} aria-label="projects">
      <ul className={styles.worksContents}>
        {data.map((v, k) => (
          <li key={k} className={styles.worksItem}>
            <div>
              <h2 className={styles.name}>{v.name}</h2>
              <a
                href={v.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.image}
                aria-label={`Screenshot: ${v.name} (opens in a new tab)`}
              >
                <img
                  src={v.image}
                  loading="lazy"
                  width="600"
                  height="300"
                  alt={v.name}
                />
              </a>
              <div className={styles.section}>
                <h3>{t("OVERVIEW")}:</h3>
                <p>{v.overview}</p>
              </div>
              <div className={styles.section}>
                <h3>{t("TECH_STACK")}:</h3>
                <ul className={styles.techDetails}>
                  <li>
                    <span>{t("FRONTEND")}:</span>
                    {v.front}
                  </li>
                  <li>
                    <span>{t("HOSTING")}:</span>
                    {v.hosting}
                  </li>
                  <li className={styles.alignCenter}>
                    <span>{t("DESIGN")}:</span>
                    {v.designLink ? (
                      <a
                        href={v.designLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {v.design}
                        <NewTabIcon />
                      </a>
                    ) : (
                      <>{v.design}</>
                    )}
                  </li>
                </ul>
              </div>
              <div className={styles.section}>
                <h3>{t("CHALLENGES")}:</h3>
                <p>{v.challenges}</p>
              </div>
              {v.repository && (
                <div className={styles.section}>
                  <h3>{t("REPOSITORY")}:</h3>
                  <a
                    href={v.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {v.repository}
                    <NewTabIcon />
                  </a>
                </div>
              )}
              <div className={styles.section}>
                <h3>{t("LINK")}:</h3>
                <a href={v.link} target="_blank" rel="noopener noreferrer">
                  {v.link}
                  <NewTabIcon />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
