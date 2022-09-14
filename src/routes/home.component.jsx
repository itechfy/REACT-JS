import categories from '../data/categories';
import Categories from '../components/categories/categories.component';
const Home=()=>{
  return (
     <Categories categories={categories}/>
  );
}

export default Home;
