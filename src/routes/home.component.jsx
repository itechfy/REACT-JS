import { Outlet } from "react-router-dom";
import categories from "../data/categories";
import Categories from "../components/categories/categories.component";
import Hero from "../components/hero/hero.component";
const Home = () => {
  return (
    <div>
      <Outlet />
      <Hero
        title="Welcome to Nike"
        sub_title="Bringing you the elite fashion outlets to nail out there. "
      >
        <div className="gif"></div>
      </Hero>
      <Categories categories={categories} />
    </div>
  );
};

export default Home;
