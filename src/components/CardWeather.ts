import { defineComponent, ref } from 'vue';
import { useWeather } from '../composables/useWeather';

export default defineComponent({
    name: 'CardWeather',
    props: {},
    emits: [],
    setup() {

        const { defaultWeathers } = useWeather();
        const s = ref( 5 );

        return {
            s,
            defaultWeathers
        }
    }
});
