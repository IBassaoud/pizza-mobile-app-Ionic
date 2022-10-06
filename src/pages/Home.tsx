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

  const changeViandes = (viande: string) => {
    let newData = data;
    newData.viandes.push(viande);
    setData(newData);
    handleForceupdateMethod();
  };

  const changeLegumes = (legume: string) => {
    let newData = data;
    newData.legumes.push(legume);
    setData(newData);
    handleForceupdateMethod();
  };

  const changeFromages = (fromage: string) => {
    let newData = data;
    newData.fromages.push(fromage);
    setData(newData);
    handleForceupdateMethod();
  };

  const changeBoissons = (boisson: string) => {
    let newData = data;
    newData.boissons.push(boisson);
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

        <PizzaType onChangeType={changeSauce}/>

        <PizzaSize onChangeSize={changeSize} />

        <PizzaIngredient onChangeViande={changeViandes} onChangeLegume={changeLegumes} onChangeFromage={changeFromages} onChangeBoisson={changeBoissons}/>

        <Command data={data} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
