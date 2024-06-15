import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LoaderService } from 'app/services/loader.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent implements OnInit{

  constructor(private LoaderService: LoaderService) { }

  ngOnInit(): void {


  }

}
