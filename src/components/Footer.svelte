<script>
  export let location;

  const moveToHome = () => {
    window.location.hash = '/'
  }
</script>


<footer>
  <div class="footer-block" >
    <button class="footer-icons" on:click={moveToHome}>
      {#if location==='home'}
      <img src="assets/home_black.svg" alt="home">
      {:else}
      <img src="assets/home_white.svg" alt="home">
      {/if}
      <div>홈</div>
    </button>
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