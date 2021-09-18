<template>
    <div class="row g-4 p-3">
        <h1>Posts</h1>
        <div 
            v-for="(post, index) in posts"
            :key="index"
            class="col-md-4 col-sm-6"
        >
            <div class="card">
                <div class="card-body">
                    <h5 
                        class="card-title text-truncate" 
                        v-text="post.title"
                    />
                    <p 
                        class="card-text text-truncate" 
                        v-text="post.body"                        
                    />
                    <router-link
                        :to="'/posts/' + post.id"
                        v-text="'View post'"
                        class="btn btn-primary me-3"
                    />
                    <router-link
                        :to="'/edit/' + post.id"
                        v-text="'Edit post'"
                        class="btn btn-light"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostList',
    computed: {
        posts() {
            return this.$store.getters.getPosts.slice().reverse();
        },
    }
}
</script>

<style scoped>
.card-title:first-letter {
    text-transform: capitalize;
}

</style>