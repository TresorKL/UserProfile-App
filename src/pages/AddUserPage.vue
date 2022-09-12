<template>
  <ion-page>
    <ion-header
      ><ion-toolbar
        ><ion-back-button default-href="/users" slot="start"></ion-back-button
        ><ion-title>ADD USER</ion-title></ion-toolbar
      ></ion-header
    >
    <ion-content>
      <form class="ion-padding">
        <ion-list>
          <ion-item>
            <ion-label position="floating">Name</ion-label>
            <ion-input type="text" required />
          </ion-item>
          <ion-item>
            <ion-label position="floating">Profession</ion-label>
            <ion-input type="text" required />
          </ion-item>
          <ion-item>
            <ion-label position="floating">ImageUrl</ion-label>
            <ion-input type="text" required />
          </ion-item>
          <ion-item>
            <ion-label position="floating">Description</ion-label>
            <ion-textarea row="6"></ion-textarea>
          </ion-item>
        </ion-list>
        <ion-button expand="block" fill="outline">SAVE</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonButton,
  IonTextarea,
  IonLabel,
  IonInput,
  IonList,
  IonItem,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonTitle,
  IonPage,
  IonContent,
} from "@ionic/vue";
export default {
  components: {
    IonButton,
    IonTextarea,
    IonLabel,
    IonInput,
    IonList,
    IonItem,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonTitle,
    IonPage,
    IonContent,
  },
};
</script>
