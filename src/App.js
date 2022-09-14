import {Routes,Route} from 'react-router-dom';

import Home from "./routes/home.component";

const Shop = ()=>{
  return(
    <h1>Welcome to Shop</h1>
  );
}

const App=()=>{
  return (
    <Routes>
      <Route path='/' element={<Home/>}>
      <Route path='/shop' element={<Shop/>}/>
     </Route>
    </Routes>
  );
}
export default App;
