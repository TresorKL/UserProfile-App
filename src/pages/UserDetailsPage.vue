<template>
  <ion-page id="body">
    <ion-header
      ><ion-toolbar
        ><ion-back-button slot="start"></ion-back-button
        ><ion-title>User Name</ion-title></ion-toolbar
      ></ion-header
    >
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonBackButton,
  },
};
</script>
<style scoped>
#body {
  background: white;
  color: black;
}
</style>
