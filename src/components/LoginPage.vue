    <template>
        <div>
            <div class="login">
                <div class="login-content">
                    <form class="form">
                        <h1>Sign In</h1>
                        <label for="username">Username</label>
                        <small  v-if="!username && formSubmitted" class="required-label">* Required</small>
                        <input  v-model="username" name="username" type="text" class="input">
                        <label  for="password">Password</label>
                        <input  v-model="password" name="password" type="text" class="input">
                        <router-link to="/home">
                            <button class="btn" @click.prevent="login">Sign In</button>
                        </router-link>
                    </form>
                </div>
                
            </div>
        </div>
        
    </template>
    <script>


        export default {
        data(){
            return {
                username: '',
                password: '',
                formSubmitted: false
            }
        },
        methods: {
            login() {

               this.formSubmitted = true;
               if (!this.username.trim()) {
                        return; // Prevent form submission if username is empty
                    }
                localStorage.setItem('username', this.username);
                this.$router.push({ name: 'HomePage'})
            }
        }
    };
    </script>
    <style>
        .required-label {
            font-size: 12px;
            color: red;
            margin-left: 5px;
        }
        .login-content {
          
            background-color: rgba(46, 42, 42, 0.8); /* Light white transparent background */
            padding: 20px;
            border-radius: 8px;
            width: 430px;    
        }

        .login {
    width: 100%;
    height: 93vh;
    background: url('/public/images/background.jpg');
    box-shadow: inset 50px 70px  100px #000000, inset -50px -70px  100px #000000;
    display: flex;
    justify-content: center;
    align-items: center;
}   

.form{
    display:flex;
    flex-direction: column;
    /* max-width:500px; */
    margin: 100px auto ;
  }
  .form h1{
    margin: 20px  0;
  }

  .input{
    border: 1px solid gray;
    padding: 10px;
    margin-bottom:20px;
    border-radius:5px;
}
  
.btn{
    background-color:#e50914;
    width: 100%;
    color: white;
    padding: 10px;
    border-radius: 5px;
    border:none;
    cursor: pointer;
}

    </style>