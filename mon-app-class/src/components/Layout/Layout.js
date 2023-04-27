import React, { Component } from 'react';
import Navbar from '../NavBar/NavBar'
import Footer from '../Footer/Footer';

class Layout extends Component {
render() {
const { children, footer } = this.props;
return (
<>
<Navbar />
{children}
{footer === true && <Footer />}
</>
);
}
}

export default Layout;