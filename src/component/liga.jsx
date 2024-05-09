
import './style/liga.css'
import data_user from './data/user.json'


function Shield_liga(props) {

    function Shield(props) {
        return (
            <li className="contant-liga">
                <div className={"shield " + props.color} ></div>
            </li>
        )
    }

    return (
        <section>

            <div className="shield-contant">
                <ul>

                    <Shield color='shield-bronze' />
                    <Shield color='shield-silver' />
                    <Shield color='shield-golden' />

                    <img className='liga-current' src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/3ced84eb1f0274ec0f02b24ae6e3d29b.svg" alt="" />

                    <Shield />
                    <Shield />
                    <Shield />

                </ul>
                <h3> División Zafiro </h3>
                <p id='grey'> Los primeros 7 avanzan a la siguiente división </p>

                <p id='day'>  {props.day != 1 ? props.day + ' dias' : props.day + ' dia'} </p>
            </div>

        </section>
    )
}

function User(props) {
    let name = `${props.name}`

    return (
        <div className="user-ranking">

            <div className={"medal " + props.color}> {props.ranking }</div>
            <div className="user">{name[1] }</div>
            <p className='user-info'>
                <span className='user-name'> {name} </span>
                <span className='exp'> {props.exp } EXP </span>
            </p>

        </div>
    )
}

export function Liga(props) {
    return (
        <article className="liga">

            <Shield_liga day={1} />

            
            <section>
                <hr />
                {
                    
                    data_user['user'].map( ( e, n ) => {
                        let color = n == 0 && 'golden' || n == 1 && 'silver' || n == 2 && 'bronze' 
                        return <User key={e.id} ranking={n+1} color={color} name={e.user} exp={e.exp} />
                    })
                } 

            </section>

        </article>
    )
}