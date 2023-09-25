import './Collaborator.css'
import CancelSharpIcon from '@mui/icons-material/CancelSharp';

export const Collaborator = (props) => {
    return (
        <div className='collaborator-card'>
            <CancelSharpIcon className='deleteButton' onClick={() => props.toDelete()} />
            <div className='collaborator-card__top' style={{backgroundColor: props.teamColor}}>
                <img 
                    src={props.collaborator.image}
                    alt={props.collaborator.name}
                    onError={(e)=>{e.target.src="/images/default-profile-picture.png"}}
                />
            </div>
            <div className='collaborator-card__bottom'>
                <h4>{props.collaborator.name}</h4>
                <h5>{props.collaborator.job}</h5>
            </div>
        </div>
    )

}