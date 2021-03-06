import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../video/video';
import { VideoService } from '../video/video.service';
import { MenuGroup } from '../menu/menu-group';
import { Router} from '@angular/router';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // login form
//  loginFormIsActive: boolean = false;
  startMsgIsActive: boolean = false;
  loginMode: number = 0;
  loginFormTitle: string = '';
  messageFormIsActive: boolean = false;
  message : string;

  topBarMode = 'video';

  // video
  //startVideo : Video = null;
  avideos : Video[][] = [];
  titles : string[] = [
    // "Interviste",
    // "Presentazione Libri",
    // "Dirette Social",
    // "Webinar Gratuiti",
    // "EmpowerME",
    // "Book Trailers",
    // "Video Autori",
    // "PHYL",
    // "Live Meditations"

    "Webinar",
    "Interviste",
    "Meditazioni Live",
    "PHYL",
    "Presentazioni Live",
    "Dirette Social",
    "Book Trailers",
    "Video Autori",
    "EmpowerME"
   
    
  ];

  section_id : string[] = [
    "VidWebinars",
    "VidInterviews",
    "VidLiveMed",
    "VidPHYL",
    "VidBooks",
    "VidSocials",
    "VidBookTrailers",
    "VidAuthors",
    "VidEmpowerMe"
  ];

  items_code : number[] = [
  //  1,2,3,4,5,7,8,9,10
    4,1,10,9,2,3,7,8,5
  ]

  // menu
  menus : MenuGroup[] = [];
  menus2 : MenuGroup[] = [];

  mm1 = [
    ['Viale Malva Nord, 28','',11],
    ['48015 Cervia (RA)'],
    ['(+39) 0544 72215','',11],
    ['(+39) 351 8087232','',11],
    ['segreteria@eifis.it','',11],
    ['ordini@eifis.it','',11]
  ];

  mm2 = [
    ['Privacy Policy e Cookies','',4],
    ['Contatti','',3],
    ['Chi siamo','',1]
  ];
  

 // loginState: string = '';
  isUserLogged: boolean = false;
  userName: string = '';

  constructor(
    private videoService: VideoService, 
    private userService: UserService,
    private router: Router ) { }

  ngOnInit(): void {

    console.log('ngOnInit');
    this.isUserLogged = this.userService.isUserLogged;
    this.userName = this.userService.userName();

    this.getVideos();
  
    this.menus.push( new MenuGroup("CONTATTI", this.mm1));
    this.menus.push( new MenuGroup("SERVIZIO CLIENTI", this.mm2));
  
    //    const mm5 = [['toggle1','',51],['toggle2','',52],['toggle3','',53]];
    //    this.menus2.push( new MenuGroup("Admin", mm5));
    //    this.menus2.push( new MenuGroup("Files", mm5));

    this.startMsgIsActive = true;
  }

  appoGetVideos(i, n: number): void {
    this.videoService.getVideos(this.items_code[i-1]).subscribe({
      next: videos => { 
        //console.log(videos);
        this.avideos.push( new Array);
        videos.forEach( (video) => {  
         this.avideos[i-1].push( new Video(video.title, '', video.description, '', video.link));
        });

      //  if (this.startVideo == null) {
      //    this.startVideo = this.avideos[i-1][0];
      //  }

        console.log('video loaded '+this.avideos[i-1].length);
      },
      complete: () => { 
        if (i < n) {
          console.log('next iteration');
          this.appoGetVideos(i+1, n);
        } else {
          console.log('finished')
        }
      } 
    });  
  }

  getVideos(): void {
    this.appoGetVideos(1,9);
  }
  
  execCmd(cmd: number) {
    console.log("execmd "+cmd);
    switch(cmd) {
      case 1: { // chi siamo
        this.router.navigate(['/chisiamo']);
        break;
      }
      case 3: { // contatti
        this.router.navigate(['/contatti']);
        break;
      }
      case 4: { // privacy
        this.router.navigate(['/privacy']);
        break;
      }
      case 5: { // articoli
        this.router.navigate(['/articoli']);
        break;
      }

      case 10: { // goto start
        this.router.navigate(['#'+this.section_id[0]]);
        break;
      }

      case 50: { // close startMsg 
        this.startMsgIsActive = false;
        break;
      }

      case 80: {  // video selected
        break;
      }


      case 81: { // cannot select video because user not logged
        this.message = "PER POTER VISUALIZZARE I VIDEO DEVI PRIMA EFFETTUARE IL LOGIN";
        this.messageFormIsActive = true;
        break;
      }

      case 94: {  // recupero password
        this.loginMode = 3;
    //    this.loginFormIsActive = true;
        this.loginFormTitle = 'Recupero Password';
        console.log('open login form')
        break;
      }

      case 95: {  // open signin form
        this.loginMode = 2;
     //   this.loginFormIsActive = true;
        this.loginFormTitle = 'Registrazione a energiemagazine.it'
        console.log('open login form')
        break;
      }

      case 96: {  // close message form
        this.messageFormIsActive = false;
        break;
      }
      case 97: {  // logout
        this.userService.logout();
        this.isUserLogged = this.userService.isUserLogged;
        this.userName = this.userService.userName();
        break;
      }

      case 76: { // close login and oper again to request forgotten pw }
        this.loginMode=0;
   //     this.loginFormIsActive = false;
        this.execCmd(94);
        break;
      }
    
      case 77: { // close login and oper again to register }
        this.loginMode=0;

     //   this.loginFormIsActive = false;
        this.execCmd(95);
        break;
      }

      case 78: {  // close login form

        if (this.loginMode == 1) {
          this.isUserLogged = this.userService.isUserLogged;
          this.userName = this.userService.userName();
  
          if (!this.userService.isUserLogged) {
            this.message = "CREDENZIALI ERRATE";
            this.messageFormIsActive = true;
          } else {
            this.message = "CIAK! ORA SEI COLLEGATO";
            this.messageFormIsActive = true;
          }
        }
     //   this.loginFormIsActive = false;
        this.loginMode = 0;

        break;     
      } 
      case 99: {  // open login form
        this.loginFormTitle = 'Area Riservata';
        this.loginMode = 1;
     //   this.loginFormIsActive = true;
        console.log('open login form')
        break;
      }    
    }
  }
}
