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
import PizzaType from "../components/Pizza_type/PizzaType";
import PizzaSize from "../components/Pizza_size/PizzaSize";
import PizzaIngredient from "../components/Pizza_ingredient/PizzaIngredient";
import Command from "../components/Command/Command";
import { RangeValue } from "@ionic/core";

const Home: React.FC = () => {
  const title = "Pizza";

  // forceUpdate hook
  const [, updateState] = useState<any>();
  const handleForceupdateMethod = useCallback(() => updateState({}), []);

  // data hook
  const [data, setData] = useState<any>({
    sauce: null,
    size: 20,
    viandes: [],
    legumes: [],
    fromages: [],
    boissons: [],
    total: 0,
  });

  const changeSauce = (sauce: string) => {
    let newData = data;
    newData.sauce = sauce;
    setData(newData);
    handleForceupdateMethod();
  };

  const changeSize = (size: RangeValue) => {
    let newData = data;
    newData.size = size;
    setData(newData);
    handleForceupdateMethod();
  };

  const changeViandes = (viande: any) => {
    let newData = data;
        
    if (viande) {
      const index = newData.viandes.indexOf(viande);
      if (index > -1) {
        newData.viandes.splice(index, 1);
      } else {
        newData.viandes.push(viande);
      }
    }
    console.log(newData.viandes);
    setData(newData);
    handleForceupdateMethod();
  };

  const changeLegumes = (legume: string) => {
    let newData = data;

    if (legume) {
      const index = newData.legumes.indexOf(legume);
      if (index > -1) {
        newData.legumes.splice(index, 1);
      } else {
        newData.legumes.push(legume);
      }
    }
    console.log(newData.legumes);
    setData(newData);
    handleForceupdateMethod();
  };

  const changeFromages = (fromage: string) => {
    let newData = data;

    if (fromage) {
      const index = newData.fromages.indexOf(fromage);
      if (index > -1) {
        newData.fromages.splice(index, 1);
      } else {
        newData.fromages.push(fromage);
      }
    }
    console.log(newData.fromages);
    setData(newData);
    handleForceupdateMethod();
  };

  const changeBoissons = (boisson: string) => {
    let newData = data;

    if (boisson) {
      const index = newData.boissons.indexOf(boisson);
      if (index > -1) {
        newData.boissons.splice(index, 1);
      } else {
        newData.boissons.push(boisson);
      }
    }
    console.log(newData.boissons);
    setData(newData);
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

        <PizzaType onChangeType={changeSauce} />

        <PizzaSize onChangeSize={changeSize} />

        <PizzaIngredient
          onChangeViande={changeViandes}
          onChangeLegume={changeLegumes}
          onChangeFromage={changeFromages}
          onChangeBoisson={changeBoissons}
        />

        <Command data={data} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
