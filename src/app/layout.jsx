
import "./styles/index.css";
import "./styles/home.css";
import { Providers } from "./providers";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Campuslands",
  description: "Bootcamp",
};

export const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}