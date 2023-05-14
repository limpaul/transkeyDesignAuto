var b64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var b64pad="=";

function hex2b64(h) {
  var i;
  var c;
  var ret = "";
  for(i = 0; i+3 <= h.length; i+=3) {
    c = parseInt(h.substring(i,i+3),16);
    ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
  }
  if(i+1 == h.length) {
    c = parseInt(h.substring(i,i+1),16);
    ret += b64map.charAt(c << 2);
  }
  else if(i+2 == h.length) {
    c = parseInt(h.substring(i,i+2),16);
    ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
  }
  while((ret.length & 3) > 0) ret += b64pad;
  return ret;
}

// convert a base64 string to hex
function b64tohex(s) {
  var ret = "";
  var i;
  var k = 0; // b64 state, 0-3
  var slop=0;
  for(i = 0; i < s.length; ++i) {
    if(s.charAt(i) == b64pad) break;
    v = b64map.indexOf(s.charAt(i));
    if(v < 0) continue;
    if(k == 0) {
      ret += tk_int2char(v >> 2);
      slop = v & 3;
      k = 1;
    }
    else if(k == 1) {
      ret += tk_int2char((slop << 2) | (v >> 4));
      slop = v & 0xf;
      k = 2;
    }
    else if(k == 2) {
      ret += tk_int2char(slop);
      ret += tk_int2char(v >> 2);
      slop = v & 3;
      k = 3;
    }
    else {
      ret += tk_int2char((slop << 2) | (v >> 4));
      ret += tk_int2char(v & 0xf);
      k = 0;
    }
  }
  if(k == 1)
    ret += tk_int2char(slop << 2);
  return ret;
}

// convert a base64 string to a byte/number array
function b64toBA(s) {
  //piggyback on b64tohex for now, optimize later
  var h = b64tohex(s);
  var i;
  var a = new Array();
  for(i = 0; 2*i < h.length; ++i) {
    a[i] = parseInt(h.substring(2*i,2*i+2),16);
  }
  return a;
}

function char2Base64(s)
{
	 var  characters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" ;
     var result     = '';

     var i = 0;
     do {
         var a = s[i++];
         var b = s[i++];
         var c = s[i++];

         a = a ? a : 0;
         b = b ? b : 0;
         c = c ? c : 0;

         var b1 = ( a >> 2 ) & 0x3F;
         var b2 = ( ( a & 0x3 ) << 4 ) | ( ( b >> 4 ) & 0xF );
         var b3 = ( ( b & 0xF ) << 2 ) | ( ( c >> 6 ) & 0x3 );
         var b4 = c & 0x3F;

         if( ! b ) {
             b3 = b4 = 64;
         } else if( ! c ) {
             b4 = 64;
         }

         result += characters.charAt( b1 ) + characters.charAt( b2 ) + characters.charAt( b3 ) +characters.charAt( b4 );

     } while ( i < s.length );

     return result;
}

function decode64(input) {
	   var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	   var output = "";
	   var chr1, chr2, chr3;
	   var enc1, enc2, enc3, enc4;
	   var i = 0;
	   // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
	   input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	   do {
	      enc1 = keyStr.indexOf(input.charAt(i++));
	      enc2 = keyStr.indexOf(input.charAt(i++));
	      enc3 = keyStr.indexOf(input.charAt(i++));
	      enc4 = keyStr.indexOf(input.charAt(i++));
	      chr1 = (enc1 << 2) | (enc2 >> 4);
	      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
	      chr3 = ((enc3 & 3) << 6) | enc4;
	      output = output + String.fromCharCode(chr1);
	      if (enc3 != 64) {
	         output = output + String.fromCharCode(chr2);
	      }
	      if (enc4 != 64) {
	         output = output + String.fromCharCode(chr3);
	      }
	   } while (i < input.length);
	   return output;
	}