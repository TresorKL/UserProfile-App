<template>
  <ion-page>
    <ion-header
      ><ion-toolbar
        ><ion-back-button default-href="/users" slot="start"></ion-back-button
        ><ion-title>ADD USER</ion-title></ion-toolbar
      ></ion-header
    >
    <ion-content> </ion-content>
  </ion-page>
</template>
<script>
import {
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonTitle,
  IonPage,
  IonContent,
} from "@ionic/vue";
export default {
  components: {
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonTitle,
    IonPage,
    IonContent,
  },
};
</script>
