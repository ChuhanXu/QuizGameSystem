import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  constructor(private router: Router) { }

  public dataTable: DataTable;
  ngOnInit() {
    this.dataTable = {
      headerRow: ['Name', 'Finished Quiz Count', 'Average Score', 'Highest Score', 'Lowest Score', 'Check Profile', 'Check Leaderboard'],
      footerRow: ['Name', 'Finished Quiz Count', 'Average Score', 'Highest Score', 'Lowest Score', 'Check Profile', 'Check Leaderboard'],
      dataRows: []
    };

    let names = ["Alyssa", "Gardner", "Jenna", "Peter", "Paul", "Ray"];
    let counts = ["10", "12", "15", "9", "7", "11"];
    let scores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < names.length; ++i) {
      let name = names[i];
      let count = counts[this.getRandomArbitrary(0, counts.length)];
      let low = scores[this.getRandomArbitrary(0, scores.length)];
      let high = scores[this.getRandomArbitrary(low, scores.length)];
      let avg = this.getRandomArbitrary(low, high);
      this.dataTable.dataRows.push(
        [name, count, avg.toString(), high.toString(), low.toString(), "", ""]
      )
    }
  }
  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getRandomArbitrary2(min, max) {
    return Math.random() * (max - min) + min;
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
    this.router.navigate(["../charts"]);
  }

  profile(name) {
    if (name == "Alyssa" || name == "Paul" || name == "Ray") alert("his/her profile is not available current.");
    else if (name == "Gardner") {
      this.router.navigate(["/pages/user"]);
    } else if (name == "Jenna") {
      this.router.navigate(["/page/jenna"]);
    } else if(name == "Peter") {
      this.router.navigate(["/page/peter"]);
    }
  }

}
