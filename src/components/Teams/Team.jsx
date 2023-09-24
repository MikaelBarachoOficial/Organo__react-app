import { Collaborator } from '../Collaborator/Collaborator.jsx'
import './Team.css'

export const Team = ({team, collaborators, toDelete}) => {
    return (
       collaborators.length > 0 && <section className='team' style={{backgroundColor: team.backgroundColor}}>
            <div className='team__title'>
                <h3>{team.name}</h3>
                <hr style={{borderColor: team.mainColor}}/>
            </div>

            <div className='team__collaborators'>
                {collaborators.map((collaborator, index) => 
                    <Collaborator 
                        key={index} 
                        collaborator={collaborator} 
                        teamColor={team.mainColor} 
                        toDelete={toDelete}
                        index={index}
                    />
                )}
            </div>

        </section>
    )
}