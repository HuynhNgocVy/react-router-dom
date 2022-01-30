import { useContext } from 'react'
import { FavoritesContext } from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';
function FavoritesPage() {
    const favoritesContext = useContext(FavoritesContext)
    let content;
    if (favoritesContext.totalFavorites === 0) {
        content = <p style={{textAlign:"center"}}>You got no favorites yet. Start adding some?</p>
    }
    else {
        content = <MeetupList meetups={favoritesContext.favorites} />
    }
    return (
        <section>
            <h1 style={{fontSize:"2rem", fontWeight:"bold", color:"#a50e48", textAlign:"center"}}>My Favorites</h1>
            {content}
        </section>
    )
}
export default FavoritesPage;