import { LightningElement, track, api } from 'lwc';

export default class MyFirstWebComponent extends LightningElement 
{
    @api greeting ;
    @track contacts = [
        {
            Id : 1,
            Name : 'Amy taylor',
            Title : 'VP of Engineering'
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO'
        }
    ];
}