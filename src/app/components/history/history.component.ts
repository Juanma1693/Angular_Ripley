import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { History } from '../../models/History';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  histories: Array<History> = [];

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.historyService.getAll().subscribe(
      (res: Array<History>) => {
        this.histories = res;
      },
      (err: any) => console.error(err)
    );
  }

}
