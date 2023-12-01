const{createApp} = Vue;

createApp({
    data(){

        return{
            apiUrl: 'server.php',
            todoEl: [],            
        }              
    },
    methods: {
        stampEl (){
            axios.get(this.apiUrl).then((response)=>{
               
                this.todoEl= response.data;
                
            })
        }
    },
    mounted(){
        this.stampEl()
    },
}).mount("#app");