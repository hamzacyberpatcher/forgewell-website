import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Qaulity from "./components/Quality"
import Companies from "./components/Companies";
import { Explore } from "./components/Explore";

export default function Home() {
  return (
    <div>  
      <Hero />
      <AboutUs />
      <Qaulity />
      <Companies />
      <Explore />
    </div>
  );
}
