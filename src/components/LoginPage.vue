    <template>
        <div>
            <div class="login">
                <form class="form">
                    <h1>Sign In</h1>
                    <label for="username">Username</label>
                    <input  v-model="username" name="username" type="text" class="input">
                    <label  for="password">Password</label>
                    <input  v-model="password" name="password" type="text" class="input">
                    <router-link to="/home">
                        <button class="btn" @click.prevent="login">Sign In</button>
                    </router-link>
                </form>
            </div>
        </div>
        
    </template>
    <script>
        export default {
        data(){
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login() {
                this.$router.push({ name: 'HomePage', params: { username: this.username }})
            }
        }
    };
    </script>
    