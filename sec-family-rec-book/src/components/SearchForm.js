import React from "react";
import styled from "styled-components";



const SearchForm = (props) => {
  return (
    <section style={{margin:'20px'}}>
      <input
        value={props.value}
        placeholder="Search Recipes"
        onChange={props.onChange}
      />
    </section>
  );
};

export default SearchForm;
