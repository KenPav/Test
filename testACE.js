
 var ACE = function(processingInstance) {
  with (processingInstance) {


     size(800,1200);
     
     frameRate(30);
   
     // ProgramCodeGoesHere

      var vers = "03.15.22/15:00";
      var blinker = 0;
      var temp = 0;
      var temp2 = 0;
      var FirstColor = color(0, 0, 0);
      var SecondColor = color(255,0,0);
      var ThirdColor = color(70,50,168);
      var BoxColor = color(255,255,255);
      var SelectBoxColor = color(0,255,200);
      var WarningColor = color(255,0,0);
      var AreYouSure = 0;
      var GPSswitch = 0;
      var Trackswitch = 0;
      var TrackStartLat = 0;
      var TrackStartLong = 0;
      var TrackYards = 0;
      var MissingScores = 0;
      var BackColor = color(180,200,240);
      stroke(FirstColor);
      strokeWeight(2);
      var SameCourse = 1;
      var PlayerCount=0;
      var NameCount=0;
      var HCPCount=0;
      var Lat = 0;
      var Long = 0;
      var LatB = 0;
      var LongB = 0;
      var LatC = 0;
      var LongC = 0;
      var LatB = 0;
      var LongB = 0;
      var holeLat = 0;
      var holeLong = 0;
      var dist = 0;
      var closestHole = 0;

      var isVert=1;
      var myWidth=window.innerWidth;
      var myHeight=window.innerHeight;
      var xMin = myWidth;
      var yMin = myHeight;
      var xAdj=1;
      var yAdj=1;
      var xOrig=800;
      var yOrig=1000;

      background(BackColor);
      var monthNames = ["January ","February ","March ","April ","May ","June ","July ","August ","September ","October ","November ","December "];


      // Strokes-Par+4 = Point Value in PlayerHoleScore and TotalPoints Arrays
      const PointValue = [10,8,6,4,2,1,0,0,0,0];

      //TotalStrokes Array F,B,T 4 Players and Round Par
      const TotalStrokes = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      //TotalPoints Array F,B,T Points, 4 Players plus Team Total
      const TotalPoints = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

     // Courses: 0=South 1=North 2=West
     // Par Element: 0-8=South 9-17=North 18-27=West
     // Par Element Values: Courses*9 + Hole Number - 1
      const HolePar = [5,4,3,5,4,4,3,4,4,4,5,3,4,4,4,4,3,4,4,5,4,4,5,3,4,5,3];
      const GreenLatF = [30.60525476891060,30.60303029410710,30.60336400602450,30.60052275586340,30.60313107043280,30.60463465828600,30.60375876531360,30.60627440034800,30.60868167279930,30.61411575166940,30.61827128780090,30.61977325506880,30.61801195101200,30.61551375417100,30.61211396368320,30.61486889644130,30.61404139355690,30.61109045056730,30.60961437297480,30.61448921858370,30.61764869688280,30.61901615594690,30.61951273095280,30.61865800856030,30.61559384167720,30.61072666809460,30.61045866671190];
      const GreenLatC = [30.60513370457560,30.60310271918880,30.60335907759650,30.60047800663300,30.60316220998700,30.60463855457900,30.60371360957520,30.60628830181930,30.60872353914700,30.61421183395830,30.61836619661740,30.61984360927870,30.61793850307540,30.61545970379420,30.61200456860030,30.61497057756890,30.61394926471720,30.61103712593990,30.60958333407090,30.61462257585350,30.61775412961580,30.61905289550750,30.61955214107870,30.61857347261210,30.61545720849660,30.61058807345360,30.61046804090140];
      const GreenLatB = [30.60503440838890,30.60317102557380,30.60335646814010,30.60043348024290,30.60319372724420,30.60464377260760,30.60366932711040,30.60630267979250,30.60876857192760,30.61431104449690,30.61846737296900,30.61991723279420,30.61786773828330,30.61540776220180,30.61189793971400,30.61507162965250,30.61386145985550,30.61099090247400,30.60955432741370,30.61475767671470,30.61786147367000,30.61908822398940,30.61959548337560,30.61848971426560,30.61531810187530,30.61045220710900,30.61047731044280];
      const GreenLongF = [-81.44781839046700,-81.45176020198710,-81.45333013526080,-81.45736630678470,-81.45705882892700,-81.45212369129390,-81.44999519957240,-81.45098272813140,-81.44723630267230,-81.44669857793030,-81.44658741156350,-81.44562843401100,-81.44905602246360,-81.44783400267380,-81.44722315361250,-81.44817172064920,-81.44874493261580,-81.44730995020180,-81.45060063554490,-81.45019470137810,-81.45088686404790,-81.45348196981920,-81.44885519300390,-81.44983837208100,-81.44929759039030,-81.44917754343240,-81.44716405695790];
      const GreenLongC = [-81.44789036544690,-81.45184944168460,-81.45345248352900,-81.45747694076750,-81.45693363310920,-81.45199164375300,-81.44988862209330,-81.45109003765820,-81.44712822112140,-81.44670056947450,-81.44653189888660,-81.44559970633350,-81.44914656850230,-81.44781927424940,-81.44721482943140,-81.44821105379120,-81.44872772941900,-81.44721774812530,-81.45074184116480,-81.45020025029880,-81.45097120767480,-81.45363332830180,-81.44869001594250,-81.44996272955520,-81.44929421210570,-81.44918722233540,-81.44702934465200];
      const GreenLongB = [-81.44794952345550,-81.45193583943110,-81.45353834247250,-81.45758457476330,-81.45681050492330,-81.45185559061830,-81.44978448961540,-81.45119979245930,-81.44701337497440,-81.44670256746130,-81.44647249989890,-81.44556858552750,-81.44923404625320,-81.44780542055640,-81.44720647946260,-81.44824782047980,-81.44871039238740,-81.44713690748730,-81.45087217076570,-81.45020362247530,-81.45105398950860,-81.45377248172600,-81.44852395313800,-81.45008715421610,-81.44928989327420,-81.44919752036870,-81.44689992804080];
      const GreenDistanceF = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      const GreenDistanceC = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      const GreenDistanceB = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      const Courses = ["South","North","West"];
      const SummaryLabel = ["","","Total Round"];

//    Setup Ace Member Name & Handicap Index Arrays
      var LocalNameData = 0;
      var NumberOfNames = 0;
      var SelectedName = -1;
      var NameAndIndex = 0;
      var AName = "";
      var AIndex = 0;
      var ATee = 0;
      const AceName = ["Add Name","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
      const SortNameArray = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
      const SortNameArray1 = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
      const AceIndex = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      const SortIndexArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//    0 = Red, 1 = Gold, 2 = White      
      const AceTee = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      const SortTeeArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//    Course Data [R,G,W], [S/N,S/W,N/W]      
      const CourseRating = [64.7,67.1,68.7,65.8,69.0,71.6,66.9,68.7,70.7];
      const Par = [71,71,71,73,73,73,72,72,72];
      const Slope = [113,119,127,116,122,130,114,116,122];


     // Up To Four Players With Their Total Course Handicap
     // 
      const PlayerName = ["","","","","Team"];
      const PlayerCourseHandicap = [0,0,0,0];
      const ReqPts = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
     // 
     // Up To 4 Players(0-3), 18 Hole Strokes Entry per Player
     // PlayerScore is up to 4 players plus team total
     // Index = Player#*18 + Hole Number - 1
      const PlayerHoleStrokes = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      const PlayerHoleScore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];



      function doOnOrientationChange() {
          switch(window.orientation) {
            case 90:
      //        alert('landscape');
               isVert=0;
               myWidth=Math.min(yMin,window.innerWidth);
               myHeight=Math.min(xMin,window.innerHeight);
              break;
            case -90:
      //        alert('landscape');
               isVert=0;
               myWidth=Math.min(yMin,window.innerWidth);
               myHeight=Math.min(xMin,window.innerHeight);
               break;
            case 0:
      //        alert('portrait');
               isVert=1;
               myWidth=Math.min(xMin,window.innerWidth);
               myHeight=Math.min(yMin,window.innerHeight);
               break;
            case 180:
      //        alert('portrait');
               isVert=1;
               myWidth=Math.min(xMin,window.innerWidth);
               myHeight=Math.min(yMin,window.innerHeight);
               break;
            default:
              break;
          }
      }

      var ScreenSelect = function() {
         fill(BoxColor);

         rect(0*xAdj,850*yAdj,200*xAdj,100*yAdj);
         rect(200*xAdj,850*yAdj,200*xAdj,100*yAdj);
         rect(400*xAdj,850*yAdj,200*xAdj,100*yAdj);           
         rect(600*xAdj,850*yAdj,200*xAdj,100*yAdj);

         textSize(50*xAdj);
         textAlign(CENTER);
         fill(FirstColor);

         text("Setup",100*xAdj,915*yAdj);
         text("Scores",300*xAdj,915*yAdj);
         text("Score",500*xAdj,895*yAdj);
         text("Card",500*xAdj,935*yAdj);
         text("Results",700*xAdj,915*yAdj);
         textSize(35*xAdj);
         text("Vers: "+vers,400*xAdj,985*yAdj);

         textSize(50*xAdj);
      }



//       AceScreen = 0
//       Starting Screen

      function localData() {

         window.addEventListener('orientationchange', doOnOrientationChange);

         xAdj=1;
         yAdj=1;
         xOrig=800;
         yOrig=1000;
         myWidth=Math.min(xMin,innerWidth);
         myHeight=Math.min(yMin,innerHeight);
         if(myWidth<xOrig) {
            xAdj=myWidth/xOrig;
            yAdj=myHeight/yOrig;
         }
//         console.log("Start",xMin,yMin,innerWidth,innerHeight,xAdj.toFixed(2),yAdj.toFixed(2));
         size(xOrig*xAdj,yOrig*yAdj);
         background(BackColor);

         fill(BoxColor);
         rect(50*xAdj,200*yAdj,325*xAdj,100*yAdj);
         rect(425*xAdj,200*yAdj,325*xAdj,100*yAdj);
         fill(FirstColor);
         textSize(45*xAdj);
         textAlign(CENTER);
         if(window.localStorage.getItem('PD')===null) {
            AceScreen=1;
            draw();
         }
         var pData=JSON.parse(window.localStorage.getItem('PD'));
         pData = new Date(pData);
         text("Continue With",212*xAdj,240*yAdj);
         text("Previous Setup",212*xAdj,285*yAdj);
         text("Clear",588*xAdj,240*yAdj);
         text("Previous Setup",588*xAdj,285*yAdj);
         text("Previous Round Data Stored at:",400*xAdj,90*yAdj);
         text(monthNames[pData.getMonth()]+pData.getDate()+", "+pData.getFullYear()+" @ "+pData.getHours()+":"+pData.getMinutes()+":"+pData.getSeconds(),400*xAdj,150*yAdj);
         text("Vers: "+vers,400*xAdj,985*yAdj);
      }

      function trackLocation() {
         if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(myPosition,displayError,{enableHighAccuracy: true});
         } else { 
             console.log("Geolocation is not supported by this browser.");
         }
      }

      function myPosition(position) {
         myLat = position.coords.latitude;
         myLong = position.coords.longitude;           
      }

      function displayError(){
         
      }



//       AceScreen = 1
//       Select Courses (CourseSet=0)
//       Select Number of Players (CourseSet=1)
//       Enter Player Names and Course Handicaps (CourseSet=2)
//       Display Player Names and Course Handicaps (CourseSet=3)

      var enterSetup = function() {

         xAdj=1;
         yAdj=1;
         xOrig=800;
         yOrig=1000;
         myWidth=Math.min(xMin,innerWidth);
         if(isVert===1 && myWidth<xOrig) {
            xAdj=myWidth/xOrig;
            yAdj=myHeight/yOrig;
         }
//         console.log("Setup",xMin,yMin,innerWidth,innerHeight,xAdj.toFixed(2),yAdj.toFixed(2));
         size(xOrig*xAdj,yOrig*yAdj);
         background(BackColor);
         ScreenSelect();
         if (SameCourse===0) {
            textSize(35*xAdj);
            fill(255,0,0);
            text("Select Different Front and Back Courses!",400*xAdj,450*yAdj);
         }
         textSize(50*xAdj);
         textAlign(CENTER);
         if(CourseSet===0) {

//             SELECT FRONT COURSE
            fill(FirstColor);
            text("Select Front 9 Course ",400*xAdj,60*yAdj);
            if (Front===0) {
               fill(SelectBoxColor);
            } else { 
               fill(BoxColor);
            }
            rect(100*xAdj,70*yAdj,200*xAdj,70*yAdj);
            fill(FirstColor);
            text("South",200*xAdj,125*yAdj);
            if (Front===1) {
               fill(SelectBoxColor);
            } else { 
               fill(BoxColor);
            }                  
            rect(300*xAdj,70*yAdj,200*xAdj,70*yAdj);
            fill(FirstColor);
            text("North",400*xAdj,125*yAdj);
            if (Front===2) {
               fill(SelectBoxColor);
            } else { 
               fill(BoxColor);
            }                  
            rect(500*xAdj,70*yAdj,200*xAdj,70*yAdj);
            fill(FirstColor);
            text("West",600*xAdj,125*yAdj);


//             SELECT BACK COURSE    
            fill(FirstColor);
            text("Select Back 9 Course ",400*xAdj,190*yAdj);
            if (Back===0) {
               fill(SelectBoxColor);
            } else { 
               fill(BoxColor);
            }                  
            rect(100*xAdj,200*yAdj,200*xAdj,70*yAdj);
            fill(FirstColor);
            text("South",200*xAdj,255*yAdj);
            if (Back===1) {
               fill(SelectBoxColor);
            } else { 
               fill(BoxColor);
            }                                    
            rect(300*xAdj,200*yAdj,200*xAdj,70*yAdj);
            fill(FirstColor);
            text("North",400*xAdj,255*yAdj);
            if (Back===2) {
               fill(SelectBoxColor);
            } else { 
               fill(BoxColor);
            }                                    
            rect(500*xAdj,200*yAdj,200*xAdj,70*yAdj);
            fill(FirstColor);
            text("West",600*xAdj,255*yAdj);
            fill(BoxColor);
            rect(300*xAdj,300*yAdj,200*xAdj,70*yAdj);
            fill(FirstColor);
            text("Continue",400*xAdj,355*yAdj);
            if (AreYouSure===0) {
               fill(BoxColor);
               rect(100*xAdj,500*yAdj,600*xAdj,70*yAdj);
               fill(FirstColor);
               text("**Clear All Round Info**",400*xAdj,550*yAdj);
            } else {
               fill(WarningColor);
               rect(100*xAdj,500*yAdj,600*xAdj,70*yAdj);
               fill(FirstColor);
               text("Confirm Clear All Info",400*xAdj,550*yAdj);
               fill(BoxColor);
               rect(100*xAdj,600*yAdj,600*xAdj,70*yAdj);
               fill(FirstColor);
               text("Do Not Clear Round Info",400*xAdj,650*yAdj);
            }
         }

//       Select Number of Players (CourseSet=1)

         if (CourseSet===1) {
            for (var i=0; i<15; i++) {
               ReqPts[i] = 0;
            }
            background(BackColor);
            text("Number of Players",400*xAdj,100*yAdj);
            textSize(50*xAdj);
            j=NumberOfPlayers;
            for(i=0; i<4; i++) {
               fill(BoxColor);
               if(i===j-1) {
                  fill(SelectBoxColor);
               }
               rect(200*xAdj+i*100*xAdj,200*yAdj,100*xAdj,100*yAdj);
               fill(FirstColor);
               text(i+1,250*xAdj+i*100*xAdj,270*yAdj);
            }
            return;
         }

//       Enter Player Names and Course Handicaps (CourseSet=2)

         if(CourseSet===2) {
            if (PlayerCount < NumberOfPlayers) {
               if(NameCount===PlayerCount) {

                  if(NameAndIndex === 0) {
                     SelectPlayer();
                  }
                  if(NameAndIndex === 1 || NameAndIndex === 2) {
                     AddPlayer();
                  } 
                  if(NameAndIndex === 3) {
                     PlayerName[PlayerCount] = AceName[SelectedName];
                     temp = AceTee[SelectedName] + (3*(Front + Back-1));
                     console.log("Name, Tee, temp: ",PlayerName[PlayerCount],AceTee[SelectedName],temp)
                     PlayerCourseHandicap[PlayerCount] = Math.round(AceIndex[SelectedName] * (Slope[temp]/113) + (CourseRating[temp]-Par[temp]));
                     console.log("PlayerCourseHandicap:",PlayerCourseHandicap[PlayerCount])
                     console.log("HI, Tee, Slope, Rating, Par: ",AceIndex[SelectedName],AceTee[SelectedName],Slope[temp],CourseRating[temp],Par[temp]);
                     console.log("Name, Course Handicap: ",PlayerName[PlayerCount],PlayerCourseHandicap[PlayerCount]);
                     NameCount = NameCount + 1;
                     NameAndIndex = 0;
                     console.log("PlayerCount,NameCount,NumberOfPlayers: ",PlayerCount,NameCount,NumberOfPlayers);

                     temp=floor((36-PlayerCourseHandicap[PlayerCount])/2);
                     temp2=36-(temp*2);
                     if (temp2===PlayerCourseHandicap[PlayerCount]) {
                        ReqPts[PlayerCount*3]=temp;
                        ReqPts[PlayerCount*3+1]=temp;
                     }
                     else {
                        if (Front>Back) {
                           ReqPts[PlayerCount*3]=temp;
                           ReqPts[PlayerCount*3+1]=temp+1;
                        }
                        else {
                           ReqPts[PlayerCount*3]=temp+1;
                           ReqPts[PlayerCount*3+1]=temp;
                        }
                     }
                        ReqPts[PlayerCount*3+2] = ReqPts[PlayerCount*3] + ReqPts[PlayerCount*3+1];
                        ReqPts[12] = ReqPts[12] + ReqPts[PlayerCount*3];
                        ReqPts[13] = ReqPts[13] + ReqPts[PlayerCount*3+1];
                        ReqPts[14] = ReqPts[14] + ReqPts[PlayerCount*3+2];

                     PlayerCount=PlayerCount+1;
                     HCPCount=HCPCount+1
                     storeIt();

                  }

//                  PlayerName[PlayerCount]=prompt("Player #"+(PlayerCount+1).toString()+" Name: "+PlayerName[PlayerCount],PlayerName[PlayerCount].toString());
//                  NameCount=NameCount+1;

               }
/*               if(HCPCount===PlayerCount) {

                  text("Player #"+PlayerCount+1,", "+PlayerName[PlayerCount]+", Course Handicap",400*xAdj,100);
                  for (i=0; i<10; i++) {
                     for (j=0; j<4; j++) {
                        fill(BoxColor);
                        if(PlayerCourseHandicap[HCPCount]===(i+j*10)) {
                           fill(SelectBoxColor);
                        }
                        rect(0+i*80*xAdj,200*yAdj+j*80*yAdj,80*xAdj,80*yAdj);
                        fill(FirstColor);
                        text(0+i+j*10,40*xAdj+i*80*xAdj,265*yAdj+j*80*yAdj);
                     }
                  }
               }
*/
            }
            else {
               CourseSet=3;
            }
            return;
         }

//       Display Player Names, Course Handicaps & Required Points (CourseSet=3)

         if (CourseSet===3) {
            fill(BoxColor);
            rect(0*xAdj,200*yAdj,200*xAdj,100*yAdj);
            rect(200*xAdj,200*yAdj,200*xAdj,100*yAdj);
            rect(400*xAdj,200*yAdj,200*xAdj,100*yAdj);
            rect(600*xAdj,200*yAdj,200*xAdj,100*yAdj);
            fill(FirstColor);
            text("Player",100*xAdj,270*yAdj);
            text("Course",300*xAdj,250*yAdj);
            text(Courses[Front],500*xAdj,250*yAdj);
            text(Courses[Back],700*xAdj,250*yAdj);
            text("Hcp",300*xAdj,290*yAdj);
            text("Points",500*xAdj,290*yAdj);
            text("Points",700*xAdj,290*yAdj);
            for (var i = 0; i < NumberOfPlayers; i++) {
               fill(BoxColor);
               rect(0*xAdj,300*yAdj+i*70*yAdj,200*xAdj,70);
               rect(200*xAdj,300*yAdj+i*70*yAdj,200*xAdj,70*yAdj);
               rect(400*xAdj,300*yAdj+i*70*yAdj,200*xAdj,70*yAdj);
               rect(600*xAdj,300*yAdj+i*70*yAdj,200*xAdj,70*yAdj);
               if(i===0 || i===2) {
                  fill(SecondColor);
               }
               else {
                  fill(FirstColor);
               }
               textSize(35*xAdj);
               text(PlayerName[i],100*xAdj,355*yAdj+i*70*yAdj);
               textSize(50*xAdj);
               text(PlayerCourseHandicap[i],300*xAdj,355*yAdj+i*70*yAdj);
               text(ReqPts[i*3],500*xAdj,355*yAdj+i*70*yAdj);
               text(ReqPts[i*3+1],700*xAdj,355*yAdj+i*70*yAdj);
            }
            fill(BoxColor);
            rect(300*xAdj,600*yAdj,200*xAdj,70*yAdj);
            fill(FirstColor);
            text("Continue",400*xAdj,655*yAdj);
         }
      };      

      SelectPlayer = function() {
         background(BackColor);
         for (j=0; j<3; j++) {
            for (i=0; i<15; i++) {
               if(NumberOfNames>=j*15+i) {
                  fill(BoxColor);
                  rect((50+j*250)*xAdj,(50+i*50)*yAdj,200*xAdj,50*yAdj);
                  fill(FirstColor);
                  textSize(30*xAdj);
                  text(AceName[i+j*15],(150+250*j)*xAdj,(90+i*50)*yAdj);
               }
            }
         }
         fill(BoxColor);
         rect(300*xAdj,800*yAdj,200*xAdj,50*yAdj);
         fill(FirstColor);
         text("Cancel",400*xAdj,840*yAdj);
      }

      AddPlayer = function() {
         background(BackColor)
         fill(BoxColor);
         rect(300*xAdj,100*yAdj,200*xAdj,50*yAdj);
         rect(350*xAdj,200*yAdj,100*xAdj,50*yAdj);
         rect(50*xAdj,400*yAdj,200*xAdj,50*yAdj);
         rect(300*xAdj,400*yAdj,200*xAdj,50*yAdj);
         rect(550*xAdj,400*yAdj,200*xAdj,50*yAdj);
         if(ATee===0) {
            fill(SelectBoxColor);
         } else {
            fill(BoxColor);
         }
         rect(200*xAdj,300*yAdj,100*xAdj,50*yAdj);
         if(ATee===1) {
            fill(SelectBoxColor);
         } else {
            fill(BoxColor);
         }
         rect(350*xAdj,300*yAdj,100*xAdj,50*yAdj);
         if(ATee===2) {
            fill(SelectBoxColor);
         } else {
            fill(BoxColor);
         }
         rect(500*xAdj,300*yAdj,100*xAdj,50*yAdj);
         fill(FirstColor);
         textSize(30*xAdj);
         text("Name: ",200*xAdj,140*yAdj);
         text("(<= 10 Characters)",635*xAdj,140*yAdj);
         text(AName,400*xAdj,140*yAdj);
         text("Handicap Index: ",200*xAdj,240*yAdj);
         text(AIndex.toFixed(1),400*xAdj,240*yAdj);
         text("Red",250*xAdj,340*yAdj);
         text("Gold",400*xAdj,340*yAdj);
         text("White",550*xAdj,340*yAdj);
         text("Delete Name",150*xAdj,440*yAdj);
         text("Save Player",400*xAdj,440*yAdj);
         text("Use Player #"+(PlayerCount+1),650*xAdj,440*yAdj);
      }

      SortPlayers = function() {
      
         for(i=0; i<46; i++) {   
            SortNameArray1[i] = "";
            SortNameArray[i] = "";
         }
         for(i=0; i<NumberOfNames; i++) {
            SortNameArray1[i] = AceName[i];
            SortIndexArray[i] = AceIndex[i];
            SortTeeArray[i] = AceTee[i];
         }
         SortNameArray1.sort();
         for(i=0; i<NumberOfNames; i++) {
            SortNameArray[i] = SortNameArray1[46-NumberOfNames+i];
         }
         for(i=0; i<NumberOfNames; i++) {
            for(j=0; j<NumberOfNames; j++) {
               if(SortNameArray[i]===AceName[j]) {
                  console.log(i,j);
                  AceIndex[i] = SortIndexArray[j];
                  AceTee[i] = SortTeeArray[j];
               }
            }
         }
         for(i=0; i<NumberOfNames; i++) {
            AceName[i] = SortNameArray[i];
         }
      }

      SaveNames = function() {
         window.localStorage.setItem('AN',JSON.stringify(AceName));
         window.localStorage.setItem('AI',JSON.stringify(AceIndex));
         window.localStorage.setItem('AT',JSON.stringify(AceTee));
      }


      

//       AceScreen = 2;
//       Enter Player Scores for each Hole, Display Team Points      

      var enterStrokes = function(Hole) {
         MissingScores = 0;
         if(HoleNum>1) {
            for(i=0; i<NumberOfPlayers; i++) {
               MissingScores = MissingScores + PlayerHoleStrokes[i*18+HoleNum-2];
            }
         }
         if(GPSswitch===1) {
            GreenDist();
            if(GreenDistanceC[HoleNum-1]<150 && GreenDistanceC[HoleNum-1]>30) {
               clearInterval();
               setInterval(trackLocation,3000);
            } else {
               clearInterval();
               setInterval(trackLocation,5000);               
            }
         }
         xAdj=1;
         yAdj=1;
         xOrig=800;
         yOrig=1000;
         myWidth=Math.min(xMin,innerWidth);
         if(isVert===1 && myWidth<xOrig) {
            xAdj=myWidth/xOrig;
            yAdj=myHeight/yOrig;
         }
//         console.log("Scores",xMin,yMin,innerWidth,innerHeight,xAdj.toFixed(2),yAdj.toFixed(2));
         size(xOrig*xAdj,yOrig*yAdj);
         ScreenSelect();
         textSize(50*xAdj);
         textAlign(CENTER);
         if(HoleNum===closestHole) {
            fill(SecondColor);
         } else{
            fill(FirstColor);
         }
         textSize(40*xAdj);
         if (GPSswitch===1) {
            fill(WarningColor);
            rect(10*xAdj,10*yAdj,170*xAdj,80*yAdj);
            fill(FirstColor);
            text("GPS On",95*xAdj,65*yAdj);
         } else {
            fill(BoxColor);
            rect(10*xAdj,10*yAdj,170*xAdj,80*yAdj);
            fill(FirstColor);
            text("GPS Off",95*xAdj,65*yAdj);
         }
         if (Trackswitch===1) {
            fill(SelectBoxColor);
            rect(620*xAdj,10*yAdj,170*xAdj,80*yAdj);
            fill(FirstColor);
            text("Track On",705*xAdj,50*yAdj);
            Lat = TrackStartLat;
            Long = TrackStartLong;
            distance();
            TrackYards = dist;
            text(TrackYards.toFixed(0)+" yds",705*xAdj,80*yAdj);
         } else {
            fill(BoxColor);
            rect(620*xAdj,10*yAdj,170*xAdj,80*yAdj);
            fill(FirstColor);
            text("Track Off",705*xAdj,65*yAdj);
         }
         textSize(50*xAdj);
         text("Hole #"+HoleNum,400*xAdj,90*yAdj)
         if(HoleNum<=9) {
            text("Front 9: "+Courses[Front]+" #"+HoleNum+" / Par "+HolePar[(Front*9)+HoleNum-1],400*xAdj,140*yAdj);
         }
         else {
            text("Back 9: "+Courses[Back]+" #"+(HoleNum-9)+" / Par "+HolePar[(Back*9)+HoleNum-10],400*xAdj,140*yAdj);
         }
         fill(FirstColor);
         textSize(40*xAdj);
         text("Select Hole Score for Each Player",400*xAdj,185*yAdj);
         textSize(50*xAdj);
         for (var i = 0; i < NumberOfPlayers; i++) {
            fill(BoxColor);
            rect(0*xAdj,200*yAdj+i*80*yAdj,220*xAdj,80*yAdj);
            if(i===0 || i===2) {
               fill(SecondColor);
            }
            else {
               fill(FirstColor);
            }
            textSize(40*xAdj);
            text(PlayerName[i],110*xAdj,255*yAdj+i*80*yAdj);
            textSize(50*xAdj);
            for (var j = 0; j < 8; j++) {
               if(PlayerHoleStrokes[i*18+HoleNum-1]===j+1) {
                  fill(SelectBoxColor);
                  rect(220*xAdj+j*70*xAdj,200*yAdj+i*80*yAdj,70*xAdj,80*yAdj);
               }
               else {
                  fill(BoxColor);
                  rect(220*xAdj+j*70*xAdj,200*yAdj+i*80*yAdj,70*xAdj,80*yAdj);
               }
               if(i===0 || i===2) {
                  fill(SecondColor);
               }
               else {
                  fill(FirstColor);
               }
               text(j+1,255*xAdj+j*70*xAdj,255*yAdj+i*80*yAdj);
            }

         }

         fill(BoxColor);
         if(MissingScores===0 && HoleNum>1) {
            blinker = blinker + 1;
            fill(BoxColor);
            if (blinker >10) {
               fill(WarningColor);
               if (blinker>20) {
                  fill(BoxColor);
                  blinker = 0;
               }
            }
         }
         rect(50*xAdj,550*yAdj,200*xAdj,80*yAdj);
         fill(BoxColor);
         rect(550*xAdj,550*yAdj,200*xAdj,80*yAdj);
         rect(275*xAdj,550*yAdj,250*xAdj,80*yAdj);
         rect(50*xAdj,650*yAdj,700*xAdj,80*yAdj);
         fill(FirstColor);
         text("Previous",150*xAdj,605*yAdj);
         text("Next",650*xAdj,605*yAdj);
         if(GPSswitch===1) {
            if(HoleNum===closestHole) {
               fill(SecondColor);
               text("This hole is the nearest hole",400*xAdj,705*yAdj);
            } 
            else {
               text("Jump to Nearest Hole (#"+closestHole+")",400*xAdj,705*yAdj);               
            }
         }
         text("Points: "+PlayerHoleScore[4*18+HoleNum-1],400*xAdj,605*yAdj);
         fill (BoxColor);

         rect(0*xAdj,740*yAdj,200*xAdj,100*yAdj);
         rect(200*xAdj,740*yAdj,200*xAdj,50*yAdj);
         rect(400*xAdj,740*yAdj,200*xAdj,50*yAdj);           
         rect(600*xAdj,740*yAdj,200*xAdj,50*yAdj);
         rect(200*xAdj,790*yAdj,200*xAdj,50*yAdj);
         rect(400*xAdj,790*yAdj,200*xAdj,50*yAdj);           
         rect(600*xAdj,790*yAdj,200*xAdj,50*yAdj);
         fill(FirstColor);
         text("Yards to",100*xAdj,785*yAdj);
         text("Green",100*xAdj,825*yAdj);
         text("Front",300*xAdj,780*yAdj);
         text("Center",500*xAdj,780*yAdj);
         text("Back",700*xAdj,780*yAdj);
         if(GPSswitch===1) {
            text(GreenDistanceF[HoleNum-1].toFixed(0),300*xAdj,830*yAdj);
            text(GreenDistanceC[HoleNum-1].toFixed(0),500*xAdj,830*yAdj);
            text(GreenDistanceB[HoleNum-1].toFixed(0),700*xAdj,830*yAdj);
         }

      };

//       Display Score Card      

      var showScoreCard = function() {

         xOrig=1250;
         yOrig=1000;
         xAdj=1;
         yAdj=1;
         if(isVert===0 & myWidth<xOrig) {
            xAdj=myWidth/xOrig;
            yAdj=1;
         }
//         console.log("Card",xMin,yMin,innerWidth,innerHeight,xAdj.toFixed(2),yAdj.toFixed(2));
/*            else {
            if(isVert===1 & myWidth<yOrig) {
               yAdj=myWidth/yOrig;
            }
         }
*/
         size(xOrig*xAdj,yOrig*yAdj);


//            size(1250,1200);
         ScreenSelect();
         DoCalculations();
         textSize(35*xAdj);
         textAlign(CENTER);
         fill(BoxColor);
         rect(0*xAdj,0*yAdj,170*xAdj,50*yAdj);
         rect(170*xAdj,0*yAdj,10*50*xAdj,50*yAdj);
         rect(170*xAdj+10*50*xAdj,0*yAdj,10*50*xAdj,50*yAdj);
         rect(170*xAdj+20*50*xAdj,0*yAdj,50*xAdj,50*yAdj);
         fill(FirstColor);
         text("Players",85*xAdj,35*yAdj);
         text("Front 9: "+Courses[Front],420*xAdj,35*yAdj);
         text("Back 9: "+Courses[Back],920*xAdj,35*yAdj);
         text("T",1195*xAdj,35*yAdj);
         fill(BoxColor);
         for (var j=0; j<6; j++) {
            rect(0*xAdj,50*yAdj+j*50*yAdj,170*xAdj,50*yAdj);
            for (var i=0; i<21; i++) {
               //Front 9, Front Total, Back 9, Back Total, Round Total
               rect(170*xAdj+i*50*xAdj,50*yAdj+j*50*yAdj,50*xAdj,50*yAdj);
            }
         }
         fill(FirstColor);
         text("Par",85*xAdj,85);
         for (var i=1; i<19; i++) {
            if (i<10) {
               text(HolePar[Front*9+i-1],195*xAdj+(i-1)*50*xAdj,85*yAdj);
            }
            else {
               text(HolePar[Back*9+i-10],195*xAdj+i*50*xAdj,85*yAdj);  
            }
         }
         text(TotalStrokes[12],645*xAdj,85*yAdj);
         text(TotalStrokes[13],1145*xAdj,85*yAdj);
         text(TotalStrokes[14],1195*xAdj,85*yAdj);

         for (var j=0; j<5; j++) {
            for (var i=0; i<21; i++) {

               if(i===0 && j===1) {
                  fill(FirstColor);
                  text("Hole #",85*xAdj,135*yAdj);
                  for (var k=1; k<10; k++) {
                     text(k,195*xAdj+(k-1)*50*xAdj,135*yAdj);
                  }
                  for (var k=10; k<19; k++) {
                     text(k-9,695*xAdj+(k-10)*50*xAdj,135*yAdj);
                  }
               }
               if((j-1)===0 || (j-1)===2) {
                  fill(SecondColor);
               }
               else {
                  fill(FirstColor);
               }
               if ((j===0 && (i===9 || i>18))) {
                  if (i===9) {
                     text("F",195*xAdj+i*50*xAdj,135*yAdj+j*50*yAdj);
                  }
                  if (i===19) {
                     text("B",195*xAdj+i*50*xAdj,135*yAdj+j*50*yAdj);
                  }
                  if (i===20) {
                     text("T",195*xAdj+i*50*xAdj,135*yAdj+j*50*yAdj);
                  }
               }
               textSize(30*xAdj);
               if(j>0 && j<=NumberOfPlayers && i===0) {
                  text(PlayerName[j-1],85*xAdj,135*yAdj+50*j*yAdj);
               }
               textSize(35*xAdj);
               if(i<9 && j>0) {
                  if(j<=NumberOfPlayers) {
                     text(PlayerHoleStrokes[(j-1)*18+i],195*xAdj+i*50*xAdj,135*yAdj+j*50*yAdj);
                     if (i===8) {
                        text(TotalStrokes[(j-1)*3],195*xAdj+(i+1)*50*xAdj,135*yAdj+j*50*yAdj);
                     }
                  }
               }
               if(i>10 && i<20 && j>0) {
                  if(j<=NumberOfPlayers) {
                     text(PlayerHoleStrokes[(j-1)*18+i-2],195*xAdj+(i-1)*50*xAdj,135*yAdj+j*50*yAdj);
                     if (i===19) {
                        text(TotalStrokes[(j-1)*3+1],195*xAdj+(i+0)*50*xAdj,135*yAdj+j*50*yAdj);
                        text(TotalStrokes[(j-1)*3+2],195*xAdj+(i+1)*50*xAdj,135*yAdj+j*50*yAdj);
                     }
                  }
               }
            }
         }
                    
         fill(BoxColor);
         for (var j=0; j<6; j++) {
            rect(0*xAdj,400*yAdj+j*50*yAdj,170*xAdj,50*yAdj);
            for (var i=0; i<21; i++) {
               //Front 9, Front Total, Back 9, Back Total, Round Total
               rect(170*xAdj+i*50*xAdj,400*yAdj+j*50*yAdj,50*xAdj,50*yAdj);
            }
         }                       
         fill(FirstColor);
         for (var j=0; j<7; j++) {
            for (var i=0; i<21; i++) {
               fill(FirstColor);
               if(j===0 && i===1) {
                  text("Points",95*xAdj,435*yAdj);
                  for (var k=1; k<10; k++) {
                     text(k,195*xAdj+(k-1)*50*xAdj,435*yAdj);
                  }
                  for (var k=10; k<19; k++) {
                     text(k-9,695*xAdj+(k-10)*50*xAdj,435*yAdj);
                  }
               }
               if ((j===0 && (i===9 || i>18))) {
                  if (i===9) {
                     text("F",195*xAdj+i*50*xAdj,435*yAdj+j*50*yAdj);
                  }
                  if (i===19) {
                     text("B",195*xAdj+i*50*xAdj,435*yAdj+j*50*yAdj);
                  }
                  if (i===20) {
                     text("T",195*xAdj+i*50*xAdj,435*yAdj+j*50*yAdj);
                  }
               }
               if((j-1)===0 || (j-1)===2) {
                  fill(SecondColor);
               }
               else {
                  fill(FirstColor);
               }                  
               textSize(30*xAdj);
               if(j>0 && j<=NumberOfPlayers && i===0) {
                  text(PlayerName[j-1],85*xAdj,435*yAdj+50*j*yAdj);
               }
               textSize(35*xAdj);
               if(i<9 && j>0 && j<=NumberOfPlayers) {    
                     text(PlayerHoleScore[(j-1)*18+i],195*xAdj+i*50*xAdj,435*yAdj+j*50*yAdj);
                     if (i===8) {
                        text(TotalPoints[(j-1)*3],195*xAdj+(i+1)*50*xAdj,435*yAdj+j*50*yAdj);
                     }
               }
               if(i>10 && i<20 && j>0 && j<=NumberOfPlayers) {
                     text(PlayerHoleScore[(j-1)*18+i-2],195*xAdj+(i-1)*50*xAdj,435*yAdj+j*50*yAdj);
                     if (i===19) {
                        text(TotalPoints[(j-1)*3+1],195*xAdj+(i+0)*50*xAdj,435*yAdj+j*50*yAdj);
                        text(TotalPoints[(j-1)*3+2],195*xAdj+(i+1)*50*xAdj,435*yAdj+j*50*yAdj);
                     }
               }
               if(j===5) {
                  fill(ThirdColor);
                  if (i===0) {
                     text("TeamTotal",85*xAdj,435*yAdj+50*j*yAdj);
                  }
                  if(i<9 && j>0) {
                     text(PlayerHoleScore[(j-1)*18+i],195*xAdj+i*50*xAdj,435*yAdj+j*50*yAdj);
                     if (i===8) {
                        text(TotalPoints[(j-1)*3],195*xAdj+(i+1)*50*xAdj,435*yAdj+j*50*yAdj);
                     }
                  }
                  if(i>10 && i<20 && j>0) {
                     text(PlayerHoleScore[(j-1)*18+i-2],195*xAdj+(i-1)*50*xAdj,435*yAdj+j*50*yAdj);
                     if (i===19) {
                        text(TotalPoints[(j-1)*3+1],195*xAdj+(i+0)*50*xAdj,435*yAdj+j*50*yAdj);
                        text(TotalPoints[(j-1)*3+2],195*xAdj+(i+1)*50*xAdj,435*yAdj+j*50*yAdj);
                     }
                  }
               }
            }
         }
      };

//       Display Front, Back & Total Player & Team Results      

      var showSummary = function() {
         xOrig=1050;
         yOrig=1000;
         xAdj=1;
         yAdj=1;
         if(isVert===0 & myWidth<xOrig) {
            xAdj=myWidth/xOrig;
            yAdj=1;
         }
//         console.log("Results",xMin,yMin,innerWidth,innerHeight,xAdj.toFixed(2),yAdj.toFixed(2));
         size(xOrig*xAdj,yOrig*yAdj);

//            size(1200,1200);
         ScreenSelect();
         DoCalculations();
         SummaryLabel[0] = Courses[Front];
         SummaryLabel[1] = Courses[Back];
         textSize(35*xAdj);
         textAlign(CENTER);
         fill(BoxColor);
         rect(0*xAdj,100*yAdj,170*xAdj,150*yAdj);
         fill(FirstColor);
         text("Players",85*xAdj,240*yAdj);
         for (var i=0; i<3; i++) {
            fill(BoxColor);
            rect(170*xAdj+i*280*xAdj,100*yAdj,280*xAdj,50*yAdj)
            rect(170*xAdj+i*280*xAdj,150*yAdj,70*xAdj,100*yAdj);
            rect(240*xAdj+i*280*xAdj,150*yAdj,210*xAdj,50*yAdj);
            rect(240*xAdj+i*280*xAdj,200*yAdj,70*xAdj,50*yAdj);
            rect(310*xAdj+i*280*xAdj,200*yAdj,70*xAdj,50*yAdj);
            rect(380*xAdj+i*280*xAdj,200*yAdj,70*xAdj,50*yAdj);
            fill(FirstColor);
            text(SummaryLabel[i],310*xAdj+i*280*xAdj,140*yAdj);
            text("Points",345*xAdj+i*280*xAdj,190*yAdj);
            textSize(35*xAdj);
            text("Stk",205*xAdj+280*i*xAdj,240*yAdj);
            text("Scr",275*xAdj+i*280*xAdj,240*yAdj);
            text("Rqd",345*xAdj+i*280*xAdj,240*yAdj);
            text("Net",415*xAdj+i*280*xAdj,240*yAdj);
            textSize(35*xAdj);
            
         }
         for (var j=0; j<5; j++) {
            fill(BoxColor);
            rect(0*xAdj,250*yAdj+j*50*yAdj,170*xAdj,50*yAdj);
            if(j===0 || j===2) {
               fill(SecondColor);
            }
            else if(j===1 || j===3) {
               fill(FirstColor);
            }
            else {
               fill(ThirdColor);
            }
            textSize(30*xAdj);
            if (j<NumberOfPlayers || j===4) {
               text(PlayerName[j],85*xAdj,285*yAdj+j*50*yAdj); 
            }
            textSize(35*xAdj);
            for (var i=0; i<3; i++) {
               fill(BoxColor);
               rect(170*xAdj+i*280*xAdj,250*yAdj+j*50*yAdj,70*xAdj,50*yAdj);
               rect(240*xAdj+i*280*xAdj,250*yAdj+j*50*yAdj,70*xAdj,50*yAdj);
               rect(310*xAdj+i*280*xAdj,250*yAdj+j*50*yAdj,70*xAdj,50*yAdj);
               rect(380*xAdj+i*280*xAdj,250*yAdj+j*50*yAdj,70*xAdj,50*yAdj);
               if(j===0 || j===2) {
                  fill(SecondColor);
               }
               else if(j===1 || j===3) {
                  fill(FirstColor);
               }
               else {
                  fill(ThirdColor);
               }
                  if (j!=4 && j<NumberOfPlayers) {
                     text(TotalStrokes[i+j*3],205*xAdj+i*280*xAdj,285*yAdj+j*50*yAdj);
               }
               if (j<NumberOfPlayers || j===4) {
                  text(TotalPoints[i+j*3],275*xAdj+i*280*xAdj,285*yAdj+j*50*yAdj);
                  text(ReqPts[i+j*3],345*xAdj+i*280*xAdj,285*yAdj+j*50*yAdj);
                  text(TotalPoints[i+j*3]-ReqPts[i+j*3],415*xAdj+i*280*xAdj,285*yAdj+j*50*yAdj);
               }
            }
         }
      };

//       Store Current Data for Recovery if App is Restarted

      storeIt = function() {
         window.localStorage.setItem('PD',JSON.stringify(new Date())); 
         window.localStorage.setItem('PHS',JSON.stringify(PlayerHoleStrokes));
         window.localStorage.setItem('pName',JSON.stringify(PlayerName));
         window.localStorage.setItem('RqPt',JSON.stringify(ReqPts));
         window.localStorage.setItem('PCH',JSON.stringify(PlayerCourseHandicap));
         window.localStorage.setItem('NumP',JSON.stringify(NumberOfPlayers));
         window.localStorage.setItem('F',JSON.stringify(Front));
         window.localStorage.setItem('B',JSON.stringify(Back));
         window.localStorage.setItem('HN',JSON.stringify(HoleNum)); 
      }

//       Calculate Player & Team Hole Scores

      calcScores = function() {
         if(NumberOfPlayers>0) {
            for (var i=0; i<90; i++) {
               PlayerHoleScore[i]=0;
            }
            for (var i = 0; i < NumberOfPlayers; i++) {
               for (var j = 0; j < 18; j++) {
                  if(PlayerHoleStrokes[i*18+j]>0) {
                     if(j<9) {
                        PlayerHoleScore[i*18+j]=PointValue[PlayerHoleStrokes[i*18+j]-HolePar[Front*9+j]+4];
                     }
                     else {
                        PlayerHoleScore[i*18+j]=PointValue[PlayerHoleStrokes[i*18+j]-HolePar[Back*9+j-9]+4];   
                     }      
                     PlayerHoleScore[4*18+j]=PlayerHoleScore[4*18+j]+PlayerHoleScore[i*18+j];
                  }
               }
            }
         }
      }

//       Calculate Closest Hole Information

      GreenDist = function() {

         for(i=0; i<18; i++) {
            if(i<9) {
               LatF = GreenLatF[Front*9+i];
               LongF = GreenLongF[Front*9+i];
               LatC = GreenLatC[Front*9+i];
               LongC = GreenLongC[Front*9+i];
               LatB = GreenLatB[Front*9+i];
               LongB = GreenLongB[Front*9+i];
            }
            else {
               LatF = GreenLatF[Back*9+i-9];
               LongF = GreenLongF[Back*9+i-9];
               LatC = GreenLatC[Back*9+i-9];
               LongC = GreenLongC[Back*9+i-9];
               LatB = GreenLatB[Back*9+i-9];
               LongB = GreenLongB[Back*9+i-9];
            }
            Lat = LatF;
            Long = LongF;
            distance();
            GreenDistanceF[i]=dist;
            Lat = LatC;
            Long = LongC;
            distance();
            GreenDistanceC[i]=dist;
            Lat = LatB;
            Long = LongB;
            distance();
            GreenDistanceB[i]=dist;
         }
         dist = 1000000000;
         for(i=0; i<18; i++) {
            if(GreenDistanceC[i]<dist) {
               closestHole=i+1;
               dist=GreenDistanceC[i];
            }
         }
      }

//      Green distance calculations

     function distance() {
         if ((Lat === myLat) && (Long === myLong)) {
             dist=0
             return dist;
         }
         else {
             var radlat1 = Math.PI * Lat/180;
             var radlat2 = Math.PI * myLat/180;
             var theta = Long-myLong;
             var radtheta = Math.PI * theta/180;
             dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
             if (dist > 1) {
                 dist = 1;
             }
             dist = Math.acos(dist);
             dist = dist * 180/Math.PI;
             dist = dist * 60 * 1.1515 * 5280 / 3;
             return dist;
         }
     }

//       Prepare Player and Team Hole Scores and Points      

      var DoCalculations = function() {
         for (var i=0; i<15; i++) {
            TotalPoints[i] = 0;
            TotalStrokes[i] = 0;
         }
         for (var i=0; i<4; i++) {
            for (var j=1; j<19; j++) {
               if (j<10) {
                  TotalStrokes[i*3] = TotalStrokes[i*3] + PlayerHoleStrokes[i*18+j-1];
                  TotalPoints[i*3] = TotalPoints[i*3] + PlayerHoleScore[i*18+j-1];
               }
               else {
                  TotalStrokes[i*3+1] = TotalStrokes[i*3+1] + PlayerHoleStrokes[i*18+j-1];
                  TotalPoints[i*3+1] = TotalPoints[i*3+1] + PlayerHoleScore[i*18+j-1];
               }
            }
            TotalStrokes[i*3+2] = TotalStrokes[i*3] + TotalStrokes[i*3+1];
            TotalPoints[i*3+2] = TotalPoints[i*3] + TotalPoints[i*3+1];
         }

         for (var i=0; i<4; i++) {
            TotalPoints[12] = TotalPoints[12] + TotalPoints[i*3];
            TotalPoints[13] = TotalPoints[13] + TotalPoints[i*3+1];
            TotalPoints[14] = TotalPoints[14] + TotalPoints[i*3+2];
         }
         for (var i=0; i<9; i++) {
            TotalStrokes[12] = TotalStrokes[12] + HolePar[Front*9+i];
            TotalStrokes[13] = TotalStrokes[13] + HolePar[Back*9+i];
         }
         TotalStrokes[14] = TotalStrokes[12] + TotalStrokes[13];
      };

//       Clear Local Storage
//       This routine clears ONLY the data associated with this appplication

      clearLocalData = function() {
         
         window.localStorage.removeItem('PD'); 
         window.localStorage.removeItem('PHS');
         window.localStorage.removeItem('pName');
         window.localStorage.removeItem('RqPt');
         window.localStorage.removeItem('PCH');
         window.localStorage.removeItem('NumP');
         window.localStorage.removeItem('F');
         window.localStorage.removeItem('B');
         window.localStorage.removeItem('HN');

      }

//       User Mouse Click Processing Section 

      mouseClicked = function() {
         background(BackColor);

         // Choose Setup Page
         if(mouseX>=0*xAdj && mouseX<=200*xAdj && mouseY>=850*yAdj && mouseY<=950*yAdj) {
            CourseSet=0;
            AceScreen=1;
            clearInterval();
         }
         // Choose Strokes Page
         if(mouseX>=200*xAdj && mouseX<=400*xAdj && mouseY>=850*yAdj && mouseY<=950*yAdj) {
            AceScreen=2;
            blinker = 0;
         }
         // Choose Score Card Page          
         if(mouseX>=400*xAdj && mouseX<=600*xAdj && mouseY>=850*yAdj && mouseY<=950*yAdj) {
            AceScreen=3;
            clearInterval();
         } 
         // Choose Result Page           
         if(mouseX>=600*xAdj && mouseX<=800*xAdj && mouseY>=850*yAdj && mouseY<=950*yAdj) {
            AceScreen=4;
            clearInterval();
         }                        

         // Recall Previous Data
         if(AceScreen===0) {
            if(mouseX>=50*xAdj && mouseX<=375*xAdj && mouseY>=200*yAdj && mouseY<=300*yAdj) {
               var F1=JSON.parse(window.localStorage.getItem('F'));
               Front = Number(F1);
               var B1=JSON.parse(window.localStorage.getItem('B'));
               Back = Number(B1);
               var HN1=JSON.parse(window.localStorage.getItem('HN'));
               HoleNum = Number(HN1);
               var NoP=JSON.parse(window.localStorage.getItem('NumP'));
               NumberOfPlayers=Number(NoP);
               var PN1=JSON.parse(window.localStorage.getItem('pName'));
               var PCH1=JSON.parse(window.localStorage.getItem('PCH'));
               var RqPt1=JSON.parse(window.localStorage.getItem('RqPt'));
               var PHS1 =JSON.parse(window.localStorage.getItem('PHS'));
               for (i=0; i<72; i++) {
                  PlayerHoleStrokes[i]=Number(PHS1[i]);
                  if(i<4) {
                     PlayerCourseHandicap[i]=Number(PCH1[i]);
                  }
                  if(i<5) {
                     PlayerName[i]=PN1[i];
                  }
                  if(i<15) {
                     ReqPts[i]=Number(RqPt1[i]);
                  }
               }
               calcScores();                  
               AceScreen=1;
//               trackLocation();
               draw()

            }
            // Clear Previous Data
            if(mouseX>=425*xAdj && mouseX<=750*xAdj && mouseY>=200*yAdj && mouseY<=300*yAdj) {
               clearLocalData();
               AceScreen=1;
//               trackLocation()
               draw()
            }
            return;
         }
         if(AceScreen===1 && CourseSet===0) {
            for (i=0; i<3; i++) {
               // Select FRONT & BACK Courses
               SameCourse=1;
               if(mouseX>=100*xAdj+200*i*xAdj && mouseX<=300*xAdj+200*i*xAdj && mouseY>=70*yAdj && mouseY<=140*yAdj) {
                  Front=i;
               }
               if(mouseX>=100*xAdj+200*i*xAdj && mouseX<=300*xAdj+200*i*xAdj && mouseY>=200*yAdj && mouseY<=270*yAdj) {
                  Back=i;
               }

            }
            // Continue to Player Data
            if(mouseX>=300*xAdj && mouseX<=500*xAdj && mouseY>=300*yAdj && mouseY<=370*yAdj) {
               if(Front>=0 && Front<=2 && Back>=0 && Back<=2 && Front!=Back) {
                  CourseSet=1;
                  Restart = 0;
                  storeIt();
               }
               else {
                  SameCourse=0;
               }
            }

            calcScores();


//             Restart - New Game               
            if(mouseX>=100*xAdj && mouseX<=700*xAdj && mouseY>=600*yAdj && mouseY<=670*yAdj && AreYouSure===1) {
               AreYouSure = 0;
            }
            if(mouseX>=100*xAdj && mouseX<=700*xAdj && mouseY>=500*yAdj && mouseY<=570*yAdj) {
               if(AreYouSure===0) {
                  AreYouSure = 1;
               }
               else {
                  clearLocalData();
//                  window.localStorage.clear();
                  Front=3;
                  Back=3;
                  NumberOfPlayers=0;
                  HoleNum=1;
                  for(i=0; i<72; i++) {
                     PlayerHoleStrokes[i]=0;
                     if(i<4) {
                        PlayerName[i]="";
                        if(i===4) {
                           PlayerName[i]="Team";
                        }
                     }
                     if(i<3) {
                        PlayerCourseHandicap[i]=0;
                     }
                     if(i<15) {
                        ReqPts[i]=0;
                     }
                  }
                  for (var i=0; i<90; i++) {
                     PlayerHoleScore[i]=0;
                  } 
                  AreYouSure = 0;                 
               }
            }
            return;
         }
         if(AceScreen===1 && CourseSet===1) {
            for (i=0; i<4; i++) {
               if(mouseX>=200*xAdj+i*100*xAdj && mouseX<=300*xAdj+i*100*xAdj && mouseY>=200*yAdj && mouseY<=300*yAdj) {
                  background(BackColor);
                  NumberOfPlayers=i+1;
                  CourseSet=2;
                  PlayerCount=0;
                  NameCount=0;
                  HCPCount=0;
                  storeIt();
                  return;
               }
            }
         }

         if(AceScreen===1 && CourseSet===2) {

            if(NameAndIndex!=0) {
               if(mouseX>=325*xAdj && mouseX<=475*xAdj && mouseY>=100*yAdj && mouseY<=150*yAdj) {
                  AName=prompt("Player Name");
                  console.log("AName: ",AName);
               }
               if(mouseX>=350*xAdj && mouseX<=450*xAdj && mouseY>=200*yAdj && mouseY<=250*yAdj) {
                  AIndex=+(prompt("Handicap Index"));
               }
               if(mouseX>=200*xAdj && mouseX<=300*xAdj && mouseY>=300*yAdj && mouseY<=350*yAdj) {
                  ATee = 0;
               }
               if(mouseX>=350*xAdj && mouseX<=450*xAdj && mouseY>=300*yAdj && mouseY<=350*yAdj) {
                  ATee = 1;
               }
               if(mouseX>=500*xAdj && mouseX<=600*xAdj && mouseY>=300*yAdj && mouseY<=350*yAdj) {
                  ATee = 2;
               }
//             DELETE NAME
               if(mouseX>=50*xAdj && mouseX<=250*xAdj && mouseY>=400*yAdj && mouseY<=450*yAdj) {
                  NameAndIndex = 0;
                  for (i=SelectedName; i<NumberOfNames; i++) {
                     AceName[i] = AceName[i+1];
                     AceIndex[i] = AceIndex[i+1];
                     AceTee[i] = AceTee[i+1];
                  }
                  AceName[NumberOfNames] = "";
                  NumberOfNames = NumberOfNames - 1;
                  SaveNames();
               }
//             SAVE PLAYER
               if(mouseX>=300*xAdj && mouseX<=500*xAdj && mouseY>=400*yAdj && mouseY<=450*yAdj) {
                  AceName[SelectedName] = AName;
                  AceIndex[SelectedName] = AIndex;
                  AceTee[SelectedName] = ATee;
                  if(NameAndIndex===1) {
                     NumberOfNames++;
                     AceName[NumberOfNames] = "Add Name";
                  }
                  NameAndIndex = 0;
                  SortPlayers();
                  SaveNames();
                  console.log("AceName[SelectedName],AName",AceName[SelectedName],AName);
                  for(i=0; i<NumberOfNames; i++) {
                     if(AName===AceName[i]) {
                        SelectedName = i;
                     }
                  }

               }
//             USE PLAYER
               if(mouseX>=550*xAdj && mouseX<=750*xAdj && mouseY>=400*yAdj && mouseY<=450*yAdj) {
                  AceName[SelectedName] = AName;
                  AceIndex[SelectedName] = AIndex;
                  AceTee[SelectedName] = ATee;
                  if(NameAndIndex===1) {
                     NumberOfNames++;
                     AceName[NumberOfNames] = "Add Name";
                  }
                  NameAndIndex = 3;
                  SortPlayers();
                  SaveNames();
                  console.log("AceName[SelectedName],AName",AceName[SelectedName],AName);
                  for(i=0; i<NumberOfNames; i++) {
                     if(AName===AceName[i]) {
                        SelectedName = i;
                     }
                     console.log("AceName[i],AName,i,SelectedName: ",AceName[i],AName,i,SelectedName);
                  }
               }
               return;
            }

            for (j=0; j<3; j++) {
               for (i=0; i<15; i++) {
                  if(NumberOfNames>=j*15+i) {
                     if(mouseX>=(50+j*250)*xAdj && mouseX<=(250+j*250)*xAdj && mouseY>=(50+i*50)*yAdj && mouseY<=(100+i*50)*yAdj) {
                        SelectedName = i+j*3;
                        console.log("SelectedName", SelectedName);
                        console.log("NumberOfNames", NumberOfNames);
                        if(NumberOfNames===SelectedName) {
                           NameAndIndex = 1;
                        } else {
                           NameAndIndex = 2;
                        }
                        AName = AceName[SelectedName];
                        AIndex = AceIndex[SelectedName];
                        ATee = AceTee[SelectedName]
                        console.log("NameAndIndex",NameAndIndex);
                        return;
                     }
                  }
               }
            }
            if(mouseX>=300*xAdj && mouseX<=500*xAdj && mouseY>=800*yAdj && mouseY<=850*yAdj) {
               NameAndIndex = 0;
               CourseSet = 1;
            }

/*            for (i=0; i<10; i++) {
               for (j=0; j<4; j++) {
                  if(mouseX>=0*xAdj+80*i*xAdj && mouseX<=80*xAdj+80*i*xAdj && mouseY>=200*yAdj+j*80*yAdj && mouseY<=280*yAdj+j*80*yAdj) {
                     PlayerCourseHandicap[PlayerCount]=i+j*10;

                     temp=floor((36-PlayerCourseHandicap[PlayerCount])/2);
                     temp2=36-(temp*2);
                     if (temp2===PlayerCourseHandicap[PlayerCount]) {
                        ReqPts[PlayerCount*3]=temp;
                        ReqPts[PlayerCount*3+1]=temp;
                     }
                     else {
                        if (Front>Back) {
                           ReqPts[PlayerCount*3]=temp;
                           ReqPts[PlayerCount*3+1]=temp+1;
                        }
                        else {
                           ReqPts[PlayerCount*3]=temp+1;
                           ReqPts[PlayerCount*3+1]=temp;
                        }
                     }
                        ReqPts[PlayerCount*3+2] = ReqPts[PlayerCount*3] + ReqPts[PlayerCount*3+1];
                        ReqPts[12] = ReqPts[12] + ReqPts[PlayerCount*3];
                        ReqPts[13] = ReqPts[13] + ReqPts[PlayerCount*3+1];
                        ReqPts[14] = ReqPts[14] + ReqPts[PlayerCount*3+2];

                     PlayerCount=PlayerCount+1;
                     HCPCount=HCPCount+1
                     storeIt();
                     return;
                  }
               }
            }
*/
         }

         if(AceScreen===1 && CourseSet===3) {
               if(mouseX>=300*xAdj && mouseX<=500*xAdj && mouseY>=600*yAdj && mouseY<=670*yAdj) {
                  AceScreen=2
                  storeIt();
                  return;
               }
            
         }
         // Enter Hole Strokes and Calculate Player Hole Scores
         if(AceScreen===2) {

            if(mouseX>=10*xAdj && mouseX<=180*xAdj && mouseY>=10*yAdj && mouseY<=90*yAdj) {
               if (GPSswitch === 0) {
                  GPSswitch = 1;
                  trackLocation();
               } else {
                  GPSswitch = 0;
               }
               return;
            }

            if(mouseX>=620*xAdj && mouseX<=790*xAdj && mouseY>=10*yAdj && mouseY<=90*yAdj) {
               if (Trackswitch === 0) {
                  Trackswitch = 1;
                  GPSswitch = 1
                  trackLocation();
                  TrackStartLat = myLat;
                  TrackStartLong = myLong;
               } else {
                  Trackswitch = 0;
               }
               return;
            }

            for (var i = 0; i < NumberOfPlayers; i++) {
               for (var j = 0; j < 8; j++) {
                  if(mouseX>=220*xAdj+70*j*xAdj && mouseX<=290*xAdj+70*j*xAdj && mouseY>=200*yAdj+i*80*yAdj && mouseY<=280*yAdj+i*80*yAdj) {
                     PlayerHoleStrokes[i*18+HoleNum-1]=j+1;
                  }
               }
            }
            //Calculate Team Hole Score and Save Data 
            calcScores();
            window.localStorage.setItem('PHS',JSON.stringify(PlayerHoleStrokes));
            window.localStorage.setItem('HN',JSON.stringify(HoleNum));               

            // Back up to Previous Hole
            if(mouseX>=50*xAdj && mouseX<=250*xAdj && mouseY>=550*yAdj && mouseY<=630*yAdj) { 
               if(HoleNum>1) {
                     HoleNum=HoleNum-1;
                     blinker = 0;
               }
            }

            // Proceed to Next Hole
            if(mouseX>=550*xAdj && mouseX<=750*xAdj && mouseY>=550*yAdj && mouseY<=630*yAdj) {
               if(HoleNum<18) {
                  HoleNum=HoleNum+1;
                  blinker = 0;
               }
            }
            if(mouseX>=50*xAdj && mouseX<=700*xAdj && mouseY>=650*yAdj && mouseY<=730*yAdj) {
               HoleNum=closestHole;
            }                
            draw();
         }            


      };


     // AceScreen Value:
     // 1 = Setup Round with up to 4 Players and Select Front & Back Courses
     // 2 = Add Scores for up to 4 Players for 18 Holes
     // 3 = Display Scorecard for up to 4 Players with Team Points per Hole
     // 4 = Display Results Strokes by Player & Team (Front / Back / Total)


//       ROUND SETUP INITIAL VARIABLES
      var CourseSet = 0;
      var Front = 3;
      var Back = 3;
      var AceScreen = 0;
      var NumberOfPlayers = 0;
      var NoP="0";
      var Restart = 0;

//       SCORE INPUT INITIAL VARIABLES
      var HoleNum = 1;

      draw = function() {

         if (LocalNameData === 0) {
            if(window.localStorage.getItem('AN')!=null) {
               var AN1=JSON.parse(window.localStorage.getItem('AN'));
               var AI1=JSON.parse(window.localStorage.getItem('AI'));
               var AT1=JSON.parse(window.localStorage.getItem('AT'));
               for (i=0; i<46; i++) {
                  AceName[i]=AN1[i];
                  AceIndex[i]=Number(AI1[i]);
                  AceTee[i]=Number(AT1[i]);
               }
            }
            LocalNameData = 1;
            for(i=0; i<46; i++) {
               if(AceName[i] === "Add Name") {
                  NumberOfNames = i;
               }
            }
         }

         if (AceScreen===0) {

            localData();            
         }

         if (AceScreen===1) {
            
            enterSetup();  
         }
         
         if (AceScreen===2) {

            enterStrokes ();

         }
         
         if (AceScreen===3) {

            showScoreCard();
         }
         
         if (AceScreen===4) {

            showSummary();


         }











     };
 }
 };
 // Get the canvas that Processing-js will use
 var canvas = document.getElementById("mycanvas"); 
 // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
 var processingInstance = new Processing(canvas, ACE); 
