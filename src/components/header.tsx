import { Archivo_Black } from "next/font/google";
import styles from "@/styles/header.module.scss";

const archivo_black = Archivo_Black({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

type HeaderProps = {};

export default function Header({}: HeaderProps): JSX.Element {
  return (
    <header className={styles.header}>
      <h1 className={archivo_black.className}>Miwa Tanaka</h1>
    </header>
  );
}
