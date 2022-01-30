import '../layout/MainNavigation.modules.css'
import Card from '../../ui/Card';
import { useContext } from 'react'
import { FavoritesContext } from '../../store/favorites-context';
function MeetupItem(props) {
    const favoritesContext = useContext(FavoritesContext)
    const itemsFavorite = favoritesContext.itemsFavorite(props.id)
    // console.log(favoritesContext);
    const handleToggleFavorite = () => {
        if (itemsFavorite) {
            favoritesContext.removeFavorite(props.id)
        }
        else {
            favoritesContext.addFavorite({
                id: props.id,
                title: props.title,
                decription: props.decription,
                image: props.image,
                address: props.address
            })
        }
    }
    return (
        <li>
            <Card>
                <div className='container__list'>
                    <div className='image'>
                        <img src={props.image} alt={props.title}/>
                    </div>
                    <div className='content'>
                        <h3>{props.title}</h3>
                        <address>{props.address}</address>
                        <p>{props.decription}</p>
                    </div>
                    <div className='actions'>
                        <button onClick={handleToggleFavorite}>
                            {itemsFavorite ? 'Remove from Favorites' : 'To Favorites'}
                        </button>
                    </div>
                </div>
            </Card>
        </li>
    )
}
export default MeetupItem;
