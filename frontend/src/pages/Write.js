import axios from "axios";
import { useEffect } from "react";
import MyForm from "../Reading";

function Write() {
  var [myValue, setMyValue] = MyForm({ title: "", desc: "" });

  useEffect(() => {
    console.log("Page reload");
  }, [myValue]);

  const write = () => {
    axios.post(`http://localhost:4000/api/write`, myValue).then((response) => {
      console.log(response.data);
      // setData(response.data);
    });
    // console.log(myValue);
  };

  return (
    <div>
      <h1>Write New Post</h1>
      <form>
        <label>Title</label>
        <input
          onChange={setMyValue}
          value={myValue.title}
          name="title"
          type="text"
        ></input>
        <label>Desctiption</label>
        <input
          onChange={setMyValue}
          value={myValue.desc}
          name="desc"
          type="text"
        ></input>
        <button onClick={write}>SUBMIT</button>
      </form>
    </div>
  );
}

export default Write;
