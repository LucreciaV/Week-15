class checkoutOverview{
    get cartListOverview(){
        return $("#checkout_summary_container > div > div.cart_list");
    };
    get cartItemOverview(){
        return $("#checkout_summary_container > div > div.cart_list > div.cart_item");
    };
    get summaryInfoOverview(){
        return $("#checkout_summary_container > div > div.summary_info");
    };
    get finishBtn(){
        return $("#finish");
    }

    async finishOverviewBtnClick(){
        await this.finishBtn.click(); 
    }
    

}

export default checkoutOverview();