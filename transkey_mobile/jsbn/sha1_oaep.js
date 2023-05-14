/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  SHA-1 implementation in JavaScript (c) Chris Veness 2002-2009                                 */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

function sha1Hash(msg)
{
    // constants [�4.2.1]
    var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];


    // PREPROCESSING 
 
    msg += String.fromCharCode(0x80); // add trailing '1' bit (+ 0's padding) to string [�5.1.1]

    // convert string msg into 512-bit/16-integer blocks arrays of ints [�5.2.1]
    var l = msg.length/4 + 2;  // length (in 32-bit integers) of msg + �1� + appended length
    var N = Math.ceil(l/16);   // number of 16-integer-blocks required to hold 'l' ints
    var M = new Array(N);
    for (var i=0; i<N; i++) {
        M[i] = new Array(16);
        for (var j=0; j<16; j++) {  // encode 4 chars per integer, big-endian encoding
            M[i][j] = (msg.charCodeAt(i*64+j*4)<<24) | (msg.charCodeAt(i*64+j*4+1)<<16) | 
                      (msg.charCodeAt(i*64+j*4+2)<<8) | (msg.charCodeAt(i*64+j*4+3));
        }
    }
    // add length (in bits) into final pair of 32-bit integers (big-endian) [5.1.1]
    // note: most significant word would be (len-1)*8 >>> 32, but since JS converts
    // bitwise-op args to 32 bits, we need to simulate this by arithmetic operators
    M[N-1][14] = ((msg.length-1)*8) / Math.pow(2, 32); M[N-1][14] = Math.floor(M[N-1][14]);
    M[N-1][15] = ((msg.length-1)*8) & 0xffffffff;

    // set initial hash value [�5.3.1]
    var H0 = 0x67452301;
    var H1 = 0xefcdab89;
    var H2 = 0x98badcfe;
    var H3 = 0x10325476;
    var H4 = 0xc3d2e1f0;

    // HASH COMPUTATION [�6.1.2]

    var W = new Array(80); var a, b, c, d, e;
    for (var i=0; i<N; i++) {

        // 1 - prepare message schedule 'W'
        for (var t=0;  t<16; t++) W[t] = M[i][t];
        for (var t=16; t<80; t++) W[t] = ROTL(W[t-3] ^ W[t-8] ^ W[t-14] ^ W[t-16], 1);

        // 2 - initialise five working variables a, b, c, d, e with previous hash value
        a = H0; b = H1; c = H2; d = H3; e = H4;

        // 3 - main loop
        for (var t=0; t<80; t++) {
            var s = Math.floor(t/20); // seq for blocks of 'f' functions and 'K' constants
            var T = (ROTL(a,5) + tk_f_(s,b,c,d) + e + K[s] + W[t]) & 0xffffffff;
            e = d;
            d = c;
            c = ROTL(b, 30);
            b = a;
            a = T;
        }

        // 4 - compute the new intermediate hash value
        H0 = (H0+a) & 0xffffffff;  // note 'addition modulo 2^32'
        H1 = (H1+b) & 0xffffffff; 
        H2 = (H2+c) & 0xffffffff; 
        H3 = (H3+d) & 0xffffffff; 
        H4 = (H4+e) & 0xffffffff;
    }

    return H0.toHexStr() + H1.toHexStr() + H2.toHexStr() + H3.toHexStr() + H4.toHexStr();
}

//
// function 'f' [�4.1.1]
//
function tk_f_(s, x, y, z) 
{
    switch (s) {
    case 0: return (x & y) ^ (~x & z);           // Ch()
    case 1: return x ^ y ^ z;                    // Parity()
    case 2: return (x & y) ^ (x & z) ^ (y & z);  // Maj()
    case 3: return x ^ y ^ z;                    // Parity()
    }
}

//
// rotate left (circular left shift) value x by n positions [�3.2.5]
//
function ROTL(x, n)
{
    return (x<<n) | (x>>>(32-n));
}

//
// extend Number class with a tailored hex-string method 
//   (note toString(16) is implementation-dependant, and 
//   in IE returns signed numbers when used on full words)
//
Number.prototype.toHexStr = function()
{
    var s="", v;
    for (var i=7; i>=0; i--) { v = (this>>>(i*4)) & 0xf; s += v.toString(16); }
    return s;
};
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/*  /_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
	charset= shift_jis
	
    [RFC 3174] US Secure Hash Algorithm 1 (SHA1)
    ftp://ftp.isi.edu/in-notes/rfc3174.txt

    LastModified : 2006-11/14
    
    Written by kerry
    http://user1.matsumoto.ne.jp/~goma/

    ����u���E�U :: IE4+ , NN4.06+ , Gecko , Opera6
    
    ----------------------------------------------------------------
    
    Usage
    
    // �Ԃ�l�� 16�i���œ���
    sha1hash = sha1.hex( data );
	
	// �Ԃ�l���o�C�i���œ���
    sha1bin = sha1.bin( data );
    
    // �Ԃ�l��10�i���̔z��œ���
    sha1decs = sha1.dec( data );
    
    
	* data		-> �n�b�V���l�𓾂����f??
				data �̓A���p�b�N�ς݂̔z��ł���?

	// e.g.
	
	var data_1 = "abc";
	var hash_1 = sha1.hex( data_1 );
	var data_2 = sha1 Array(data_1.charCodeAt(0), data_1.charCodeAt(1), data_1.charCodeAt(2));
	var hash_2 = sha1.hex( data_2 );
	
	alert( hash_1 === hash_2 ); // true
	
/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/   */


