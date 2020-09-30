import React from 'react';
import fetch from 'isomorphic-fetch';
import Layout from "../components/Layout";
import { Helmet } from 'react-helmet';

import {
    FormGroup,
    Input,
    Label,
    Button
} from '../components/forms';

function Home(props) {
    let data = props.data ? props.data.items : [];

    return <Layout>
        <Helmet>
            <title>Login</title>
        </Helmet>
        <h1>Contacts</h1>
        <form action="">
            Site: <a href="https://owlcoder.ru">owlcoder.ru</a>
        </form>
    </Layout>
}

Home.loadData = async () => {
    return await fetch('http://localhost:3000/api/list').then((data) => {
        return data.json();
    });
}

export default Home;