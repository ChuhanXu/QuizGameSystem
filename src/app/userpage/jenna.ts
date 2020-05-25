import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'jenna.html'
})

export class JennaComponent implements OnInit{ 

    role = null;
    ngOnInit() {
        this.role = sessionStorage.getItem("role");
    }
}
