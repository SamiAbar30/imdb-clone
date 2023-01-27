import axios from 'axios';

export const axiosConfig = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	headers: { Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Njc2OTk4ZmZlNzkzZDI1NGM3ZDE2MzcyN2U1YWE3MSIsInN1YiI6IjYzYzdmNTQ4MmYzYjE3MDA3ZDZhMjczZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nGZ9dFdxBOyfkEG1b-fjwBLcDeI2vXnyJ8adL56BD-s' },
});
