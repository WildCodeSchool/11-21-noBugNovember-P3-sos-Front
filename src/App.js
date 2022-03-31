//*IMPORT CSS//*
import "./App.css";

//*IMPORT REACT//*
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useContext } from "react";

//*IMPORT COMPONENTS //*
import ArticleForm from "./components/Admin/ArticleForm";
import EditName from "./components/Admin/EditName";
import ModalDL from "./components/Client/ModalDL";
import ModificationArticle from "./components/Admin/ModificationArticle";
import ListeArticles from "./components/Admin/ListeArticles";
import ListeCategorie from "./components/Admin/ListeCategorie";
import ListeSecteurs from "./components/Admin/ListeSecteurs";
import ListeSousCat from "./components/Admin/ListeSousCat";
import ListeVilles from "./components/Admin/ListeVilles";
import ListeDonnees from "./components/Admin/ListeDonnees";
import RequireAuth from "./components/Client/RequireAuth";
import Suppression from "./components/Admin/Suppression";

//*IMPORT SCREENS //*

import ArticleDetail from "./screens/ArticleDetail";
import ArticlesGrid from "./screens/ArticlesGrid";
import FirstVisit from "./screens/FirstVisit";
import Home from "./screens/Home";
import IdentificationAdmin from "./screens/IdentificationAdmin";
import PanelAdmin from "./components/Admin/PanelAdmin";

//*IMPORT CONTEXT PROVIDER //*
import ArticleContextProvider from "./context/ArticleContext";
import AuthContextProvider from "./context/AuthContext";
import CategoriesContextProvider from "./context/CategoriesContext";
import SecteursContextProvider from "./context/SecteursContext";
import SousCategoriesContextProvider from "./context/SousCategoriesContext";
import VillesContextProvider from "./context/VillesContext";
import TelechargementsContextProvider from "./context/TelechargementsContext";

//*IMPORT CONTEXT //* ajout rom
import { RegionsContext } from "./context/RegionsContext";
//*IMPORT CONTEXT //* ajout rom 23h
import { CategoriesContext } from "./context/CategoriesContext";

function App() {
  let location = useLocation();

  let backgroundLocation = location.state && location.state.backgroundLocation;

  const [modifArticle, setModifArticle] = useState({});
  const [deleteData, setDeleteData] = useState("");

  //Ajout rom REGIONS
  const { regions } = useContext(RegionsContext);
  const { idRegion } = useContext(RegionsContext);
  const { setIdRegion } = useContext(RegionsContext);

  //Ajout rom CATEGORIES 23h
  const { categories } = useContext(CategoriesContext);
  const { idCategorie } = useContext(CategoriesContext);
  const { setIdCategorie } = useContext(CategoriesContext);

  const [modifyId, setModifyId] = useState("");

  return (
    <div className="App">
      <ArticleContextProvider>
        <AuthContextProvider>
          <SousCategoriesContextProvider>
            <VillesContextProvider>
              <SecteursContextProvider>
                <TelechargementsContextProvider>
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
                    <Route
                      path="/admin-controler"
                      element={
                        <RequireAuth>
                          <PanelAdmin />
                        </RequireAuth>
                      }
                    >
                      <Route
                        path="articles"
                        element={
                          <ListeArticles
                            modifyId={modifyId}
                            setModifyId={setModifyId}
                            setModifArticle={setModifArticle}
                            modifArticle={modifArticle}
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
                      <Route path="donnes" element={<ListeDonnees />} />
                      <Route
                        path="modification-article"
                        element={
                          <ModificationArticle
                            modifyId={modifyId}
                            setModifyId={setModifyId}
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
                      <Route
                        path="admin-controler/categories/modal/editer"
                        element={
                          <EditName
                            deleteData={deleteData}
                            page={"categories"}
                            edit={"nom_categorie"}
                          />
                        }
                      />
                      <Route
                        path="admin-controler/sousCategories/modal/editer"
                        element={
                          <EditName
                            deleteData={deleteData}
                            page={"sousCategories"}
                            edit={"nom_sous_categorie"}
                            edit2={"categorie_id"}
                            select={true}
                            name={"la catégorie"}
                            result={categories}
                            value2={idCategorie}
                            set={setIdCategorie}
                          />
                        }
                      />
                      <Route
                        path="admin-controler/secteurs/modal/editer"
                        element={
                          <EditName
                            deleteData={deleteData}
                            page={"secteurs"}
                            edit={"nom_secteur"}
                          />
                        }
                      />
                      <Route
                        path="admin-controler/villes/modal/editer"
                        element={
                          <EditName
                            deleteData={deleteData}
                            page={"villes"}
                            edit={"nom_ville"}
                            edit2={"region_id"}
                            select={true}
                            name={"la région"}
                            result={regions}
                            value2={idRegion}
                            set={setIdRegion}
                          />
                        }
                      />
                    </Routes>
                  )}
                </TelechargementsContextProvider>
              </SecteursContextProvider>
            </VillesContextProvider>
          </SousCategoriesContextProvider>
        </AuthContextProvider>
      </ArticleContextProvider>
    </div>
  );
}

export default App;
