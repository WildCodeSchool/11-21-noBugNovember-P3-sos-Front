import Header from "../components/Header.js";
import CardArticle from "../components/CardArticle.js";
import SearchBar from "../components/SearchBar.js";

function Articles() {
  return (
    <div className="bgGreen">
      <Header />
      <SearchBar />
      <CardArticle />
    </div>
  );
}

export default Articles;
