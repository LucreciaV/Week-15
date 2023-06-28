class CartPage{
    get yourCart() {
        return $("#header_container > div.header_secondary_container > span");
    }
    get cartList() {
        return $("#cart_contents_container > div > div.cart_list");
    }
    get checkoutModalBtn() {
        return $("#checkout");
    }
    get continueShoppingBtn(){
        return $("#continue-shopping");
    }

    async checkoutModalBtnClick() {
        await this.checkoutModalBtn.click(); 
    }
    async continueShoppingBtnClick(){
        await this.continueShoppingBtn.click();
    }
}

export default new CartPage();