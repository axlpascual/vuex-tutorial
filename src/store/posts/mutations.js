export default {
    addPost(state, payload) {
        payload.id = state.posts.length + 1;
        state.posts.push(payload);
    },
    editPost(state, payload) {
        const posts = state.posts.map(data => {
            if (data.id == payload.id) {
                return {
                    ...payload
                }
            }
            return data;
        })
        state.posts = posts;
    },
    deletePost(state, id) {
        const posts = state.posts.filter(data => data.id != id);
        state.posts = posts;
    },
    getPosts(state, payload) {
        state.posts = payload
    },
};