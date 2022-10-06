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

function PizzaIngredient() {
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
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Poulet</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Kebab</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Viande hachée</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Saumon</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start"></IonCheckbox>
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
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Oignons</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Patate</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start"></IonCheckbox>
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
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Parmesan</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Emmental</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Fromage de chèvre</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start"></IonCheckbox>
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
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Coca</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Hawai</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Fanta</IonLabel>
        </IonItem>
        <IonItem slot="content">
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Thée</IonLabel>
        </IonItem>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
export default PizzaIngredient;
