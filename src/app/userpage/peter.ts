import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'peter.html'
})

export class PeterComponent implements OnInit{ 

    role = null;
    ngOnInit() {
        this.role = sessionStorage.getItem("role");
    }
}
