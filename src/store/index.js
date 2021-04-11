import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
     persInfo : {
        fname: '',
        lname: '',
        phone: '',
        cin: '',
        passport: '',
        address: '',
        city: '',
        country: ''
     },
     ProInfo : {
        cnss: '',
        officePhone: '',
        email: '',
        emp: '',
        jobAdr: ''
     }
 },
 getters: {},
 mutations: {},
 actions: {}
});