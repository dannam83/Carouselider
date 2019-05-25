import { FETCH_MEDIA } from './types';
import DATA from '../data.json';

export const fetchMedia = () => {
  return ({
    type: FETCH_MEDIA,
    payload: DATA.data
  })
}

export const searchMedia = (search) => {
  if (search === "") {
    return ({
      type: FETCH_MEDIA,
      payload: DATA.data
    })
  }

  const filter = search.toLowerCase();
  const data = DATA.data.filter(m => m.name.toLowerCase().includes(filter));

  return ({
    type: FETCH_MEDIA,
    payload: data
  })
}
