<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title slot="start">Users</ion-title>
        <ion-button router-link="/users/add" color="light" slot="end"
          ><ion-icon slot="icon-only" :icon="add"></ion-icon
        ></ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <user-list :users="users"></user-list>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { add } from "ionicons/icons";
import UserList from "../components/UsersList.vue";
export default {
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    UserList,
    IonButton,
    IonIcon,
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
  },
  data() {
    return { add };
  },
};
</script>

<style scoped>
ion-img > #profile-img {
  margin: 15px;
  border-radius: 13px;
}

#prof {
  color: gray;
}
ion-list {
  margin-left: 20px;
}
</style>
