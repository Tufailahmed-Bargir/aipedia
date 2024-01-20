"use client"
import Image from 'next/image'
// import styles from './page.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from '@/app/Components/navbar'
import { useEffect } from 'react';
import Hero from '@/app/Components/hero';
import Searchbar from '@/app/Components/searchbar';
import Cards from '@/app/cards';
import Signup from '@/app/Components/sugnup';
import Footer from '@/app/Components/footer';
import { Navbar } from 'react-bootstrap';

function App() {
    return (
        
        <>
    
    <Hero/>
    <Searchbar/>
    <Cards/>
    
        </>
    );
}

export default App;