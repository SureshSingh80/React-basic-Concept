import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Error from './Error';
export default function RouterExample(){
    return(
        <BrowserRouter>
             <Navbar></Navbar>
             <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="*" element={<Error></Error>}></Route>
             </Routes>
        </BrowserRouter>
    )
}