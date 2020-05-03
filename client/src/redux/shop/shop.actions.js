import ShopActionTypes from './shop.types';

//Action creators
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});
export const fetchCollectionsFailure = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: collectionsMap,
});


