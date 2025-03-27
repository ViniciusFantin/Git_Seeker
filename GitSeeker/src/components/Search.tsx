import style from "./Search.module.css";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { useState, KeyboardEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className={style.search}>
      <h2>Search for a user</h2>
      <p>Know yout best repositories!</p>
      <div className={style.search_container}>
        <input
          type="text"
          placeholder="Enter a username"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
