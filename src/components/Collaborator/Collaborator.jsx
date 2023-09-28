import './Collaborator.css'
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Collaborator = ({ collaborator, teamColor, toDelete, onFavorite }) => {
    return (
        <div className='collaborator-card'>
            <CancelSharpIcon className='deleteButton' onClick={() => toDelete(collaborator.id)} />
            <div className='collaborator-card__top' style={{ backgroundColor: teamColor }}>
                <img
                    src={collaborator.image}
                    alt={collaborator.name}
                    onError={event => { event.target.src = "/images/default-profile-picture.png" }}
                />
            </div>
            <div className='collaborator-card__bottom'>
                <h4>{collaborator.name}</h4>
                <h5>{collaborator.job}</h5>
                {collaborator.favorited ?
                    <FavoriteIcon className='favoriteButton favorited' onClick={() => onFavorite(collaborator.id)} />
                    : <FavoriteBorderIcon className='favoriteButton' onClick={() => onFavorite(collaborator.id)} />}
                {collaborator.favorited === undefined && <p style={{ position: 'absolute', left: '6.8em' }}>Favoritar</p>}
            </div>
        </div>
    )

}