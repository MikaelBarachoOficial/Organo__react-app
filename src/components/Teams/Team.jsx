import './Team.css'

export const Team = (props) => {
    return (
        <section className='team' style={{backgroundColor: props.team.backgroundColor}}>
            <div className='team__title'>
                <h3>{props.team.name}</h3>
                <hr style={{borderColor: props.team.mainColor}}/>
            </div>

            <div>
                {/* Collaborators */}
            </div>

        </section>
    )
}