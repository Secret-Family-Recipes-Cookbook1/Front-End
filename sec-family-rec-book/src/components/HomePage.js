import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import Carousel from "./Carousel";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <h1 style={{marginBottom:'2%', marginTop:'2%'}}> Secret Family Recipies !</h1>
      
      <Carousel/>
    
    </div>
  );
}

