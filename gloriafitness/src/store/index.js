import { createStore } from 'vuex';
import { addDoctoDB, deleteDocfromDB, retrieveCollection, retrieveDoc } from './helperfunctions';
import { signingin } from '@/firestore/auth';
import { signingout } from '@/firestore/auth';
import { isLoggedIn } from '@/firestore/auth';
import { blogentries } from './modules/blogentries';



/*
 {
      name: "florianbachl-test",
      value: "BlaBla",
      description: "Nicht essentielles Cookie, das nur ",
      expiry: "12m",
      allowed: true,
    },
*/ 

const cookieArray = {
  essential: [
    {
      name: "florianbachl-essential",
      value: "Essential",
      description: "Essentielles Cookie für die korrekte Funtion der Seite",
      expiry: "12m",
    },
  ],
  nonessential: [
    //{
    //  name: "Google Analytics",
    //  description: "Google Analytics wird verwendet, um Nutzer auf Webseiten zu folgen. Die Absicht ist, Anzeigen auszuspielen, die relevant und ansprechend für den einzelnen Benutzer sind und daher wertvoller für Publisher und werbetreibende Drittparteien sind. ",
    //  expiry: "12m",
    //  allowed: true,
    //},
  ],
}


export const store = createStore({
  modules: {
    blogentries: blogentries,
  },

  state() {
    return {
      user: null,
      cookiesaccepted: false,
      cookieArray: JSON.parse(JSON.stringify(cookieArray)),
      popup: {
        name: null,
        editid: null,
        statedata: null,
        tabs: [],
        passeddata: null,
      },
      isPopupActive: false,
      submitting: false,
      isLoading: false,
      isexpanded: false
    };
  },
  mutations: {
    submit(state) {
      state.submitting = true
    },
    setExpanded(state, payload) {
      state.isexpanded = payload
    },
    setLoading(state, payload) {
      state.isLoading = payload
    },
    setCookieConsent(state, payload) {
      state.cookiesaccepted = payload
    },
    
    resetPopup(state) {
      state.popup = {
        name: null,
        editid: null,
        statedata: null,
        tabs: []
      }
      state.isPopupActive = false
      state.submitting = false
      state.isLoading = false

    },
    setPopup(state, payload) {
      if (payload.name && payload.tabs.length != 0) {
        state.popup = payload
        state.isPopupActive = true
      }


    },

    signin(state, obj) {
      signingin(obj.email, obj.password)
        .then((user) => {
          state.user = user;
          
          // console.log(state.user);
        })

    },
    signout() {

      signingout()
    },
    resetCookies(state){
      console.log(cookieArray)
      state.cookieArray = cookieArray
    }

  },
  getters: {
    getUser(state) {
      return state.user;
    },
    isExpanded(state) {
      return state.isexpanded;
    },
    isLoading(state) {
      return state.isLoading
    },
    isSubmitting(state) {
      return state.submitting
    },
    isLoggedIn() {
      return isLoggedIn()
    },
    getPopup(state) {
      return state.popup
    },
    getPopupName(state) {
      return state.popup.name
    },
    isPopupActive(state) {
      return state.isPopupActive
    },
    getCookieConsent(state) {
      console.log(state.cookiesaccepted)
      return state.cookiesaccepted
    },
    getCookies(state){
      return state.cookieArray
    }
  },
  actions: {
    async signIn(context, payload) {
      await context.commit('signin', payload);
    },
    async submit(context) {
      await context.commit('submit');
    },
    async setLoading(context, payload) {
      await context.commit('setLoading', payload);
    },
    async setPopup(context, payload) {
      await context.commit('setPopup', payload);
    },
    async setExpanded(context, payload) {
      await context.commit('setExpanded', payload);
    },
    async resetPopup(context) {
      await context.commit('resetPopup');
    },
    async setCookieConsent(context, payload) {
      await context.commit('setCookieConsent', payload);
    },
    async initCookies(context) {
      await context.commit('initCookies');
    },
    async resetCookies(context) {
      await context.commit('resetCookies');
    },
    async getChildren(context, payload) {
      let temp = []
      for (let g in payload.response) {
        let arr = {}
        let arr2 = {}
        for (let c in payload.payload.retrieveChildren) {

          await retrieveDoc({
            collection: payload.payload.retrieveChildren[c].collection,
            id: payload.response[g].data()[payload.payload.retrieveChildren[c].name]
          }).then(async function (responseinner) {

            arr[payload.payload.retrieveChildren[c].name] = {}
            arr[payload.payload.retrieveChildren[c].name] = {
              id: responseinner.id,
              ...responseinner.data()
            }
          })
        }
        for (let f in payload.payload.retrieveArrays) {
          arr2[payload.payload.retrieveArrays[f].name] = []
          for (let j in payload.response[g].data()[payload.payload.retrieveArrays[f].name]) {
            await retrieveDoc({
              collection: payload.payload.retrieveArrays[f].collection,
              id: payload.response[g].data()[payload.payload.retrieveArrays[f].name][j]
            }).then(async function (responseinner2) {
              arr2[payload.payload.retrieveArrays[f].name].push({
                id: responseinner2.id,
                ...responseinner2.data()
              })
            })
          }
        }
        let varu = {
          id: payload.response[g].id,
          ...payload.response[g].data(),
          ...arr,
          ...arr2
        }
        if (payload.singleentry) {
          temp = varu
        } else {
          temp.push(varu)

        }

      }
      return temp
    },
    async retrieveEntries(context, payload) {
      let val = await retrieveCollection({
        collection: payload.collection,
        conditions: payload.conditions
      }).then(async function (response) {
        let temp = []
        temp = await context.dispatch('getChildren', { payload: payload, response: response.docs });
        if (payload.setFunction) {
          context.commit(payload.setFunction, temp);
        }
        return temp
      })
      return val
    },
    async retrieveEntry(context, payload) {
      let val = await retrieveDoc({
        collection: payload.collection,
        id: payload.id
      }).then(async function (response) {
        let temp = await context.dispatch('getChildren', { payload: payload, response: [response], singleentry: true });
        return temp
      })
      return val
    },
    async createEntry(context, payload) {
      let id = payload.object.id
      delete payload.object.id
      let val = await addDoctoDB({
        collection: payload.collection,
        object: payload.object,
        id: id
      }).then(async function (response) {
        return response
      })

      return val;
    },
    async deleteEntry(context, payload) {
      let id = null
      if (payload != undefined && payload != null) {
        id = payload.id
      }
      await deleteDocfromDB({
        collection: payload.collection,
        conditions: payload.conditions,
        id: id
      })
    },
  }
});