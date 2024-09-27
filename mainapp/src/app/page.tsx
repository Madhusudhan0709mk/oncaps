import { Footer } from "@/components/sections/Footer";
import { LogoTicker } from "@/components/sections/LogoTicker";
import { Navbar } from "@/components/sections/Navbar";
import Style from "@/components/Style";
import Filter from "@/components/Filter";
import List from "@/components/List";
import { AccordionDemo } from "@/components/sections/Accordian";
import {Pricing} from "@/components/sections/Pricing"
import { LoginForm } from "@/components/auth/Login";
import { SignUp } from "@/components/auth/SignUp";
import { Dashboard } from "@/components/User/Profile";

export default function Home() {
  return (
    <>
    
    <Navbar />
    <Style />
    <Filter />
    <List />
    <AccordionDemo />
    <Pricing />
    <LogoTicker/>
    <LoginForm />
    <br></br>
    
    <br></br>

    <SignUp />
    <Footer />
   
    </>
  );
}
