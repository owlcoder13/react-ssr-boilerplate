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
        <h1>Login page</h1>
        <form action="">
            <FormGroup className="form-group">
                <Label htmlFor="">E-mail</Label>
                <Input type="text" placeholder="email" />
            </FormGroup>
            <FormGroup className="form-group">
                <Label htmlFor="">Password</Label>
                <Input type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup className="form-group">
                <Button type="submit">Войти</Button>
            </FormGroup>
        </form>
    </Layout>
}

Home.loadData = async () => {
    return await fetch('http://localhost:3000/api/list').then((data) => {
        return data.json();
    });
}

export default Home;