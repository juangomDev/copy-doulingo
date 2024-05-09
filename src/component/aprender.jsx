
import './style/aprender.css'
import level from './data/level.json'

console.log(level);

export default function Aprender() {
    return (
        <div className='aprender'>
            <Etapa etapa='1' section='1'/>

            <Pruevas />
            <Pruevas reverse='reverse'/>

            <Etapa etapa='1' section='2'/>

            <Pruevas  />

            <Etapa etapa='1' section='3'/>

            <Pruevas  reverse='reverse'/>

            <Etapa etapa='1' section='4'/>

            <Pruevas />

        </div>
    )
}

// 110 80 50 80 110

function Pruevas(props) {

    let pos = !props.reverse ? [150, 110, 80] : [80, 110, 150] 

    function E_prueva(props) {
        return (
            <li className="e-list-pruevas" key={props.id} style={{ width: props.pos }}>
                <a href=""></a>
            </li>
        )
    }
    
    return (
        <div className={"pruevas " + props.reverse}  >

            <ul className="list-pruevas">

                <E_prueva id={1} pos={ pos[0] } />
                <E_prueva id={1} pos={ pos[1] } />
                <E_prueva id={1} pos={ pos[2] } />
                <E_prueva id={1} pos={ pos[1] } />

            </ul>

            <div className="prueva-img ">
                <img src="/imagen/cofre.png" alt="" />
            </div>
            

        </div>
    )

}

function Etapa(props) {
    return <div className="section-level">
        <section className="modulos">
            <h2> ETAPA { props.etapa },  SECCION { props.section } </h2>
            <p> Ordena en un cafe, saluda y presenta</p>
        </section>

        <section className="info-section">
            <img src="/imagen/libreta.png" alt="" />
        </section>
    </div>
}
