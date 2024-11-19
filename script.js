new Vue({
  el: '#app',
  data: {
      lessons: [
          { id: 1, subject: 'Math', location: 'Online', price: 10, spaces: 5, icon: 'star', image: '/CW1/public/images/math.jpeg'},
          { id: 2, subject: 'Science', location: 'Offline', price: 20, spaces: 3, icon: 'star', image: '/CW1/public/images/math.jpeg'},
          { id: 3, subject: 'History', location: 'Online', price: 15, spaces: 2, icon: 'star' , image: '/CW1/public/images/math.jpeg'},
          { id: 4, subject: 'English', location: 'Offline', price: 12, spaces: 4, icon: 'star' , image: '/CW1/public/images/math.jpeg'},
          { id: 5, subject: 'Physics', location: 'Online', price: 18, spaces: 1, icon: 'star', image: '/CW1/public/images/math.jpeg' },
          { id: 6, subject: 'Chemistry', location: 'Offline', price: 22, spaces: 6, icon: 'star' , image: '/CW1/public/images/math.jpeg'},
          { id: 7, subject: 'Biology', location: 'Online', price: 19, spaces: 5, icon: 'star', image: '/CW1/public/images/math.jpeg' },
          { id: 8, subject: 'Geography', location: 'Offline', price: 16, spaces: 3, icon: 'star', image: '/CW1/public/images/math.jpeg' },
          { id: 9, subject: 'Economics', location: 'Online', price: 21, spaces: 2, icon: 'star', image: '/CW1/public/images/math.jpeg' },
          { id: 10, subject: 'Computer Science', location: 'Offline', price: 25, spaces: 1, icon: 'star', image: '/CW1/public/images/math.jpeg' },
      ],
      cart: [],
      showCartPage: false, // Control the visibility of the cart page
      showCheckoutPage: false, // Control the visibility of the checkout page,
      name: '',
      phone: '',
      sortAttribute: 'subject',
      sortDirection: 'asc',
  },
  computed: {
    cartItemCount() {
      return this.cart.length;
    }
  },
  methods: {
      addToCart(lesson) {
          if (lesson.spaces > 0) {
              lesson.spaces--;
              this.cart.push(lesson);
          }
      },

      toggleCheckout() {
        this.showCheckoutPage = !this.showCheckoutPage; // Toggle the visibility of the checkout page
      },

      removeFromCart(lesson) {
          this.cart = this.cart.filter((item) => item.id!== lesson.id);
          lesson.spaces++;
      },

      // checkout() {
      //     if (this.name && this.phone) {
      //         if (/^[a-zA-Z]+$/.test(this.name) && /^\d+$/.test(this.phone)) {
      //             alert('Order submitted!');
      //             this.cart = [];
      //             this.name = '';
      //             this.phone = '';
      //         } else {
      //             alert('Invalid name or phone number!');
      //         }
      //     } else {
      //         alert('Please fill in name and phone number!');
      //     }
      // },
      sortLessons(attribute) {
          this.sortAttribute = attribute;
          this.sortDirection = this.sortDirection === 'asc'? 'desc' : 'asc';
          if (attribute === 'subject') {
              this.lessons.sort((a, b) => this.sortDirection === 'asc'? a.subject.localeCompare(b.subject) : b.subject.localeCompare(a.subject));
          } else if (attribute === 'location') {
              this.lessons.sort((a, b) => this.sortDirection === 'asc'? a.location.localeCompare(b.location) : b.location.localeCompare(a.location));
          } else if (attribute === 'price') {
              this.lessons.sort((a, b) => this.sortDirection === 'asc'? a.price - b.price : b.price - a.price);
          } else if (attribute === 'spaces') {
              this.lessons.sort((a, b) => this.sortDirection === 'asc'? a.spaces - b.spaces : b.spaces - a.spaces);
          }
      },
  },
  computed: {
      sortedLessons() {
          return this.lessons.slice().sort((a, b) => {
              if (this.sortAttribute === 'subject') {
                  return this.sortDirection === 'asc'? a.subject.localeCompare(b.subject) : b.subject.localeCompare(a.subject);
              } else if (this.sortAttribute === 'location') {
                  return this.sortDirection === 'asc'? a.location.localeCompare(b.location) : b.location.localeCompare(a.location);
              } else if (this.sortAttribute === 'price') {
                  return this.sortDirection === 'asc'? a.price - b.price : b.price - a.price;
              } else if (this.sortAttribute === 'spaces') {
                  return this.sortDirection === 'asc'? a.spaces - b.spaces : b.spaces - a.spaces;
              }
          });
      },
  },
});