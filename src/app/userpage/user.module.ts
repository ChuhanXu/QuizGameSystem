import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserRoutes } from './user.routing';
import { JennaComponent } from './jenna';
import { PeterComponent } from './peter';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserRoutes),
        FormsModule
    ],
    declarations: [
        UserComponent, 
        JennaComponent,
        PeterComponent
    ]
})

export class UserModule {}
