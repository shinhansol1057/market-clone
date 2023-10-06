

<script>
  import { onMount } from 'svelte';
  import Footer from '../components/Footer.svelte';
  import { getDatabase, ref, onValue } from "firebase/database";

  
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  setInterval(()=>min = min+1, 60000)

  $: items = []

  const db = getDatabase();
  const itemsRef = ref(db, 'items/');
  onMount(()=>{
    onValue(itemsRef, (snapshot) => {
    const data = snapshot.val();
    items = Object.values(data)
    });
  });

  const calcTime = (timeStamp) => {
  const curTime = new Date().getTime();
  const time = new Date(curTime - timeStamp);
  const day = time.getDate() - 1;
  const hour = time.getHours() - 9;
  const minute = time.getMinutes();
  const second = time.getSeconds();

  if (day > 0) return `${day}일 전`;
  else if (hour > 0) return `${hour}시간 전`;
  else if (minute > 0) return `${minute}분 전`;
  else if (second > 0) return `${second}초 전`;
  else return "방금 전";
};
  
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
  {#each items as item}
    <div class="item-list">
      <div class="item-list__img">
        <img src={item.imgUrl} alt="item.imgUrl">
      </div>
      <div class="item-list__info">
        <div class="item-list__info-title">{item.title}</div>
        <div class="item-list__info-price">{item.price.toLocaleString("ko-KR")}원</div>
        <div class="item-list__info-meta">{item.place} {calcTime(item.insertAt)}</div>
        <div class="item-list__info-price">{item.description}</div>
      </div>
    </div>
    
  {/each}
  <a class="write-button" href="#/write">+글쓰기</a>
</main>

<Footer location="home"/>
<div class="media-info-msg">화면 사이즈를 줄여주세요</div>
