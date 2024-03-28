import { Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "The To Do Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} flex flex-col justify-between min-h-screen bg-[rgb(242,242,247)] dark:bg-[rgb(28,28,30)] dark:text-white text-black`}>
        <ErrorBoundary>
          {children}
          <Footer/>
        </ErrorBoundary>
      </body>
    </html>
  );
}
