import { createStore } from 'vuex';

export interface StateInterface {
  prop: boolean;
}

export default createStore<StateInterface>({
  modules: {
  }
})
