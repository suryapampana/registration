import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cdp-employee',
  templateUrl: './cdp-employee.component.html',
  styleUrls: ['./cdp-employee.component.css']
})

export class CdpEmployeeComponent implements OnInit {

  token : any;
  userId = ''

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(event => {
        if (typeof event['token'] !== 'undefined') {
            this.token = event['token'];
            console.log(this.token);
        } 
     });
  }

}
