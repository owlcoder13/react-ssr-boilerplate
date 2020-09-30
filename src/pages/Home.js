import React from 'react';
import fetch from 'isomorphic-fetch';
import Layout from "../components/Layout";
import { Helmet } from 'react-helmet';

function Home(props) {
    console.log(props)
    let data = props.data ? props.data.items : [];

    return <Layout>
        <Helmet>
            <title>Home page =)</title>
        </Helmet>
        <div>
            <h1>Home page</h1>

            {
                data.map(
                    item => {
                        return <div key={item.id}>{item.text}</div>
                    }
                )
            }
        </div>
    </Layout>
}

Home.loadData = async () => {
    return await fetch('http://localhost:3000/api/list').then((data) => {
        return data.json();
    });
}

export default Home;