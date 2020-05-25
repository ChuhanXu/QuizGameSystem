import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'rate',
    templateUrl: 'rate.html'
})
export class RateComponent implements OnInit {
    constructor() { }

    public dataTable: DataTable;
    role = null;
    ngOnInit() {

        this.dataTable = {
            headerRow: ['ID', 'Student', 'Rate', 'Comment'],
            footerRow: ['ID', 'Student', 'Rate', 'Comment'],
            dataRows: []
        };

        let comments = ["like it", "don't like it", "too hard", "too easy"];
        let students = ["Alyssa", "Gardner", "Jenna", "Peter", "Paul", "Ray"];
        let rates = ["1 star", "2 star", "3 star", "4 star", "5 star"];
        for (let i = 1; i <= 6; ++i) {
            // let student = students[this.getRandomArbitrary(0, students.length)];
            let student = students[i-1];
            let comment = comments[this.getRandomArbitrary(0, comments.length)];
            let rate = rates[this.getRandomArbitrary(0, rates.length)];
            this.dataTable.dataRows.push(
                ["1", student, rate, comment]
            )
        }
    }
    getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    ngAfterViewInit() {
        $('#datatable').DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [
                [10, 25, 50, -1],
                [10, 25, 50, "All"]
            ],
            responsive: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search records",
            }

        });

    }


}