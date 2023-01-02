import { Navigate, Route, Routes } from 'react-router-dom';
import MusicCatalogApp from './components/MusicCatalogApp/MusicCatalogApp';
import SongPage from 'pages/SongPage';

function App() {
  return (
    <Routes path="/">
      <Route>
        <Route path="items" element={<MusicCatalogApp />} />
        <Route path="items/:id"element={<SongPage />} />
      </Route>
      <Route path="*" element={<Navigate to={'/items'} replace />} />
    </Routes>
  );
}

export default App;
