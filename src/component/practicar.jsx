
import './style/practicar.css'

const imagenes = {
    hablar: 'https://d35aaqx5ub95lt.cloudfront.net/images/practiceHub/3e81c469cbffa24102aa839524868adf.svg',
    escuchar: 'https://d35aaqx5ub95lt.cloudfront.net/images/practiceHub/2ebe830fd55a7f2754d371bcd79faf32.svg',
    errores: 'https://d35aaqx5ub95lt.cloudfront.net/images/practiceHub/648b88c8b70ebaaff919e49b0aa54949.svg',
    palabras: 'https://d35aaqx5ub95lt.cloudfront.net/images/practiceHub/9d1604d8e8f843b492862b21a8a4e822.svg',
    cuentos: 'https://d35aaqx5ub95lt.cloudfront.net/images/practiceHub/2c76c04c8e99125ccda0b74b11ac468e.svg'

}

const Super = (props) => <p> {props.txt}  <i className='super'>SUPER</i> </p>

const Habilitar = <a href="" className='pratica-btn'> HABILITAR </a>

function Practica_btt( props ) {
    return (
        <article className= {props.cls} >

            <div className="content">
                
                { !!props.txt && <Super txt= {<b> {props.txt} </b>} /> }

                {props.children}

            </div>

            <div className="imagenes">
                <img src={props.src} alt="imagen con relacion" />
            </div>

            {!!props.number && <p className='notification'> {props.number} </p>}

        </article>
    )
}



export function Praticar() {
    return (
        <div className="practicar">
            <h3>Repaso de hoy</h3>

            <Practica_btt  cls='article' txt=' ' 
            src='https://d35aaqx5ub95lt.cloudfront.net/images/practiceHub/87fabec06acc53cc0ba4efd5b1720751.svg'> 
                <h3> ¿Recuerdas esta sección?  </h3>
                <p>Repasa el contenido de la sección 1.</p>
                {Habilitar} 
            </Practica_btt>



            <h3>Conversación</h3>


            <Practica_btt  cls='btn' txt='Hablar' src={imagenes.hablar}>

                <p>Mejora tus habilidades de conversación con estas frases </p>    
            </Practica_btt >

            <Practica_btt  cls='btn' txt='Escuchar' src={imagenes.escuchar}>
                <p>Impulsa tus habilidades de comprensión con una sesión de audio</p>    
            </Practica_btt >

            <h3>Tu colección</h3>

            <Practica_btt  cls='btn' txt='Errores' number='30+' src={imagenes.errores}>
                <p> Haz una lección personalizada para practicar tus errores </p>    
            </Practica_btt >
            
            <Practica_btt  cls='btn' txt='Palabras' number='30+' src={imagenes.palabras}>
                <p> Repasa tu vocabulario de inglés cuando quieras </p>    
            </Practica_btt >

            <Practica_btt  cls='btn' txt='' src={imagenes.cuentos}>
                <p> <b> Cuentos </b> </p>
                <p> Vuelve a leer un cuento para repasar las palabras en contexto </p>    
            </Practica_btt >

        </div>
    )
}