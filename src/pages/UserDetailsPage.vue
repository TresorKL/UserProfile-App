<template>
  <ion-page id="body">
    <ion-header
      ><ion-toolbar
        ><ion-back-button default-href="/users" slot="start"></ion-back-button
        ><ion-title>{{ loadedUser.userName }}</ion-title></ion-toolbar
      ></ion-header
    >
    <ion-content v-if="!loadedUser">Oops something went wong</ion-content>
    <ion-content v-else>
      <ion-img
        id="profile-img"
        :src="loadedUser.imageProfile"
        :key="loadedUser.id"
      ></ion-img>
      <h2 class="ion-text-center">{{ loadedUser.profession }}</h2>
      <p class="ion-text-center">{{ loadedUser.desciption }}</p>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonContent,
  IonImg,
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonContent,
    IonImg,
  },
  data() {
    return {
      userId: this.$route.params.id,
    };
  },
  computed: {
    loadedUser() {
      return this.$store.getters.user(this.userId);
    },
  },
  watch: {
    $store(currentRoute) {
      this.userId = currentRoute.params.id;
    },
  },
};
</script>
<style scoped>
#body {
  background: white;
  color: black;
}
</style>
