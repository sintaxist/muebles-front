import styles from "../../styles/Search.module.scss";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

export function Search(props) {
  const query = useQuery();
  const search = query.get("search");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={`${styles.searchContainer} ${props.input ? styles.activo : ''}`} onSubmit={handleSubmit}>

      <button onClick={props.showSearch} className={styles.button}>
        <svg className={`${!props.input ? styles.active : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 15L21 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg className={`${props.input ? styles.active : styles.cross} ${styles.cross}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 3L2.99995 21.0001" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

        <input
          className={`${styles.searchInput} ${props.input ? styles.active : ' '}`}
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
