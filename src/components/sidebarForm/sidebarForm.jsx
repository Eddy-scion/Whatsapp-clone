import React from "react";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import "./sidebarForm.css";

const SidebarForm = () => {
  return (
    <React.Fragment>
      <div className="searchform-container">
        <div className="search-form">
          <SearchIcon id="search-icon" />
          <Input placeholder="Search or start new chat" />
        </div>
        <div>
          <FilterListIcon id="filter-icon" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SidebarForm;
