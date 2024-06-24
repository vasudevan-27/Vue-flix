<template>
  <div>
    <div class="showcase" >
        <div class="showcase-top">
          <img src="/images/logo.png" alt="Netflix-Logo">
          <router-link to="/login" >
            <button>Sign in</button>
          </router-link>
        </div>
        <div class="showcase-content">
          <h1>Ultimated movies, TV shows and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <router-link to="/login">
            <button>Get Started ></button>
          </router-link>
        </div>
    </div>
  </div>
</template>

<style>

.showcase {
    width: 100%;
    height: 93vh;
    position: relative;
    background: url('/public/images/background.jpg') no-repeat center center/cover;
}

.showcase::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: inset 50px 70px  100px #000000, inset -50px -70px  100px #000000;
}

.showcase-top{
    position: relative;
    z-index: 2;
    height: 90px;

}

.showcase-top img{
    width: 140px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.showcase-top button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    cursor: pointer;
    color: white;
    background-color: #e50914;
    padding: 10px 20px; 
    border: none; 
    border-radius: 5px; 
}

.showcase-content {
    position: relative;
    z-index: 2;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 7rem;
}

.showcase-content h1 {
    font-weight: 700;
    font-size: 3.6rem;
    line-height:0.6 ;
    margin: 0 0 2rem;
}

.showcase-content p {
    
    color: #fff;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 0.5;
    margin: 0 0 2rem;
}

.showcase-content button {
    font-size: 1.3rem;
    padding: 1.5rem 2.7rem;
    background-color: #e50914;
    color: white;
    border: none; 
    border-radius: 5px; 
    cursor: pointer;
    
}

</style>