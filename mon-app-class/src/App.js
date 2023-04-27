import './App.css';
import Cv from './pages/Cv/Cv';
import {Routes,Route} from 'react-router-dom'
import PageError from './pages/PageError/PageError';
import Blog from './pages/Blog/Blog';
import Compteur from './pages/Compteur/Compteur';
import Liste from './pages/Liste/Liste';
import Toogles from './pages/Toggles/Toggles'
import Object from './pages/Object/Object'
import UseEffectcompo from './pages/UseEffectCompo/UseEffectcompo';
import Portfolio from './pages/Portfolio/Portfolio';
import HtmlCss from './pages/HtmlCss/HtmlCss'
import Article from './pages/Article/Article';
import UseEffectComponent from './components/UseEffectComponent/UseEffectComponent';
import SetIntervalCompo from './pages/SetIntervalCompo/SetIntervalCompo';
import MouseMove from './pages/MouseMove/MouseMove';
function App() {


  return (

    <div className="">

		<Routes>
			<Route index element ={<Portfolio/>} />
			<Route path="/cv" element ={<Cv/>} />
			<Route path="/blog" element ={<Blog/>} />
			<Route path="*" element ={<PageError/>}/>
			<Route path="/compteur" element ={<Compteur/>} />
			<Route path="/liste" element ={<Liste/>} />
			<Route path="/toggles" element ={<Toogles />} />
			<Route path="/object" element ={<Object/>} />
			<Route path="/UseEffectCompo" element ={<UseEffectcompo/>} />
			<Route path="/HtmlCss" element ={<HtmlCss/>} />
			<Route path="/article/:id" element ={<Article/>} />
			{/* <Route path="/UseEffectComponent" element ={<UseEffectComponent/>} />*/}
			<Route path="/SetIntervalCompo" element ={<SetIntervalCompo/>} />
			<Route path="/MouseMove" element ={<MouseMove/>} />
		</Routes> 
		
    </div>
  );
}

export default App;