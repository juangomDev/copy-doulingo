
import './style/nav.css'

export function Nav() {
    return (
        <nav className="nav-main">

            <ul id="list-nav">

                <li className="title"><h1>DOULINGO</h1></li>

                <ElementList text='Aprender' img="home.png" />
                <ElementList text='Sonido' img="cofre.png" />
                <ElementList text='Practicar' img="cofre.png" />
                <ElementList text='Liga' img="liga.png" />

            </ul>

        </nav>
    )
}

function ElementList(props) {
    return (
        <li className="e-list-nav">
            <a href="./"> 
                <img src={'/imagen/' + props.img } alt="" />
                { props.text }
            </a>
        </li>
    )
}
