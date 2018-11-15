import { createFeatureSelector, createSelector } from '@ngrx/store';
import { filmAdapter, FilmState } from '../reducers/film.reducer';
import { getCount, getTotal } from '../utils/count.utils';
import { selectSearchTerm } from '../../search/selectors/search.selectors';

export const selectFilmState = createFeatureSelector<FilmState>('film');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = filmAdapter.getSelectors(selectFilmState);

export const selectFilmCount = createSelector(
  selectFilmState,
  selectSearchTerm,
  getCount,
);

export const selectFinalFilmTotal = createSelector(
  selectFilmState,
  selectSearchTerm,
  getTotal,
);
