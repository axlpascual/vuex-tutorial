<template>
    <div class="p-3">
        <div
            v-if="isAdd"
        >
            <h1>Add Post</h1>
        </div>
        <div
            v-else-if="!isAdd"
        >
            <h1>Edit Post</h1>
        </div>
        <form @submit="submit">
            <div class="mb-3">
                <label 
                    for="title" 
                    class="form-label"
                    v-text="'Post title'"    
                />
                <input 
                    type="text" 
                    class="form-control" 
                    id="title"
                    v-model="postData.title"
                >
            </div>
            <div class="mb-3">
                <label 
                    for="body" 
                    class="form-label"
                    v-text="'Description'"    
                />
                <textarea 
                    type="text" 
                    class="form-control" 
                    id="body"
                    v-model="postData.body"
                />
            </div>
            <button
                v-if="isAdd"
                type="submit"
                class="btn btn-primary"
                v-text="'Add'"
            />
            <button
                v-else-if="!isAdd"
                type="submit"
                class="btn btn-primary"
                v-text="'Update'"
            />
            <router-link
                class="btn btn-light ms-3"
                v-text="'Cancel'"
                to="/posts"
            />
        </form>
    </div>
</template>

<script>
export default {
    name: 'UpdatePost',
    data: () => ({
        updatedPost: {},
    }),
    mounted() {
        
    },
    methods: {
        submit(evt) {
            evt.preventDefault();
            if (this.isAdd) {
                this.add();
            } else {
                this.update();
            }
        },
        update() {
            this.$store.dispatch('editPost', this.postData);
            this.$router.push('/posts');
        },
        add() {
            this.$store.dispatch('addPost', this.postData);
            this.$router.push('/posts');
        },
    },
    computed: {
        isAdd() {
            return this.$route.name == 'add';
        },
        id() {
            return this.$route.params.id;
        },
        post() {
            return this.$store.getters.getPost(this.id);
        },
        postData() {
            if (!this.isAdd) {
                return {
                    id: this.id,
                    title: this.post.title,
                    body: this.post.body,
                }
            } else {
                return {
                    id: null,
                    title: '',
                    body: '',
                }
            }
        }

    }
}
</script>

<style>

</style>