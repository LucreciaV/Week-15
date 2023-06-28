class inventoryPage {
    get productsPage() {
        return $("#header_container > div.header_secondary_container > span");
    }
    get inventoryItems(){
        return $("#inventory_container");
    }
    get addBtnBike() {
        return $("#add-to-cart-sauce-labs-bike-light");
    }
    get removeBtn() {
        return $("#remove-sauce-labs-backpack");
    }
    get cartBtn() {
        return $("#shopping_cart_container > a");
    }
    get cartNumberIcon() {
        return $("#shopping_cart_container > a > span");
    }
    get sortFilter() {
        return $('#header_container > div.header_secondary_container > div > span > select')
    }

    async addBtnBikeClick() {
        await this.addBtnBike.click(); 
    }
    async removeBtnClick() {
        await this.removeBtn.click(); 
    }
    async cartBtnClick(){
        await this.cartBtn.click();
    }
    
}

export default new inventoryPage();