import React, { useEffect } from "react";
import "../index.css"
import axios from "axios"
import { Link ,useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import NavBar from "./NavBar";

function RecipesList(props) {
  const { push } = useHistory();

  function routeToItem(ev, item) {
    ev.preventDefault();
    push(`/recipe-list/${item.id}`);
  }

  return (
    <>
      <NavBar />
      <div  className="button-box"  >
        <Link to="/recipeform">
          <Button variant="contained"  >Add A New Recipe</Button>
        </Link>
      </div>
    <div className="items-list-wrapper">
    
      {props.items.map((item) => (
        <div
          onClick={(ev) => routeToItem(ev, item)}
          className="item-card"
          key={item.id}
        >
          <img
            className="item-list-image"
            src={item.imageUrl}
            alt={item.name}
          />
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default RecipesList;








// const useStyles = makeStyles((theme) => ({
//     button: {
//       margin: theme.spacing(1),
//     },
//   }));


// const Dashboard = () => {
//     const classes = useStyles();


// useEffect(()=>{
//   axios.get("http://localhost:5000/api/data",{

//   })
// },[])


//   return (
//     <>
      
//       <RecipeList/>
//     </>
//   );
// };

// export default Dashboard;
