
import { Providers } from "./providers";
import "./styles/index.css";

export const metadata = {
  title: "Campuslands",
  description: "Bootcamp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}