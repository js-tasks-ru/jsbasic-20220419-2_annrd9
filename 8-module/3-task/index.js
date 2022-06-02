export default class Cart {
  cartItems = []; 

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (!product){
      return;
    }

    let cartItem = this.cartItems.find(
      item => item.product.id === product.id
    );

    if (!cartItem) {
      cartItem = {
        product,
        count: 1
      };
      this.cartItems.push(cartItem);
    } else {
      cartItem.count++;
    }  

    this.onProductUpdate(cartItem);
  }

  updateProductCount(productId, amount) {
    let cartItem = this.cartItems.find(
      item => item.product.id === productId
    );

    if (amount >= 0 ) {
      cartItem.count++;
    } else {
      cartItem.count--
    }

    if (cartItem.count === 0){
      // this.cartItems.slice(this.cartItems.indexOf(cartItem), this.cartItems.indexOf(cartItem) + 1) //не работает
      this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
    }

    this.onProductUpdate(cartItem);
  }

  isEmpty() {
    if (this.cartItems.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  getTotalCount() {
    return this.cartItems.reduce( (total, item) => total + item.count, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce( (total, item) => total + item.count * item.product.price, 0);
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

