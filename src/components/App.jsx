import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './CharedLayout';

const Home = lazy(() => import('../Pages/Home'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const Search = lazy(() => import('../Pages/Search'));

export const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route exact index element={<Home />} />
          <Route path="movies" element={<Search />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};
