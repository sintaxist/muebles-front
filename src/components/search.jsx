import styles from "../styles/Search.module.scss";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { useState } from "react";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>

      <button onClick={handleClick} className={styles.button}>
        <svg className={`${!clicked ? styles.active : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M15 15L21 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <svg className={`${clicked ? styles.active : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L3 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M21 3L2.99995 21.0001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

        <input
          className={`${styles.searchInput} ${clicked ? styles.active : ' '}`}
          type="text"
          value={search ?? ""}
          autoFocus
          placeholder="Buscar..."
          aria-label="Search Movies"
          onChange={(e) => {
            const value = e.target.value;
            navigate("/?search=" + value);
          }}
        />

    </form>
  );
}
