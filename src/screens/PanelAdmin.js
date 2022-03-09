import "./Styles/PanelAdmin.css";
import Adminsidebar from "../components/Adminsidebar";
import { Outlet } from "react-router-dom";

const PanelAdmin = () => {
  return (
    <div className="panel-admin-container">
      <Adminsidebar />

      <div className="content-container">
        <Outlet />
        {/*<ArticleForm />*/}
        {/* <ModificationArticle/> */}
      </div>
    </div>
  );
};
export default PanelAdmin;