sha1_oaep = new function()
{
	var blockLen = 64;
	var state = [ 0x67452301 , 0xefcdab89 , 0x98badcfe , 0x10325476 , 0xc3d2e1f0 ];
	var sttLen = state.length;
	
	this.hex = function(_data)
	{
		return toHex( getMD(_data) );
	};

	this.dec = function(_data)
	{
		return getMD(_data);
	};
	
	this.bin = function(_data)
	{
		return pack( getMD(_data) );
	};
	
	var getMD = function(_data)
	{
		var datz = [];
		if (isAry(_data)) datz = _data;
		else if (isStr(_data)) datz = unpack(_data);
		else "unknown type";
		datz = paddingData(datz);
		return round(datz);
	};
    
    var isAry = function(_ary)
	{
		return _ary && _ary.constructor === [].constructor;
	};
	var isStr = function(_str)
	{
		return typeof(_str) == typeof("string");
	};

    var rotl = function(_v, _s) { return (_v << _s) | (_v >>> (32 - _s)); };

	var round = function(_blk)
	{
		var stt = [];
		var tmpS= [];
		var i, j, tmp, x = [];
		for (j=0; j<sttLen; j++) stt[j] = state[j];
		
		for (i=0; i<_blk.length; i+=blockLen)
		{
			for (j=0; j<sttLen; j++) tmpS[j] = stt[j];
			x = toBigEndian32( _blk.slice(i, i+ blockLen) );
			for (j=16; j<80; j++)
            	x[j] = rotl(x[j-3] ^ x[j-8] ^ x[j-14] ^ x[j-16], 1);
		
	        for (j=0; j<80; j++)
	        {
	     		if (j<20) 
	                tmp = ((stt[1] & stt[2]) ^ (~stt[1] & stt[3])) + K[0];
	            else if (j<40)
	                tmp = (stt[1] ^ stt[2] ^ stt[3]) + K[1];
	            else if (j<60)
	                tmp = ((stt[1] & stt[2]) ^ (stt[1] & stt[3]) ^ (stt[2] & stt[3])) + K[2];
	            else
	                tmp = (stt[1] ^ stt[2] ^ stt[3]) + K[3];

	            tmp += rotl(stt[0], 5) + x[j] + stt[4];
	            stt[4] = stt[3];
	            stt[3] = stt[2];
	            stt[2] = rotl(stt[1], 30);
	            stt[1] = stt[0];
	            stt[0] = tmp;
	        }
			for (j=0; j<sttLen; j++) stt[j] += tmpS[j];
		}

		return fromBigEndian32(stt);
	};

	var paddingData = function(_datz)
	{
		var datLen = _datz.length;
		var n = datLen;
		_datz[n++] = 0x80;
		while (n% blockLen != 56) _datz[n++] = 0;
		datLen *= 8;
		return _datz.concat(0, 0, 0, 0, fromBigEndian32([datLen]) );
	};

	var toHex = function(_decz)
	{
		var i, hex = "";

		for (i=0; i<_decz.length; i++)
			hex += (_decz[i]>0xf?"":"0")+ _decz[i].toString(16);
		return hex;
	};
	
	var fromBigEndian32 = function(_blk)
	{
		var tmp = [];
		for (n=i=0; i<_blk.length; i++)
		{
			tmp[n++] = (_blk[i] >>> 24) & 0xff;
			tmp[n++] = (_blk[i] >>> 16) & 0xff;
			tmp[n++] = (_blk[i] >>>  8) & 0xff;
			tmp[n++] = _blk[i] & 0xff;
		}
		return tmp;
	};
	
	var toBigEndian32 = function(_blk)
	{
		var tmp = [];
		var i, n;
		for (n=i=0; i<_blk.length; i+=4, n++)
			tmp[n] = (_blk[i]<<24) | (_blk[i+ 1]<<16) | (_blk[i+ 2]<<8) | _blk[i+ 3];
		return tmp;
	};
	
	var unpack = function(_dat)
	{
		var i, n, c, tmp = [];

	    for (n=i=0; i<_dat.length; i++) 
	    {
	    	c = _dat.charCodeAt(i);
			if (c <= 0xff) tmp[n++] = c;
			else {
				tmp[n++] = c >>> 8;
				tmp[n++] = c &  0xff;
			}	
	    }
	    return tmp;
	};

	var pack = function(_ary)
    {
        var i, tmp = "";
        for (i in _ary) tmp += String.fromCharCode(_ary[i]);
        return tmp;
    };

	var K = [ 0x5a827999 , 0x6ed9eba1 , 0x8f1bbcdc , 0xca62c1d6 ];

};


