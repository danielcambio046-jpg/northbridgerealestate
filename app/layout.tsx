import "./globals.css";
import { Providers } from "./providers";
import { Nav } from "./nav";

export const metadata = {
  title: "NorthBridge Real Estate",
  description: "Bridging Opportunity Between Emerging Markets and Global Investors",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
