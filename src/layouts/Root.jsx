import React from 'react';
import Navbar from '../components/shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/shared/Footer/Footer';

const Root = () => {
    return (
        <div>
            <header className='sticky top-1 z-999'>
                <Navbar></Navbar>
            </header>
            <main className='min-h-screen'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;