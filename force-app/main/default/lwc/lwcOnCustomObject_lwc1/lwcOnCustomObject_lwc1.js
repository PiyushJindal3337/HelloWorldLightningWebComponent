/* eslint-disable no-undef */
/* eslint-disable no-eval */
/* eslint-disable no-console */
import { LightningElement, wire, track, api } from 'lwc';
import getRecords from '@salesforce/apex/lwcOnCustomObject_lwc.getRecords';
//import { refreshApex } from '@salesforce/apex';
//import { NavigationMixin } from 'lightning/navigation';
export default class LwcOnCustomObject_lwc1 extends LightningElement 
{

    //@track recordId ="a002v00004BdGfxAAF";
    @api recordId;
    @track conError;
    @track contactList;
    @track modalConId;

    @track openmodel = false;
    openmodal(event) {
        this.openmodel = true;
        this.modalConId = event.target.id.substring(0,18);
        console.log(this.modalConId);
    }
    refreshPage(){
        window.location.reload();
    }
    closeModal() {
        
        this.openmodel = false;
    } 

    saveMethod() {
        //alert('save method invoked');
       
        this.closeModal(); 

    }

    handleSuccess()
    {
        this.openmodel = false;
    }


    @wire(getRecords,{recId : '$recordId'}) 
    wiredMethod({error, data})
    {
        if(data)
        {
            this.contactList = data;
            /*eslint-disable no-console*/
            console.log('contactList : ', JSON.stringify(this.contactList));
            console.log('Data : ', data);
        }
        if(error)
        {
            this.conError = error;
            /*eslint-disable no-console*/
            //console.log('Error : ', error);
            console.log('ConError : ', JSON.stringify(this.conError));
        }
    }
    
   /* fetchAllContacts()
    {   
        let pageReference = {
            type :'Standard__RecordPage',
            attributes :{
                            actionName : 'edit',
                            objectApiName : 'Contact'
                        }
        }
        this[NavigationMixin.Navigate](pageReference, true)
    }*/

}