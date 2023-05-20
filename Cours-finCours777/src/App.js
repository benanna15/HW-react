import './App.css';
import Cv from './pages/Cv/Cv';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import PageError from './pages/PageError/PageError';
import Blog from './pages/Blog/Blog';
import Article from './pages/Article/Article';
import Home from './pages/Home/Home';
import Test from './pages/Test/Test';
import Portfolio from './pages/Portfolio/Portfolio';
import PresUseState from './pages/UseStatesSection/PresUseState';
import UseStateObject from './pages/UseStatesSection/UseStateObject';
import UseStateToogle from './pages/UseStatesSection/UseStateToogle';
import UseStateList from "./pages/UseStatesSection/UseStateList"
import UseStateNumber from "./pages/UseStatesSection/UseStateNumber"
import UseReducerSection from './pages/UsereducerSection/UseReducerSection';
import UseReducerSimple from './pages/UsereducerSection/UseReducerSectionSimple';
import UseReducerIntermediaire from './pages/UsereducerSection/UseReducerIntermediaire/UseReducerInt1';
import UseReducerAdvanced from './pages/UsereducerSection/UseReducerAdvanced/UseReducerAdvanced';


import UseMemoSection from './pages/UseMemoSection/UseMemo2';
import UseMemoSectionKo from './pages/UseMemoSection/UseMemo2PreuveKo';

import PresUseEffect from './pages/UseEffectSection/PresUseEffect';
import UefVide from './pages/UseEffectSection/UefVide';
import UseEffectDependance from "./pages/UseEffectSection/UseEffectDependance"
import UseEffectReturn from "./pages/UseEffectSection/UseEffectReturn"
import StyleReact from "./pages/StyleReact/StyleReact"
import Login from './pages/Login/Login';
import AddArticle from './pages/AddArticle/AddArticle';
import UpdateArticle from './pages/UpdateArticle/UpdateArticle';
import DeleteArticle from './pages/DeleteArticle/DeleteArticle';

import DataTableSearch from './pages/DataTableSearch/DataTableSearch';
import DataTableSort from './pages/DataTable/DataTableSort';

import UseRefSection from './pages/UseRefSection/UseRefSection';
import UseCallBack from './pages/UseCallBack/UseCallBack';
import ValidationHook from "./pages/HookForm/ValidationPassword"

import FilterEx from "./pages/Methodes/FilterExSearch"
import FindEx from "./pages/Methodes/FindEx"

import Layout from "./components/Layout/Layout"

function App() {

  return (
    <BrowserRouter >
      <Layout>
      <Routes>

        <Route index element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/article/:id" element={<Article />} />
        <Route path="/Portfolio" element={<Portfolio />} />

        {/* Section UseState */}
        <Route path="/PresUseState" element={<PresUseState />} />
        <Route path="/usfObject" element={<UseStateObject />} />
        <Route path="/UseStateToogle" element={<UseStateToogle />} />
        <Route path="/UseStateList" element={<UseStateList />} />
        <Route path="/UseStateNumber" element={<UseStateNumber />} />
        <Route path="/UseRefSection" element={<UseRefSection />} />

        <Route path="/UseReducerSection" element={<UseReducerSection />} />
        <Route path="/UseReducerSimple" element={<UseReducerSimple />} />
        <Route path="/UseReducerIntermediaire" element={<UseReducerIntermediaire />} />
        <Route path="/UseReducerAdvanced" element={<UseReducerAdvanced />} />


        <Route path="/UseMemoSection" element={<UseMemoSection />} />
        <Route path="/UseMemoSectionko" element={<UseMemoSectionKo />} />
        <Route path="/UseCallBack" element={<UseCallBack />} />
        <Route path="/ValidationHook" element={<ValidationHook />} />

        {/* Section UseEffect */}
        <Route path="/PresUseEffect" element={<PresUseEffect />} />
        <Route path="/UefVide" element={<UefVide />} />
        <Route path="/UseEffectDependance" element={<UseEffectDependance />} />
        <Route path="/UseEffectReturn" element={<UseEffectReturn />} />
        <Route path="/FilterEx" element={<FilterEx />} />
        <Route path="/FindEx" element={<FindEx />} />

        {/* Section CSS */}
        <Route path="/StyleReact" element={<StyleReact />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AddArticle" element={<AddArticle />} />
        <Route path="/UpdateArticle" element={<UpdateArticle />} />
        <Route path="/DeleteArticle" element={<DeleteArticle />} />

        <Route path="/DataTableSearch" element={<DataTableSearch />} />
        <Route path="/DataTableSort" element={<DataTableSort />} />

        <Route path="*" element={<PageError />} />

      </Routes>
      </Layout> 
    </BrowserRouter>
  );
}

export default App;