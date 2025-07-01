import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const workSans = Work_Sans({
  subsets:["latin"]
})

export const metadata = {
  title: "Deep Chakraborty",
  description: "Portfolio Website of Deep Chakraborty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
