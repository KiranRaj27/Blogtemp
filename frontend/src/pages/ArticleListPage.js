import articleContent from "./article-content";
import ArticleList from "../components/ArticleList";
import { useEffect, useState } from "react";
import axios from "axios";

const ArticlesListPage = () => {
  var [data, setData] = useState([]);

  const loadDataFromApi = () => {
    axios.get("http://localhost:4000/api/view").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };

  useEffect(() => {
    loadDataFromApi();
    console.log(data);
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <ArticleList articles={data} />
    </div>
  );
};

export default ArticlesListPage;
