import './ExploreContainer.css';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
     <IonSegment value="default">
        <IonSegmentButton value="default">
          <IonLabel>Base Blanche</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>Base rouge</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </div>
  );
};

export default ExploreContainer;
