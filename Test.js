var Testing = function(processingInstance) {
    with (processingInstance) {
        var canvasSize = 800;
        size(canvasSize,canvasSize); 
        frameRate(30);
        
        // ProgramCodeGoesHere

         var FirstColor = color(0, 0, 0);
         var SecondColor = color(135,10,10);
         var ThirdColor = color(70,50,168);
         var BoxColor = color(255,255,255);
         var SelectBoxColor = color(0,255,200);
         var BackColor = color(180,200,240);
         stroke(FirstColor);
         strokeWeight(2);

         var Lat = 0;
         var Long = 0;
         var Lat1 = 0;
         var Long1 = 0;        
         var Lat2 = 0;
         var Long2 = 0;
         var dist=0;
         var startTrack=0;        

        var getLocation = function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(savePosition1,displayError,{enableHighAccuracy: true});
            } else { 
                console.log("Geolocation is not supported by this browser.");
            }
        }
        var trackLocation = function() {
            if (navigator.geolocation) {
                startTrack++;
                navigator.geolocation.getCurrentPosition(savePosition2,displayError,{enableHighAccuracy: true});
                console.log("Lat2, Long2:",Lat2.toFixed(3),Long2.toFixed(3));
                distance();
            } else { 
                console.log("Geolocation is not supported by this browser.");
            }
        }
        function savePosition1(position) {
            console.log("Made it to savePosition1");
            Lat1 = position.coords.latitude;
            Long1 = position.coords.longitude;           
        }
        function savePosition2(position) {
            console.log("Made it to savePosition2");
            Lat2 = position.coords.latitude;
            Long2 = position.coords.longitude;           
        }
        function displayError(){
            
        }


//        function distance(Lat1, Long1, Lat2, Long2) {
        function distance() {
            console.log("Made it to distance",Lat1,Long1,Lat2,Long2);
            if ((Lat1 == Lat2) && (Long1 == Long2)) {
                dist=0
                return dist;
            }
            else {
                var radlat1 = Math.PI * Lat1/180;
                var radlat2 = Math.PI * Lat2/180;
                var theta = Long1-Long2;
                var radtheta = Math.PI * theta/180;
                dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                if (dist > 1) {
                    dist = 1;
                }
                dist = Math.acos(dist);
                dist = dist * 180/Math.PI;
                dist = dist * 60 * 1.1515 * 5280 / 3;
                return dist;
                console.log("Lat1,Long1,Lat2,Long2,dist=",Lat1.toFixed(3),Long1.toFixed(3),Lat2.toFixed(3),Long2.toFixed(3),dist);
            }
        }


        mouseClicked = function() {

            if(mouseX>=50 && mouseX<=350 && mouseY>=200 && mouseY<=300) {
                getLocation()
                setInterval(trackLocation,30000);
                startTrack=0;
            }            
        }


        var Count=0;
        draw = function() {
        background(BackColor);

            fill(FirstColor);
            textSize(30);
            text(width+", "+height,150,25);
            text("inner: "+window.innerWidth+", "+window.innerHeight,300,65);
            text("avail: "+window.screen.availWidth+", "+window.screen.availHeight,300,105);
            text("screen: "+window.screen.width+", "+window.screen.height,300,145);
            text("outer: "+window.outerWidth+", "+window.outerHeight,300,185);

            fill(BoxColor);
            
            rect(50,200,300,100);
            fill(BackColor);
            rect(450,200,300,100);

            textSize(40);
            textAlign(CENTER);
            fill(FirstColor);

            text("Interval: "+startTrack,600,100);
            text("Set Point",200,270);
            text("Current",600,270);

            text("Lat  ="+Lat1.toFixed(3),200,350);
            text("Long ="+Long1.toFixed(3),200,400);
            text("Lat  ="+Lat2.toFixed(3),600,350);
            text("Long ="+Long2.toFixed(3),600,400);
            text(dist.toFixed(0)+" Yards",400,450);
            text((dist*3).toFixed(0)+" Feet",400,500);
            console.log(dist.toFixed(0),Lat.toFixed(3),Long.toFixed(3),Lat1.toFixed(3),Long1.toFixed(3),Lat2.toFixed(3),Long2.toFixed(3));

        }




}
};

    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processingInstance = new Processing(canvas, Testing); 