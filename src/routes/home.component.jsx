import { Outlet } from 'react-router-dom';
import categories from '../data/categories';
import Categories from '../components/categories/categories.component';
const Home=()=>{
  return (
    <div>
    <Outlet/>
     <Categories categories={categories}/>
     </div>
  );
}

export default Home;
