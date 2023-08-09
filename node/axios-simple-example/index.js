import axios  from "axios";

// 비동기방식
function fetchAsync(){
    const result = axios.get("http://koreanjson.com/posts/1");
    console.log("비동기방식: ",result); //Promise { <pending> }
}
fetchAsync();

// 동기방식

// async function fetchSync(){
//     const result = await axios.get("http://koreanjson.com/posts/1");
//     console.log("동기방식: ",result);
//     console.log(result.data.title);
// }

const fetchSync = async () =>{
    const result = await axios.get("http://koreanjson.com/posts/1");
    console.log("동기방식: ",result);
    console.log(result.data.title);
}

fetchSync();