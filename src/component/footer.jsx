
import './style/footer.css'

export default function Footer(props) {
    return (
        <section className='footer-main'>
            <ul className="list-acumulabre">
                <ElementList text='' img='usa.png' />
                <ElementList text='0' img='racha.png' />
                <ElementList text='500' img='diamante.png' />
                <ElementList text='5' img='corazon.png' />
            </ul>
        </section>
    )
}

function ElementList(props) {
    return (
        <li className="e-list-acumulabre">
            <img src={'/imagen/' + props.img } alt="" />
            <a href="./"> { props.text }</a>
        </li>
    )
}