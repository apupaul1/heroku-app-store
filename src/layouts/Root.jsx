import React from 'react';
import Navbar from '../components/shared/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/shared/Footer/Footer';
import Loader from '../components/shared/Loader/Loader';

const Root = () => {

    const navigation = useNavigation();

    return (
        <div>
            <header className='sticky top-0 z-999'>
                <Navbar></Navbar>
            </header>
            <main className=''>
                {navigation.state === 'loading' &&<Loader></Loader>}
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;