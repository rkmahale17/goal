import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: "myComponents",
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit{
    constructor(private router: Router) {
//console.log(this.router.getCurrentNavigation().extras.state);
    }
    ngOnInit() {
        debugger;
        //console.log(this.router.getCurrentNavigation().extras.state); // should log out 'bar'
        console.log(this.router.routerState.snapshot)
    }

 
}