import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { MenuGroup } from '../menu/menu-group';
import { Router} from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loginFormIsActive: boolean = false;
  messageFormIsActive: boolean = false;
  message : string;

  avideos : Video[][] = [];


  menus : MenuGroup[] = [];
  menus2 : MenuGroup[] = [];
  titles : string[] = [
    "Interviste",
    "Presentazione Libri",
    "Dirette Social",
    "Webinar Gratuiti",
    "EmpowerME",
    "Articoli",
    "Book Trailers",
    "Video Autori",
    "PHYL"
  ];

  section_id : string[] = [
    "VidInterviews",
    "VidBooks",
    "VidSocials",
    "VidWebinars",
    "VidEmpowerMe",
    "VidArticles",
    "VidBookTrailers",
    "VidAuthors",
    "VidPHYL"
  ];


  loginState: string = '';
  userLogged: boolean = false;
  userName: string = '';

  constructor(
    private videoService: VideoService, 
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getVideos();
    //this.dataOggi = (new Date()).toLocaleDateString();

       const mm1 = [
         ['Viale Malva Nord, 28','',11],
         ['48015 Cervia (RA)'],
         ['(+39) 0544 72215','',11],
         ['(+39) 351 8087232','',11],
         ['segreteria@eifis.it','',11],
         ['ordini@eifis.it','',11]
       ];
       const mm2 = [
         ['Privacy Policy e Cookies','',4],
         ['Contatti','',3],
         ['Chi siamo','',1]
       ];
       
       const mm5 = [['toggle1','',51],['toggle2','',52],['toggle3','',53]];

       this.menus.push( new MenuGroup("CONTATTI", mm1));
       this.menus.push( new MenuGroup("SERVIZIO CLIENTI", mm2));
     

       this.menus2.push( new MenuGroup("Admin", mm5));
       this.menus2.push( new MenuGroup("Files", mm5));

  }

  appoGetVideos(i, n: number): void {
    this.videoService.getVideos(i).subscribe({
      next: videos => { 
        //console.log(videos);
        this.avideos.push( new Array);
        videos.forEach( (video) => {  
         this.avideos[i-1].push( new Video(video.title, '', video.description, '', video.link));
        });
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

      case 80: {  // video selected
        break;
      }

      case 81: { // cannot select video because user not logged
        this.message = "per visualizzare i video devi prima effetturare il login";
        this.messageFormIsActive = true;
        break;
      }
     
      case 96: {  // close message form
        this.messageFormIsActive = false;
        break;
      }
      case 99: {  // open login form
        this.loginFormIsActive = true;
        break;
      }
      case 98: {  // close login form
        this.loginFormIsActive = false;
        console.log(this.loginFormIsActive);
        if (this.userService.data2.user_id) {
          this.loginState = this.userService.data2.notice;
          this.userName = this.userService.data1.email;
        //  this.showLogin = true;
          this.userLogged = true;

          this.message = "utente collegato";
          this.messageFormIsActive = true;
        } else {
          this.message = "credenziali errate";
          this.messageFormIsActive = true;
        }
        break;     
      }     
    }
  }

  
//  @Output() onVideoSelected: EventEmitter<Video>;

}
