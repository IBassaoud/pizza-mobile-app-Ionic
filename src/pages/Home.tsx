import React, { useState, useCallback } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";

// Import icons
import { Icon } from "@iconify/react";
import PizzaSauce from "../components/Pizza_sauce/PizzaSauce";
import PizzaSize from "../components/Pizza_size/PizzaSize";
import PizzaIngredient from "../components/Pizza_ingredient/PizzaIngredient";
import Command from "../components/Command/Command";
import { RangeValue } from "@ionic/core";

const Home: React.FC = () => {
  const title = "Pizza";

  // forceUpdate hook
  const [, updateState] = useState<any>();
  const handleForceupdateMethod = useCallback(() => updateState({}), []);

  // Interface
  interface DATA {
    sauce: string;
    size: RangeValue;
    meats: any;
    vegetables: any;
    cheeses: any;
    drinks: any;
    total?: number;
  }

  // data hook
  const [data, setData] = useState<DATA>({
    sauce: "",
    size: 20,
    meats: [],
    vegetables: [],
    cheeses: [],
    drinks: [],
    total: 0,
  });

  // Method to change the sauce at the user's choice
  const handleSauce = (sauce: any) => {
    let newData = data;
    console.log(sauce);

    newData.sauce = sauce.title;
    setData(newData);
    handleForceupdateMethod();
  };

  // Method to change the size at the user's choice
  const handleSize = (size: RangeValue) => {
    let newData = data;
    newData.size = size;
    setData(newData);
    handleForceupdateMethod();
  };

  // Method to change the meats at the user's choice
  const handleMeats = (meat: any) => {
    // Copy the current data into a new variable where we will operate all operations in
    let newData = data;
    meat = meat.title

    // If the selected article exists in the array remove it (when user unselect an item) else add it (when user select an item)
    const index = newData.meats.indexOf(meat);
    if (index > -1) {
      // remove the item from the list
      newData.meats.splice(index, 1);
    } else {
      // Add the new item in the list
      newData.meats.push(meat);
    }

    console.log(newData.meats);
    // call the setData in order to update the data to reflect the changes made by the user
    setData(newData);
    // call the force update method
    handleForceupdateMethod();
  };

  // Method to change the vegetables at the user's choice
  const handleVegetables = (vegetable: any) => {
    // Copy the current data into a new variable where we will operate all operations in
    let newData = data;
    vegetable = vegetable.title

    // If the selected article exists in the array remove it (when user unselect an item) else add it (when user select an item)
    const index = newData.vegetables.indexOf(vegetable);
    if (index > -1) {
      // remove the item from the list
      newData.vegetables.splice(index, 1);
    } else {
      // Add the new item in the list
      newData.vegetables.push(vegetable);
    }

    console.log(newData.vegetables);
    // call the setData in order to update the data to reflect the changes made by the user
    setData(newData);
    // call the force update method
    handleForceupdateMethod();
  };

  // Method to change the cheeses at the user's choice
  const handleCheeses = (cheese: any) => {
    // Copy the current data into a new variable where we will operate all operations in
    let newData = data;
    cheese = cheese.title

    // If the selected article exists in the array remove it (when user unselect an item) else add it (when user select an item)
    const index = newData.cheeses.indexOf(cheese);
    if (index > -1) {
      // remove the item from the list
      newData.cheeses.splice(index, 1);
    } else {
      // Add the new item in the list
      newData.cheeses.push(cheese);
    }

    console.log(newData.cheeses);
    // call the setData in order to update the data to reflect the changes made by the user
    setData(newData);
    // call the force update method
    handleForceupdateMethod();
  };

  // Method to change the drinks at the user's choice
  const handleDrinks = (drink: any) => {
    // Copy the current data into a new variable where we will operate all operations in
    let newData = data;
    drink = drink.title

    // If the selected article exists in the array remove it (when user unselect an item) else add it (when user select an item)
    const index = newData.drinks.indexOf(drink);
    if (index > -1) {
      // remove the item from the list
      newData.drinks.splice(index, 1);
    } else {
      // Add the new item in the list
      newData.drinks.push(drink);
    }

    console.log(newData.drinks);
    // call the setData in order to update the data to reflect the changes made by the user
    setData(newData);
    // call the force update method
    handleForceupdateMethod();
  };

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle className="title">
            {title} <Icon icon="emojione:pizza" />
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              {title} <Icon icon="emojione:pizza" />
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        {/*PIZZA COMPONENTS */}
        <PizzaSauce onChangeSauce={handleSauce} />
        <PizzaSize onChangeSize={handleSize} />
        <PizzaIngredient
          onChangeMeat={handleMeats}
          onChangeVegetable={handleVegetables}
          onChangeCheese={handleCheeses}
          onChangeDrink={handleDrinks}
        />
        <Command data={data} />
        {/* END PIZZA COMPONENTS */}

      </IonContent>
    </IonPage>
  );
};

export default Home;
