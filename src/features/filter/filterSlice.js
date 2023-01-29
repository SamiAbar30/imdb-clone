import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
	movies: [],
	filterMovies: [],
	Message: '',
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setMovies: (state, action) => {
			state.movies = action.payload;
		},
		filterMovie: (state, action) => {
			state.filterMovies = []
			if (action.payload.language !== ''||action.payload.rating !== ''||action.payload.genre !== '') {
				state.filterMovies = current(state.movies);
				if(action.payload.language !== '')state.filterMovies=state.filterMovies.filter(movie => movie?.original_language === action.payload.language );
				if(action.payload.rating !== '')state.filterMovies=state.filterMovies.filter(movie => Math.floor(movie?.vote_average) ===Math.floor(action.payload.rating) );
				if(action.payload.genre !== '')state.filterMovies=state.filterMovies.filter(movie => movie?.genre_ids[0] === action.payload.genre);	
			}
			state.message =state.filterMovies.length+' movies'
		},
		searchMovie: (state, action) => {
			var movies = current(state.movies);

			if (action.payload === '') {
				state.filterMovies = [];
			} else {
				state.filterMovies = [];
				movies?.map((movie) => {
					if (
						movie?.title
							?.toUpperCase()
							.includes(action.payload.toUpperCase()) ||
						movie?.name?.toUpperCase().includes(action.payload.toUpperCase())
					) {
						state.filterMovies = [...state.filterMovies, movie];
					}
				});
				state.message =state.filterMovies.length+' movies'
			}
			
		},
	},
});


export const { setMovies, filterMovie, searchMovie } = filterSlice.actions;

export default filterSlice.reducer;
