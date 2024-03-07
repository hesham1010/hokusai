import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import NavComponent from "@/components/header/navs";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hokusai",
  description: "This is a tribute page of Hokusai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavComponent />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
