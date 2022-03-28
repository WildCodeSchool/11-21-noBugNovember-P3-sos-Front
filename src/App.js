//*IMPORT CSS//*
import "./App.css";

//*IMPORT REACT//*
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

//*IMPORT COMPONENTS //*
import ArticleForm from "./components/ArticleForm";
import ModalDL from "./components/ModalDL";
import ModificationArticle from "./components/ModificationArticle";
import ListeArticles from "./components/Admin/ListeArticles";
import ListeCategorie from "./components/Admin/ListeCategorie";
import ListeSecteurs from "./components/Admin/ListeSecteurs";
import ListeSousCat from "./components/Admin/ListeSousCat";
import ListeVilles from "./components/Admin/ListeVilles";
import Suppression from "./components/Suppression";

//*IMPORT SCREENS //*

import ArticleDetail from "./screens/ArticleDetail";
import ArticlesGrid from "./screens/ArticlesGrid";
import FirstVisit from "./screens/FirstVisit";
import Home from "./screens/Home";
import IdentificationAdmin from "./screens/IdentificationAdmin";
import PanelAdmin from "./screens/PanelAdmin";

//*IMPORT CONTEXT //*
import ArticleContextProvider from "./context/ArticleContext";
import CategoriesContextProvider from "./context/CategoriesContext";
import SecteursContextProvider from "./context/SecteursContext";
import SousCategoriesContextProvider from "./context/SousCategoriesContext";
import RegionsContextProvider from "./context/RegionsContext";
import VillesContextProvider from "./context/VillesContext";

function App() {
  let location = useLocation();

  let backgroundLocation = location.state && location.state.backgroundLocation;

  const [modifArticle, setModifArticle] = useState("");
  const [deleteData, setDeleteData] = useState("");

  return (
    <div className="App">
      <ArticleContextProvider>
        <CategoriesContextProvider>
          <SousCategoriesContextProvider>
            <RegionsContextProvider>
              <VillesContextProvider>
                <SecteursContextProvider>
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
                    <Route
                      path="admin"
                      element={<IdentificationAdmin />}
                    ></Route>
                    <Route path="admin-controler" element={<PanelAdmin />}>
                      <Route
                        path="articles"
                        element={
                          <ListeArticles
                            setModifArticle={setModifArticle}
                            setDeleteData={setDeleteData}
                            deleteData={deleteData}
                          />
                        }
                      />
                      <Route path="articleForm" element={<ArticleForm />} />
                      <Route
                        path="categories"
                        element={
                          <ListeCategorie
                            // setModifArticle={setModifArticle}
                            setDeleteData={setDeleteData}
                          />
                        }
                      />
                      e
                      <Route
                        path="sousCategories"
                        element={<ListeSousCat setDeleteData={setDeleteData} />}
                      />
                      <Route
                        path="villes"
                        element={<ListeVilles setDeleteData={setDeleteData} />}
                      />
                      <Route
                        path="secteurs"
                        element={
                          <ListeSecteurs setDeleteData={setDeleteData} />
                        }
                      />
                      <Route
                        path="modification-article"
                        element={
                          <ModificationArticle
                            modifArticle={modifArticle}
                            setModifArticle={setModifArticle}
                          />
                        }
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
                        path="admin-controler/articles/modal/supprimer"
                        element={
                          <Suppression
                            deleteData={deleteData}
                            page={"articles"}
                            action={"supprimer"}
                          />
                        }
                      />
                      <Route
                        path="admin-controler/articles/modal/visible"
                        element={
                          <Suppression
                            deleteData={deleteData}
                            page={"articles"}
                            action={"visible"}
                          />
                        }
                      />
                      <Route
                        path="admin-controler/categories/modal/supprimer"
                        element={
                          <Suppression
                            deleteData={deleteData}
                            page={"categories"}
                            action={"supprimer"}
                          />
                        }
                      />
                      <Route
                        path="admin-controler/sousCategories/modal/supprimer"
                        element={
                          <Suppression
                            deleteData={deleteData}
                            page={"souscategories"}
                            action={"supprimer"}
                          />
                        }
                      />
                      <Route
                        path="admin-controler/secteurs/modal/supprimer"
                        element={
                          <Suppression
                            deleteData={deleteData}
                            page={"secteurs"}
                            action={"supprimer"}
                          />
                        }
                      />
                      <Route
                        path="admin-controler/villes/modal/supprimer"
                        element={
                          <Suppression
                            deleteData={deleteData}
                            page={"villes"}
                            action={"supprimer"}
                          />
                        }
                      />
                    </Routes>
                  )}
                </SecteursContextProvider>
              </VillesContextProvider>
            </RegionsContextProvider>
          </SousCategoriesContextProvider>
        </CategoriesContextProvider>
      </ArticleContextProvider>
    </div>
  );
}

export default App;
