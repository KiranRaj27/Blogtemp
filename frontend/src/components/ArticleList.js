import React from "react";
import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => (
  <>
    {articles.map((article, key) => (
      <Link
        className="article-list-item"
        key={key}
        to={`/article/${article._id}`}
      >
        <h1>{article.title}</h1>
        {/* <p>{article.desc[0].substring(0, 150)}...</p> */}
      </Link>
    ))}
  </>
);

export default ArticleList;
