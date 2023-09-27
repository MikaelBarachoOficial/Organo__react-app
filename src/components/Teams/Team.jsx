import { Collaborator } from '../Collaborator/Collaborator.jsx'
import { Switch } from '../Switch/Switch.jsx'
import { useState } from 'react'
import './Team.css'

export const Team = ({team, collaborators, toDeleteCollaborator, onChangeTeamColor}) => {

    const [switchColorMode, setSwitchColorMode] = useState(false)
    const onSwitchColorMode = () => {
        setSwitchColorMode(!switchColorMode)
    }

    return (
       collaborators.length > 0 && <section className='team' style={{backgroundColor: team.backgroundColor}}>
        <Switch onSwitch={() => onSwitchColorMode()} switchFieldClass='colorMode-switch' tag='Modo Simples' activatedTag='Modo Avançado' />
        <input onChange={event => onChangeTeamColor(team.id, event.target.value, undefined, switchColorMode)} value={team.mainColor} type="color" className='input_team-mainColor' />
        {switchColorMode && <input onChange={event => onChangeTeamColor(team.id, undefined, event.target.value)} value={team.backgroundColor} type="color" className='input_team-backgroundColor' />}
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

export const NoTeam = () => {
    return (
        <div className='noTeams'>
            <p>Não há nenhum time com colaborador no momento.</p>
        </div>
    )
}