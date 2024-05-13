import { Route, Routes } from 'react-router-dom';

import './app.css'

import Aprender from './component/aprender';
import { Sonido } from "./component/sonido";
import { Praticar } from "./component/practicar";
import { Liga } from "./component/liga";

import { Nav } from "./component/nav";
import Footer from './component/footer';

export function Container() {
    return (
        <div className="container">

            <header className='main-nav'>
                <Nav />
            </header>

            <main className='main'  > 

                <Routes >
                    <Route path='/Aprender' element={ <Aprender /> } />
                    <Route path='/Sonido' element={ <Sonido /> } />
                    <Route path='/Practicar' element={ <Praticar /> } />
                    <Route path='/Liga' element={ <Liga /> } />
                </Routes>
                
            </main>

            <footer className='footer'>
                <Footer />
            </footer>

        </div>
    )
} 

