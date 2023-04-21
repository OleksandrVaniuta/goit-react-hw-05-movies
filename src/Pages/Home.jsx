import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import api from 'services/servicesAPi';
import { StyledLink } from './Home.styled';

const Home = () => {
  const [trands, setTrands] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        await api.fetchDataHome().then(result => {
          setTrands(result.results);
        });
      } catch {
        console.log(Error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {trands.map(({ id, title, name }) => {
          if (title) {
            return (
              <li key={id}>
                <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </StyledLink>
              </li>
            );
          }
          return (
            <li key={id}>
              <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                {name}
              </StyledLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
