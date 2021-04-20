import {Component, OnInit} from '@angular/core';
import {EnvService} from '../env.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string;

  constructor(env: EnvService) {
    if (env.enableDebug) {
      console.log(env.apiUrl);
    }
  }

  ngOnInit(): void {
  }

}
