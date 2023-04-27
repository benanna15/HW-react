import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class UseEffectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        console.log("la table est montée");

        axios.get('https://promises-cb263f.appdrag.site/api/getAllArticles', {
            params: {
                "AD_PageNbr": "1",
                "AD_PageSize": "500"
            }
        }).then((response) => {
            console.log(response.data);
            this.setState({ data: response.data.Table });
        });
    }

    render() {
        return (
            <div>
                <h1 className='text-center'>Exemple de UseEffect</h1>
                {this.state.data?.map((item) => (
                    <Link to={`/article/${item.id}`} key={item.id} className='text-decoration-none text-light'>
                        <div className='bg-secondary p-5 m-5 rounded shadow-lg text-light'></div>
                        <h2>{item.title}</h2>
                    </Link>
                ))}
            </div>
        );
    }
}

export default UseEffectComponent;
