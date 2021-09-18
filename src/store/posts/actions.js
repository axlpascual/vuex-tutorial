import { postClient} from '../../lib/http'

export default {
    async fetchPosts({ commit }) {
        const posts = await postClient.get('/posts');
        commit('getPosts', posts.data)
    },
    async editPost({ commit }, payload) {
        const post = payload;
        commit('editPost', post);
    },
    async addPost({ commit }, payload) {
        const post = payload;
        commit('addPost', post);
    },
}