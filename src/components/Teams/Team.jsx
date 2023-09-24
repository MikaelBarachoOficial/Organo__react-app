import { Collaborator } from '../Collaborator/Collaborator.jsx'
import './Team.css'

export const Team = ({team, collaborators, toDeleteCollaborator, onChangeTeamColor}) => {
    return (
       collaborators.length > 0 && <section className='team' style={{backgroundColor: team.backgroundColor}}>
        <input onChange={event => onChangeTeamColor(team.name, event.target.value)} value={team.mainColor} type="color" className='input_team-mainColor' />
        <input onChange={event => onChangeTeamColor(team.name, undefined, event.target.value)} value={team.backgroundColor} type="color" className='input_team-backgroundColor' />
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
                        toDelete={toDeleteCollaborator}
                        index={index}
                    />
                )}
            </div>

        </section>
    )
}