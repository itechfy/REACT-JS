import {Routes,Route} from 'react-router-dom';

import Home from "./routes/home.component";
import Navigation from './components/Navigation/navbar.component';
import Authentication from './routes/Authentication.component';

const Shop = ()=>{
  return(
    <h1>Welcome to Shop</h1>
  );
}

const App=()=>{
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        {/*First navigation component will be render here and then outlet the remaining routes*/}
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
      </Route>
    </Routes>
  );
}
export default App;
