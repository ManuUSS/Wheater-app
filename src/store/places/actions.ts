import { ActionTree } from 'vuex';
import { PlacesWeatherState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesWeatherState, StateInterface> = {
    someAction( /*{ commit }, payload  */ ) {
        // a line to prevent linter errors
    }
}



export default actions;