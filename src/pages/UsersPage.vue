<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Users</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="user of users" :key="user.id">
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
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonImg,
  },
  data() {
    return {
      users: [
        {
          id: 1,
          userName: "Tresor",
          profession: "Software developer",
          imageProfile: "https://picsum.photos/280",
          desciption:
            "Lists are made up of multiple rows of items which can contain text, buttons, toggles, icons, thumbnails, and much more. Lists generally contain items with similar data content, such as images and text.",
        },
        {
          id: 2,
          userName: "Enock",
          profession: "webv developer",
          imageProfile: "https://picsum.photos/280",
          desciption:
            "Lists are made up of multiple  and much more. such as images and text.",
        },
        {
          id: 3,
          userName: "David",
          profession: "Data scientist",
          imageProfile: "https://picsum.photos/280",
          desciption:
            "Lists are made up of multiple rows of items which can contain text, buttons, toggles, icons, thumbnails, and much more. Lists generally contain items with similar data content, such as images and text.",
        },
        {
          id: 4,
          userName: "Nana",
          profession: "UI/UX designer",
          imageProfile: "https://picsum.photos/280",
          desciption:
            "A web-based platform to increase productivity, decrease cycle times, accelerate time to market, and protect institutional knowledge.",
        },
        {
          id: 5,
          userName: "Norbert",
          profession: "SQL Dev",
          imageProfile: "https://picsum.photos/280",
          desciption:
            "A web-based platform to increase productivity, decrease cycle times, accelerate time to market, and protect institutional knowledge.",
        },
      ],
    };
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
  margin: auto;
}
</style>
