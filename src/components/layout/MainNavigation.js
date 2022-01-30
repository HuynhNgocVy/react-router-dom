import { Link } from 'react-router-dom'
import './MainNavigation.modules.css'
import { FavoritesContext } from '../../store/favorites-context';
import { useContext } from 'react';
function MainNavigation() {
    const favoritesContext = useContext(FavoritesContext)
    return (
        <header className='header'>
            <div className='logo'>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Alll Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-page">Add New Meetup</Link>
                    </li> 
                    <li>
                        <Link to="/favorites">My Favorites</Link>
                        {favoritesContext.totalFavorites !== 0 && (<span className='badge'>{favoritesContext.totalFavorites}</span>)}
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;
