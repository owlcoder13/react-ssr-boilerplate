import React from 'react';
import Layout from "../components/Layout";
import {Helmet} from 'react-helmet';
import Link from "../components/Link";

function NotFound(props) {
    return <Layout>
        <Helmet>
            <title>404 page =)</title>
        </Helmet>
        <div>
            <h1>404. Page not found</h1>
            <Link href="/">Go to main page</Link>
        </div>
    </Layout>
}

export default NotFound;