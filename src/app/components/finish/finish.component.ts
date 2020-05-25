import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

declare var $: any;

@Component({
    selector: 'finish-quiz',
    templateUrl: 'finish.component.html'
})

export class FinishComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {
        if ($(".selectpicker").length != 0) {
            $(".selectpicker").selectpicker({
                iconBase: "nc-icon",
                tickIcon: "nc-check-2"
            });
        };

    }

    submit() {
        swal({
            text: "Confirmed",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success",
            type: "success"
        }).then(() => {
            this.router.navigate(['/dashboard']);
        }).catch(swal.noop);
    }
}