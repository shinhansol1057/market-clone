const checkPassword = () => {
  const formData = new FormData(form);
  const password1 = formData.get("password");
  const password2 = formData.get("password2");
  if (password1 === password2) {
    return true;
  } else return false;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);
  const div = document.querySelector('#info');
  if(checkPassword()) {
    const res = await fetch("/signup", {
      method: "post",
      body: formData,
    });
    const data = await res.json();
    if(data === '200') {
      alert('회원 가입 완료')
      window.location.pathname = '/login.html'
    }
  }else {
    div.style.display = "block"
  }
  
};

const form = document.querySelector("#signup-form");
form.addEventListener("submit", handleSubmit);
