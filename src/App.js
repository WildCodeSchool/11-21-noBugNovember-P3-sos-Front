import "./App.css";

import { Routes, Route } from "react-router-dom";

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

import ArticleForm from "./components/ArticleForm";
import ListeVilles from "./components/Admin/ListeVilles";

function App() {
  const [modifArticle,setModifArticle]=useState("")
  

  return (
    <div className="App">
      <ArticleContextProvider>
        <CategoriesContextProvider>
          <SousCategoriesContextProvider>
            <VillesContextProvider>
              <SecteursContextProvider>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/etapes" element={<FirstVisit />} />
                  <Route path="/articlesGrid" element={<ArticlesGrid />} />
                  <Route
                    path="/articlesGrid/articleDetail/:id"
                    element={<ArticleDetail />}
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
              </SecteursContextProvider>
            </VillesContextProvider>
          </SousCategoriesContextProvider>
        </CategoriesContextProvider>
      </ArticleContextProvider>
    </div>
  );
}

export default App;
