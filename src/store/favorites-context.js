import { createContext, useState } from "react";
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetup) => {},
    itemsFavorite: (meetup) => {}
})
function FavoritesContextProvider({ children }) {
    const [userFavorites, setUserFavorites] = useState([])

    function handleAddFavorite(favoriteMeetup) {
        setUserFavorites(pre => pre.concat(favoriteMeetup))
    }
    function handleRemoveFavorite(meetupId) {
        setUserFavorites(pre => {
            return pre.filter(meetup => meetup.id !== meetupId)
        })
    }
    function handleItemsFavorite(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: handleAddFavorite,
        removeFavorite: handleRemoveFavorite,
        itemsFavorite: handleItemsFavorite
    }
    return <FavoritesContext.Provider value={context}>
        {children}
    </FavoritesContext.Provider>
}
export default FavoritesContextProvider;
export {FavoritesContext};

