import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
      state: {

        menuList: [],
        permList: [],
        hasRoutes: false

      },
      mutations: {
        setMenuList(state,menus){
          state.menuList = menus
        },
        setPermList(state,perms){
          state.permList = perms
        },
        changeRouteStatus( state, hasRoute ){
          state.hasRoutes = hasRoute
          // sessionStorage.setItem("hasRoute", hasRoute)
        }

      },
      actions: {},
      modules: {},
};
