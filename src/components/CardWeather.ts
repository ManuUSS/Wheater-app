import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'CardWeather',
    props: {
        countryName: {
            type: String,
            // required: true
        },
        placeName: {
            type: String,
            // required: true
        }
    },
    emits: [],
    setup( props ) {

        return {
        }
    }
});
