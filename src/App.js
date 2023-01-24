import { Navigate, Route, Routes } from 'react-router-dom';
import MusicCatalogApp from './components/MusicCatalogApp/MusicCatalogApp';
import SongPage from 'pages/SongPage';

function App() {
  return (
    <Routes>
      <Route path='/items'>
        <Route index element={<MusicCatalogApp />} />
        <Route path=":id" element={<SongPage />} />
      </Route>
      <Route path="*" element={<Navigate to={'/items'} replace />} />
    </Routes>
  );
}

export default App;
