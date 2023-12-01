const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: "server.php",
      todoEl: [],
      newProject: "",
    };
  },
  methods: {
    stampEl() {
      axios.get(this.apiUrl).then((response) => {
        this.todoEl = response.data;
      });
    },
    addEl(){        
        const data= new FormData();
        data.append ("task", this.newTask);
        axios.post(this.apiUrl,data).then((response) => {
        this.todoEl = response.data;
        });
    },
    removeEl(index){
        const data= new FormData();
        data.append ("removed", index);
        axios.post(this.apiUrl,data).then((response) => {
        this.todoEl = response.data;
        });
    }
  },
  mounted() {
    this.stampEl();
  },
}).mount("#app");
