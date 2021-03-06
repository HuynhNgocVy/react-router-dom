import logo from './logo.svg';
import './App.css';
import AllMeetupPage from './pages/AllMeetup';
import FavoritesPage from './pages/Favorites';
import NewMeetupPages from './pages/NewMeetup';
import {Route, Router, Routes} from 'react-router-dom'
import Layout from './components/layout/Layout';
import history from './history';
import FavoritesContextProvider from './store/favorites-context';
function App() {
  return (
    <FavoritesContextProvider>
      <Layout>
        <Routes history={history}>
          <Route path="/" exact element={<AllMeetupPage />}></Route>
          <Route path="/new-page" element={<NewMeetupPages />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
        </Routes>
      </Layout>
  </FavoritesContextProvider>)
  
}

export default App;
