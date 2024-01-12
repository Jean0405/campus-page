
import "./styles/index.css";
import { Providers } from "./providers";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Campuslands",
  description: "Bootcamp",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}