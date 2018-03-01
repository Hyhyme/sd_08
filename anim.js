var ns = 'http://www.w3.org/2000/svg';
var cvs = document.getElementById( 'cvs' );
var grow = document.getElementById( 'growButt' );
var dvd = document.getElementById( 'dvdButt' );
var stop = document.getElementById( 'stopButt' );
var clear = document.getElementById( 'clearButt' );

var r = 0;

var circle = function( r ) {
    
    var cl = document.createElementNS( ns, "circle" );
    cl.setAttribute( 'cx', 250 );
    cl.setAttribute( 'cy', 250 );
    cl.setAttribute( 'r', r );
    cl.setAttribute( 'fill', 'coral' );
    cvs.appendChild(cl);
}

var growIt = function() {    
    
    while( r < 250 ) {
	time = setInterval( function(){ circle( r ) }, 100 ) ;
	r++;
	time++;
	console.log(time);
    }
    clearInterval(time);
    console.log(time);
}

var shrink = function() {
    
    time = setInterval( function(){ circle(r) }, 1000 );
    while( r > 0 ) {
	r--;
	console.log(r);
    }
    clearInterval(time);
}	

var clearIt = function() {
    while( cvs.lastChild ) {
	cvs.removeChild( cvs.lastChild);
    }
    start = false;
}

grow.addEventListener( 'click', growIt );

/*dvd.addEventListener( 'click', dvdIt );
stop.addEventListener( 'click', stopIt );
clear.addEventListener( 'click', clearIt );
*/
