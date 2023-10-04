const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);
  
  const res = await fetch("/login", {
    method: "post",
    body: formData,
  });
  const data = await res.json();
  const accessToken = data.access_token;
  window.localStorage.setItem('token', accessToken)

  const infoDiv = document.querySelector("#info")
  infoDiv.innerText = "로그인 성공"

  if(res.status === 200) {
    alert('로그인 성공')
    window.location.pathname = '/'
  }else if(res.status === 401){
    alert('아이디 또는 비밀번호가 틀렸습니다.')
  }
}

const form = document.querySelector("#login-form");
form.addEventListener("submit", handleSubmit);
