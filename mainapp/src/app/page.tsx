import { Footer } from "@/components/sections/Footer";
import { LogoTicker } from "@/components/sections/LogoTicker";
import { Navbar } from "@/components/sections/Navbar";
import Style from "@/components/Style";
import Filter from "@/components/Filter";
import List from "@/components/List";
import { AccordionDemo } from "@/components/sections/Accordian";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";


export default function Home() {
  const videoSrc= "https://www.youtube.com/embed/c2ty60dAZ3s?si=qgplVmbzakY6645o";
  const thumbnailSrc="https://www.google.co.in/imgres?q=yt%20thumbnail&imgurl=https%3A%2F%2Fcdn.kwork.com%2Fpics%2Ft3%2F83%2F26221220-64274e0b7a7eb.jpg&imgrefurl=https%3A%2F%2Fkwork.com%2Fsmm-design%2F26221220%2Fdesign-eye-catching-youtube-thumbnails-to-increase-more-views&docid=o7NSm77DMQx_5M&tbnid=rsNb2nfWyS9K4M&vet=12ahUKEwjQ6riI9eOIAxUL2jgGHVkIBaYQM3oECHQQAA..i&w=660&h=440&hcb=2&ved=2ahUKEwjQ6riI9eOIAxUL2jgGHVkIBaYQM3oECHQQAA";
  return (
    <>
    
    <Navbar />
    <Style />
    <Filter />
    <List />
    <br></br>
    
    <br></br>
    <div className="h-3/4 w-1/2 mx-auto">

    <HeroVideoDialog videoSrc={videoSrc} thumbnailSrc={thumbnailSrc}/>
    </div>
    <br></br>
    
    <br></br>
    <AccordionDemo />
    <br></br>
    
    <br></br>
    <LogoTicker/>
   
    <br></br>
    
    <br></br>

    <Footer />
   
    </>
  );
}
