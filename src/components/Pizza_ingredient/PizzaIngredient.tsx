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
  const handleMeatsChange = props.onChangeMeat;
  const handleVegetablesChange = props.onChangeVegetable;
  const handleCheesesChange = props.onChangeCheese;
  const handleDrinksChange = props.onChangeDrink;

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
            value={1.5 as number}
            onClick={(detail) => handleMeatsChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Poulet</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Kebab"
            value={1.25 as number}
            onClick={(detail) => handleMeatsChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Kebab</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Viande hachée"
            value={1.89 as number}
            onClick={(detail) => handleMeatsChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Viande hachée</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Saumon"
            value={2 as number}
            onClick={(detail) => handleMeatsChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Saumon</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Thon"
            value={.9 as number}
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
            value={.35 as number}
            onClick={(detail) => handleVegetablesChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Oignons</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Patate"
            value={.4 as number}
            onClick={(detail) => handleVegetablesChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Patate</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Poivron"
            value={.6 as number}
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
            value={.85 as number}
            onClick={(detail) => handleCheesesChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Parmesan</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Emmental"
            value={1.2 as number}
            onClick={(detail) => handleCheesesChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Emmental</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Fromage de chèvre"
            value={1 as number}
            onClick={(detail) => handleCheesesChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Fromage de chèvre</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Roquefort"
            value={1.1 as number}
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
            value={1.5 as number}
            onClick={(detail) => handleDrinksChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Coca-Cola</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Hawai"
            value={1.5 as number}
            onClick={(detail) => handleDrinksChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Hawai</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Fanta"
            value={1.5 as number}
            onClick={(detail) => handleDrinksChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Fanta</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox
            slot="start"
            title="Thé à la menthe"
            value={1.2 as number}
            onClick={(detail) => handleDrinksChange(detail.target)}
          ></IonCheckbox>
          <IonLabel>Thé à la menthe</IonLabel>
        </IonItem>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
export default PizzaIngredient;
