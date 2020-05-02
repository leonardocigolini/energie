import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuGroup } from '../../menu/menu-group';
import { Inject } from '@angular/core';
import { Location } from '@angular/common';

//import { environment } from '../../environments/environment';

export const homeLogo = '/assets/images/logo.jpg';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

//  homeUrl = environment.homeUrl;
  homeLogo = '/assets/images/logo.jpg';
  homeUrl : string; 
 // homeLogo = environment.homeLogo;
 
  @Output() doCmd: EventEmitter<number>;
  @Input() menus: MenuGroup[];
  @Input() titles: String[];
  @Input() user_name: string;
  @Input() section_ids: String[];
  @Input() mode: string;

  isActive: boolean;


  constructor( @Inject('HOME_URL')  homeUrl: string,  private location: Location ) {
    this.doCmd = new EventEmitter();
    this.homeUrl = homeUrl;
  }

  showNavBar() {
    this.isActive = !this.isActive
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
  
}
