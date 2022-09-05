import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      users: [
        {
          id: 1,
          userName: "Tresor",
          profession: "Software developer",
          imageProfile: "https://source.unsplash.com/random/280x210",
          desciption:
            "Lists are made up of multiple rows of items which can contain text, buttons, toggles, icons, thumbnails, and much more. Lists generally contain items with similar data content, such as images and text.",
        },
        {
          id: 2,
          userName: "Enock",
          profession: "webv developer",
          imageProfile: "https://source.unsplash.com/random/280x210",
          desciption:
            "Lists are made up of multiple  and much more. such as images and text.",
        },
        {
          id: 3,
          userName: "David",
          profession: "Data scientist",
          imageProfile: "https://source.unsplash.com/random/280x210",
          desciption:
            "Lists are made up of multiple rows of items which can contain text, buttons, toggles, icons, thumbnails, and much more. Lists generally contain items with similar data content, such as images and text.",
        },
        {
          id: 4,
          userName: "Nana",
          profession: "UI/UX designer",
          imageProfile: "https://source.unsplash.com/random/280x210",
          desciption:
            "A web-based platform to increase productivity, decrease cycle times, accelerate time to market, and protect institutional knowledge.",
        },
        {
          id: 5,
          userName: "Norbert",
          profession: "SQL Dev",
          imageProfile: "https://source.unsplash.com/random/280x200/?img=1",
          desciption:
            "A web-based platform to increase productivity, decrease cycle times, accelerate time to market, and protect institutional knowledge.",
        },
      ],
    };
  },

  getters: {
    users(state) {
      return state.users;
    },
  },
});

export default store;
