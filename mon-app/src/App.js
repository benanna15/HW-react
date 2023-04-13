import './App.css';
import Cv from './pages/Cv/Cv';
import {Routes,Route} from 'react-router-dom'
import PageError from './pages/PageError/PageError';
import Blog from './pages/Blog/Blog';
import Compteur from './pages/Compteur/Compteur';
import Liste from './pages/Liste/Liste';
import Toogles from './pages/Toggles/Toggles';
import Object from './pages/Object/Object'

function App() {


  return (

    <div className="">

		<Routes>
			<Route index element ={<Cv/>} />
			<Route path="/cv" element ={<Cv/>} />
			<Route path="/blog" element ={<Blog/>} />
			<Route path="*" element ={<PageError/>}/>
			<Route path="/compteur" element ={<Compteur/>} />
			<Route path="/liste" element ={<Liste/>} />
			<Route path="/toggles" element ={<Toogles/>} />
			<Route path="/object" element ={<Object/>} />


			
		</Routes> 
		
    </div>
  );
}

export default App;