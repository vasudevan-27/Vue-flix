    <template>
        <div>
            <div class="login">
                <div class="login-content">
                    <form class="form">
                        <h1>Sign In</h1>
                        <label for="username">Username</label>
                        <small  v-if="!username" class="required-label">* Required</small>
                        <input  v-model="username" name="username" type="text" class="input">
                        <label  for="password">Password</label>
                        <input  v-model="password" name="password" type="password" class="input">
                       
                         <button class="btn" @click.prevent="login">Sign In</button>
                     
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
               
            }
        },
        methods: {
            async login() {
                try {
                    const response = await fetch('http://localhost/vue-flix/src/api_php/login.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: this.username,
                            password: this.password
                        })
                    });

                    if (!response.ok) {
                        throw new Error('Login failed');
                    }

                    const data = await response.json();

                    if (data.success) {
                        localStorage.setItem('username', data.username);
                        // Authentication successful, navigate to home page
                        this.$router.push({ name: 'HomePage'});
                       
                    } else {
                        // Authentication failed, show error message
                        alert('Invalid username or password');
                    }
                } catch (error) {
                    console.error('Error logging in:', error);
                    alert('An error occurred while logging in');
                }
            } 
        }
    }
    </script>


    <style scoped>
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
    color: white;
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