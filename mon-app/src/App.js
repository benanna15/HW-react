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
import SetIntervalCompo from './pages/SetIntervalCompo/SetIntervalCompo';
import MouseMove from './pages/MouseMove/MouseMove';
import StyleGeneral from './pages/StyleGeneral/StyleGeneral'
import StyleSepare from './pages/StyleSepare/StyleSepare';
import StyleBackTick from './pages/StyleBackTick/StyleBackTick';
import StyleFonction from './pages/StyleFonction/StyleFonction';
import AxiosGet from './pages/AxiosGet/AxiosGet';
import AxiosPost from './pages/AxiosPost/AxiosPost';
import AddArticle from './pages/AddArticle/AddArticle';
import GetArticle from './pages/GetArticle/GetArticle';
import GetArticleByID from './pages/GetArticleByID/GetArticleByID';
import DeleteArticle from './pages/DeleteArticle/DeleteArticle';
import RouterGeneral from './pages/RouterGeneral/RouterGeneral';
import RouteDyn from './pages/RouteDyn/RouteDyn';
import LinkExplication from './pages/LinkExplication/LinkExplication';
import UseLocation from './pages/UseLocation/UseLocation';
import ApiGeneral from './pages/ApiGeneral/ApiGeneral';


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

			<Route path="/StyleGeneral" element ={<StyleGeneral/>} />
			<Route path="/StyleSepare" element ={<StyleSepare/>} />
			<Route path="/StyleBackTick" element ={<StyleBackTick/>} />
			<Route path="/StyleFonction" element ={<StyleFonction/>} />
			<Route path="/ApiGeneral" element ={<ApiGeneral/>} /> 
			<Route path="/AxiosGet" element ={<AxiosGet/>} />
			<Route path="/AxiosPost" element ={<AxiosPost/>} />
			<Route path="/GetArticle" element ={<GetArticle/>} />
			<Route path="/GetArticleByID" element ={<GetArticleByID/>} />
			<Route path="/AddArticle" element ={<AddArticle/>} />
			<Route path="/DeleteArticle" element ={<DeleteArticle/>} />
			<Route path="/RouterGeneral" element ={<RouterGeneral/>} />
			<Route path="/RouteDyn" element ={<RouteDyn/>} />
			<Route path="/LinkExplication" element ={<LinkExplication/>} />
			<Route path="/UseLocation" element ={<UseLocation/>} />









		</Routes> 
		
    </div>
  );
}

export default App;