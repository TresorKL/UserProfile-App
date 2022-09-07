<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Users</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item
          v-for="user of users"
          :router-link="`/detail/${user.id}`"
          :key="user.id"
        >
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
      </ion-list>
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
  IonImg,
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonList,
  IonItem,
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonImg,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonList,
    IonItem,
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
  },
  // data() {
  //   return {

  //   };
  // },
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
