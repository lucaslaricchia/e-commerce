import Header from "@components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "The best e-commerce ever",
  description: "By L.Laricchia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
