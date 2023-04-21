import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import api from 'services/servicesAPi';
import { StyledLink, InputFilter, SubmitBtn } from './Search.styled';

const Search = () => {
  const [value, setValue] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('query') || '';
  const location = useLocation();

  const submitQuery = evt => {
    evt.preventDefault();
    if (evt.target.elements.input.value === '') {
      return setSearchParams({});
    }

    const query = evt.target.elements.input.value;
    setSearchParams({ query: query });
    evt.target.elements.input.value = '';
  };

  useEffect(() => {
    if (filter === '') {
      return;
    }
    const getData = async () => {
      try {
        await api.fetchDataSearch(filter).then(res => {
          setValue(res.results);
        });
      } catch {
        console.log(Error);
      }
    };
    getData();
  }, [filter]);

  return (
    <div>
      <form onSubmit={submitQuery}>
        <InputFilter
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SubmitBtn type="submit">Search</SubmitBtn>
      </form>
      {value.length > 0 && (
        <ul>
          {value.map(({ id, title, name }) => {
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
      )}
    </div>
  );
};

export default Search;
