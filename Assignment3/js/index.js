Vue.createApp({
    data() {
        return {
            word: null,
            amount: 0,
            message: null,
            message2: null,
        }
    },
    methods: {
        duplicate() {
            console.log(this.amount);

            if(this.amount > 0)
            {
                for (let i = 0; i < this.amount; i++) {
                   this.message += this.word                    
                }
                this.message2 = ""
                return;
            }
            
            this.message = ""
            this.message2 = "Must be a non-negative number" + this.amount
              
        },
    }
}).mount("#app")