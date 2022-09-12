<template>
  <ion-page>
    <ion-header
      ><ion-toolbar
        ><ion-back-button default-href="/users" slot="start"></ion-back-button
        ><ion-title>ADD USER</ion-title></ion-toolbar
      ></ion-header
    >
    <ion-content>
      <form @submit.prevent="submitForm" class="ion-padding">
        <ion-list>
          <ion-item>
            <ion-label position="floating">Name</ion-label>
            <ion-input v-model="userNameInput" type="text" required />
          </ion-item>
          <ion-item>
            <ion-label position="floating">Profession</ion-label>
            <ion-input v-model="professionInput" type="text" required />
          </ion-item>
          <ion-item>
            <ion-label position="floating">ImageUrl</ion-label>
            <ion-input v-model="imageProfileInput" type="text" required />
          </ion-item>
          <ion-item>
            <ion-label position="floating">Description</ion-label>
            <ion-textarea v-model="descriptionInput" row="6"></ion-textarea>
          </ion-item>
        </ion-list>
        <ion-button type="submit" expand="block" fill="outline"
          >SAVE</ion-button
        >
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
  data() {
    return {
      userNameInput: "",
      professionInput: "",
      imageProfileInput: "",
      descriptionInput: "",
    };
  },

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
  methods: {
    submitForm() {
      const userData = {
        userName: this.userNameInput,
        profession: this.professionInput,
        imageProfile: this.imageProfileInput,
        desciption: this.descriptionInput,
      };
      this.$store.dispatch("addUser", userData), this.$router.replace("/users");
    },
  },
};
</script>
