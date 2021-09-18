<template>
    <div class="row p-3">
        <div class="col">
            <div class="row">
                <router-link
                    to="/posts"
                    class="btn btn-light col-auto"
                    v-text="'Back'"
                />
            </div>
            <div class="row">
                <h1 
                    class="card-title"
                    v-text="this.post.title"
                >
                </h1>
                <p
                    class="card-text"
                    v-text="this.post.body"
                />
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Post',
    computed: {
        id() {
            return this.$route.params.id;
        },
        post() {
            return this.$store.getters.getPost(this.id);
        },
    }
}
</script>

<style scoped>
    .card-title:first-letter {
        text-transform: capitalize;
    }
</style>