import React from "react";

// reactstrap components
import { ListGroupItem, ListGroup, Card, CardHeader, CardBody, Button} from "reactstrap";
import axios from 'axios';
import { useEffect } from 'react';
function ShoppingList(props) {
  
  const [ listItems, setListItems ] = React.useState(props.shoppingList);
 
  // const getServerSideProps =  () => {
  //   axios.get('http://localhost:5000/meal').then((res) => {
     
  //    const ingredients= getIngredients(res.data)
  //    setListItems(ingredients)

  //   })}
    

 
  //   const getIngredients = async (meals) => {
  //     const updatedIngredients = listItems;
  //     await meals.forEach((meal) => {
  //       axios.get('http://localhost:5000/recipes/' + meal.recipe.id).then((res) => {
  //         res.data.ingredients.forEach((ingredient) => {
  //           updatedIngredients.push(ingredient);
            
  //         });
  //       });
  //     });
  //   // setListItems(updatedIngredients);
  //   console.log(updatedIngredients)
  //   return updatedIngredients
  // };





 
  return (
    <>
    <CardHeader>
                <h5 className="h3 mb-0">Einkaufsliste</h5>
              </CardHeader>
              <CardBody className="p-0">
              <ListGroup data-toggle="checklist" flush>
              {listItems && listItems.map((listItem) =>  (
    <ListGroupItem className=" checklist-entry flex-column align-items-start  px-4">
    <div className=" checklist-item checklist-item-success">
      <div className=" checklist-info">
        <h5 className=" checklist-title mb-0">{listItem.name}</h5>
        <small>{listItem.quantity} {listItem.unit}</small>
      </div>
      <div>
        <div className=" custom-control custom-checkbox custom-checkbox-success">
          <input
            className=" custom-control-input"
            // defaultChecked
            id="chk-todo-task-1"
            type="checkbox"
          ></input>
          <label
            className=" custom-control-label"
            htmlFor="chk-todo-task-1"
          ></label>
        </div>
      </div>
    </div>
  </ListGroupItem>))
  }
    
      
        
      </ListGroup>
      </CardBody>
     
    </>)
  
}

export default ShoppingList;