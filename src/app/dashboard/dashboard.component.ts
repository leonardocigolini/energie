import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { MenuGroup } from '../menu/menu-group';
import { Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  avideos : Video[][] = [];
/*   videos : Video[] = [];
  videos2 : Video[] = [];
  videos3 : Video[] = [];
  videos4 : Video[] = [];
  videos5 : Video[] = []; */



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


  //dataOggi : string;
 

  showJobs: boolean = false;
  showAbout: boolean = false;
  showContact: boolean = false;

  constructor(
    private videoService: VideoService, 
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

  /* getVideos1(): void {
    this.videoService.getVideos(1).subscribe(
      videos => { 
        console.log(videos);
        videos.forEach( (video) => {  
         this.videos.push( new Video(video.title, '', video.description, '', video.link));
        });

        this.videoService.getVideos(2).subscribe(
          videos => { 
            console.log(videos);
  
            videos.forEach( (video) => {
             this.videos2.push( new Video(video.title, '', video.description, '', video.link));
            });

            this.videoService.getVideos(3).subscribe(
              videos => { 
                console.log(videos);
    
                videos.forEach( (video) => {
                 this.videos3.push( new Video(video.title, '', video.description, '', video.link));
                });


              });
          });
      }); */
        
        
   /*      this.videoService.getVideos4.subscribe(
            videos => { 
              console.log(videos);

              videos.forEach( (video) => {
               this.videos4.push( new Video(video.title, '', video.description, '', video.link));
              });
            });

        this.videoService.getVideos5.subscribe(
              videos => { 
                console.log(videos);

                videos.forEach( (video) => {
                 this.videos5.push( new Video(video.title, '', video.description, '', video.link));
                });
              });
 
    //this.videoService.getVideos2().subscribe(videos => this.videos2 = videos.slice(0,5));

  }
  */


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
      case 51: {
        this.showAbout = !this.showAbout;
        break;
      }
      case 52: {
        this.showJobs = !this.showJobs;
        break;
      }
      case 53: {
        this.showContact = !this.showContact;
        break;
      }

        
    }
  }

  
//  @Output() onVideoSelected: EventEmitter<Video>;

}
