import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'nc-icon nc-bank'
    },{
        path: '/widgets',
        title: 'Students',
        type: 'link',
        icontype: 'nc-icon nc-box'

    },{
        path: '/charts',
        title: 'Leaderboard',
        type: 'link',
        icontype: 'nc-icon nc-chart-bar-32'

    },{
        path: '/calendar',
        title: 'Calendar',
        type: 'link',
        icontype: 'nc-icon nc-calendar-60'
    },{
        path: '/pages',
        title: 'Pages',
        type: 'sub',
        icontype: 'nc-icon nc-book-bookmark',
        children: [
            {path: 'timeline', title: 'Timeline Page', ab:'T'},
            {path: 'user', title: 'User Page', ab:'UP'},
            {path: 'login', title: 'Login Page', ab:'LP'},
            {path: 'register', title: 'Register Page', ab:'RP'},
            {path: 'lock', title: 'Lock Screen Page', ab:'LSP'}
        ]
    }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    role = sessionStorage.getItem("role");
    isNotMobileMenu() {
        if (window.outerWidth > 991) {
            return false;
        }
        return true;
    }

    ROUTES: RouteInfo[] = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'nc-icon nc-bank'
    }, {
        path: '/widgets',
        title: 'Students',
        type: 'link',
        icontype: 'nc-icon nc-box'

    }, {
        path: '/charts',
        title: 'Leaderboard',
        type: 'link',
        icontype: 'nc-icon nc-chart-bar-32'
    }, {
        path: '/calendar',
        title: 'Calendar',
        type: 'link',
        icontype: 'nc-icon nc-calendar-60'
    }, {
        path: '/pages',
        title: 'Pages',
        type: 'sub',
        icontype: 'nc-icon nc-book-bookmark',
        children: [
            { path: 'timeline', title: 'Timeline Page', ab: 'T' },
            { path: 'user', title: 'User Page', ab: 'UP' },
            { path: 'login', title: 'Login Page', ab: 'LP' },
            { path: 'register', title: 'Register Page', ab: 'RP' },
            { path: 'lock', title: 'Lock Screen Page', ab: 'LSP' }
        ]
    }
    ];

    constructor(private router: Router) { }

    ngOnInit() {

        let role = sessionStorage.getItem("role");
        if (role == null) this.router.navigate(['/pages/login']);

        if (role == "student") {
            this.ROUTES = [{
                path: '/dashboard',
                title: 'Dashboard',
                type: 'link',
                icontype: 'nc-icon nc-bank'
            }, {
                path: '/charts',
                title: 'Leaderboard',
                type: 'link',
                icontype: 'nc-icon nc-chart-bar-32'

            }, {
                path: '/calendar',
                title: 'Calendar',
                type: 'link',
                icontype: 'nc-icon nc-calendar-60'
            },
            {
                path: '/pages/user',
                title: 'User Page',
                type: 'link',
                icontype: 'nc-icon nc-book-bookmark'
            }, {
                path: '/pages/lock',
                title: 'Lock Screen Page',
                type: 'link',
                icontype: 'nc-icon nc-book-bookmark'
            } 
            
            ];
        } else if (role == "manager") {
            this.ROUTES = [{
                path: '/dashboard',
                title: 'Dashboard',
                type: 'link',
                icontype: 'nc-icon nc-bank'
            }, {
                path: '/widgets',
                title: 'Students',
                type: 'link',
                icontype: 'nc-icon nc-box'

            }, {
                path: '/calendar',
                title: 'Calendar',
                type: 'link',
                icontype: 'nc-icon nc-calendar-60'
            }, {
                path: '/pages/user',
                title: 'User Page',
                type: 'link',
                icontype: 'nc-icon nc-book-bookmark'
            }, {
                path: '/pages/lock',
                title: 'Lock Screen Page',
                type: 'link',
                icontype: 'nc-icon nc-book-bookmark'
            }
            // {
            //     path: '/pages',
            //     title: 'Pages',
            //     type: 'sub',
            //     icontype: 'nc-icon nc-book-bookmark',
            //     children: [
            //         { path: 'user', title: 'User Page', ab: 'UP' },
            //         // { path: 'login', title: 'Login Page', ab: 'LP' },
            //         // { path: 'register', title: 'Register Page', ab: 'RP' },
            //         { path: 'lock', title: 'Lock Screen Page', ab: 'LSP' }
            //     ]
            // }
            ];
        } else if (role == "tourist") {
            this.ROUTES = [{
                path: '/dashboard',
                title: 'Dashboard',
                type: 'link',
                icontype: 'nc-icon nc-bank'
            }, 
            // {
            //     path: '/pages',
            //     title: 'Pages',
            //     type: 'sub',
            //     icontype: 'nc-icon nc-book-bookmark',
            //     children: [
            //         // { path: 'login', title: 'Login Page', ab: 'LP' },
            //         // { path: 'register', title: 'Register Page', ab: 'RP' },
            //         { path: 'lock', title: 'Lock Screen Page', ab: 'LSP' }
            //     ]
            // },
            {
                path: '/pages/lock',
                title: 'Lock Screen Page',
                type: 'link',
                icontype: 'nc-icon nc-book-bookmark'
            },
            ];
        }

        this.menuItems = this.ROUTES.filter(menuItem => menuItem);
    }
    ngAfterViewInit() {
    }
}
