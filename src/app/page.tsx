import fs from "fs";
import path from "path";
import Header from "@/components/header";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { Works, WorkType } from "@/components/works";

const HomePage = async () => {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const works: WorkType[] = JSON.parse(jsonData);

  return (
    <>
      <Header />
      <main>
        <Works data={works} />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
