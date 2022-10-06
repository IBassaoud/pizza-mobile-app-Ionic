import React from 'react';
import { IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import './PizzaIngredient.css';

function PizzaIngredient() {
  return (
    <IonList>
      <IonItem className="item-ingredient">
        <IonSelect className="ingredient-select-item" interface="action-sheet" placeholder="Selectionner la viande">
          <IonSelectOption value="poulet">Poulet</IonSelectOption>
          <IonSelectOption value="Kebab">Kebab</IonSelectOption>
          <IonSelectOption value="viande_hachee">Viande Hachée</IonSelectOption>
          <IonSelectOption value="boeuf">Boeuf</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem className="item-ingredient">
        <IonSelect interface="action-sheet" placeholder="Selectionner un légume">
          <IonSelectOption value="oignons">Oignons</IonSelectOption>
          <IonSelectOption value="patate">Patate</IonSelectOption>
          <IonSelectOption value="poivron">Poivron</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem className="item-ingredient">
        <IonSelect interface="action-sheet" placeholder="Selectionner les poissons">
          <IonSelectOption value="saumon">Saumon</IonSelectOption>
          <IonSelectOption value="thon">Thon</IonSelectOption>
          <IonSelectOption value="sardine">Sardines</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem className="item-ingredient">
        <IonSelect interface="action-sheet" placeholder="Selectionner une boisson">
          <IonSelectOption value="coca">Coca</IonSelectOption>
          <IonSelectOption value="hawai">Hawai</IonSelectOption>
          <IonSelectOption value="fanta">Fanta</IonSelectOption>
          <IonSelectOption value="the">Thé</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default PizzaIngredient;