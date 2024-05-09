
import "./style/sonido.css";
import letter from "./data/letter.json";

const vowels = Object.keys(letter.vowels)
const consonants = Object.keys(letter.consonants)

function Row_sonido(props) {
    const group = props.group == vowels ? 'vowels' : 'consonants'

    function Box_sonido(props) {
        const obj = letter[group][ props.letter[ props.number ] ]

        return (
            <div className="box-sonido">
                <button>
                    <p>{props.letter[ props.number ]}</p>
                    <p>{ obj.txt }</p>

                    <div className="loading-bar">
                        <div className="loading-bar-total"></div>
                        <div className="loading-bar-advance" style={{width: obj.progress + '%'}}></div>
                    </div>
                </button>
            </div>
        )
    }

    const num = props.num * 3
    return (
        <div className="row-sonido">
            <Box_sonido letter={ props.group }  number={ num + 0 } />
            <Box_sonido letter={ props.group }  number={ num + 1 } />
            <Box_sonido letter={ props.group }  number={ num + 2 } />
        </div>
    )
}



export function Sonido() {
    return (
        <div className="sonido">
            <h2>¡Mejora tu pronunciación del inglés!</h2>
            <p>Entrena tu oído y aprende a pronunciar palabras en inglés</p>
            <a href='' id="start"> EMPEZAR +10 EXP</a>

            <p className='vowels'> Vocales </p>

            <article className="content-sonido">
                <Row_sonido num={0} group={vowels} />
                <Row_sonido num={1} group={vowels} />
                <Row_sonido num={2} group={vowels} />
                <Row_sonido num={3} group={vowels} />
                <Row_sonido num={4} group={vowels} />
            </article>

            <p className='consonants'> Consonantes </p>

            <article className="content-sonido">
                <Row_sonido num={0} group={consonants} />
                <Row_sonido num={1} group={consonants} />
                <Row_sonido num={2} group={consonants} />
                <Row_sonido num={3} group={consonants} />
                <Row_sonido num={4} group={consonants} />
                <Row_sonido num={5} group={consonants} />
                <Row_sonido num={6} group={consonants} />
                <Row_sonido num={7} group={consonants} />
            </article>

        </div>
    )
}