import api from 'services/servicesAPi';
import React, { useState, useEffect, useRef } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import imagePlaceholder from '../components/images/image-placeholder.png';
import { Suspense } from 'react';
import Loader from 'components/Loader';
import {
  CardContainer,
  MovieInfo,
  AditionaList,
  AditionaTittle,
  GoBack,
} from './MoiveDatails.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieInfo, setMoiveInfo] = useState({});
  const genres = useRef();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await api.fetchDataDetails(movieId);
        setMoiveInfo(result);
        genres.current = result.genres.map(genre => genre.name).join(', ');
      } catch {
        console.log(Error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <GoBack to={location.state?.from ?? '/movies'}>
        <AiOutlineArrowLeft /> Go back
      </GoBack>
      <CardContainer>
        {movieInfo.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
            alt=""
            width="250"
          />
        ) : (
          <img scr={imagePlaceholder} alt="" width="250" />
        )}
        <MovieInfo>
          <h2>
            {movieInfo.title} ({movieInfo.release_date.slice(0, 4)})
          </h2>
          <p>User Score: {Math.round(movieInfo.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movieInfo.overview}</p>
          <h3>Genres</h3>
          <p>{genres.current}</p>
        </MovieInfo>
      </CardContainer>
      <AditionaTittle>Additiona information</AditionaTittle>
      <AditionaList>
        <li>
          <NavLink to="cast" state={{ from: location.state?.from }}>
            cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ from: location.state?.from }}>
            reviews
          </NavLink>
        </li>
      </AditionaList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
