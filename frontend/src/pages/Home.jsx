import Categories from "../components/Categories";
import Hero from "../components/Hero";
import NewsLetter from "../components/NewsLetter";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      
      <NewsLetter />
      <Testimonial />
    </div>
  );
};
export default Home;