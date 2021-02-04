import React from "react";
import { Route, NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "@material-ui/core";
import {Button} from "reactstrap"
import NavBar from "./NavBar"



function Recipe(props) {
  // step 2
  // const history = useHistory();
  const { push } = useHistory();

  const item = props.items.find(
    (thing) => `${thing.id}` === props.match.params.id
  );

  if (!props.items.length || !item) {
    return <h2>Loading item data...</h2>;
  }

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3333/items/${item.id}`)
      .then((res) => {
        // res.data
        props.setItems(res.data);
        push("/recipe-list");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <NavBar/>
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>
      <nav className="item-sub-nav">
     
      </nav>
     
   
    

      <Button
        className="md-button"
        onClick={() => push(`/item-list/update-item/${item.id}`)}
      >
        Edit
      </Button>

      <Button className="md-button" onClick={handleDelete}>
        Delete
      </Button>




     
    </div>
    </>
  );
}

export default Recipe;


