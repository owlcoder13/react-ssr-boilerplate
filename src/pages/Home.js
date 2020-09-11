import React from 'react';
import fetch from 'isomorphic-fetch';

function Home(props) {

    return <div>{
        props.data.data.map(
            item => {
                return <div key={item.id}>{item.employee_name}</div>
            }
        )
    }</div>
}

Home.loadData = async () => {
    return await fetch('http://dummy.restapiexample.com/api/v1/employees').then((data) => {
        return data.json();
    });
}

export default Home;