<form id="signup-form" action="/signup" method="POST">
  <div>회원가입</div>
  <div>
    <label for="id">아이디</label>
    <input type="text" id="id" name="id" required>
  </div>
  <div>
    <label for="passowrd">비밀번호</label>
    <input type="password" id="passowrd" name="password" required>
  </div>
  <div>
    <label for="passowrd2">비밀번호 확인</label>
    <input type="password" id="passowrd2" name="password2" required>
  </div>
  <div>
    <label for="name">이름</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div>
    <label for="email">이메일</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div>
    <button type="submit">회원 가입하기</button>
  </div>
  <div id="info" style="color: red; display:none">비밀번호가 같지 않습니다</div>
</form>