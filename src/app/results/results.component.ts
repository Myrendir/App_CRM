import {Component, OnInit} from '@angular/core';

export interface FakeData {
  name: string;
  email: string;
  society: string;
  position: string;
  engagement: string;
  addedDate: string;
}

const FAKE_DATA: FakeData[] = [
  {name: 'michel', email: 'michel@gmail.com', society: 'amazon', position: 'manager', engagement: 'chaud', addedDate: '25 mars 2021'},
  {name: 'michel', email: 'michel@gmail.com', society: 'amazon', position: 'manager', engagement: 'chaud', addedDate: '25 mars 2021'},
  {name: 'michel', email: 'michel@gmail.com', society: 'amazon', position: 'manager', engagement: 'chaud', addedDate: '25 mars 2021'},
  {name: 'michel', email: 'michel@gmail.com', society: 'amazon', position: 'manager', engagement: 'chaud', addedDate: '25 mars 2021'},
  {name: 'michel', email: 'michel@gmail.com', society: 'amazon', position: 'manager', engagement: 'chaud', addedDate: '25 mars 2021'},
  {name: 'michel', email: 'michel@gmail.com', society: 'amazon', position: 'manager', engagement: 'chaud', addedDate: '25 mars 2021'},
  {name: 'michel', email: 'michel@gmail.com', society: 'amazon', position: 'manager', engagement: 'chaud', addedDate: '25 mars 2021'},
  {name: 'michel', email: 'michel@gmail.com', society: 'amazon', position: 'manager', engagement: 'chaud', addedDate: '25 mars 2021'},
  {name: 'michel', email: 'michel@gmail.com', society: 'amazon', position: 'manager', engagement: 'chaud', addedDate: '25 mars 2021'},
  {name: 'michel', email: 'michel@gmail.com', society: 'amazon', position: 'manager', engagement: 'chaud', addedDate: '25 mars 2021'}
];

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'society', 'position', 'engagement', 'addedDate'];
  dataSource = FAKE_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }

}
