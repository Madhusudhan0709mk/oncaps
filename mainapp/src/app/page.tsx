import { Footer } from "@/components/sections/Footer";
import { LogoTicker } from "@/components/sections/LogoTicker";
import { Navbar } from "@/components/sections/Navbar";
import Style from "@/components/Style";


export default function Home() {
  return (
    <>
    
    <Navbar />
    <Style />
 
    <LogoTicker/>
    <Footer />
   
    </>
  );
}
