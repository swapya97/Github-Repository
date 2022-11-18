import { useRef } from "react";

const Search = ({ Searchedusername }) => {
  const inputRef = useRef();
  const searched = (e) => {
    e.preventDefault();
    const searchKeyword = inputRef.current.value;
    Searchedusername(searchKeyword);
  };

  return (
    <div className="search">
      <form onSubmit={searched}>
        <input
          type="text"
          placeholder="Search your repository"
          ref={inputRef}
        />
        <button>Search</button>
      </form>
    </div>
  );
};
export default Search;
