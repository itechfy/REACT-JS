import {Routes,Route} from 'react-router-dom';

import Home from "./routes/home.component";
import Navigation from './components/Navigation/navbar.component';
import Authentication from './routes/Authentication.component';
import Shop from './routes/Shop/Shop.component';


const App=()=>{
  return (
  
    <Routes>
        {/* These routes will then be rendered in index.js wrapped up with BrowserRouter*/}
      <Route path='/' element={<Navigation/>}>
        {/*First navigation component will be render here and then outlet/render the remaining routes*/}
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
      </Route>
    </Routes>
  );
}
export default App;
