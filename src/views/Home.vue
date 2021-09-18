<template>
    <div class="home p-3">
        <h1>Home</h1>
        <p>Hello user!</p>
        <button
            class="btn btn-light"
            v-text="'Logout'"
            @click="logout"
        />
    </div>
</template>

<script>
export default {
    name: 'Home',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>