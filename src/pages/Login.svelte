<script>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { user$ } from '../store';

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const loginWithGoogle = async() => {
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      user$.set(user);
      localStorage.setItem("token", token)
      console.log("result", user)
    }catch(error) {
      console.log(error)
    }
  }
  
  
</script>



<div>{$user$}</div>
<div class="login-box">
  <h2>로그인하기</h2>
  <button class="login-btn" on:click={loginWithGoogle}>
    <div><img src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/5rH/image/aFrEyVpANu07FvoBZQbIB4aF_uc" alt="google-logo"></div>
    <h5>Google로 시작하기</h5>
  </button>
</div>

<style>

  .login-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .login-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    border: 1px solid gray;
    background-color: white;
    cursor: pointer;
  }

  .login-btn img{
    width: 30px;
  }
</style>