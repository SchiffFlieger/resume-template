import Vue from "vue";
import Vuetify from "vuetify";
import light from './theme'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {light}
    }
});