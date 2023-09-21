import './Collaborator.css'

export const Collaborator = (props) => {

    return (
        <div className='collaborator-card'>
            <div className='collaborator-card__top' style={{backgroundColor: props.teamColor}}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='collaborator-card__bottom'>
                <h4>{props.name}</h4>
                <h5>{props.job}</h5>
            </div>
        </div>
    )

}