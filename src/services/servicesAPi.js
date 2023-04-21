const fetchDataDetails = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=d3e4c0ed0eb793f86b8fa6645a19cccc&language=en-US`
  );
  const data = await response.json();
  return data;
};

const fetchDataHome = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=d3e4c0ed0eb793f86b8fa6645a19cccc`
  );
  const data = await response.json();
  return data;
};

const fetchDataSearch = async filter => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=d3e4c0ed0eb793f86b8fa6645a19cccc&language=en-US&page=1&include_adult=false&query=${filter}`
  );
  const data = await response.json();
  return data;
};

const fetchDataCasts = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d3e4c0ed0eb793f86b8fa6645a19cccc&language=en-US`
  );
  const data = await response.json();
  return data;
};

const fetchDataReviews = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=d3e4c0ed0eb793f86b8fa6645a19cccc&language=en-US&page=1`
  );
  const data = await response.json();
  return data;
};

const api = {
  fetchDataDetails,
  fetchDataHome,
  fetchDataSearch,
  fetchDataCasts,
  fetchDataReviews,
};

export default api;
