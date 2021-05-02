const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {    //updateCart method thats triggered ProductDisplay
            this.cart.push(id)
        },
        removeFromCart(id) {   //removeFromCart method thats triggered ProductDisplay
            this.cart.pop(id)
        }
    }
})
