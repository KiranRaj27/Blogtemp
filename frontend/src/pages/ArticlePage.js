import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleList from "../components/ArticleList";
import articleContent from "./article-content";
import NotFoundPage from "./NotfoundPage";

const ArticlePage = () => {
  const name = useParams().name;
  console.log(name);
  // const article = articleContent.find((article) => article.name === name);

  // const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(`/api/articles/${name}`);
  //     const body = await result.json();
  //     setArticleInfo(body);
  //   };
  //   fetchData();
  // }, [name]);

  const [data, setData] = useState([]);

  const loadDataFromApi = () => {
    axios.get(`http://localhost:4000/api/view/${name}`).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };

  useEffect(() => {
    loadDataFromApi();
    console.log(data);
  }, []);

  const deleteDataFromApi = () => {
    axios
      .post(`http://localhost:4000/api/post/delete/${name}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  };

  // if (!article) {
  //   return <NotFoundPage />;
  // }

  // const otherArticles = articleContent.filter(
  //   (articles) => articles.name !== name
  // );
  // console.log(otherArticles);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.desc}</p>
      <br />
      <button onClick={deleteDataFromApi}>Delete Post</button>
      <button>Update Post</button>
      {/* <p>This post has been upvoted {articleInfo.upvotes} times</p> */}
      {/* {post.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h1>Other Article:</h1>
      <ArticleList articles={otherArticles} /> */}
    </div>
  );
};

export default ArticlePage;
