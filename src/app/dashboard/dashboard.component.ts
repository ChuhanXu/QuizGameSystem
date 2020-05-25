import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Router } from '@angular/router';

declare const $: any;
declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  public dataTable: DataTable;
  role = null;
  ngOnInit() {

    this.role = sessionStorage.getItem("role");
    if(this.role == null) this.router.navigate(['/pages/login']);

    this.dataTable = {
      headerRow: ['ID', 'Topic', 'Question Type', 'Build Date', 'Difficulty', 'Actions'],
      footerRow: ['ID', 'Topic', 'Question Type', 'Build Date', 'Difficulty', 'Actions'],
      dataRows: []
    };
    this.dataTable.dataRows.push(
      ["1", "Pharmacy", 'Multiple Choice', "2020", "Medium", '']
    )

    let titles = ["Pharmacy", "Biology", "Dental", "Information Science"];
    let dates = ["2019", "2020", "2018", "2017", "2016"];
    let diffs = ["Hard", "Medium", "Easy"];
    for (let i = 2; i <= 30; ++i) {
      let title = titles[this.getRandomArbitrary(0, titles.length)];
      let date = dates[this.getRandomArbitrary(0, dates.length)];
      let diff = diffs[this.getRandomArbitrary(0, diffs.length)];
      this.dataTable.dataRows.push(
        [i.toString(), title, 'Multiple Choice', date, diff, '']
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

    var table = $('#datatable').DataTable();

    // Edit record
    table.on('click', '.edit', function () {
      let $tr = $(this).closest('tr');

      var data = table.row($tr).data();
    });

    // Delete a record
    table.on('click', '.remove', function (e) {
      let $tr = $(this).closest('tr');
      table.row($tr).remove().draw();
      e.preventDefault();
    });

    //Like record
    table.on('click', '.like', function () {
    });
  }

  goToLink() {
    this.router.navigate(["../components/sweet-alert"]);
  }
}
