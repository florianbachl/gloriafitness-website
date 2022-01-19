export const blogentries = {
    state() {
        return {
            BlogEntryData: [],
        };
    },
    mutations: {
        setBlogEntryData(state, payload) {
            state.BlogEntryData = payload
        },
    },
    getters: {
        getBlogEntryData(state) {
            return state.BlogEntryData;
        },
    },
    actions: {
        resetBlogEntryData(context){
            context.commit('setBlogEntryData', []);
        },
        setBlogEntryData(context, payload){
            context.commit('setBlogEntryData', payload);
        }
    
    }
}