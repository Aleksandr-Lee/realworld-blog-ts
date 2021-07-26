import React from "react";
import { Pagination } from "antd";
import { useSelector } from "react-redux";
import rootState from "../../types/rootState";
import "antd/dist/antd.css";
import "./PaginationArticle.scss";

interface IPaginationArticle {
  handlePageClick: (page: number) => void;
}

const PaginationArticle: React.FC<IPaginationArticle> = ({
  handlePageClick,
}) => {
  const articlesCount = useSelector(
    (state: rootState) => state.articlesReducer.articlesCount
  );
  const page = useSelector((state: rootState) => state.articlesReducer.page);
  return (
    <Pagination
      defaultCurrent={1}
      current={page}
      onChange={handlePageClick}
      size="small"
      total={articlesCount}
      pageSize={5}
      showSizeChanger={false}
      hideOnSinglePage
    />
  );
};

export default PaginationArticle;
