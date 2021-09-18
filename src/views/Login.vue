<template>
    <div class="Login p-3">
        <h1>Login</h1>
        <form @submit="login">
            <div>
                <label 
                    for="email"
                    class="form-label"
                    v-text="'Email'"    
                />
                <input 
                    v-model="email"
                    name="email" 
                    type="text" 
                    id="email" 
                    class="form-control"
                    required
                />
            </div>
            <div>
                <label 
                    for="password"
                    class="form-label"
                    v-text="'Password'"    
                />
                <input 
                    v-model="password"
                    name="password" 
                    type="password" 
                    id="password" 
                    class="form-control"
                    required
                >
            </div>
            <button 
                type="submit"
                class="btn btn-primary mt-3"    
            >Login</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data: () => ({
        email: null,
        password: null
    }),
    methods: {
        login(evt) {
            evt.preventDefault();
            localStorage.setItem('isAuthenticated', true);
            this.$router.push('/home')
        }
    }
}
</script>

<style>

</style>