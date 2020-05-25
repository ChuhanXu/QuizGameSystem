import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'user-cmp',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{ 

    role = null;
    ngOnInit() {
        this.role = sessionStorage.getItem("role");
    }
}
