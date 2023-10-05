<script>
  import { getDatabase, ref, set, push} from "firebase/database";
  import { getStorage, ref as refImage, uploadBytes, getDownloadURL } from "firebase/storage";
  import Footer from '../components/Footer.svelte';

  let title;
  let price;
  let description;
  let place;
  let files;

  const storage = getStorage();
  const db = getDatabase();

function writeUserData(imgUrl) {
  push(ref(db, 'items/'), {
    title,
    price,
    description,
    place,
    imgUrl,
    insertAt: new Date().getTime(),
  });
  alert("글쓰기 완료!")
  window.location.hash="/";
}

const uploadFile = async() => {
  const file = files[0]
  const name = file.name
  const imgRef = refImage(storage, name)
  await uploadBytes(imgRef, file);
  const url = await getDownloadURL(imgRef)
  return url
}

const handleSubmit = async() => {
  const url = await uploadFile()
  writeUserData(url)
}

</script>

<form id="write-form" on:submit|preventDefault={handleSubmit}>
  <h2>글쓰기</h2>
  
  <div>
    <label for="">이미지</label>
    <input type="file" bind:files id="image" name="image">
  </div>
  <div>
    <label for="">제목</label>
    <input type="text" id="title" name="title" bind:value={title}>
  </div>
  <div>
    <label for="">가격</label>
    <input type="number" id="price" name="price" bind:value={price}>
  </div>
  <div>
    <label for="">설명</label>
    <input type="text" id="description" name="description" bind:value={description}>
  </div>
  <div>
    <label for="">장소</label>
    <input type="text" id="place" name="place" bind:value={place}>
  </div>
  <div>
    <button class="submit-button" type="submit">제출</button>
  </div>
</form>

<Footer location="write"/>

<style>
  h2{
    color: tomato;
  }
  #write-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vw;
  }

  #write-form div{
    margin: 5px 
  }
  .submit-button {
    border: none;
    background-color: tomato;
    border-radius: 30%;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    margin-left: 20px;
    color: rgb(40, 40, 239);
    widows: 30px;
    height: 30px;
  }

  .submit-button:hover {
    scale: 1.3;
    background-color: rgba(254, 111, 15, 0.5);
  }
</style>