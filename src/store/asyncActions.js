import qualityAirApi from '../api/qualityAir.api';
import {
  addItems,
  enableLoading,
  disableLoading,
  addError,
} from './slices/airQuality';

const asyncActionCreator = () => async dispatch => {
  dispatch(enableLoading());

  const fetchData = async () => {
    try {
      const { data } = await qualityAirApi.fetchLatest();
      dispatch(addItems(data.results));
    } catch (error) {
      dispatch(addError(error));
    } finally {
      dispatch(disableLoading());
    }
  };

  fetchData();
};

export default asyncActionCreator;
