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
                <h3>Overview:</h3>
                <p>{v.overview}</p>
              </div>
              <div className={styles.section}>
                <h3>Technologies Used:</h3>
                <ul className={styles.techDetails}>
                  <li>
                    <span>Frontend:</span>
                    {v.front}
                  </li>
                  <li>
                    <span>Hosting:</span>
                    {v.hosting}
                  </li>
                  <li className={styles.alignCenter}>
                    <span>Design:</span>
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
                <h3>Challenges and Problem Solving:</h3>
                <p>{v.challenges}</p>
              </div>
              {v.repository && (
                <div className={styles.section}>
                  <h3>Repository:</h3>
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
                <h3>Link:</h3>
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
