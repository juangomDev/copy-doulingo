import { Link } from "react-router-dom";


import './style/nav.css'

const items = [
    {
        img: 'https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg',
        text: 'Aprender',
        url: '/Aprender',
        id: 0
    },
    {
        img: 'https://d35aaqx5ub95lt.cloudfront.net/vendor/3b4928101472fce4e9edac920c1b3817.svg',
        text: 'Sonido',
        url: '/Sonido',
        id: 1
    },
    {
        img: 'https://d35aaqx5ub95lt.cloudfront.net/vendor/5187f6694476a769d4a4e28149867e3e.svg',
        text: 'Practicar',
        url: '/Practicar',
        id: 2
    },
    {
        img: 'https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg',
        text: 'Liga',
        url: '/Liga',
        id: 3
    },
    {
        img: 'https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg',
        text: 'Desafio',
        url: '/Desafio',
        id: 4
    },
    {
        img: 'https://d35aaqx5ub95lt.cloudfront.net/vendor/0e58a94dda219766d98c7796b910beee.svg',
        text: 'Tienda',
        url: '/Tienda',
        id: 5
    },
    {
        img: 'https://d35aaqx5ub95lt.cloudfront.net/vendor/24e0dcdc06870ead47b3600f0d41eb5b.svg',
        text: 'Perfil',
        url: '/Perfil',
        id: 6
    }
]

// 

export function Nav() {
    return (
        <nav className="nav-main">

            <ul id="list-nav">

                <li className="title"> 
                    <img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/70a4be81077a8037698067f583816ff9.svg" alt="" />
                    {/* <img src="https://d35aaqx5ub95lt.cloudfront.net/vendor/0cecd302cf0bcd0f73d51768feff75fe.svg" alt="dou" /> */}
                </li>

                {
                    items.map( x => {
                        return <ElementList key={x.id} item={ x } />
                    })
                }

                <li className="e-list-nav-link" >
                    <img src='https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg' alt="" />
                    Mas
                </li>

            </ul>

        </nav>
    )
}

function ElementList(props) {
    return (
        <li className="e-list-nav" >
            <Link to={ props.item.url } className="e-list-nav-link" > 
                <img src={ props.item.img } alt={ props.item.text } />
                { props.item.text }
            </Link>
        </li>
    )
}
