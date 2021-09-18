export default {
    getPosts: (state) => {
        return state.posts;
    }, 
    getPost: (state) => (id) => {
        return state.posts.find(post => post.id == id)
    }
};