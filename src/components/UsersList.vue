<template>
  <ion-list>
    <user-list-item
      v-for="user of users"
      :key="user.id"
      :user="user"
    ></user-list-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import UserListItem from "./UsersListItem.vue";
export default {
  props: ["users"],
  components: {
    IonList,
    UserListItem,
  },
};
</script>
