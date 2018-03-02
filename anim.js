var ns = 'http://www.w3.org/2000/svg';
var cvs = document.getElementById( 'cvs' );
var grow = document.getElementById( 'growButt' );
var dvd = document.getElementById( 'dvdButt' );
var stop = document.getElementById( 'stopButt' );
var clear = document.getElementById( 'clearButt' );

var time;


var growIt = function() {    

    stopIt();
    
    var growing = true;
    var r = 0;

    var circle = function() {

	clearIt();
	
	if( r >= 250 ) {
	    growing = false;
	}
	
	if(growing) {
	    
	    var cl = document.createElementNS( ns, "circle" );
	    cl.setAttribute( 'cx', 250 );
	    cl.setAttribute( 'cy', 250 );
	    cl.setAttribute( 'r', r );
	    cl.setAttribute( 'fill', 'coral' );
	    cvs.appendChild(cl);
	    r++;
	    
	} else {
	    var cl = document.createElementNS( ns, "circle" );
	    cl.setAttribute( 'cx', 250 );
	    cl.setAttribute( 'cy', 250 );
	    cl.setAttribute( 'r', r );
	    cl.setAttribute( 'fill', 'coral' );
	    cvs.appendChild(cl);
	    r--;
	    if( r <= 0 ){
		growing = true;
	    }
	}
    }
    time = setInterval(circle, 10);
}

var dvdIt = function() {

    stopIt();

    var currX = 250;
    var currY = 250;
    
    var angle = Math.PI / 6;
    
    var dX = Math.cos(angle) * 8;
    var dY = Math.sin(angle) * 8;

    var bouncing = function() {
		
	clearIt();
	
	var rec = document.createElementNS( ns, "rect" );
	rec.setAttribute( 'x', currX );
	rec.setAttribute( 'y', currY );
	rec.setAttribute( 'width', 100 );
	rec.setAttribute( 'height', 50 );
	rec.setAttribute( 'fill', 'coral' );
	cvs.appendChild(rec);
	
	if( currX <= 0 || currX >= 400 ) {
	    dX *= -1;
	}
	if( currY <= 0 || currY >= 450 ) {
	    dY *= -1;
	}
	currX += dX;
	currY += dY;

    }
    time = setInterval( bouncing, 1000/60 );	
}

var clearIt = function() {
    while( cvs.lastChild ) {
	cvs.removeChild( cvs.lastChild);
    }
}

var stopIt = function() {
    clearInterval(time);
}

grow.addEventListener( 'click', growIt );
dvd.addEventListener( 'click', dvdIt );
stop.addEventListener( 'click', stopIt );
clear.addEventListener( 'click', clearIt );
