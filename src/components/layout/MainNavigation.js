import { Link } from 'react-router-dom'
import './MainNavigation.modules.css'
function MainNavigation() {
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
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;
