import { Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { JennaComponent } from './jenna';
import { PeterComponent } from './peter';

export const UserRoutes: Routes = [{
    path: '',
    children: [{
        path: 'pages/user',
        component: UserComponent
    }, {
        path: 'page/jenna',
        component: JennaComponent
    }, {
        path: 'page/peter',
        component: PeterComponent
    }]
}];
