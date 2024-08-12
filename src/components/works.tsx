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
      <div className={styles.worksContents}>
        {data.map((v, k) => (
          <div key={k} className={styles.worksItem}>
            <div>
              <p className={styles.name}>{v.name}</p>
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
              <p>
                <span>Overview:</span>
                <br />
                {v.overview}
              </p>
              <p>
                <span>Technologies Used:</span>
              </p>
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
                    <span>{v.design}</span>
                  )}
                </li>
              </ul>
              <p>
                <span>Challenges and Problem Solving:</span>
                <br />
                {v.challenges}
              </p>
              {v.repository && (
                <p>
                  <span>Repository:</span>
                  <br />
                  <a
                    href={v.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {v.repository}
                    <NewTabIcon />
                  </a>
                </p>
              )}
              <p>
                <span>Link:</span>
                <br />
                <a href={v.link} target="_blank" rel="noopener noreferrer">
                  {v.link}
                  <NewTabIcon />
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
