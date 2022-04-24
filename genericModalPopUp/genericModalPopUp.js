import { LightningElement,api } from 'lwc';

export default class GenericModalPopUp extends LightningElement {

    showModal;

    @api show() {
        console.log('show');
        this.showModal = true;
    }

    @api hide() {
        this.showModal = false;
    }

    handleCloseModal() {
        //Let parent know that dialog is closed (mainly by that cross button) so it can set proper variables if needed
        const closedialog = new CustomEvent('onclosemodal');
        this.dispatchEvent(closedialog);        
        this.hide();
    }
}