<template>
  <ion-item :router-link="`/detail/${user.id}`">
    <ion-card>
      <ion-img
        id="profile-img"
        :src="user.imageProfile"
        :key="user.id"
      ></ion-img>
      <ion-card-header>
        <ion-card-title>{{ user.userName }}</ion-card-title>
        <ion-card-title
          ><h4 id="prof">Profession:</h4>
          {{ user.profession }}</ion-card-title
        >
      </ion-card-header>
    </ion-card>
  </ion-item>
</template>
<script>
import {
  IonItem,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/vue";

export default {
  props: ["user"],

  components: {
    IonItem,
    IonCard,
    IonImg,
    IonCardHeader,
    IonCardTitle,
  },
};
</script>
