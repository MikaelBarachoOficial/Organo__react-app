import { Collaborator } from '../Collaborator/Collaborator.jsx'
import './Team.css'

export const Team = ({team, collaborators}) => {
    return (
       collaborators.length > 0 && <section className='team' style={{backgroundColor: team.backgroundColor}}>
            <div className='team__title'>
                <h3>{team.name}</h3>
                <hr style={{borderColor: team.mainColor}}/>
            </div>

            <div className='team__collaborators'>
                {collaborators.map((collaborator, index) => {
                    console.log(<Collaborator key={index} collaborator={collaborator} teamColor={team.mainColor} />)
             return   <Collaborator key={index} collaborator={collaborator} teamColor={team.mainColor} />
                })}
            </div>

        </section>
    )
}