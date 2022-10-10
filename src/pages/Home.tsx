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

const Home: React.FC = () => {
  const title = "Pizza";

  // forceUpdate hook
  const [, updateState] = useState<any>();
  const handleForceupdateMethod = useCallback(() => updateState({}), []);

  // Interface
  interface DATA {
    sauce: string;
    size: number;
    meats: any;
    vegetables: any;
    cheeses: any;
    drinks: any;
    prices: any;
    total: number;
  }

  // data hook
  const [data, setData] = useState<DATA>({
    sauce: "",
    size: 20,
    meats: [],
    vegetables: [],
    cheeses: [],
    drinks: [],
    prices: [
      {
        sauce: 0,
        size: 0,
        meats: 0,
        vegetables: 0,
        cheeses: 0,
        drinks: 0,
      },
    ],
    total: 0,
  });

  const calculateTotalPrice = () => {
    let newData = data;
    // Sum
    newData.total =
      parseFloat((newData.prices[0].sauce +
      newData.prices[0].size +
      newData.prices[0].meats +
      newData.prices[0].vegetables +
      newData.prices[0].cheeses +
      newData.prices[0].drinks).toFixed(2));
    console.log(newData.total);
    setData(newData);
  };

  // Method to change the sauce at the user's choice
  const handleSauce = (sauce: any) => {
    let newData = data;
    console.log(sauce.title);
    console.log(sauce.checked);
    const saucePrice = 1.5;

    newData.sauce = sauce.title;
    newData.prices[0].sauce = saucePrice;
    console.log(newData);

    setData(newData);
    calculateTotalPrice();
    handleForceupdateMethod();
  };

  // Method to change the size at the user's choice
  const handleSize = (size: number) => {
    let newData = data;
    newData.size = size;
    let sizePrice = size * 0.12;
    sizePrice = parseFloat(sizePrice.toFixed(2));

    newData.prices[0].size = sizePrice;
    console.log(newData);

    setData(newData);
    calculateTotalPrice();
    handleForceupdateMethod();
  };

  // Method to change the meats at the user's choice
  const handleMeats = (meat: any) => {
    // Copy the current data into a new variable where we will operate all operations in
    let newData = data;

    // Check if the element is selected, if it's checked add the item to its category else remove it from its category
    const index = newData.meats.indexOf(meat.title);
    meat.checked
      ? newData.meats.push(meat.title)
      : newData.meats.splice(index, 1);
      // if check add it's value to the price else reduce it 
    meat.checked
      ? (newData.prices[0].meats += meat.value)
      : (newData.prices[0].meats -= meat.value);

    console.log(newData.meats);
    // call the setData in order to update the data to reflect the changes made by the user
    setData(newData);
    calculateTotalPrice();
    // call the force update method
    handleForceupdateMethod();
  };

  // Method to change the vegetables at the user's choice
  const handleVegetables = (vegetable: any) => {
    // Copy the current data into a new variable where we will operate all operations in
    let newData = data;

    // Check if the element is selected, if it's checked add the item to its category else remove it from its category
    const index = newData.vegetables.indexOf(vegetable.title);
    vegetable.checked
      ? newData.vegetables.push(vegetable.title)
      : newData.vegetables.splice(index, 1);
            // if check add it's value to the price else reduce it 
    vegetable.checked
      ? (newData.prices[0].vegetables += vegetable.value)
      : (newData.prices[0].vegetables -= vegetable.value);

    console.log(newData.vegetables);
    // call the setData in order to update the data to reflect the changes made by the user
    setData(newData);
    calculateTotalPrice();
    // call the force update method
    handleForceupdateMethod();
  };

  // Method to change the cheeses at the user's choice
  const handleCheeses = (cheese: any) => {
    // Copy the current data into a new variable where we will operate all operations in
    let newData = data;

    // Check if the element is selected, if it's checked add the item to its category else remove it from its category
    const index = newData.cheeses.indexOf(cheese.title);
    cheese.checked
      ? newData.cheeses.push(cheese.title)
      : newData.cheeses.splice(index, 1);
            // if check add it's value to the price else reduce it 
    cheese.checked
      ? (newData.prices[0].cheeses += cheese.value)
      : (newData.prices[0].cheeses -= cheese.value);

    console.log(newData.cheeses);
    // call the setData in order to update the data to reflect the changes made by the user
    setData(newData);
    calculateTotalPrice();
    // call the force update method
    handleForceupdateMethod();
  };

  // Method to change the drinks at the user's choice
  const handleDrinks = (drink: any) => {
    // Copy the current data into a new variable where we will operate all operations in
    let newData = data;

    // Check if the element is selected, if it's checked add the item to its category else remove it from its category
    const index = newData.drinks.indexOf(drink.title);
    drink.checked
      ? newData.drinks.push(drink.title)
      : newData.drinks.splice(index, 1);
            // if check add it's value to the price else reduce it 
    drink.checked
      ? (newData.prices[0].drinks += drink.value)
      : (newData.prices[0].drinks -= drink.value);

    console.log(newData.drinks);
    // call the setData in order to update the data to reflect the changes made by the user
    setData(newData);
    calculateTotalPrice();
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
