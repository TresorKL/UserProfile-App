import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      users: [
        {
          id: "1",
          userName: "Tresor",
          profession: "Software developer",
          imageProfile:
            "https://img.freepik.com/free-vector/development-service-smart-house-iot-technology-network-programming_335657-3149.jpg",
          desciption:
            "Lists are made up of multiple rows of items Lists are made up of multiple rows of i which can contain text, buttons, toggles, icons, thumbnails, and much more. Lists generally contain items with similar data content, such as images and text.",
        },
        {
          id: "2",
          userName: "Enock",
          profession: "webv developer",
          imageProfile:
            "https://i.pinimg.com/736x/6b/26/55/6b26557bc26cf4377d26b1ff2f1efb4b.jpg",
          desciption:
            "Lists are made up of ultiple  and much more.Lists are made up of multiple rows of i ultiple  and much more.multiple  and much more. such as images and text.",
        },
        {
          id: "3",
          userName: "David",
          profession: "Data scientist",
          imageProfile:
            "https://cdn-cfdfn.nitrocdn.com/WbkEQQxydqyXiCNUtaeiyDVfjTRlvcKv/assets/static/optimized/rev-53eee1f/wp-content/uploads/2022/01/setupshows-106722755_164575878531267_8069259049683123731_n-768x576.jpg",
          desciption:
            "Lists are made up of multiple rows of items which can contain textLists are made up of multiple rows of i Lists are made up of multiple rows of i, buttons, toggles, icons, thumbnails, and much more. Lists generally contain items with similar data content, such as images and text.",
        },
        {
          id: "4",
          userName: "Nana",
          profession: "UI/UX designer",
          imageProfile:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFWgjoNaVwFoEDmB0mmdq6bTEoY5_pZGb7Fw&usqp=CAU",
          desciption:
            "A web-based platform to increase productivity, decrease cycle times, accelerate time to market, and protect institutional knowledge.",
        },
        {
          id: "5",
          userName: "Norbert",
          profession: "SQL Dev",
          imageProfile: "https://www.tesla.com/xNVh4yUEc3B9/04_Desktop.jpg",
          desciption:
            "A web-based platform d platform to increase productivity,  to increase productivity, d platform to increase productivity, decrease cycle times, accelerate time to market, and protect institutional knowledge.",
        },
      ],
    };
  },

  getters: {
    users(state) {
      return state.users;
    },
    user(state) {
      return (userId) => {
        return state.users.find((user) => user.id === userId);
      };
    },
  },
});

export default store;
