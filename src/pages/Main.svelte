<script>
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  setInterval(()=>min = min+1, 60000)
</script>

<header>
  <div class="info-bar">
    <div class="info-bar__time">{hour}:{min}</div>
    <div class="info-bar__icons">
      <img src="assets/chart.svg" alt="chart">
      <img src="assets/wifi.svg" alt="wifi">
      <img src="assets/battery.svg" alt="battery">
    </div>
  </div>
  <div class="menu-bar">
    <div class="menu-bar__location">
      <h3>역삼1동</h3>
      <img src="assets/arrow.svg" alt="arrow">
    </div>
    <div class="menu-bar__icons">
      <img src="assets/search.svg" alt="search">
      <img src="assets/menu.svg" alt="menu">
      <img src="assets/bell.svg" alt="bell">
    </div>
  </div>
</header>

<main>
  <a class="write-button" href="#/write">+글쓰기</a>
</main>

<footer>
  <div class="footer-block">
    <div class="footer-icons">
      <img src="assets/home.svg" alt="home">
      <div>홈</div>
    </div>
    <div class="footer-icons">
      <img src="assets/doc.svg" alt="doc">
      <div>동네생활</div>
    </div>
    <div class="footer-icons">
      <img src="assets/location.svg" alt="location">
      <div>내 근처</div>
    </div>
    <div class="footer-icons">
      <img src="assets/chat.svg" alt="chat">
      <div>채팅</div>
    </div>
    <div class="footer-icons">
      <img src="assets/user.svg" alt="user">
      <div>나의 당근</div>
    </div>
  </div>
</footer>
<div class="media-info-msg">화면 사이즈를 줄여주세요</div>
