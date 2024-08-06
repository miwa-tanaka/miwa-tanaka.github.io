import styles from "@/styles/works.module.scss";
import NewTabIcon from "@/components/newTabIcon";

export type WorkType = {
  id: number;
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

type WorksProps = {
  data: WorkType[];
};

export function Works({ data }: WorksProps): JSX.Element {
  return (
    <section className={styles.worksWrapper}>
      <ul className={styles.worksContents}>
        {data.map((v, k) => (
          <li key={k} className={styles.worksItem}>
            <ul>
              <li>
                <p className={styles.name}>{v.name}</p>
              </li>
              <li className={styles.image}>
                <a href={v.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={v.image}
                    loading="lazy"
                    width="600"
                    height="300"
                    alt={v.name}
                  />
                </a>
              </li>
              <li className={styles.details}>
                <span className={styles.title}>Overview:</span>
                <p>{v.overview}</p>
              </li>
              <li className={styles.details}>
                <ul className={styles.techDetails}>
                  <span className={styles.title}>Technologies Used:</span>
                  <li>
                    <span className={styles.techDetailsTitle}>Frontend:</span>
                    {v.front}
                  </li>
                  <li>
                    <span className={styles.techDetailsTitle}>Hosting:</span>
                    {v.hosting}
                  </li>
                  <li className={styles.alignCenter}>
                    <span className={styles.techDetailsTitle}>Design:</span>
                    {v.designLink ? (
                      <a
                        href={v.designLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.alignCenter}
                      >
                        {v.design}
                        <NewTabIcon />
                      </a>
                    ) : (
                      <span>{v.design}</span>
                    )}
                  </li>
                </ul>
              </li>
              <li className={styles.details}>
                <span className={styles.title}>
                  Challenges and Problem Solving:
                </span>
                <p>{v.challenges}</p>
              </li>
              {v.repository && (
                <li
                  className={`
                  ${styles.details} ${styles.alignCenter}
                `}
                >
                  <span className={styles.title}>Repository:</span>
                  <a
                    href={v.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {v.repository}
                  </a>
                  <NewTabIcon />
                </li>
              )}
              <li
                className={`
                  ${styles.details} ${styles.alignCenter}
                `}
              >
                <span className={styles.title}>Link:</span>
                <a href={v.link} target="_blank" rel="noopener noreferrer">
                  {v.link}
                </a>
                <NewTabIcon />
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
