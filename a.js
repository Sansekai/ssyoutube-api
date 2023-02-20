import axios from "axios";

const anu = await axios.get("http://localhost:3000/api/youtube?url=https://youtu.be/XR7A6tVVzxw");
console.log(anu.data.status);
