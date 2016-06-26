import { Component, ElementRef, OnInit } from 'angular2/core';
declare var $: any;

@Component({
    selector: 'my-jquery',
    template : `
        <button id="click-me">Click me</button>
    ` 
})

export class jQueryComponent implements OnInit {
    constructor(private _elRef: ElementRef){}
    
    ngOnInit():any {
        $('#click-me').click(function(){
                alert("hey");
            })
    }
}
