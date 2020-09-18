import React from 'react';
import fetch from 'isomorphic-fetch';

function Home(props) {

    let data = props.data ? props.data.data : [];

    return <div>
        2
        {
            data.map(
                item => {
                    return <div key={item.id}>{item.employee_name}</div>
                }
            )
        }
    </div>
}

Home.loadData = async () => {
    return await fetch('http://dummy.restapiexample.com/api/v1/employees').then((data) => {
        return data.json();
    });
}

export default Home;