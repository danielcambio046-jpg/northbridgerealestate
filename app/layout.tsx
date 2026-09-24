import "./globals.css";
import { Providers } from "./providers";
import { Nav } from "./nav";

export const metadata = {
  title: "NorthBridge — Venezuela Property & Investment Advisory",
  description: "Identify risk. Verify facts. Structure the opportunity. Venezuela real estate intelligence for international investors.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
