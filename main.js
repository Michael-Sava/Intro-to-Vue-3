const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity:50, onSale: false },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: false},
              { id: 2235, color: 'red', image: './assets/images/socks_blue.jpg', quantity: 50, onSale: true },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
            console.log(index)
        }
    },

    computed:{
        title() {
            return this.brand + ' ' + this.product
        },

        image() {
            return this.variants[this.selectedVariant].image
        },

        inStock() {
            return this.variants[this.selectedVariant].quantity
        },

        sale() {
            if(this.variants[this.selectedVariant].onSale) {
                return this.brand + ' ' + this.product + ' are on sale right now'
            }
            return ''
        }

    }

})
