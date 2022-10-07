import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonCheckbox,
} from "@ionic/react";
import { Icon } from "@iconify/react";
import "./PizzaIngredient.css";

function PizzaIngredient(props: any) {
  // Get all the functions passed from the parent component managing Meats, Vegatables,Cheeses and Drinks changes based on user's interactive choices
  const changeMeats = props.onChangeMeat;
  const changeVegetables = props.onChangeVegetable;
  const changeCheeses = props.onChangeCheese;
  const changeDrinks = props.onChangeDrink;

  // Meat change handler
  const handleMeatsChange = (meat: any) => {
    let newMeat = meat.title;
    changeMeats(newMeat);
  };

  // Vegetable change handler
  const handleVegetablesChange = (vegetable: any) => {
    let newVegetable = vegetable.title;
    changeVegetables(newVegetable);
  };

  // Cheese change handler
  const handleCheesesChange = (cheese: any) => {
    let newCheese = cheese.title;
    changeCheeses(newCheese);
  };
  // Drink change handler
  const handleDrinksChange = (drink: any) => {
    let newDrink = drink.title;
    changeDrinks(newDrink);
  };

  return (
    <IonAccordionGroup>
      {/* VIANDES */}
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>
            Viandes <Icon icon="noto:meat-on-bone" />
          </IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Poulet"
            onClick={(detail) => handleMeatsChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Poulet</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Kebab"
            onClick={(detail) => handleMeatsChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Kebab</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Viande hachée"
            onClick={(detail) => handleMeatsChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Viande hachée</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Saumon"
            onClick={(detail) => handleMeatsChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Saumon</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Thon"
            onClick={(detail) => handleMeatsChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Thon</IonLabel>
        </IonItem>
      </IonAccordion>

      {/* LEGUMES */}
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>
            Légumes <Icon icon="noto:tomato" />
          </IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Oignons"
            onClick={(detail) => handleVegetablesChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Oignons</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Patate"
            onClick={(detail) => handleVegetablesChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Patate</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Poivron"
            onClick={(detail) => handleVegetablesChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Poivron</IonLabel>
        </IonItem>
      </IonAccordion>

      {/* FROMAGES */}
      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>
            Fromages <Icon icon="noto:cheese-wedge" />
          </IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Parmesan"
            onClick={(detail) => handleCheesesChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Parmesan</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Emmental"
            onClick={(detail) => handleCheesesChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Emmental</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Fromage de chèvre"
            onClick={(detail) => handleCheesesChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Fromage de chèvre</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Roquefort"
            onClick={(detail) => handleCheesesChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Roquefort</IonLabel>
        </IonItem>
      </IonAccordion>

      {/* BOISSONS */}
      <IonAccordion value="fourth">
        <IonItem slot="header" color="light">
          <IonLabel>
            Boissons <Icon icon="fluent-emoji-flat:tropical-drink" />
          </IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Coca-Cola"
            onClick={(detail) => handleDrinksChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Coca-Cola</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Hawai"
            onClick={(detail) => handleDrinksChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Hawai</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Fanta"
            onClick={(detail) => handleDrinksChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Fanta</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Thé à la menthe"
            onClick={(detail) => handleDrinksChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Thé à la menthe</IonLabel>
        </IonItem>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
export default PizzaIngredient;
