export  const API_KEY="5676998ffe793d254c7d163727e5aa71";
const requests = {
  fetchPopular:`/movie/popular?api_key=${API_KEY}`,
  findMovie:`/find/?api_key=${API_KEY}`,
  fetchTopRated:`/movie/top_rated?api_key=${API_KEY}`,
  fetchGenres:`/genre/movie/list?api_key=${API_KEY}`,
}
export default requests;