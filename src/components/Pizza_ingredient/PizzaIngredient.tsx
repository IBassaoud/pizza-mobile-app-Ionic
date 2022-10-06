import React from "react";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonCheckbox,
} from "@ionic/react";
import { Icon } from "@iconify/react";
import "./PizzaIngredient.css";

function PizzaIngredient(props:any) {
  const changeViandes = props.onChangeViande;
  const changeLegumes = props.onChangeLegume;
  const changeFromages = props.onChangeFromage;
  const changeBoissons = props.onChangeBoisson;

  const handleViandesChange = (viande:any) => {
    let newViande = viande.title;
    changeViandes(newViande);
  } 

  const handleLegumesChange = (legume:any) => {
    let newLegume = legume.title;
    changeLegumes(newLegume);
  } 

  const handleFromagesChange = (fromage:any) => {
    let newFromage = fromage.title;
    changeFromages(newFromage);
  } 

  const handleBoissonsChange = (boisson:any) => {
    let newBoisson = boisson.title;
    changeBoissons(newBoisson);
  } 

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
          <IonCheckbox slot="start" title="Poulet" onClick={(detail) => handleViandesChange(detail.target)}></IonCheckbox>
          <IonLabel>Poulet</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start" title="Kebab" onClick={(detail) => handleViandesChange(detail.target)}></IonCheckbox>
          <IonLabel>Kebab</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start" title="Viande hachée" onClick={(detail) => handleViandesChange(detail.target)}></IonCheckbox>
          <IonLabel>Viande hachée</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start" title="Saumon" onClick={(detail) => handleViandesChange(detail.target)}></IonCheckbox>
          <IonLabel>Saumon</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start" title="Thon" onClick={(detail) => handleViandesChange(detail.target)}></IonCheckbox>
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
          <IonCheckbox slot="start" title="Oignons" onClick={(detail) => handleLegumesChange(detail.target)}></IonCheckbox>
          <IonLabel>Oignons</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start" title="Patate" onClick={(detail) => handleLegumesChange(detail.target)}></IonCheckbox>
          <IonLabel>Patate</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start" title="Poivron" onClick={(detail) => handleLegumesChange(detail.target)}></IonCheckbox>
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
          <IonCheckbox slot="start" title="Parmesan" onClick={(detail) => handleFromagesChange(detail.target)}></IonCheckbox>
          <IonLabel>Parmesan</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start" title="Emmental" onClick={(detail) => handleFromagesChange(detail.target)}></IonCheckbox>
          <IonLabel>Emmental</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start" title="Fromage de chèvre" onClick={(detail) => handleFromagesChange(detail.target)}></IonCheckbox>
          <IonLabel>Fromage de chèvre</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start" title="Roquefort" onClick={(detail) => handleFromagesChange(detail.target)}></IonCheckbox>
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
          <IonCheckbox slot="start" title="Coca-Cola" onClick={(detail) => handleBoissonsChange(detail.target)}></IonCheckbox>
          <IonLabel>Coca-Cola</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start" title="Hawai" onClick={(detail) => handleBoissonsChange(detail.target)}></IonCheckbox>
          <IonLabel>Hawai</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start" title="Fanta" onClick={(detail) => handleBoissonsChange(detail.target)}></IonCheckbox>
          <IonLabel>Fanta</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start" title="Thée à la menthe" onClick={(detail) => handleBoissonsChange(detail.target)}></IonCheckbox>
          <IonLabel>Thée à la menthe</IonLabel>
        </IonItem>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
export default PizzaIngredient;
