import React, {useState} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import SectionPresentation from '../../components/SectionPresentation/SectionPresentation'
//import List from '../../components/List/List'
//import Toogle from '../../components/Toogle/Toogle'
//import Metier from '../../components/Metier/Metier'
//import Counter from '../../components/Counter/Counter'

const Cv = () => {

    const [name, setName] = useState("Anna Beniard")

    const HandleName = (cb) => {
	setName(cb)
}



  return (
    <div>
        <div className="">
        <header>
			<Header name={name} />
			<NavBar />
		</header>
		<SectionPresentation />
		 <Main HandleName={HandleName} />  

		{/* <Counter/> */}
		{/* <Toogle /> */}
		{/* <List /> */}
		{/*<Metier/>*/}
		<Footer name={name} />
    </div>
      
    </div>
  )
}

export default Cv
