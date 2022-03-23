import "./App.css";

import { Routes, Route, useLocation, useParams } from "react-router-dom";

import ArticleForm from "./components/ArticleForm";
import ListeVilles from "./components/Admin/ListeVilles";
import ModalDL from "./components/ModalDL";
import Suppression from "./components/Suppression";

import ArticlesGrid from "./screens/ArticlesGrid";
import FirstVisit from "./screens/FirstVisit";
import IdentificationAdmin from "./screens/IdentificationAdmin";
import Home from "./screens/Home";
import PanelAdmin from "./screens/PanelAdmin";
import ArticleDetail from "./screens/ArticleDetail";
import ArticleContextProvider from "./context/ArticleContext";
import CategoriesContextProvider from "./context/CategoriesContext";
import SousCategoriesContextProvider from "./context/SousCategoriesContext";
import VillesContextProvider from "./context/VillesContext";
import SecteursContextProvider from "./context/SecteursContext";
import ListeCategorie from "./components/Admin/ListeCategorie";
import ListeArticles from "./components/Admin/ListeArticles";
import ListeSousCat from "./components/Admin/ListeSousCat";
import ListeSecteurs from "./components/Admin/ListeSecteurs";
import ModificationArticle from "./components/ModificationArticle";
import { useState } from "react";
import Parcours from "./components/Parcours";



function App() {
  // const [isActive, setIsActive] = useState(false);
  // const { isShowing, toggle } = useModal();

  let location = useLocation();
  // let navigate = useNavigate();
  let backgroundLocation = location.state && location.state.backgroundLocation;

  // const retourFunc = () => {
  //   toggle();
  //   navigate(-1);
  //   setIsActive(!isActive);
  // };
  const [modifArticle,setModifArticle]=useState("")
  const [deleteArticle,setDeletefArticle]=useState("")

  return (
    <div className="App">
      <ArticleContextProvider>
        <CategoriesContextProvider>
          <SousCategoriesContextProvider>
            <VillesContextProvider>
              <SecteursContextProvider>
                {console.log(deleteArticle)}
                <Routes location={backgroundLocation || location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/etapes" element={<FirstVisit />} />
                  <Route path="/articlesGrid" element={<ArticlesGrid />} />
                  <Route
                    path="/articlesGrid/articleDetail/:id"
                    element={<ArticleDetail />}
                  ></Route>
                  <Route
                    path="/articlesGrid/articleDetail/:id/modalDL"
                    element={<ModalDL />}
                  ></Route>
                  <Route path="admin" element={<IdentificationAdmin />}></Route>
                  <Route path="admin-controler" element={<PanelAdmin />}>
                    <Route path="articles" element={<ListeArticles  setModifArticle={setModifArticle}/>} />
                    <Route path="articleForm" element={<ArticleForm />} />
                    <Route path="categories" element={<ListeCategorie />} />
                    <Route path="sousCategories" element={<ListeSousCat />} />
                    <Route path="villes" element={<ListeVilles />} />
                    <Route path="secteurs" element={<ListeSecteurs />} />
                    <Route
                      path="modification-article"
                      element={<ModificationArticle modifArticle={modifArticle}/>}
                    />
                  </Route>
                </Routes>
                {backgroundLocation && (
                  <Routes>
                    <Route
                      path="/articlesGrid/articleDetail/:id/modalDL"
                      element={<ModalDL />}
                    />
                    <Route
                      path="admin-controler/articles/modal"
                      element={<Suppression deleteArticle={deleteArticle} />}
                    />
                    <Route
                      path="admin-controler/categories/modal"
                      element={<Suppression />}
                    />
                    <Route
                      path="admin-controler/sousCategories/modal"
                      element={<Suppression />}
                    />
                    <Route
                      path="admin-controler/villes/modal"
                      element={<Suppression />}
                    />
                    <Route
                      path="admin-controler/secteurs/modal"
                      element={<Suppression />}
                    />
                  </Routes>
                )}
              </SecteursContextProvider>
            </VillesContextProvider>
          </SousCategoriesContextProvider>
        </CategoriesContextProvider>
      </ArticleContextProvider>
    </div>
  );
}

export default App;
