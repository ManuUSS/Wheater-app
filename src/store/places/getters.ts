import { GetterTree } from 'vuex';
import { PlacesWeatherState } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<PlacesWeatherState, StateInterface> = {
    someGetter( /* state */ ) {
        // return true;
    }
}



export default getters;