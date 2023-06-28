class checkoutComplete{
    get messageOrder(){
        return $("#checkout_complete_container");
    }
    get backBtn(){
        return $("#back-to-products");
    }

    async backBtnClick(){
        await this.backBtn.click();
    }
}

export default checkoutComplete();