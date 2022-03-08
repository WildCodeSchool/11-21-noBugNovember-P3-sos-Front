import "./Styles/PanelAdmin.css";
import { Link } from "react-router-dom";
import ArticleForm from "../components/ArticleForm";
import ListArticles from "../components/ListArticles";
import Adminsidebar from "../components/Adminsidebar";
import ModificationArticle from "../components/ModificationArticle";

import logo from "../assets/logoW.png";

const PanelAdmin = () => {
  return (
    <div className="panel-admin-container">
      <Adminsidebar />

      <div className="content-container">
        {/* <ListArticles /> */}
        <ArticleForm />
        {/* <ModificationArticle/> */}
      </div>
    </div>
  );
};
export default PanelAdmin;
