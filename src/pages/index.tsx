import { useEffect, useState } from "react";
import path from "path";
import fs from "fs";
import { GetStaticProps } from "next";
import { useTranslation } from "react-i18next";
import Header from "@/components/header";
import LanguageSwitches from "@/components/languageSwitches";
import { Projects, ProjectType } from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

type HomeProps = {
  initialProjects: ProjectType[];
};

export default function Home({ initialProjects }: HomeProps): JSX.Element {
  const { i18n } = useTranslation("Common");

  const [projects, setProjects] = useState<ProjectType[]>(initialProjects);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `/locales/${i18n.language.split("-")[0]}/projects.json`,
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch projects for language: ${i18n.language}`,
          );
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [i18n.language]);

  return (
    <>
      <Header />
      <main>
        <LanguageSwitches />
        <Projects data={projects} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLanguage = locale?.startsWith("ja") ? "ja" : "en";
  const filePath = path.join(
    process.cwd(),
    "public",
    "locales",
    currentLanguage,
    "projects.json",
  );
  const jsonData = fs.readFileSync(filePath, "utf8");
  const projects: ProjectType[] = JSON.parse(jsonData);

  return {
    props: {
      initialProjects: projects,
    },
  };
};
