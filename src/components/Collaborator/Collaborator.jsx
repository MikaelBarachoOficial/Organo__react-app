import './Collaborator.css'

export const Collaborator = (props) => {

    return (
        <div className='collaborator-card'>
            <div className='collaborator-card__top' style={{backgroundColor: props.teamColor}}>
                <img src={props.collaborator.image} alt={props.collaborator.name} />
            </div>
            <div className='collaborator-card__bottom'>
                <h4>{props.collaborator.name}</h4>
                <h5>{props.collaborator.job}</h5>
            </div>
        </div>
    )

}