"use client"
import Image from 'next/image'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from '@/app/Components/navbar'
import { useEffect } from 'react';
import Hero from '@/app/Components/hero';
import Searchbar from '@/app/Components/searchbar';
import Cards from '@/app/cards';
import Signup from '@/app/Components/signUp';
import Footer from '@/app/Components/footer';
import App from '@/app/Components/app';
import Practice from '@/app/Components/practice';
import Serverdata from '@/app/Components/serverData';
// import Tufail from '@/app/Components/practice';

export default function Home() {
  useEffect(()=>{
    import('bootstrap/dist/js/bootstrap.min.js')
  })
  
  return (
     <>
      
  <BasicExample/>
  {/* <tufail/> */}
  <App/>
    
     
     
     <Footer/>
     </>
  )
}
