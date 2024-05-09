
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


                <Aprender />
                {/* <Sonido /> */}
                {/* <Praticar /> */}
                {/* <Liga /> */}


            </main>

            <footer className='footer'>
                <Footer />
            </footer>

        </div>
    )
} 