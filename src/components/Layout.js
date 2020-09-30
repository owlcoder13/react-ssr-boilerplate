import React from 'react';
import Link from './Link'
import styled from 'styled-components'

const Page = styled.div`
    padding: 20px;
`

const Nav = styled.div`
    display: flex;
    
    a {
        display: block;
        margin-right: 20px;
        text-decoration: none;
        color: #4c71e0;
    }
`

const Content = styled.div`
   padding: 20px 0;
`

export default function Layout(props) {
    let children = props.children;

    return <Page>
        <Nav>
            <Link href={'/'}>Home</Link>
            <Link href={'/contacts'}>Contacts</Link>
            <Link href={'/login'}>Login</Link>
        </Nav>
        <Content>
            {children}
        </Content>
    </Page>
}