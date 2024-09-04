import { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search books..."
      value={searchQuery}
      onChange={handleSearchChange}
      style={{ margin: "10px", padding: "8px", fontSize: "14px" }}
    />
  );
};

export default SearchInput;
