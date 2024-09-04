import { useState } from "react";
import { Button, ErrorMessage } from "./MarkAsBorrowed.styled";
import { markAsBorrowed } from "../../services/api";

const MarkAsBorrowed = ({ isbn, isBorrowed: initialIsBorrowed }) => {
  const [isBorrowed, setIsBorrowed] = useState(initialIsBorrowed);
  const [error, setError] = useState(null);

  const handleToggle = async () => {
    try {
      await markAsBorrowed(isbn, !isBorrowed);
      setIsBorrowed((prev) => !prev);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Button onClick={handleToggle} isBorrowed={isBorrowed}>
        {isBorrowed ? "Return Book" : "Borrow Book"}
      </Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default MarkAsBorrowed;
