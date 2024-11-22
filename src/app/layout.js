import "primereact/resources/themes/mira/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Plus_Jakarta_Sans } from "next/font/google";
import styles from "./globals.css";
// import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Khairi Ubaidah | Coder & Designer",
  description: "Khairi's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.className}>
      <body
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: 0,
          margin: 0,
          overflowX: "hidden",
        }}
      >
        <Navbar />
        <div style={{ flex: 1 }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}

// export const metadata = {
//   title: "JDT CMS",
//   description: "Japan Dream Tour Co., Ltd. Content Management Services",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
{
  /* <body className={styles.content}>
  <Navbar />
  <div style={{ flex: 1 }}>{children}</div>
  <Footer />
</body>; */
}
//     </html>
//   );
// }
