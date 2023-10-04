const calcTime = (timestamp) => {
  const curTime = new Date().getTime();
  const time = new Date(curTime - timestamp);
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

const renderData = (data) => {
  const main = document.querySelector("main");
  console.log(data);
  data.reverse().forEach(async (obj) => {
    const res = await fetch(`/images/${obj.id}`);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const div = document.createElement("div");
    div.className = "item-list";
    div.innerHTML = `<div class="item-list__img">
                      <img src=${url} alt="image">
                    </div>
                    <div class="item-list__info">
                      <div class="item-list__info-title">${obj.title}</div>
                      <div class="item-list__info-meta">${obj.place} ${calcTime(
      obj.insertAt
    )}</div>
                      <div class="item-list__info-price">${obj.price}원</div>
                    </div>`;
    main.appendChild(div);
  });
};

const fetchList = async () => {
  const accessToken = window.localStorage.getItem('token');
  const res = await fetch("/items",{
    headers:{
      Authorization: `Bearer ${accessToken}`
    }
  });
  if (res.status === 401) {
    alert("로그인이 필요합니다!");
    window.location.pathname = "/login.html";
    return;
  }
  const data = await res.json();
  let main = document.querySelector("main");
  main = "";
  renderData(data);
};

fetchList();
