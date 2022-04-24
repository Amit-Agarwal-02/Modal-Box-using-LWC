import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACTIVE from '@salesforce/schema/Account.Active__c';


export default class ModalPopupExampleCmp extends LightningElement {

    accountId;
    fields = [NAME_FIELD, REVENUE_FIELD, INDUSTRY_FIELD,ACTIVE];
  

    openSlotModal() {
        console.log('changed to modal');
        const modal = this.template.querySelector('c-generic-modal-pop-up[data-modal-id=modalPopUp1]');
        modal.show();
        console.log('openSlotModal');
    }

    openSlotModal2() {
        this.template.querySelector('c-generic-modal-pop-up[data-modal-id=modalPopUp1]').hide();
        const modal = this.template.querySelector('c-generic-modal-pop-up[data-modal-id=modalPopUp2]');
        modal.show();
    }

    closeAllModals() {
        this.template.querySelector('c-generic-modal-pop-up[data-modal-id=modalPopUp1]').hide();
        this.template.querySelector('c-generic-modal-pop-up[data-modal-id=modalPopUp2]').hide();
        this.template.querySelector('c-generic-modal-pop-up[data-modal-id=modalPopUp3]').hide();
    }

    handleSuccess(event) {
        this.accountId = event.detail.id;
        const evt = new ShowToastEvent({
            title: 'Account created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
        this.template.querySelector('c-generic-modal-pop-up[data-modal-id=modalPopUp2]').hide();
        const modal = this.template.querySelector('c-generic-modal-pop-up[data-modal-id=modalPopUp3]');
        modal.show();
    }
}