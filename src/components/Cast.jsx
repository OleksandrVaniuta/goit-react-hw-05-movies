import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import imagePlaceholder from './images/image-placeholder.png';
import api from 'services/servicesAPi';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await api.fetchDataCasts(movieId);
        setCasts(result.cast);
      } catch {
        console.log(Error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <ul>
        {casts.map(cast => {
          return (
            <div key={cast.id}>
              {cast.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  alt=""
                  width="100"
                />
              ) : (
                <img scr={imagePlaceholder} alt="" width="250" />
              )}
              <p>{cast.name}</p>
              <p>{cast.character}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
