import styles from "@/styles/contact.module.scss";
import NewTabIcon from "@/components/newTabIcon";

type ContactProps = {};

type contactData = {
  link: string;
  name: string;
};

export default function Contact({}: ContactProps): JSX.Element {
  const data: contactData[] = [
    { link: "https://github.com/miwa-tanaka", name: "Github" },
    { link: "https://www.linkedin.com/in/miwa-tanaka/", name: "LinkedIn" },
  ];

  return (
    <section className={styles.contactWrapper} aria-label="contact">
      <h2>Get In Touch</h2>
      <div className={styles.contactList}>
        {data.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.name}
            <NewTabIcon />
          </a>
        ))}
      </div>
    </section>
  );
}
