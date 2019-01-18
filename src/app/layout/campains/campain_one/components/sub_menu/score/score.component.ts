import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  providers: [ MessageService ]
})
export class ScoreComponent implements OnInit {
  display: boolean = false;

  showDialog() {
    this.display = true;
  }


  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  save(severity: string) {
    this.messageService.add({severity:severity, summary:'Success', detail:'Data Saved'});
  }

}
