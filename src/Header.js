import React from "react";

const Header = ({ todos }) => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <div>TODO List</div>
      <div style={{ display: "flex", gap: "15px" }}>
        <div>
          {todos?.length > 0
            ? `${todos.length} todo items`
            : "You are all done"}
        </div>
        <div>Profile</div>
      </div>
    </header>
  );
};

export default Header;
