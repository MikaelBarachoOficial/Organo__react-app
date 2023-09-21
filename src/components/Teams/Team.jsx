import { Collaborator } from '../Collaborator/Collaborator.jsx'
import './Team.css'

export const Team = (props) => {
    return (
        <section className='team' style={{backgroundColor: props.team.backgroundColor}}>
            <div className='team__title'>
                <h3>{props.team.name}</h3>
                <hr style={{borderColor: props.team.mainColor}}/>
            </div>

            <div className='team__collaborators'>
                <Collaborator name='Mikael Baracho' job='Programador, Front-End, React.js' image='https://github.com/MikaelBarachoOficial.png' teamColor={props.team.mainColor} />
                <Collaborator name='Andressa Sales' job='Programadora HTML, Copiadora de código' image='https://github.com/AndressaSales.png' teamColor={props.team.mainColor} />
            </div>

        </section>
    )
}