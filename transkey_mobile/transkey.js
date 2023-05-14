/*
 * mTranskey
 * (C) 2013. RAONSECURE,Inc. All rights reserved.
 * Version 4.6.14.9
 * 2022-11-07
 */


//config
//setting
var transkey_url = '/transkey_mobile';
var transkey_surl ='http://192.168.219.110:8080/transkeyServlet';
var transkey_apiurl = 'http://127.0.0.1:8080/transkey/api/';
var transkey_encDelimiter = ",";
var transkey_delimiter = '$';
var keyboardLayouts = ["qwertyMobile", "numberMobile"];

//function config
var transkey_divType = 1;//0fixed //1flexible
var transkey_apiuse = false; //default : false | use : true | not use : false
var useCheckTranskey = true;
var useAsyncTranskey = false; //default :false
var mtk_useButton = true;
var mtk_useTranskey = true;
var useFakeKey = true;
var useNoDummy = false; //default : false
var clickDummy = true; //default : true
var onKeyboard_allocate = false; //default : false
var relocation = true; //default : false
var use_form_id = true;
var page_isDraggable = false; //default : false 
var useCSP = false; //default : fasle

//cors
var useCORS = true;
var tk_origin = "&tk_origin=0";

//ui
var tk_comments = "";
var widthRatio = 1; //default : 1 | range : 0.2 ~ 1
var max_width = 0; //unit : px | not use : 0 | range : 300 ~
var key_margin = 0; //unit : px | not use : 0
var usePressImg = false; //default : false
var useBalloon = false; // default : false
var showLicense = true; //true : show | false : not show
var tkAlert = {};
tkAlert.useDivAlert = false;	//default : false | use : true | not use : false
tkAlert.EngineVer = 93;	//chrome ver | default : 0
//SHA-256 Hash Value for check keyboard version
var setQwertyMobileHash = "6f37d7b161d83bbc4dad98be737315c51169cd3e4264b0bdfddfe534011dce39"; //qwertyMobileFX_space
var setNumberMobileHash = "34f2712e546619a2831be2e59fbd95a4e5a59ae85277b545c39332adc9240b20"; //numberMobileFX

//var setQwertyMobileHash = "bd61d1822484f8707f5d3564d8db199f2c07b1b1f0d5c4e897487245808802ca"; //qwertyMobileFX
//var setNumberMobileHash = "5915c8880160c9405210946821fd475211fd0a19366aafea618b8740864b1726"; //numberMobileFX_ND

//var setQwertyMobileHash = "271e590f0af979ec6886c96719568f2db099a05833e5909a93fdfc80e89167af"; //qwertyMobile
//var setNumberMobileHash = "ca8951fb22cd0cc5c021f3c4fa0c6df389170124f7af9bccbc07884c3c8f7d39"; //numberMobile
//config

//document.write('<script type="text/javascript" src="'+transkey_url+'/Random.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/BigInt.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/Barrett.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/genkey.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/RSA.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/seed.js"></script>');

document.write('<script type="text/javascript" src="'+transkey_url+'/TranskeyLibPack_op.js"></script>');

//document.write('<script type="text/javascript" src="'+transkey_url+'/rsa_oaep_files/sha1.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/rsa_oaep_files/aes-enc.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/rsa_oaep_files/hmac-sha1.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/rsa_oaep_files/js_hmac-sha1.js"></script>');

document.write('<script type="text/javascript" src="'+transkey_url+'/rsa_oaep_files/rsa_oaep-min.js"></script>');

//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/base64.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/ec.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/jsbn.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/jsbn2.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/prng4.js"></script>');
//
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/rsa.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/rsa2.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/sec.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/asn1hex-1.1.js"></script>');
//
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/sha256.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/sha512.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/ripemd160.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/rsapem.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/rsasign.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/x509.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/core-min.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/rng.js"></script>');

document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/jsbn-min.js"></script>');

document.write('<script type="text/javascript" src="'+transkey_url+'/typedarray.js"></script>');

if(transkey_apiuse){
	document.write('<script type="text/javascript" src="'+transkey_apiurl+'service/token?'+new Date().getTime()+tk_origin+'"></script>');
	document.write('<script type="text/javascript" src="'+transkey_apiurl+'service/inittime?'+tk_origin+'"></script>');
	document.write('<script type="text/javascript" src="'+transkey_apiurl+'service/getkeyboardhash?'+tk_origin+'"></script>');
}else{
	document.write('<script type="text/javascript" src="'+transkey_surl+'?op=getToken&'+new Date().getTime()+tk_origin+'"></script>');
	document.write('<script type="text/javascript" src="'+transkey_surl+'?op=getInitTime'+tk_origin+'"></script>');
	document.write('<script type="text/javascript" src="'+transkey_surl+'?op=getKeyboardHash'+tk_origin+'"></script>');
}

var transkey=[];

var mtk=null;

var tk_btn_arr=[];

var reset_count=0;

var patternCount = 0;

var moved;

function moveListener(event) {
    moved = true;
}

function downListener (nsEvent) {
    moved = false;
}
function upListener(event) {
    if (!moved)
    	checkTransKey(event);
}

function initmTranskey(){
	setMaxDigits(131);
	
	checkCookie();
	
	if(mtk!=null) {
		var inputs = document.getElementsByTagName("input");
		for(var i = 0; i < inputs.length; i++){
			var input = inputs.item(i);
			if(input.getAttribute("data-tk-kbdType")!=null&&transkey[input.id]!=null){
				mtk.remove(inputs.item(i));
			}
		}
		mtk=null;
	}
	
	if(mtk==null){
		transkey.objs= new Array();
		mtk = new mTranskey();		
		if(transkey_apiuse){
			mtk.getPublicKey(transkey_apiurl);
		}
		else{
			mtk.getPublicKey(transkey_surl);
		}
		mtk.getClientWidth();
		
		if(useCheckTranskey){
			if(page_isDraggable) {
				var clickEvent, moveEvent, releaseEvent;
				
				if(mtk.isiPhone||mtk.isiPad) {
					clickEvent = "touchstart";
					moveEvent = "touchmove";
					releaseEvent = "touchend";
				} else {
					clickEvent = "mousedown";
					moveEvent = "mousemove";
					releaseEvent = "mouseup";
				}
				
				if (document.addEventListener) {
					document.addEventListener(clickEvent, downListener, false);
					document.addEventListener(moveEvent, moveListener, false);
					document.addEventListener(releaseEvent, upListener, false);
				} else {
					document.attachEvent("on"+clickEvent, downListener);
					document.attachEvent("on"+moveEvent, moveListener);
					document.attachEvent("on"+releaseEvent, upListener);
				}
			} else {
				if(mtk.isiPhone||mtk.isiPad||mtk.isAndroid) {
					if (document.addEventListener) {
					    document.addEventListener("touchstart", checkTransKey, false);
					} else if (document.attachEvent) {
					    document.attachEvent("ontouchstart", checkTransKey);
					}
				} else {				
					if (document.addEventListener) {
					    document.addEventListener("mousedown", checkTransKey, false);
					} else if (document.attachEvent) {
					    document.attachEvent("onmousedown", checkTransKey);
					}
				}
			}
		}

		
		if(window.addEventListener){
			window.addEventListener("resize", mtk.reSizeListener, false);
		}else{
			window.attachEvent("onresize", mtk.reSizeListener);
		}
	}
}

function initCallback() {
	
}

if (typeof XMLHttpRequest == "undefined") {
	XMLHttpRequest = function() {
    	try { 
    		return new ActiveXObject("Msxml2.XMLHTTP.6.0"); 
		} catch(e) {
			console.log("[mTranskey Error] : Msxml2.XMLHTTP.6.0 init fail");
		};
		
    	try { 
    		return new ActiveXObject("Msxml2.XMLHTTP.3.0"); 
		} catch(e) {
			console.log("[mTranskey Error] : Msxml2.XMLHTTP.3.0 init fail");
		};
		
    	try { 
    		return new ActiveXObject("Msxml2.XMLHTTP"); 
		} catch(e) {
			console.log("[mTranskey Error] : Msxml2.XMLHTTP init fail");
		};
		
    	try { 
    		return new ActiveXObject("Microsoft.XMLHTTP"); 
		}  catch(e) {
			console.log("[mTranskey Error] : Microsoft.XMLHTTP init fail");
		};
 
    	throw new Error("This browser does not support XMLHttpRequest or XMLHTTP.");
	};
};

function mTranskeyObj(inputObj, width, div, keyType, keyboardType, dataType){
	this.ele=null;
	this.allocate=false;
	this.relocate=false;
	this.id=inputObj.id;
	this.keyboardType=keyboardType+"Mobile";
	this.width=width;
	this.height=0;
	this.div=div;
	this.numberDiv=div.children["mtk_"+this.id+"_number"];
	this.lowerDiv=div.children["mtk_"+this.id+"_lower"];
	this.upperDiv=div.children["mtk_"+this.id+"_upper"];
	this.specialDiv=div.children["mtk_"+this.id+"_special"];
	this.keyTypeIndex=""; // "l ","u ","s ",""
	this.useUpper=false;
	this.useLower=false;
	this.useCaps=false;
	this.useSpecial=false;
	this.keyType=keyType;
	this.cap=false;
	this.special=false;
	this.useTranskey=mtk_useTranskey;
	this.useButton=false;
	this.button=null;
	this.inputObj=inputObj;
	this.frmId="";
	if(use_form_id)
		this.frmId = "_"+inputObj.form.id;
	this.hidden=document.getElementById("transkey_"+inputObj.id+this.frmId);
	this.hmac=document.getElementById("transkey_HM_"+inputObj.id+this.frmId);
	this.ExE2E=document.getElementById("transkey_ExE2E_"+inputObj.id+this.frmId);
	this.exE2E=inputObj.getAttribute("data-tk-ExE2E")==null?"false":inputObj.getAttribute("data-tk-ExE2E");
	this.parentKeyboard=inputObj.getAttribute("data-tk-parentKbd")==null?"false":inputObj.getAttribute("data-tk-parentKbd");
	this.fieldType=inputObj.type;
	this.bgImgChecked=false;
	this.imgWidth="";
	this.talkBack=useTalkBack;
	this.dki=new Array();
	this.keyboard = inputObj.getAttribute("data-tk-keyboard");
	this.allocationIndex = new GenKey().tk_getrnd_int();
	this.onKeyboardCount = 0;
	this.nextFocus=null;
	this.useInput=false;
	this.useInputDiv=null;
	this.tk_Special_Mask_StartPos = inputObj.getAttribute("data-tk_hkStart_pos");
	this.tk_Special_Mask_EndPos = inputObj.getAttribute("data-tk_hkEnd_pos");
	this.tk_Special_Mask = inputObj.getAttribute("data-tk_hk_mask")==null?"*":inputObj.getAttribute("data-tk_hk_mask");
	this.tk_onKeyFlag = false; 
	if(inputObj.getAttribute("data-tk-nextFocusId")!=null)
		this.nextFocus = inputObj.getAttribute("data-tk-nextFocusId");
	if(this.keyboard==null)
		this.keyboard = this.keyboardType;
	if(!useSession) {
		this.keyIndex = document.getElementById("keyIndex_"+inputObj.id+this.frmId).value;
		document.getElementById("keyboardType_"+inputObj.id+this.frmId).value = this.keyboardType;
		document.getElementById("fieldType_"+inputObj.id+this.frmId).value = this.fieldType;
	}
	this.isdrawing = false;
	this.gridsize = false;
	this.buttons = [];
	this.lines = [];
	
	var self = this;
	
	this.initKeyType = function(){
		this.cap=false;
		this.special=false;
	};
	
	this.allocationCallback = function(){
		if (this.readyState == 4 && this.status == 200) {
			if(this.responseText.indexOf("SessionError")>-1){
				var errCodes = this.responseText.split("=");
				if(errCodes[1]=="1"){
					if(reset_count>2){
						return false;
					}
					mtk.tk_alert("SessionError");
					if(transkey_apiuse){
						mtk.resetToken(transkey_apiurl);
						mtk.resetSessionKey(transkey_apiurl);
					}else{
						mtk.resetToken(transkey_surl);
						mtk.resetSessionKey(transkey_surl);
					}
					if(!useSession&&limitTime>0)
						self.getInitTime();
					reset_count++;
					self.allocation();
				}
			}else{
				if(useSession) {
					if(useSession) {
						 self.setKeyType(self.keyType);
						 if(transkey_divType==0)
							 self.setUrl();
					 } else {
						 self.setKeyIndex(self.inputObj);
		 			}
				} else {
					self.setKeyIndex(inputObj);
				}
				reset_count = 0;
			}

		}
	};
	
	
	this.allocation = function(){
		
		if(onKeyboard_allocate||!self.allocate) {
			self.allocate=false;
			self.allocationIndex = new GenKey().tk_getrnd_int();
		}
		
		var request = new XMLHttpRequest();
		
		if(transkey_apiuse)
			request.open("GET", getUrlRestApi("service/allocation", this, this.keyType, this.allocationIndex)+"&talkBack="+this.talkBack+tk_origin, useAsyncTranskey);
		else
			request.open("POST", transkey_surl, useAsyncTranskey);
		
		if(useCORS)
			request.withCredentials = true; 
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		request.onreadystatechange = this.allocationCallback;
		try {
			if(transkey_apiuse){
				request.send();
			}else{
				request.send(getUrlPost("allocation", this, this.keyType, this.allocationIndex)+"&talkBack="+this.talkBack+tk_origin);
			}
		} catch(e) {
			tk_alert("[mTranskey Error] : Cannot load TransKey. Network is not available.");
			return false;
		}
	};
	
	this.setUrl = function(){
		
		var url = null;
		
		if(this.keyboardType=="patternMobile")
			return;
		
		if(transkey_divType==0){
			if(this.keyboardType=="numberMobile"){
				var numberImg = new Image();
				numberImg.onload = function(){
					self.allocate=true;
					self.tk_onKeyFlag = false;
					if(useTalkBack)
						self.getDummy();
				};
				numberImg.onerror = function(){
					self.tk_onKeyFlag = false;
					if(transkey_apiuse){
						mtk.resetToken(transkey_apiurl);
						mtk.resetSessionKey(transkey_apiurl);
					}else{
						mtk.resetToken(transkey_surl);
						mtk.resetSessionKey(transkey_surl);
					}
					if(!useSession&&limitTime>0)
						self.getInitTime();
//					self.allocation();
					if(useSession)
						self.setUrl();
					else
						self.setKeyIndex(self.inputObj);
				};
				if(transkey_apiuse){
					numberImg.src = getUrlRestApi("service/key", self, "single", self.allocationIndex)+"&talkBack="+self.talkBack+tk_origin;
				}
				else{
					numberImg.src = getUrl("getKey", self, "single", self.allocationIndex)+"&talkBack="+self.talkBack+tk_origin;
				}
				this.numberDiv.style.backgroundImage="url('"+checkTag(numberImg.src)+"')";
				this.numberDiv.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader( src='"+numberImg.src+"', sizingMethod='scale')";
			}else{
				var quertyImg = new Image();
				quertyImg.onload = function(){
					self.allocate=true;
					self.tk_onKeyFlag = false;
					if(transkey_apiuse){
						url = getUrlRestApi("service/key", self, "upper", self.allocationIndex)+"&talkBack="+self.talkBack+tk_origin;
					}
					else{
						url = getUrl("getKey", self, "upper", self.allocationIndex)+"&talkBack="+self.talkBack+tk_origin;
					}
					self.upperDiv.style.backgroundImage="url('"+checkTag(url)+"')";
					self.upperDiv.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader( src='"+url+"', sizingMethod='scale')";
					url = getUrl("getKey", self, "special", self.allocationIndex)+"&talkBack="+self.talkBack+tk_origin;	
					self.specialDiv.style.backgroundImage="url('"+checkTag(url)+"')";
					self.specialDiv.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader( src='"+url+"', sizingMethod='scale')";
					if(useTalkBack)
						self.getDummy();
				};
				quertyImg.onerror = function(){
					self.tk_onKeyFlag = false;
					if(transkey_apiuse){
						mtk.resetToken(transkey_apiurl);
						mtk.resetSessionKey(transkey_apiurl);
					}else{
						mtk.resetToken(transkey_surl);
						mtk.resetSessionKey(transkey_surl);
					}
					if(!useSession&&limitTime>0)
						self.getInitTime();
//					self.allocation();
					if(useSession)
						self.setUrl();
					else
						self.setKeyIndex(self.inputObj);
				};
				if(transkey_apiuse){
					quertyImg.src = getUrlRestApi("service/key", this, "lower", this.allocationIndex)+"&talkBack="+this.talkBack+tk_origin;	
				}
				else{
					quertyImg.src = getUrl("getKey", this, "lower", this.allocationIndex)+"&talkBack="+this.talkBack+tk_origin;	
				}
				this.lowerDiv.style.backgroundImage="url('"+checkTag(quertyImg.src)+"')";
				this.lowerDiv.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader( src='"+quertyImg.src+"', sizingMethod='scale')";
			}
		}
	};
	
	this.getDummy = function(){
		var request = new XMLHttpRequest();
		if(transkey_apiuse)
			request.open("POST", transkey_apiurl+"service/dummy", useAsyncTranskey);
//			request.open("GET", getUrlRestApi("service/dummy", self, "")+"&talkBack="+self.talkBack+tk_origin, useAsyncTranskey);
		else
			request.open("POST", transkey_surl, useAsyncTranskey);
		
		if(useCORS)
			request.withCredentials = true; 
		
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
		request.onreadystatechange = function(){
			if (request.readyState == 4 && request.status == 200) {
				if(request.responseText.indexOf("SessionError")>-1){
					var errCodes = request.responseText.split("=");
					if(errCodes[1]=="1"){
						mtk.tk_alert("SessionError");
						if(transkey_apiuse){
							mtk.resetToken(transkey_apiurl);
							mtk.resetSessionKey(transkey_apiurl);
						}else{
							mtk.resetToken(transkey_surl);
							mtk.resetSessionKey(transkey_surl);
						}
						if(!useSession&&limitTime>0)
							self.getInitTime();
					}
				}else{
					self.allocate=true;
					if(self.talkBack){
						if(self.keyboardType=="numberMobile"){
							self.dki = this.responseText.split(",");
							self.dki.splice(12, 3);
						}else{
							self.dki = this.responseText.split(",");
						}
						if(transkey_divType==0)
							mtk.setTalkBackKeys(self);
						mtk.setTalkBackText(self);
					}
				}
			}
		};
		
		try {
			if(transkey_apiuse){
				request.send(getUrlRestApiPost(self, this.keyType, this.allocationIndex)+"&talkBack="+self.talkBack+tk_origin);
				//request.send();
			}else{
				request.send(getUrlPost("getDummy", self, this.keyType ,this.allocationIndex)+"&talkBack="+self.talkBack+tk_origin);
			}
		} catch(e) {
			tk_alert("[mTranskey Error] : Cannot load TransKey. Network is not available.");
			return false;
		}
	}
	
	this.setKeyIndex = function(inputObj) {
		if(this.keyboardType == "patternMobile")
			return;
		
		var request = new XMLHttpRequest();
		if(transkey_apiuse)
			request.open("POST", transkey_apiurl+"service/keyindex", useAsyncTranskey);
		else
			request.open("POST", transkey_surl, useAsyncTranskey);
		
		if(useCORS)
			request.withCredentials = true; 
		
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
		request.onreadystatechange = function(){
			if (request.readyState == 4 && request.status == 200) {
				var hidKeyIndex = document.getElementById("keyIndex_"+inputObj.id+self.frmId);
				hidKeyIndex.setAttribute("value", this.responseText);
				self.keyIndex = hidKeyIndex.value;
				self.setKeyType(self.keyType);
				if(transkey_divType==0)
					self.setUrl();
				self.tk_onKeyFlag = false;
			}
		};
		
		try {
			if(transkey_apiuse){
				request.send(getUrlRestApiPost(self, this.keyType, this.allocationIndex)+"&talkBack="+self.talkBack+tk_origin);
			}else{
				request.send(getUrlPost("getKeyIndex", self, this.keyType ,this.allocationIndex)+"&talkBack="+self.talkBack+tk_origin);
			}
		} catch(e) {
			tk_alert("[mTranskey Error] : Cannot load TransKey. Network is not available.");
			return false;
		}
	}
	
	this.getInitTime = function() {
		var request = new XMLHttpRequest();
		if(transkey_apiuse){
			request.open("GET", transkey_apiurl+"service/inittime?"+new Date().getTime()+tk_origin, false);
		}else{
			request.open("GET", transkey_surl+"?op=getInitTime&"+new Date().getTime()+tk_origin, false);
		}
		request.onreadystatechange = function(){
			if (request.readyState == 4 && request.status == 200) {
				initTime = request.responseText.split(";")[0];
				initTime = initTime.split("=")[1];
				initTime = initTime.replace("'","");
				initTime = initTime.replace("'","");
			}
			
		};
		try {
			request.send();
		} catch(e) {
			tk_alert("[mTranskey Error] : Cannot load TransKey. Network is not available.");
			return false;
		}
		document.getElementById("initTime"+this.frmId).value = initTime;
	}
	
	
	this.setBgImageForDivType1 = function(type){
		
		var img = new Image();
		img.onload = function(){
			self.tk_onKeyFlag = false;
			if(self.allocate == false) {
				self.allocate=true;
				if(useTalkBack)
					self.getDummy();
			}
		};
		img.onerror = function() {
			self.tk_onKeyFlag = false;
			if(transkey_apiuse){
				mtk.resetToken(transkey_apiurl);
				mtk.resetSessionKey(transkey_apiurl);
			}else{
				mtk.resetToken(transkey_surl);
				mtk.resetSessionKey(transkey_surl);
			}
			if(!useSession&&limitTime>0)
				self.getInitTime();
//			self.allocation();
			if(useSession)
				self.setUrl();
			else
				self.setKeyIndex(self.inputObj);
		};
		if(transkey_apiuse){
			// restapi url : /transkey/api/service/key?~~
			img.src = getUrlRestApi("service/key", this, type, this.allocationIndex);
		}
		else{
			img.src = getUrl("getKey", this, type, this.allocationIndex);
		}	
			
		if(type=="single"){
			var k = useNoDummy?3:4;
			
			for(var i=1; 5>i; i++){
				for(var j=0; k>j; j++){
					try{
						if( i==4 && j==k-1 && !useNoDummy)
							continue;
						if(useNoDummy == false && relocation == true && i == 4 && j == 1){
							this.div.childNodes[i].childNodes[j].childNodes[0].style.backgroundImage="url('"+transkey_url +"/images/re_btn.png')";
						} else{
							this.div.childNodes[i].childNodes[j].childNodes[0].style.backgroundImage="url('"+checkTag(img.src)+"')";
						}
					}catch(e){
						console.log("[mTranskey Error] : backgroundImage error , (type=single)");
					}
				}
			}
//			try{
//				this.div.childNodes[4].childNodes[0].childNodes[0].style.backgroundImage="url('"+checkTag(url)+"')";
//			}catch(e){
//				
//			}

		}else{
			for(var i=1; 5>i; i++){
				for(var j=0; 11>j; j++){
					try{
						if(i==4 && j==10)
							continue;
						this.div.childNodes[i].childNodes[j].childNodes[0].style.backgroundImage="url('"+checkTag(img.src)+"')";
					}catch(e){
						console.log("[mTranskey Error] : backgroundImage error , (type="+type+")");
					}
				}
			}
			
			var k = useSpace?4:3;
			
			for(var j=0; k>j; j++){
				try{
					if(relocation == true && j == 1){
						this.div.childNodes[5].childNodes[j].childNodes[0].style.backgroundImage="url('"+transkey_url +"/images/re_btn.png')";
					}
					else{
						this.div.childNodes[5].childNodes[j].childNodes[0].style.backgroundImage="url('"+checkTag(img.src)+"')";
					}
				}catch(e){
					console.log("[mTranskey Error] : backgroundImage(5,0) error , (type="+type+")");
				}
			}
		}
	};
	
	this.setDataType = function(dataType){
		if(keyboardType=="number")
			return;
		
		if(dataType==null){
			this.useCaps=true;
			this.useSpecial=true;
			this.useLower=true;
			this.useUpper=true;
		}else{
			for(var i=0; dataType.length>i; i++){

				switch(dataType.charAt(i)){
				case 'a':
					this.useLower=true;
					break;
				case 'A':
					this.useUpper=true;
					break;
				case '@' :
					this.useSpecial=true;
					break;
				}
			}
			if(this.useLower&&this.useUpper)
				this.useCaps=true;
			if(!this.useLower&&!this.useUpper)
				this.useSpecial=false;
				
		}		
	};
	
	this.setExE2E = function(ExE2E){
		this.ExE2E.value=ExE2E;
	};
	
	function getUrl(op, o, keyType, allocationIndex){
		if(!useSession){
			return transkey_surl+"?op="+op+"&name="+o.id+"&keyType="+keyType+"&keyboardType="+o.keyboard+"&fieldType="
			+o.fieldType+"&inputName="+o.inputObj.name+"&parentKeyboard="+o.parentKeyboard+"&transkeyUuid="+mtk.transkeyUuid+"&exE2E="+o.exE2E
			+"&TK_requestToken="+TK_requestToken+"&allocationIndex="+allocationIndex+"&keyIndex="+o.keyIndex+"&initTime="+initTime+tk_origin;
		}
		else {
			return transkey_surl+"?op="+op+"&name="+o.id+"&keyType="+keyType+"&keyboardType="+o.keyboard+"&fieldType="
			+o.fieldType+"&inputName="+o.inputObj.name+"&parentKeyboard="+o.parentKeyboard+"&transkeyUuid="+mtk.transkeyUuid+"&exE2E="+o.exE2E
			+"&TK_requestToken="+TK_requestToken+"&allocationIndex="+allocationIndex+tk_origin;
		}
	}
	
	function getUrlPost(op, o, keyType, allocationIndex){
		if(!useSession) {
			return "op="+op+"&name="+o.id+"&keyType="+keyType+"&keyboardType="+o.keyboard+"&fieldType="
			+o.fieldType+"&inputName="+o.inputObj.name+"&parentKeyboard="+o.parentKeyboard+"&transkeyUuid="+mtk.transkeyUuid+"&exE2E="+o.exE2E+
			"&TK_requestToken="+TK_requestToken+"&allocationIndex="+allocationIndex+"&keyIndex="+o.keyIndex+"&initTime="+initTime+tk_origin;
		}
		else {
			return "op="+op+"&name="+o.id+"&keyType="+keyType+"&keyboardType="+o.keyboard+"&fieldType="
			+o.fieldType+"&inputName="+o.inputObj.name+"&parentKeyboard="+o.parentKeyboard+"&transkeyUuid="+mtk.transkeyUuid+"&exE2E="+o.exE2E+
			"&TK_requestToken="+TK_requestToken+"&allocationIndex="+allocationIndex+tk_origin;
		}
	}
	
	function getUrlRestApi(op, o, keyType, allocationIndex){
		if(!useSession){
			//세션 미사용시
			return transkey_apiurl+op+"?name="+o.id+"&keyType="+keyType+"&keyboardType="+o.keyboard+"&fieldType="
			+o.fieldType+"&inputName="+o.inputObj.name+"&parentKeyboard="+o.parentKeyboard+"&transkeyUuid="+mtk.transkeyUuid+"&exE2E="+o.exE2E
			+"&TK_requestToken="+TK_requestToken+"&allocationIndex="+allocationIndex+"&keyIndex="+o.keyIndex+"&initTime="+initTime+tk_origin;
		}else{
			//세션 사용시
			return transkey_apiurl+op+"?name="+o.id+"&keyType="+keyType+"&keyboardType="+o.keyboard+"&fieldType="
			+o.fieldType+"&inputName="+o.inputObj.name+"&parentKeyboard="+o.parentKeyboard+"&transkeyUuid="+mtk.transkeyUuid+"&exE2E="+o.exE2E+
			"&TK_requestToken="+TK_requestToken+"&allocationIndex="+allocationIndex+"&keyIndex="+o.keyIndex+"&initTime="+initTime+tk_origin;
		}
	}
	
	function getUrlRestApiPost(o, keyType, allocationIndex){
		if(!useSession){
			//세션 미사용시
			return "name="+o.id+"&keyType="+keyType+"&keyboardType="+o.keyboard+"&fieldType="
			+o.fieldType+"&inputName="+o.inputObj.name+"&parentKeyboard="+o.parentKeyboard+"&transkeyUuid="+mtk.transkeyUuid+"&exE2E="+o.exE2E
			+"&TK_requestToken="+TK_requestToken+"&allocationIndex="+allocationIndex+"&keyIndex="+o.keyIndex+"&initTime="+initTime+tk_origin;
		}else{
			//세션 사용시
			return "name="+o.id+"&keyType="+keyType+"&keyboardType="+o.keyboard+"&fieldType="
			+o.fieldType+"&inputName="+o.inputObj.name+"&parentKeyboard="+o.parentKeyboard+"&transkeyUuid="+mtk.transkeyUuid+"&exE2E="+o.exE2E+
			"&TK_requestToken="+TK_requestToken+"&allocationIndex="+allocationIndex+"&keyIndex="+o.keyIndex+"&initTime="+initTime+tk_origin;
		}
	}
	
	function checkTag(value){
		return value.replace(/</gi,"&lt;").replace(/>/gi,"&gt;").replace(/'/gi, "&#39;").replace(/"/gi, "&#34;");
	}
		
	this.setWidth(width);
	this.setDataType(dataType);

}

mTranskeyObj.prototype.setButton = function(useB){
	this.useButton=useB;
	
	if(useB){

		this.button = document.getElementById(this.inputObj.id+"_tk_btn");
		
		if(this.button==null)
			return false;
		
		if(mtk_useTranskey){
			this.button.className = "tk_btn_";
			this.button.setAttribute("data-tk-btnValue","true");

		}else{
			this.button.className = "tk_btn";
			this.button.setAttribute("data-tk-btnValue","false");
		}
		
		tk_btn_arr[this.button.id]=this.id;
		
		if(this.button.addEventListener ){
			this.button.addEventListener("click", mtk.buttonListener, false);
		}else{
			this.button.attachEvent("onclick", mtk.buttonListener);
		}

		
	}
};

mTranskeyObj.prototype.setKeyType = function(keyT){
	this.keyType = keyT;
	if(transkey_divType==1&&this.keyboardType!="patternMobile")
		this.setBgImageForDivType1(keyT);
	if(keyT=="single"){
		this.keyTypeIndex = "";
	}else{
		if(transkey_divType==0&&this.keyboardType!="patternMobile")
			this[keyT+"Div"].style.display="block";

		this.keyTypeIndex = keyT.charAt(0)+" ";

		if(keyT=="upper"){
			this.cap=true;
		}
		else if(keyT=="special"){
			this.special=true;
		}
	}
	
	if(this.allocate&&this.talkBack)
		mtk.setTalkBackText(this);


};

mTranskeyObj.prototype.setWidth = function(width){
	if(width>=600&&this.clientHeight>=600&&!mtk.horizontal){
		if(widthRatio != 1)
			this.width = width*widthRatio;
		else
			this.width=600;
	} else if(width>=360)
		this.width=360;
	else
		this.width=320;
};

mTranskeyObj.prototype.setQwertyKey = function(key){
	if(transkey_divType==0){
		this.lowerDiv.style.display="none";			
		this.upperDiv.style.display="none";	
		this.specialDiv.style.display="none";
		this[key+"Div"].style.display="block";
	}
	
};

mTranskeyObj.prototype.setPatternButton = function(transkeyObj){
		
	for(var i=0; 4>i; i++){
		for(var j=0; j<transkeyObj.childNodes[i].childNodes.length; j++) {
			this.lines.push(transkeyObj.childNodes[i].childNodes[j]);
		}
	}
	
	for(var i=5; 8>i; i++){
		for(var j=0; 3>j; j++){
			var patternBtn = transkeyObj.childNodes[i].childNodes[j];
            var isEnd = false;
			
			patternBtn.onmousedown = function(e){
				if (e && e.preventDefault){
					e.preventDefault();
				}
				isEnd = false;
				mtk.patternTouchStart(this);
			};
			patternBtn.ontouchstart = function(e){
				if (!e) e = window.event;
				e.preventDefault();
				isEnd = false;
				mtk.patternTouchStart(this);
			};
            patternBtn.onmouseover = function(){mtk.patternTouchOver(this)};
            patternBtn.ontouchmove = mtk.patternTouchMove;

            patternBtn.onmouseup = function(){
                if(!isEnd) {
                    isEnd = true;
                    mtk.patternTouchEnd()
                }
            };
            patternBtn.ontouchend = function(){
                if(!isEnd) {
                    isEnd = true;
                    mtk.patternTouchEnd()
                }
            };
            transkeyObj.onmouseup = function(){
                if(!isEnd) {
                    isEnd = true;
                    mtk.patternTouchEnd()
                }
            };
            this.buttons.push(patternBtn);
            
            /*
            if (document.addEventListener) {
				document.addEventListener(startEvent, mtk.patternTouchStart(this), false);
				document.addEventListener(moveEvent, mtk.patternTouchMove, false);
				document.addEventListener(overEvent, mtk.patternTouchOver(this), false);
				document.addEventListener(endEvent, mtk.patternTouchEnd, false);
			} else {
				document.attachEvent("on"+startEvent, mtk.patternTouchStart(this));
				document.attachEvent("on"+moveEvent, mtk.patternTouchMove);
				document.attachEvent("on"+overEvent, mtk.patternTouchOver(this));
				document.attachEvent("on"+endEvent, mtk.patternTouchEnd);
			}
			*/
		}
	}
};

mTranskeyObj.prototype.clear = function(){
	
	this.inputObj.value = "";		
	 
	this.hidden.value = "";
	
	this.hmac.value = "";
		
	if(this.useInput) {
		for(var i=0; i<this.useInputDiv.childElementCount; i++)
			this.useInputDiv.childNodes[i].value = "";
	}
};

mTranskeyObj.prototype.getCipherDataCallback = function(aCipher){
	
}

mTranskeyObj.prototype.getCipherData = function(xecureRandomData, crtType){
	var v = mtk.inputFillEncData(this.inputObj);
	var aCipher = null;
	var aCipherArray = null;
	var aInputValue = null;
	var aInputHMValue = null;
	var encXecureRanData = null;
	var aRequest = null;
	var now = this;
//	var isAsync = false;
	
	if(!useSession)
		var seedKey = document.getElementById("seedKey"+this.frmId).value;
	
	aInputValue = v.hidden;
	
	if (aInputValue == null || aInputValue == "") {
		aCipher = "";
		return aCipher;
	}
	
	aInputHMValue = v.hmac;	
	
	var PKey = mtk.getPKey();

	encXecureRanData = mtk.phpbb_encrypt2048(xecureRandomData, PKey.k, PKey.e, PKey.n);
	
	var rsaPubKey="";
	
	var crtTypeParam = crtType;
	if(crtType=="pkc"){
		rsaPubKey = mtk.getCertPublicKey();
		crtTypeParam = "yettie";
	}
	
	var sPort = location.port;
	if(sPort.length<=0)
		sPort = '80';

	aRequest = new XMLHttpRequest();
	
	if(transkey_apiuse)
		aRequest.open("POST", transkey_apiurl+"service/plaintext", useAsyncTranskey);
	else
		aRequest.open("POST", transkey_surl, useAsyncTranskey);
	
	
	if(useCORS)
		aRequest.withCredentials = true;
	else
		aRequest.setRequestHeader("Cache-Control", "no-cache");
	
	aRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");


	try{
		if(transkey_apiuse){
			if(!useSession) {				
				aRequest.send("name=" + this.id + "&value=" + aInputValue + "&hmac=" 
						+ aInputHMValue + "&crtType=" + crtTypeParam + "&encXecureRanData=" + encXecureRanData 
						+ "&sPort=" + sPort+"&pubKey=" + decodeURIComponent(rsaPubKey) +"&keyIndex=" + this.keyIndex+"&fieldType="
						+ this.fieldType+"&keyboardType=" + this.keyboardType + "&encSeedKey=" + seedKey+"&initTime="+initTime+tk_origin);
			} else {
				aRequest.send("name=" + this.id + "&value=" + aInputValue + "&hmac=" 
						+ aInputHMValue + "&crtType=" + crtTypeParam + "&encXecureRanData=" + encXecureRanData 
						+ "&transkeyUuid=" + mtk.transkeyUuid + "&sPort=" + sPort + "&pubKey="+ decodeURIComponent(rsaPubKey) +"&TK_requestToken="+TK_requestToken+tk_origin);
			}	
		}else{
			if(!useSession) {				
				aRequest.send("op=getPlainText&name=" + this.id + "&value=" + aInputValue + "&hmac=" 
						+ aInputHMValue + "&crtType=" + crtTypeParam + "&encXecureRanData=" + encXecureRanData 
						+ "&sPort=" + sPort+"&pubKey=" + rsaPubKey+"&keyIndex=" + this.keyIndex+"&fieldType="
						+ this.fieldType+"&keyboardType=" + this.keyboardType + "&encSeedKey=" + seedKey+"&initTime="+initTime+tk_origin);
			} else {
				aRequest.send("op=getPlainText&name=" + this.id + "&value=" + aInputValue + "&hmac=" 
						+ aInputHMValue + "&crtType=" + crtTypeParam + "&encXecureRanData=" + encXecureRanData 
						+ "&transkeyUuid=" + mtk.transkeyUuid + "&sPort=" + sPort + "&pubKey="+ rsaPubKey +"&TK_requestToken="+TK_requestToken+tk_origin);
			}	
		}
	}catch(e) {
		console.log("[mTranskey Error] : getCipherData fail");
	}
	
	if(useAsyncTranskey) {
		aRequest.onreadystatechange = function(){
			if (aRequest.readyState == 4 && aRequest.status == 200) {
				 if(aRequest.responseText.indexOf("LimitTimeOver")>-1){
					tk_alert("시간이 만료되었습니다.");
					mtk.now.clear();
					if(transkey_apiuse){
						mtk.resetToken(transkey_apiurl);
						mtk.resetSessionKey(transkey_apiurl);
					}else{
						mtk.resetToken(transkey_surl);
						mtk.resetSessionKey(transkey_surl);
					}
					if(!useSession&&limitTime>0)
						mtk.now.getInitTime();
//					mtk.now.allocation();

					if(useSession) {
						mtk.now.setKeyType(mtk.now.keyType);
						if(transkey_divType==0)
							mtk.now.setUrl();
					} else {
						mtk.now.setKeyIndex(mtk.now.inputObj);
					}
				} else if(aRequest.responseText.indexOf("Integrity verification failed")>-1){
					tk_alert("데이터 무결성 검증에 실패하였습니다.");
					mtk.now.clear();
					if(transkey_apiuse){
						mtk.resetToken(transkey_apiurl);
						mtk.resetSessionKey(transkey_apiurl);
					}else{
						mtk.resetToken(transkey_surl);
						mtk.resetSessionKey(transkey_surl);
					}
					if(!useSession&&limitTime>0)
						mtk.now.getInitTime();
//					mtk.now.allocation();

					if(useSession) {
						mtk.now.setKeyType(mtk.now.keyType);
						if(transkey_divType==0)
							mtk.now.setUrl();
					} else {
						mtk.now.setKeyIndex(mtk.now.inputObj);
					}
				} else {				
					aCipher = aRequest.responseText.replace(/\n/gi, '');
					if(crtType=="pkc"){
						now.getCipherDataCallback(aCipher);
						return aRequest.responseText;
					}
					aCipherArray = aCipher.split(',');
	
					aCipher = "";
					for ( var i = 0; i < aCipherArray.length - 1; i++) {
						if (aCipherArray[i].length == 1) {
							aCipher += '0';
						}
	
						aCipher += aCipherArray[i];
					}
	
					now.getCipherDataCallback(aCipher);
	
					return aCipher;
				}
			} else {
				aCipher = "";
				return aCipher;
			}
		}
	} else {
		if (aRequest.readyState == 4 && aRequest.status == 200) {
			 if(aRequest.responseText.indexOf("LimitTimeOver")>-1){
				tk_alert("시간이 만료되었습니다.");
				mtk.now.clear();
				if(transkey_apiuse){
					mtk.resetToken(transkey_apiurl);
					mtk.resetSessionKey(transkey_apiurl);
				}else{
					mtk.resetToken(transkey_surl);
					mtk.resetSessionKey(transkey_surl);
				}
				if(!useSession&&limitTime>0)
					mtk.now.getInitTime();
//				mtk.now.allocation();

				if(useSession) {
					mtk.now.setKeyType(mtk.now.keyType);
					if(transkey_divType==0)
						mtk.now.setUrl();
				} else {
					mtk.now.setKeyIndex(mtk.now.inputObj);
				}
			} else if(aRequest.responseText.indexOf("Integrity verification failed")>-1){
				tk_alert("데이터 무결성 검증에 실패하였습니다.");
				mtk.now.clear();
				if(transkey_apiuse){
					mtk.resetToken(transkey_apiurl);
					mtk.resetSessionKey(transkey_apiurl);
				}else{
					mtk.resetToken(transkey_surl);
					mtk.resetSessionKey(transkey_surl);
				}
				if(!useSession&&limitTime>0)
					mtk.now.getInitTime();
//				mtk.now.allocation();

				if(useSession) {
					mtk.now.setKeyType(mtk.now.keyType);
					if(transkey_divType==0)
						mtk.now.setUrl();
				} else {
					mtk.now.setKeyIndex(mtk.now.inputObj);
				}
			} else {				
				aCipher = aRequest.responseText.replace(/\n/gi, '');
				if(crtType=="pkc"){
					return aRequest.responseText;
				}
				aCipherArray = aCipher.split(',');

				aCipher = "";
				for ( var i = 0; i < aCipherArray.length - 1; i++) {
					if (aCipherArray[i].length == 1) {
						aCipher += '0';
					}

					aCipher += aCipherArray[i];
				}
				return aCipher;
			}
		} else {
			aCipher = "";
			return aCipher;
		}
	}
};

mTranskeyObj.prototype.setDiv = function(div){
	this.div=div;
	this.numberDiv=div.children["mtk_"+this.id+"_number"];
	this.lowerDiv=div.children["mtk_"+this.id+"_lower"];
	this.upperDiv=div.children["mtk_"+this.id+"_upper"];
	this.specialDiv=div.children["mtk_"+this.id+"_special"];
};

mTranskeyObj.prototype.done = function(){
	
};

function mTranskey(){
	var startEvent;
	var endEvent;
	this.isiPad = navigator.userAgent.indexOf("iPad")>-1;
	this.isiPhone = navigator.userAgent.indexOf("iPhone")>-1;
	this.isAndroid = navigator.userAgent.indexOf("Android")>-1;
	this.isSafari=false;
	this.browser = null;
	this.pcFilter = "win16|win32|win64|mac|macintel";

	if(navigator.userAgent.indexOf("Safari") > 0)
		this.isSafari=true;
	
	if (navigator.appName == 'Opera' || navigator.userAgent.indexOf("Safari") > 0 || navigator.userAgent.indexOf("Chrome") > 0 || navigator.userAgent.indexOf("Firefox") > 0)
		this.browser = 1;
	else if(this.isiPad || this.isiPhone && !this.isSafari) {
		this.browser = 3;
	} else {
		if(navigator.appName == "Microsoft Internet Explorer") this.browser = 3;
		else if(navigator.appName == "Netscape" && navigator.userAgent.toLowerCase().indexOf('trident')!=-1)  this.browser = 2;
		else this.browser = null;
	}
	
	if(transkey_divType==0){
		//divType = 0, Can't use Balloon
		useBalloon = false;
	}
	
	
	if(this.isiPhone||this.isiPad){
		startEvent="ontouchstart";
		endEvent="ontouchend";
	}else{
		if(useBalloon&&this.pcFilter.indexOf(navigator.platform.toLowerCase()) < 0){
			//mobile and useBalloon
			startEvent="ontouchstart";
			endEvent="ontouchend";
		}else{
			startEvent="onmousedown";
			endEvent="onmouseup";
		}
	}
	if(this.pcFilter.indexOf(navigator.platform.toLowerCase()) > 0)
		startEvent="onclick";
	var sessionKey = [, , , , , , , , , , , , , , , ];
	var genKey = new GenKey();
	var useCert = "true";
	var cert_pub = "";
	var cert_ca = "-----BEGIN CERTIFICATE-----MIIEHjCCAwagAwIBAgIJALcMNEp1tPYgMA0GCSqGSIb3DQEBCwUAMGcxCzAJBgNVBAYTAktSMR0wGwYDVQQKExRSYW9uU2VjdXJlIENvLiwgTHRkLjEaMBgGA1UECxMRUXVhbGl0eSBBc3N1cmFuY2UxHTAbBgNVBAMTFFJhb25TZWN1cmUgQ28uLCBMdGQuMB4XDTEzMDIwNzA5MDYyNVoXDTQzMDEzMTA5MDYyNVowZzELMAkGA1UEBhMCS1IxHTAbBgNVBAoTFFJhb25TZWN1cmUgQ28uLCBMdGQuMRowGAYDVQQLExFRdWFsaXR5IEFzc3VyYW5jZTEdMBsGA1UEAxMUUmFvblNlY3VyZSBDby4sIEx0ZC4wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCqB0MsUuAi7pWVmRWaCS7kAactycMghmOM7RiMbmXyHmatXJbrtOlNrGH8Xl4fdkCJjyUE2829zQy+lTJ2O3Uo3Nn7zK3+3Um9nDQXN2tapambthOXs0aHjnRCtuLMOSPlAx06o0yHP1nOGaV7hfY9PyJjIVh9Lk/oFp5A+wsi0wiQ+INMDrm/6xZrooEY7/TLMnE4v+nr+cpIf3hSrvI1gGTykFtGCy2Le1huqaTKkE9K0CF/Sd8Kvebj6R+MhlieDXiMZXZD++pRmd4cAmGAmnGn4YdJMyh16TCccPjT60KkMv84uNVjXBvnar8ZlzRQSgIhwp1KkRiMErMbVWCnAgMBAAGjgcwwgckwHQYDVR0OBBYEFPzIDKwqK4PCklaP6Mq4YXdq8McyMIGZBgNVHSMEgZEwgY6AFPzIDKwqK4PCklaP6Mq4YXdq8McyoWukaTBnMQswCQYDVQQGEwJLUjEdMBsGA1UEChMUUmFvblNlY3VyZSBDby4sIEx0ZC4xGjAYBgNVBAsTEVF1YWxpdHkgQXNzdXJhbmNlMR0wGwYDVQQDExRSYW9uU2VjdXJlIENvLiwgTHRkLoIJALcMNEp1tPYgMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEBAHBRlEB4nu/gHwVFRzqbFOloR7aB0xIaMDykMWtovXHUQcTmmGyYQn0bMWaGVCD7SgRh1FisfciJzLP7f8OI5f7rA2tiBZD1PBtLMU7MytGIYlV/gcfWPbnqBVsKDm15AEUqH7ZahOm7np4d5Fr87r1bj2baXQPKSNd9yjh89fl6LthWLEQRYKKwhPYAA/QkeB2RE9MftmuOXJ6MnYyyx5xEZK2ofqwrRBvDmV/PjwdCSxhloiJVFHrp8lKPCsZywJ3v9IPpudjgBQ7SWqhDcPNo2diGB2dQ252g36K1H7u3aT9Xha33MFQXTTEDzVDhaXzaGk7X6T9v25dsOyOaLAo=-----END CERTIFICATE-----";
	var rng = new SecureRandom();
	var mKey = new Array();
	for(var i=0; keyboardLayouts.length>i; i++){
		mKey[keyboardLayouts[i]] = null;
	}
	this.now = null;
	this.fakeKey = null;
	this.pressImg = null;
	this.fakePressImg = null;
	if(useBalloon){
		this.balloonImgs = this.makeBalloonImg();
	}
	if(usePressImg) {
		this.pressImg = this.makePressImg();
		this.fakePressImg = this.makePressImg();
	}
	this.getTextEnd=false;
	this.cssText = new Array();
	this.cssText["qwertyMobile"] = new Array();
	this.cssText["numberMobile"] = new Array();
	this.transkeyUuid;
	this.clientWidth;
	this.horizontal = false;
	this.webkitTapHighlightColor="";
	this.groupObjs = [];
	this.groupBtns = [];
	this.licenseType = "";
	this.licExpiredDate = "";
	this.licClassification = "";
	var genSessionKey = "";
	this.talkBackLowerText = ['1','2','3','4','5','6','7','8','9','0','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
	this.talkBackUpperText = ['1','2','3','4','5','6','7','8','9','0','대문자Q','대문자W','대문자E','대문자R','대문자T','대문자Y','대문자U','대문자I','대문자O','대문자P','대문자A','대문자S','대문자D','대문자F','대문자G','대문자H','대문자J','대문자K','대문자L','대문자Z','대문자X','대문자C','대문자V','대문자B','대문자N','대문자M'];
	this.talkBackSpecialText = ['어금기호','물결표시','느낌표','골뱅이','우물정','달러기호','퍼센트','꺽쇠','엠퍼샌드','별표','왼쪽괄호','오른쪽괄호','빼기','밑줄','등호','더하기','왼쪽대괄호','왼쪽중괄호','오른쪽대괄호','오른쪽중괄호','역슬래시','수직막대','세미콜론','콜론','슬래시','물음표','쉼표','왼쪽꺽쇠괄호','마침표','오른쪽꺽쇠괄호','작은따옴표','따옴표','더하기','빼기','별표','슬래시'];
	this.talkBackNumberText = ['1','2','3','4','5','6','7','8','9','0'];
	
	this.getPKey = function(){
		if(useGenKey)
			var pKey = cert_pub.split(transkey_delimiter);
		else
			var pKey = _x509_getPublicKeyHexArrayFromCertPEM(cert_pub);
		
		var PKey = new Array();

		PKey["n"] = pKey[0];
		PKey["k"] = 256; // length of n in bytes
		PKey["e"] = pKey[1];
		
		return PKey;
	};
	
	this.getCertPublicKey = function(){	
		return encodeURIComponent(this.crtPublicKey);
	};
	
	this.getPublicKey = function(url){
		var operation = "getPublicKey";
		if(transkey_apiuse){
			operation = "publickey";
		}
		var request = new XMLHttpRequest();
		if(transkey_apiuse)
			request.open("GET", url+"service/"+operation+"?TK_requestToken="+TK_requestToken+tk_origin, useAsyncTranskey);
		else
			request.open("POST", url, useAsyncTranskey);

		if(useCORS)
			request.withCredentials = true; 
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
		request.onreadystatechange = function(){
			if (request.readyState == 4 && request.status == 200) {
				if (request.responseText) {
					cert_pub = request.responseText;
					if(transkey_apiuse){
						mtk.generateSessionKey(transkey_apiurl);
					}else{
						mtk.generateSessionKey(transkey_surl);
					}
				}
			}
		};
		
		try {
			if(transkey_apiuse){
				request.send();
			}else{
				request.send("op=" + operation +"&TK_requestToken="+TK_requestToken+tk_origin);
			}
		} catch(e) {
			tk_alert("[mTranskey Error] : Cannot load TransKey. Network is not available.");
			return false;
		}
	};
	
	this.generateSessionKey = function(url) {
		
		if(genSessionKey.length>0)
			return true;
		
		if(useGenKey){
			if(cert_pub.indexOf("Error")>-1) {
				tk_alert("[mTranskey Error] : Cannot load TransKey. Network is not available.");
				return false;
			}
			var pKey = cert_pub.split(transkey_delimiter);
		} else {
			if( verifyCA() == false ){
				tk_alert("CA 검증이 실패 하였습니다. 프로그램이 정상작동 하지 않을 수 있습니다.");
				return false;
			}
			var pKey = _x509_getPublicKeyHexArrayFromCertPEM(cert_pub);
		}
		
		var n = pKey[0];
		var k = 256; // length of n in bytes
		var e = pKey[1];
		
		this.transkeyUuid = genKey.tk_sh1prng();
		
		
		genSessionKey = genKey.GenerateKey(128);
		
		for(var i=0; i<16; i++)	{
			sessionKey[i] = Number("0x0" + genSessionKey.charAt(i));
		}

		var encSessionKey = mtk.phpbb_encrypt2048(genSessionKey, k, e, n);	
		
		var licType = 0;
		if(!useSession){
			var operation = "getKeyInfo";
			if(transkey_apiuse == true){
				operation = "keyinfo";
			}			
		} else {
			var operation = "setSessionKey";
			if(transkey_apiuse == true){
				operation = "sessionkey";
			}
		}
		var request = new XMLHttpRequest();
		if(transkey_apiuse == true)
			request.open("GET", url+"service/"+operation+"?key=" + encSessionKey + "&transkeyUuid=" + this.transkeyUuid+ "&useCert=" + useCert+"&TK_requestToken="+TK_requestToken+ "&mode=Mobile"+tk_origin,useAsyncTranskey);
		else
			request.open("POST", url, useAsyncTranskey);
		
		if(useCORS)
			request.withCredentials = true; 
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		request.onreadystatechange = function(){
			if (request.readyState == 4 && request.status == 200) {
				if(request.responseText.indexOf("LicenseError")>-1){
					var errMessage =  request.responseText.split(",");
					var errCodes = errMessage[0].split("=");
					var classification = errMessage[1].split("=");
					if(classification[1] == "r")
						mtk.licClassification = "rsl";
					else if (classification[1] == "c")
						mtk.licClassification = "crt";
					else 
						mtk.licClassification = "undefined";
					mtk.alert(errCodes[1]);
					mtk= null;
					return false;
				}

				if (request.responseXML) {
					var result = request.responseXML.firstChild;
					var res = null;
					var returns = "return [";
					for(var i=0; keyboardLayouts.length>i; i++){
						if(i==keyboardLayouts.length-1){
							returns += keyboardLayouts[i]+",";
						}else{
							returns += keyboardLayouts[i]+",";
						}	
					}
					returns += "]";
					for ( var i = 0; i < result.childNodes.length; i++) {
						var node = result.childNodes[i];
						if (node.tagName == "script") {
							for ( var j = 0; j < node.childNodes.length; j++) {
								if(node.childNodes[j].nodeValue.length>10){									
									if(useCSP){
										//csp 정책으로 unsafe-eval 발생 시, new function 사용 불가로 하단 함수 사용 2022.02.16			
										res = getKeyArray(node.childNodes[j].nodeValue);
										licType = getLicType(node.childNodes[j].nodeValue);
										mtk.licExpiredDate = getLicExpiredDate(node.childNodes[j].nodeValue);
									}else{
										res = ( new Function( Key+node.childNodes[j].nodeValue.replace("//", "") +returns ) )();
										licType = ( new Function( Key+node.childNodes[j].nodeValue.replace("//", "") +"return licType" ) )();
										mtk.licExpiredDate = ( new Function( Key+node.childNodes[j].nodeValue.replace("//", "") +"return licExpiredDate" ) )();
									}
								}
							}
						}
					}
					for(var i=0; keyboardLayouts.length>i; i++){
						mKey[keyboardLayouts[i]] = res[i];
					}

					var year = mtk.licExpiredDate.substr(0,4);
					var month = mtk.licExpiredDate.substr(5,2);
					var day = mtk.licExpiredDate.substr(8,2);
					mtk.licExpiredDate = "만료 날짜 : " + year + "년" + month + "월" + day + "일";
					
					if(licType == 1) {
						mtk.licenseType = "임시 라이선스";
					}
					
					var inputs = document.getElementsByTagName("input");
					
					if(!useAsyncTranskey) {
						for(var i = 0; i < inputs.length; i++){
							var input = inputs.item(i);
							if(input.getAttribute("data-tk-kbdType")!=null&&transkey[input.id]==null){
								mtk.setKeyboard(inputs.item(i));
							}
						}
					}else {
						var promiseList = [];
						for(var i = 0; i < inputs.length; i++){
							var input = inputs.item(i);
							if(input.getAttribute("data-tk-kbdType")!=null){
								mtk.setKeyboard(inputs.item(i));
								promiseList.push(promistSetKey(i));
							}
						}	
						
						function promistSetKey(index) {
							return new Promise((resolve, reject)=>{
								setTimeout(()=>{
									//mtk.setKeyboard(inputs.item(num))
									if(useSession) {
										transkey[inputs.item(index).id].setKeyType(transkey[inputs.item(index).id].keyType);
										if(transkey_divType==0)
											transkey[inputs.item(index).id].setUrl();
									} else {
										transkey[inputs.item(index).id].setKeyIndex(inputs.item(index));
									}
								},0)
							})
						}
	
						Promise.all(promiseList);
					}

					for(var i = 0; i < inputs.length; i++){
						var input = inputs.item(i);
						if(input.getAttribute("data-tk-groupId")!=null&&mtk.groupObjs[input.getAttribute("data-tk-groupId")]==null) {
							mtk.setGroup(input.getAttribute("data-tk-groupId"));
						}
					}
					mtk.checkCSS();
					mtk.checkKeyVer();
					
					//CSP 정책으로 unsafe-inline발생 시 사용 2022.02.16
					if(useCSP){
						if(this.isiPhone||this.isiPad){
							startEvent="touchstart";
						}else{
							startEvent="mousedown";	
						}
						
						if("win16|win32|win64|mac|macintel".indexOf(navigator.platform.toLowerCase()) > 0)
							startEvent="click";
						
						for(var i = 0; i < transkey.objs.length; i++){
							var index = 0;
							var keypad = document.getElementById("mtk_"+transkey.objs[i]);
							var isQwerty = document.getElementById(transkey.objs[i]).getAttribute("data-tk-kbdtype").indexOf("qwerty")>-1? true:false;
							//input preview layout_close
							if(document.getElementById(transkey.objs[i]).getAttribute("data-tk-useinput")){
								if(document.addEventListener){
									document.getElementById("input_label_close_"+transkey.objs[i]).addEventListener( "click", mtk.close );
								}else{
									document.getElementById("input_label_close_"+transkey.objs[i]).attachEvent( "onclick", mtk.close );
								}	
							}
							for(var j = 0; j < keypad.childNodes.length ; j++){
								var keypadChild = keypad.childNodes[j]; 
								(function(j, keypad, keypadChild){
									if(j == 0){
										if(keypad.childNodes[0].childNodes.length > 0){
											if (document.addEventListener) {
												keypad.childNodes[0].childNodes[keypad.childNodes[0].childNodes.length-1].addEventListener( startEvent, mtk.close );
											}else{
												keypad.childNodes[0].childNodes[keypad.childNodes[0].childNodes.length-1].attachEvent( "on"+startEvent, mtk.close );
											}
										}
									}else{
										var KeypadLength = isQwerty==true? 6 : 5;
										if(j < KeypadLength - 1){
											for(var k = 0; k < keypadChild.childNodes.length; k++){
												if( j == KeypadLength-2  && k == 0 && isQwerty){
													if (document.addEventListener) {
														keypadChild.childNodes[0].addEventListener( startEvent, function(){mtk.cap(event,  keypadChild.childNodes[0])});
													}else{
														keypadChild.childNodes[0].attachEvent( "on"+startEvent, function(){mtk.cap(event,  keypadChild.childNodes[0])});
													}
													continue;
												}
												if( j == KeypadLength-2 && k == keypadChild.childNodes.length-1 && isQwerty){
													if (document.addEventListener) {
														keypadChild.childNodes[keypadChild.childNodes.length-1].addEventListener( startEvent, function(){mtk.del(event,  keypadChild.childNodes[keypadChild.childNodes.length-1])});
													}else{
														keypadChild.childNodes[keypadChild.childNodes.length-1].attachEvent( "on"+startEvent, function(){mtk.del(event,  keypadChild.childNodes[keypadChild.childNodes.length-1])});
													}
													continue;
												}
												(function(k, index){
													if (document.addEventListener) {
														keypadChild.childNodes[k].addEventListener( startEvent , function(){mtk.start(event, keypadChild.childNodes[k] , index)});
													}else{
														keypadChild.childNodes[k].attachEvent( "on"+startEvent, function(){mtk.start(event, keypadChild.childNodes[k] , index)});
													}
												})(k, index);
												index++;
											}
										}else/*( n == keypad.childNodes.length-1 )*/{
											if(isQwerty){
												if (keypadChild.id.indexOf("mtk_lic")>-1)
													return;
												if (document.addEventListener) {
													//특수문자
													keypadChild.childNodes[0].addEventListener( startEvent, function(){mtk.sp(event,  keypadChild.childNodes[0])});
													if(relocation){//재배열
														keypadChild.childNodes[1].addEventListener( startEvent, function(){mtk.relocate(event,  keypadChild.childNodes[1])});
													}else{//전체삭제
														keypadChild.childNodes[1].addEventListener( startEvent, function(){mtk.clear(event,  keypadChild.childNodes[1])});
													}
													//스페이스
													if(useSpace){
														keypadChild.childNodes[keypadChild.childNodes.length-2].addEventListener( startEvent, function(){mtk.start(event,  keypadChild.childNodes[keypadChild.childNodes.length-2], 41)});
													}
													//입력완료
													keypadChild.childNodes[keypadChild.childNodes.length-1].addEventListener( startEvent, function(){mtk.done(event,  keypadChild.childNodes[keypadChild.childNodes.length-1])});
												}else{
													//특수문자
													keypadChild.childNodes[0].attachEvent( "on"+startEvent, function(){mtk.sp(event,  keypadChild.childNodes[0])});
													if(relocation){//재배열
														keypadChild.childNodes[1].attachEvent( "on"+startEvent, function(){mtk.relocate(event,  keypadChild.childNodes[1])});
													}else{//전체삭제
														keypadChild.childNodes[1].attachEvent( "on"+startEvent, function(){mtk.clear(event,  keypadChild.childNodes[1])});
													}
													//스페이스
													if(useSpace){
														keypadChild.childNodes[keypadChild.childNodes.length-2].attachEvent( "on"+startEvent, function(){mtk.start(event,  keypadChild.childNodes[keypadChild.childNodes.length-2], 41)});
													}
													//입력완료
													keypadChild.childNodes[keypadChild.childNodes.length-1].attachEvent( "on"+startEvent, function(){mtk.done(event,  keypadChild.childNodes[keypadChild.childNodes.length-1])});
												}
											}else{
												if (keypadChild.id.indexOf("mtk_lic")>-1)
													return;
												if(document.addEventListener){
													if(useNoDummy){
														keypadChild.childNodes[0].addEventListener( startEvent, function(){mtk.del(event,  keypadChild.childNodes[0])});
														(function(index){
															keypadChild.childNodes[1].addEventListener( startEvent, function(){mtk.start(event, keypadChild.childNodes[1] , index)});
														})(index);
														keypadChild.childNodes[keypadChild.childNodes.length-1].addEventListener( startEvent, function(){mtk.done(event,  keypadChild.childNodes[keypadChild.childNodes.length-1])});
													}else{
														keypadChild.childNodes[0].addEventListener( startEvent, function(){mtk.del(event,  keypadChild.childNodes[0])});
														if(relocation){//재배열
															keypadChild.childNodes[1].addEventListener( startEvent, function(){mtk.relocate(event,  keypadChild.childNodes[1])});
														}else{//전체삭제
															keypadChild.childNodes[1].addEventListener( startEvent, function(){mtk.clear(event,  keypadChild.childNodes[1])});
														}
														keypadChild.childNodes[keypadChild.childNodes.length-1].addEventListener( startEvent, function(){mtk.done(event,  keypadChild.childNodes[keypadChild.childNodes.length-1])});
													}
												}else{
													if(useNoDummy){
														keypadChild.childNodes[0].attachEvent( "on"+startEvent, function(){mtk.del(event,  keypadChild.childNodes[0])});
														(function(index){
															keypadChild.childNodes[1].attachEvent( "on"+startEvent, function(){mtk.start(event,  keypadChild.childNodes[1], index)});
														})(index);
														keypadChild.childNodes[keypadChild.childNodes.length-1].attachEvent( "on"+startEvent, function(){mtk.done(event,  keypadChild.childNodes[keypadChild.childNodes.length-1])});
													}else{
														keypadChild.childNodes[0].attachEvent( "on"+startEvent, function(){mtk.del(event,  keypadChild.childNodes[0])});
														if(relocation){//재배열
															keypadChild.childNodes[1].attachEvent( "on"+startEvent, function(){mtk.relocate(event,  keypadChild.childNodes[1])});
														}else{//전체삭제
															keypadChild.childNodes[1].attachEvent( "on"+startEvent, function(){mtk.clear(event,  keypadChild.childNodes[1])});
														}
														keypadChild.childNodes[keypadChild.childNodes.length-1].attachEvent( "on"+startEvent, function(){mtk.done(event,  keypadChild.childNodes[keypadChild.childNodes.length-1])});
													}
												}
											}
										}
									}
								})(j,keypad, keypadChild);
							}
						}
						
					}
					
					initCallback();
				}
			}
		};
		try {
			if(transkey_apiuse == true){
				request.send();
			}else{
				request.send("op=" + operation + "&key=" + encSessionKey + "&transkeyUuid=" + this.transkeyUuid+ "&useCert=" + useCert+"&TK_requestToken="+TK_requestToken+ "&mode=Mobile"+tk_origin);
			}
		} catch(e) {
			tk_alert("[mTranskey Error] : Cannot load TransKey. Network is not available.");
			return false;
		}
	};
	
	this.resetToken = function(url){
		if(!useSession)
			return;
			
		var request = new XMLHttpRequest();
		if(useCORS)
			request.withCredentials = true; 
		if(transkey_apiuse){
			request.open("GET", url+"/service/token?"+new Date().getTime()+tk_origin, false);	
		}else{
			request.open("GET", url+"?op=getToken&"+new Date().getTime()+tk_origin, false);	
		}
		request.onreadystatechange = function(){
			if (request.readyState == 4 && request.status == 200) {
				TK_requestToken = request.responseText.split("=")[1];
				TK_requestToken = TK_requestToken.replace(";","");
				if(transkey_apiuse){
					mtk.resetSessionKey(transkey_apiurl);
				}else{
					mtk.resetSessionKey(transkey_surl);
				}
			}
			
		};
		
		try {
			request.send();
		} catch(e) {
			tk_alert("[mTranskey Error] : Cannot load TransKey. Network is not available.");
			return false;
		}
	}
	
	this.resetSessionKey = function(url){
		
		if(useGenKey){
			var pKey = cert_pub.split(transkey_delimiter);
		} else {
			if( verifyCA() == false ){
				tk_alert("CA 검증이 실패 하였습니다. 프로그램이 정상작동 하지 않을 수 있습니다.");
				return false;
			}
			var pKey = _x509_getPublicKeyHexArrayFromCertPEM(cert_pub);
		}

		var n = pKey[0];
		var k = 256; // length of n in bytes
		var e = pKey[1];
		
		var encSessionKey = mtk.phpbb_encrypt2048(genSessionKey, k, e, n);
		
		if(!useSession){
			var operation = "getKeyInfo";
			if(transkey_apiuse == true){
				operation = "keyinfo";
			}			
		} else {
			var operation = "setSessionKey";
			if(transkey_apiuse == true){
				operation = "sessionkey";
			}
		}
		var request = new XMLHttpRequest();
		if(useCORS)
			request.withCredentials = true; 
		if(transkey_apiuse)
			request.open("GET", url+"/service"+operation+"?key=" + encSessionKey + "&transkeyUuid=" + this.transkeyUuid+ "&useCert=" + useCert+"&TK_requestToken="+TK_requestToken+ "&mode=Mobile"+tk_origin, useAsyncTranskey);
		else
			request.open("POST", url, useAsyncTranskey);
		
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
		request.onreadystatechange = function(){
			if (request.readyState == 4 && request.status == 200) {
				if(request.responseText.indexOf("LicenseError")>-1){
					var errMessage =  request.responseText.split(",");
					var errCodes = errMessage[0].split("=");
					var classification = errMessage[1].split("=");
					if(classification[1] == "r")
						mtk.licClassification = "rsl";
					else if (classification[1] == "c")
						mtk.licClassification = "crt";
					else 
						mtk.licClassification = "undefined";
					mtk.alert(errCodes[1]);
					mtk= null;
					return false;
				}
			}
		};
		
		try {
			if(transkey_apiuse){
				request.send();
			}else{
				request.send("op=" + operation + "&key=" + encSessionKey + "&transkeyUuid=" + this.transkeyUuid+ "&useCert=" + useCert+"&TK_requestToken="+TK_requestToken+ "&mode=Mobile"+tk_origin);
			}
		} catch(e) {
			tk_alert("[mTranskey Error] : Cannot load TransKey. Network is not available.");
			return false;
		}
	};
	
	this.inputFillEncData = function(input){
		var tkObj = transkey[input.id];
		var hidden = tkObj.hidden.value;
		var hmac = "";

		var maxSize = input.value.length+genKey.tk_getrnd_int()%10;
		
		var geo = "d 0 0";
		
		for(var j=input.value.length; j<maxSize; j++)
		{	
			var encrypted = SeedEnc(geo);
			hidden += transkey_delimiter + encrypted;
		}

		if (java_ver<1.5)
			hmac = CryptoJS.HmacSHA1(hidden, genSessionKey);
		else
			hmac = CryptoJS.HmacSHA256(hidden, genSessionKey);
		
		var value = new Array();
		value["hidden"]=hidden;
		value["hmac"]=hmac;
		
		return value;
		
	};
	
	this.fillEncData = function()
	{
		for(var i=0;transkey.objs.length>i;i++){
			var tk = transkey[transkey.objs[i]];
			if(tk==null)
				continue;
			var hidden = tk.hidden;
			var HM = tk.hmac;
			var input = tk.inputObj;
			if(HM.value.length==0){
				var maxSize = input.value.length+genKey.tk_getrnd_int()%10;
				
				var geo = "d 0 0";
				

				for(var j=input.value.length; j<maxSize; j++)
				{	
					var encrypted = SeedEnc(geo);
					hidden.value += transkey_delimiter + encrypted;
				}		

				if(!useSession){
					var PKey = this.getPKey();
					var encSessionKey = this.phpbb_encrypt2048(genSessionKey, PKey.k, PKey.e, PKey.n);
					document.getElementById("seedKey"+tk.frmId).value = encSessionKey;
				}

				if (java_ver<1.5)
					HM.value = CryptoJS.HmacSHA1(hidden.value, genSessionKey);
				else
					HM.value = CryptoJS.HmacSHA256(hidden.value, genSessionKey);
			}
		}
	};
	
	this.getEncData = function(index){
		var encrypted = "";
		var key = mKey[mtk.now.keyboard][index];
		var x = key.xpoints[0];
		var y = key.ypoints[0];		
		var geo = this.now.keyTypeIndex + x + " " + y;
		
		encrypted = SeedEnc(geo);
		
		return encrypted;
	};
	
	this.getClientWidth = function(inputObj){
		if(window.orientation==0||window.orientation==180){
			this.horizontal = false;
		}else{
			this.horizontal = true;
		}
		if(this.isiPad){
			this.horizontal = false;
		}
		
		var obj = null;
		if(inputObj == undefined){
			obj = document.body;
		} else {
			var is_sibling = inputObj.getAttribute("data-tk-nextSibling")
			if(is_sibling == undefined || is_sibling == "false"){
				obj = document.body;
			}else {
				obj = inputObj.parentNode;
			}
		}
		
		var div = document.createElement("div");
		div.setAttribute("id", "mtk");
		obj.appendChild(div);
		if(div.addEventListener)
			div.addEventListener("touchstart", function(){}, false);
		div.style.width="100%";
		this.clientWidth = div.clientWidth;
		obj.removeChild(div);
	};
	
	this.checkWidthSize = function(size){
		if(transkey_divType!=0)
			return false;
			
		var width;
		if(this.clientWidth>=600&&this.clientHeight>=600&&!mtk.horizontal){
			width=600;
		} else if(this.clientWidth>=360)
			width=360;
		else
			width=320;
		
		if(size==width)
			return true;
		else
			return false;
	};
	
	this.remove = function(inputObj){
		var div = transkey[inputObj.id].div;
		if(div==null)
			return;
		div.parentNode.removeChild(div);
		var hidden = transkey[inputObj.id].hidden;
		var hmac = transkey[inputObj.id].hmac;
		var useInputDiv = transkey[inputObj.id].useInputDiv;
		if(hidden!=null)
			hidden.parentNode.removeChild(hidden);
		if(hmac!=null)
			hmac.parentNode.removeChild(hmac);
		if(useInputDiv!=null)
			useInputDiv.parentNode.removeChild(useInputDiv);
		
		removeArray(transkey.objs, inputObj.id);
		
		transkey[inputObj.id]= null;
	};
	 
	 this.setPosition = function(){
		 var div = this.now.div;	 
		 var inputObj = this.now.inputObj;
		 var xy = inputObj.getAttribute("data-tk-kbdxy");
		 var isBottom = inputObj.getAttribute("data-tk-bottom");
		 
		var is_sibling = inputObj.getAttribute("data-tk-nextSibling")
		if(is_sibling == "true"){
			this.getClientWidth(inputObj);
		}
		 if(isBottom == undefined||isBottom=="false"){
			 if(xy == undefined){
				if (typeof jQuery == "undefined") {
					var point = getOffsetPoint(inputObj);
					div.style.top = point.y+inputObj.offsetHeight+"px";
				} else {
					div.style.top = $('#'+inputObj.id).offset().top + inputObj.offsetHeight + "px";
				}
				if(transkey_divType==0){
					var left = this.clientWidth/2 - this.now.width/2;
					if(left<0)
						left = 0;
					div.style.left = left+"px";
				}else if(transkey_divType==1){
					if(this.now.keyboardType=="patternMobile") {
						div.style.left = (window.innerWidth / 2) - (div.clientWidth / 2) + "px";
					} else if(widthRatio!=1) {
						var left = (this.clientWidth*(1-widthRatio))/2;
						if(left<0)
							left = 0;
						div.style.left = left+"px";
					} else if(max_width!=0&&max_width>=300&&this.clientWidth>max_width) {
						var left = (this.clientWidth-max_width)/2;
						div.style.left = left+"px";
					} else {
						div.style.left = -0.5+"px";
					}
					// bwlim 
					if(window.location.href.indexOf('test')!=-1 || window.location.href.indexOf('noDummy')!=-1 || window.location.href.indexOf('index_mobile_WS')!= -1){
						div.style.left = this.now.inputObj.offsetLeft+'px';
					}
		 			this.reSize(this.now);
				}
			}else{
				var point = new Array();
				point = xy.split(" ");
				div.style.top = point[1]+"px";
				div.style.left = point[0]+"px";
			}
		} else if(isBottom=="true"){
			var top = document.documentElement.clientHeight-div.clientHeight-2;
			var left = 0;
			if(transkey_divType == 0) {
				var point = getOffsetPoint(inputObj);
				var left = this.clientWidth/2 - this.now.width/2;
				if(left<0)
					left = 0;
				div.style.left = left+"px";
				div.style.bottom="0px";
			} else if(transkey_divType==1){
				if(this.now.keyboardType=="patternMobile") {
						div.style.left = (window.innerWidth / 2) - (div.clientWidth / 2) + "px";
				} else if(widthRatio!=1) {
					var left = (this.clientWidth*(1-widthRatio))/2;
					if(left<0)
						left = 0;
					div.style.left = left+"px"; 
				} else if(max_width!=0&&max_width>=300&&this.clientWidth>max_width) {
					var left = (this.clientWidth-max_width)/2;
					div.style.left = left+"px";
				} else {
					div.style.left = (left-0.5)+"px";
				}
				div.style.bottom="0px";
				this.reSize(this.now);
			}
			/*
			if(mtk.isiPhone) {
				if(parseFloat(navigator.userAgent.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)[0].replaceAll("_","."))>=11) {
					div.style.bottom = "env(safe-area-inset-bottom)";
					mtk.now.useInputDiv.style.paddingBottom = "env(safe-area-inset-bottom)";
				} else {
					div.style.bottom = "constant(safe-area-inset-bottom)";
					mtk.now.useInputDiv.style.paddingBottom = "constant(safe-area-inset-bottom)";
				}
			}
			*/
			div.style.position = "fixed";
			div.style.width = this.clientWidth;
			if(mtk.now.useInput==true){
				mtk.now.useInputDiv.style.position = "fixed";
			}
		 }
	 };
	
	 this.setHiddenField = function(inputObj, ExE2E){
		 var obj = inputObj.form;
		 if(obj==null)
			 obj = inputObj.parentNode;
		 if(obj==null)
			 obj = document.body;
		 var frmId="";
		 if(use_form_id)
			 frmId = "_"+inputObj.form.id;
				 
		if(use_form_id){
			var hidfrmId = document.getElementById("hidfrmId");
			if(hidfrmId==null) {
				hidfrmId = document.createElement("input");
				hidfrmId.setAttribute("type", "hidden");
				hidfrmId.setAttribute("id", "hidfrmId");
				hidfrmId.setAttribute("name", "hidfrmId");
				hidfrmId.setAttribute("value", frmId.replace("_",""));
				obj.appendChild(hidfrmId);
			} else {
				hidfrmId.setAttribute("value", frmId.replace("_",""));
			}
		}
		
		if(!useSession) {
			var PKey = this.getPKey();
			var encSessionKey = this.phpbb_encrypt2048(genSessionKey, PKey.k, PKey.e, PKey.n);
			
			var seedKey = document.getElementById("seedKey"+frmId);
			if(seedKey==null){
				seedKey = document.createElement("input");
				seedKey.setAttribute("type", "hidden");
				seedKey.setAttribute("id", "seedKey"+frmId);
				seedKey.setAttribute("name", "seedKey"+frmId);
				seedKey.setAttribute("value", encSessionKey);
				obj.appendChild(seedKey);
			} else {
				seedKey.setAttribute("value", encSessionKey);
			}
			
			var hidInitTime = document.getElementById("initTime"+frmId);
			if(hidInitTime==null){
				hidInitTime = document.createElement("input");
				hidInitTime.setAttribute("type", "hidden");
				hidInitTime.setAttribute("id", "initTime"+frmId);
				hidInitTime.setAttribute("name", "initTime"+frmId);
				hidInitTime.setAttribute("value", initTime);
				obj.appendChild(hidInitTime);
			} else {
				hidInitTime.setAttribute("value", initTime);
			}
			
			var sessionKey = document.getElementById("keyIndex_"+inputObj.id+frmId);
			if(sessionKey==null){
				sessionKey = document.createElement("input");
				sessionKey.setAttribute("type", "hidden");
				sessionKey.setAttribute("id", "keyIndex_"+inputObj.id+frmId);
				sessionKey.setAttribute("name", "keyIndex_"+inputObj.id+frmId);
				sessionKey.setAttribute("value", "");
				obj.appendChild(sessionKey);
			} else {
				sessionKey.setAttribute("value", "");
			}
			
			var hidkeyboardType = document.getElementById("keyboardType_"+inputObj.id+frmId);
			if(hidkeyboardType==null){
				hidkeyboardType = document.createElement("input");
				hidkeyboardType.setAttribute("type", "hidden");
				hidkeyboardType.setAttribute("id", "keyboardType_"+inputObj.id+frmId);
				hidkeyboardType.setAttribute("name", "keyboardType_"+inputObj.id+frmId);
				hidkeyboardType.setAttribute("value", "");
				obj.appendChild(hidkeyboardType);
			} else {
				hidkeyboardType.setAttribute("value", "");
			}
			
			var hidfieldType = document.getElementById("fieldType_"+inputObj.id+frmId);
			if(hidfieldType==null){
				hidfieldType = document.createElement("input");
				hidfieldType.setAttribute("type", "hidden");
				hidfieldType.setAttribute("id", "fieldType_"+inputObj.id+frmId);
				hidfieldType.setAttribute("name", "fieldType_"+inputObj.id+frmId);
				hidfieldType.setAttribute("value", "");
				obj.appendChild(hidfieldType);
			} else {
				hidfieldType.setAttribute("value", "");
			}
		}
		
		var uuid;
		if(use_form_id)
			uuid = document.getElementById("transkeyUuid"+frmId);
		else
			uuid = obj.children.transkeyUuid;
		if(uuid==null){
			uuid = document.createElement("input");
			uuid.setAttribute("type", "hidden");
			uuid.setAttribute("id", "transkeyUuid"+frmId);
			uuid.setAttribute("name", "transkeyUuid"+frmId);
			uuid.value=this.transkeyUuid;
			obj.appendChild(uuid);
		} else {
			uuid.value=this.transkeyUuid;
		}
		
		var hidden = document.getElementById("transkey_"+inputObj.id+frmId);
		if(hidden==null){
			hidden = document.createElement("input");
			hidden.setAttribute("type", "hidden");
			hidden.setAttribute("id", "transkey_"+inputObj.id+frmId);
			hidden.setAttribute("name", "transkey_"+inputObj.id+frmId);
			hidden.setAttribute("value", "");
			obj.appendChild(hidden);
		} else {
			hidden.setAttribute("value", "");
		}
		
		var hmac = document.getElementById("transkey_HM_"+inputObj.id+frmId);
		if(hmac==null){
			hmac = document.createElement("input");
			hmac.setAttribute("type", "hidden");
			hmac.setAttribute("id", "transkey_HM_"+inputObj.id+frmId);
			hmac.setAttribute("name", "transkey_HM_"+inputObj.id+frmId);
			hmac.setAttribute("value", "");
			obj.appendChild(hmac);
		} else {
			hmac.setAttribute("value", "");
		}
		
		if(ExE2E!=null){
			var e2e = document.getElementById("transkey_ExE2E_"+inputObj.id+frmId);
			if(e2e==null){
				e2e = document.createElement("input");
				e2e.setAttribute("type", "hidden");
				e2e.setAttribute("id", "transkey_ExE2E_"+inputObj.id+frmId);
				e2e.setAttribute("name", "transkey_ExE2E_"+inputObj.id+frmId);
				e2e.setAttribute("value", ExE2E);
				obj.appendChild(e2e);
			} else {
				e2e.setAttribute("value", ExE2E);
			}
		}
	};
	
	this.setKeyType = function(dataType){
		if(dataType==undefined){
			return "lower";
		}
		switch(dataType.charAt(0)){
		case 'a':
			return "lower";
		case 'A':
			return "upper";
		case '@' :
			return "special";
		}
		
	};
	
	this.getText = function(encrypted, ele){
		var request = new XMLHttpRequest();
		var isAsync = false;
		
		if(!useSession){
			var seedKey = document.getElementById("seedKey"+this.now.frmId).value;
		}
		
		if(transkey_apiuse)
			request.open("POST", transkey_apiurl + "service/letter", useAsyncTranskey);
		else
			request.open("POST", transkey_surl, useAsyncTranskey);
		
		if(useCORS)
			request.withCredentials = true;
		else
			request.setRequestHeader("Cache-Control", "no-cache");
		
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
		
		request.onreadystatechange = function(){
			if (request.readyState == 4 && request.status == 200) {
				if(request.responseText.indexOf("SessionError")>-1){
					var errCodes = request.responseText.split("=");
					if(errCodes[1]=="1"){
						mtk.tk_alert("SessionError");
						mtk.now.clear();
						if(transkey_apiuse){
							mtk.resetToken(transkey_apiurl);
							mtk.resetSessionKey(transkey_apiurl);
						}else{
							mtk.resetToken(transkey_surl);
							mtk.resetSessionKey(transkey_surl);
						}
						if(!useSession&&limitTime>0)
							mtk.now.getInitTime();
//						mtk.now.allocation();

						if(useSession) {
							mtk.now.setKeyType(mtk.now.keyType);
							if(transkey_divType==0)
								mtk.now.setUrl();
						} else {
							mtk.now.setKeyIndex(mtk.now.inputObj);
						}
					}
				} else if(request.responseText.indexOf("LimitTimeOver")>-1){
					tk_alert("시간이 만료되었습니다.");
					mtk.now.clear();
					if(transkey_apiuse){
						mtk.resetToken(transkey_apiurl);
						mtk.resetSessionKey(transkey_apiurl);
					}else{
						mtk.resetToken(transkey_surl);
						mtk.resetSessionKey(transkey_surl);
					}
					if(!useSession&&limitTime>0)
						mtk.now.getInitTime();
//					mtk.now.allocation();

					if(useSession) {
						mtk.now.setKeyType(mtk.now.keyType);
						if(transkey_divType==0)
							mtk.now.setUrl();
					} else {
						mtk.now.setKeyIndex(mtk.now.inputObj);
					}
				} else if(request.responseText.indexOf("Integrity verification failed")>-1){
					tk_alert("데이터 무결성 검증에 실패하였습니다.");
					mtk.now.clear();
					if(transkey_apiuse){
						mtk.resetToken(transkey_apiurl);
						mtk.resetSessionKey(transkey_apiurl);
					}else{
						mtk.resetToken(transkey_surl);
						mtk.resetSessionKey(transkey_surl);
					}
					if(!useSession&&limitTime>0)
						mtk.now.getInitTime();
//					mtk.now.allocation();

					if(useSession) {
						mtk.now.setKeyType(mtk.now.keyType);
						if(transkey_divType==0)
							mtk.now.setUrl();
					} else {
						mtk.now.setKeyIndex(mtk.now.inputObj);
					}
				} else {
					mtk.now.inputObj.value = mtk.now.inputObj.value + request.responseText;
					if(mtk.now.useInput) {
						var value = mtk.now.inputObj.value;
						if(mtk.now.useInputDiv.childElementCount>4) {
							mtk.now.useInputDiv.childNodes[value.length*2+1].value = value[value.length-1];
						}
						else
							mtk.now.useInputDiv.childNodes[3].value = mtk.now.inputObj.value;
					}
					mtk.now.hidden.value += transkey_delimiter + encrypted;
					if(mtk.now.inputObj.maxLength>0){
						if (mtk.now.inputObj.value.length >= mtk.now.inputObj.maxLength) {
							mtk.close();
							return;
						}
					}

				}
			}
		};
		
		try {
			if(transkey_apiuse){
				if(!useSession) {
					request.send("name="+this.now.id+"&value=" +encrypted+"&keyIndex=" +this.now.keyIndex+"&fieldType=" +this.now.fieldType+"&keyboardType=" +this.now.keyboard+"&encSeedKey="+seedKey +"&initTime="+initTime+tk_origin);
				}
				else{
					request.send("transkeyUuid="+this.transkeyUuid+"&name="+this.now.id+"&value=" +encrypted+"&TK_requestToken="+TK_requestToken+tk_origin);
				}
			}else{
				if(!useSession) {
					request.send("op=letter&name="+this.now.id+"&value=" +encrypted+"&keyIndex=" +this.now.keyIndex+"&fieldType=" +this.now.fieldType+"&keyboardType=" +this.now.keyboard+"&encSeedKey="+seedKey +"&initTime="+initTime+tk_origin);
				}
				else{
					request.send("op=letter&transkeyUuid="+this.transkeyUuid+"&name="+this.now.id+"&value=" +encrypted+"&TK_requestToken="+TK_requestToken+tk_origin);
				}
			}
		} catch(e) {
			tk_alert("[mTranskey Error] : Cannot load TransKey. Network is not available.");
			return false;
		}
	};
	
	
	this.getFakeKey = function(){
		var rnd1,rnd2;
		var k=4;
		if(useNoDummy)
			var k=3;
		
		if(transkey_divType==1){
			if(this.now.keyboardType=="numberMobile"){
				rnd1 = tk_Random.random(1, 4, mtk.browser,navigator); 
				rnd2 = tk_Random.random(0, k, mtk.browser,navigator); 
			}else{
				rnd1 = tk_Random.random(1, 5, mtk.browser,navigator);
				rnd2 = tk_Random.random(0, 11, mtk.browser,navigator);
				if(rnd1==4){
					if(rnd2==0)
						rnd2=rnd2+1;
					else if(rnd2>8)
						rnd2=rnd2-3;
				}
			}
		}else{
			if(this.now.keyboardType=="numberMobile"){
				rnd1 = getRandomValue(2)+3;
				rnd2 = getRandomValue(6);
				
			}else{
				rnd1 = getRandomValue(4)+5;
				rnd2 = getRandomValue(11);
				if(rnd1==8){
					if(rnd2==0)
						rnd2=rnd2+1;
					else if(rnd2>8)
						rnd2=rnd2-getRandomValue(6);
				}
			}
		}
		
		return mtk.now.div.children[rnd1].children[rnd2];
	};
	
    function getRandomValue(range) {
    	return new GenKey().tk_getrnd_int() % range;
    }
	
	this.setQwertyMobileCss = function(){
		var qwertyCss = "";
		
		if(this.clientWidth>=600&&this.clientHeight>=600&&!this.horizontal){
			qwertyCss = "transkey_qwerty3";
		}else if(this.clientWidth>=360){
			qwertyCss = "transkey_qwerty2";
		}else{
			qwertyCss = "transkey_qwerty1";
		}
		
		this.cssText["qwertyMobile"].div = "transkey_div "+qwertyCss+"_div";
		this.cssText["qwertyMobile"].layout = qwertyCss+"_layout";
		this.cssText["qwertyMobile"].row = qwertyCss+"_row";
		this.cssText["qwertyMobile"].key1 = qwertyCss+"_key1";
		this.cssText["qwertyMobile"].key2 = qwertyCss+"_key2";
		this.cssText["qwertyMobile"].del = qwertyCss+"_del";
		this.cssText["qwertyMobile"].sp = qwertyCss+"_sp";
		this.cssText["qwertyMobile"].clear = qwertyCss+"_clear";
		this.cssText["qwertyMobile"].done = qwertyCss+"_done";
		
	};
	
	this.setNumberMobileCss = function(){
		var numberCss="";
		if(this.clientWidth>=600&&this.clientHeight>=600&&!this.horizontal){
			numberCss = "transkey_number3";
		}else if(this.clientWidth>=360){
			numberCss = "transkey_number2";
		}else{
			numberCss = "transkey_number1";
		}
		
		this.cssText["numberMobile"].div = "transkey_div "+numberCss+"_div";
		this.cssText["numberMobile"].layout = numberCss+"_layout";
		this.cssText["numberMobile"].row = numberCss+"_row";
		this.cssText["numberMobile"].key1 = numberCss+"_key1";
		this.cssText["numberMobile"].key2 = numberCss+"_key2";
		this.cssText["numberMobile"].del = numberCss+"_del";
		this.cssText["numberMobile"].clear = numberCss+"_clear";
		this.cssText["numberMobile"].done = numberCss+"_done";
	};
	
	this.setPatternMobileCss = function(){
		var numberCss="";
		if(this.clientWidth>=600&&this.clientHeight>=600&&!this.horizontal){
			numberCss = "transkey_number3";
		}else if(this.clientWidth>=360){
			numberCss = "transkey_number2";
		}else{
			numberCss = "transkey_number1";
		}
		
		this.cssText["numberMobile"].div = "transkey_div "+numberCss+"_div";
		this.cssText["numberMobile"].layout = numberCss+"_layout";
		this.cssText["numberMobile"].row = numberCss+"_row";
		this.cssText["numberMobile"].key1 = numberCss+"_key1";
		this.cssText["numberMobile"].key2 = numberCss+"_key2";
		this.cssText["numberMobile"].del = numberCss+"_del";
		this.cssText["numberMobile"].clear = numberCss+"_clear";
		this.cssText["numberMobile"].done = numberCss+"_done";
	};
	
	this.setQwertyMobileLayout = function(id, div, cssName){
		this.setQwertyMobileCss();
		if(transkey_divType==0){
			div.className=this.cssText.qwertyMobile.div;
			div.innerHTML = qwertyMobileLayout(id, this.cssText.qwertyMobile);
		}else if(transkey_divType==1){
			if(useCSP){
				div.innerHTML = qwertyMobileLayoutForDIV_noInline(id, cssName);
			}else{
				div.innerHTML = qwertyMobileLayoutForDIV(id, cssName);
			}
		}
	};
	
	this.setNumberMobileLayout = function(id, div, cssName){
		this.setNumberMobileCss();
		if(transkey_divType==0){
			div.className=this.cssText.numberMobile.div;
			div.innerHTML = numberMobileLayout(id, this.cssText.numberMobile);
		}else if(transkey_divType==1){
			if(useNoDummy){
				if(useCSP){	
					div.innerHTML = numberMobileNDLayoutForDIV_noInline(id, cssName);
				}else{
					div.innerHTML = numberMobileNDLayoutForDIV(id, cssName);
				}
			}else{
				if(useCSP){	
					div.innerHTML = numberMobileLayoutForDIV_noInline(id, cssName);
				}else{
					div.innerHTML = numberMobileLayoutForDIV(id, cssName);					
				}
			}
				
		}
	};
	
	this.setPatternMobileLayout = function(id, div, cssText){
		this.setPatternMobileCss();
		
		div.appendChild(patternMobileHorizontalLine(id, cssText));
		div.appendChild(patternMobileVerticalLine(id, cssText));
		div.appendChild(patternMobileDiagonalForwardLine(id, cssText));
		div.appendChild(patternMobileDiagonalBackwardLine(id, cssText));
	
        var layout = document.createElement("div");
        layout.id = "mtk_disp";
		layout.className = "dv_transkey_pattern_disp";
		layout.innerHTML = '<a class="dv_'+cssText+'_disp_b" onclick="mtk.close();" role="button" tabindex="0" aria-label="가상키보드 닫기"></a>';
        div.appendChild(layout);

		layout = document.createElement("div");
		layout.className = "dv_"+cssText+"_div4_1";
		layout.innerHTML = '<a class="dv_'+cssText+'_div4_1_1"><div class="tk_pattern_btn"></div></a>'+
			'<a class="dv_'+cssText+'_div4_1_1"><div class="tk_pattern_btn"></div></a>'+
			'<a class="dv_'+cssText+'_div4_1_1 dv_'+cssText+'_end"><div class="tk_pattern_btn"></div></a>';
        div.appendChild(layout);
			
		layout = document.createElement("div");
		layout.className = "dv_"+cssText+"_div4_2";
		layout.innerHTML = '<a id="4" class="dv_'+cssText+'_div4_2_1"><div class="tk_pattern_btn"></div></a>'+
			'<a class="dv_'+cssText+'_div4_2_1"><div class="tk_pattern_btn"></div></a>'+
			'<a class="dv_'+cssText+'_div4_2_1 dv_'+cssText+'_end"><div class="tk_pattern_btn"></div></a>';
        div.appendChild(layout);
			
		layout = document.createElement("div");
		layout.className = "dv_"+cssText+"_div4_2";
		layout.innerHTML = '<a id="7" class="dv_'+cssText+'_div4_2_1"><div class="tk_pattern_btn"></div></a>'+
			'<a class="dv_'+cssText+'_div4_2_1"><div class="tk_pattern_btn"></div></a>'+
			'<a class="dv_'+cssText+'_div4_2_1 dv_'+cssText+'_end"><div class="tk_pattern_btn"></div></a>';
        div.appendChild(layout);
	};
	
	this.checkCSS = function() {
		var check_result;
	    var ss = document.styleSheets;
	    for (var i = 0, max = ss.length; i < max; i++) {
	        if (ss[i].href == (window.location.origin + transkey_url+"/transkey.css"))
	        	check_result = true;
	    }
	    
		if(typeof(document.querySelector) != "undefined") {
			var element;
			if(transkey_divType == 0)
				element = document.querySelector('.transkey_div');
			else if(transkey_divType == 1)
				element = document.querySelector('.dv_transkey_div');
			
			if(typeof(getComputedStyle) != "undefined") {
				var style = getComputedStyle(element);

				if(style == null)
		        	check_result = false;
				else {
		        	check_result = true;
		        	
					if(transkey_divType == 0) {
						if (style.zIndex != 1000) {
				        	check_result = false;
						}
					} else {
						if (style.zIndex != 9999) {
				        	check_result = false;
						}
					}
				}
			} else {
				return;
			}
		} else {
			return;
		}
		
	    if(!check_result) {
	    	tk_alert("css를 load하는데 실패했습니다");
	    	//try reload css
//		    var link = document.createElement("link");
//		    link.rel = "stylesheet";
//		    link.href = "/transkey_mobile/transkey.css"
//		    document.getElementsByTagName("head")[0].appendChild(link);
	    }
		
	};
	
	this.checkKeyVer = function() {
		if(typeof qwertyMobileHash == "undefined" || typeof numberMobileHash == "undefined") {
			tk_alert("[mTranskey Error] : Keyboard version check fail.");
		} else {
			if(setQwertyMobileHash != qwertyMobileHash)
				tk_alert("[mTranskey Error] : Qwerty Keyboard version check fail.");
			if(setNumberMobileHash != numberMobileHash)
				tk_alert("[mTranskey Error] : Number Keyboard version check fail.");
		}
	};
	
	function offsetPoint() {
		this.x = 0;
		this.y = 0;
	}

	function getOffsetPoint(Element) {

        var point = new offsetPoint();

        point.x = 0;
        point.y = 0;

        var is_sibling = Element.getAttribute("data-tk-nextSibling")
        if(is_sibling == undefined || is_sibling == false) {        
	        while (Element) {
	            point.x += Element.offsetLeft;
	            point.y += Element.offsetTop;
	
	            Element = Element.offsetParent;
	
	            if(Element==null)
	                break;
	        }
        } else {
            point.x = Element.offsetLeft;
            point.y = Element.offsetTop;
        }

        return point;
	}


	function SeedEnc(geo) {
		var iv = [0x4d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x4b, 0x65, 0x79, 0x31, 0x30];
		var tsize = 64;
		var inData = new Array(tsize);		
		var outData = new Array(tsize);
		var roundKey = new Array(32);
		var isPattern = false;
		var i = 0; 
	  
		for(i=0; i<geo.length; i++)
		{			
			if(geo.charAt(i) == "l" || geo.charAt(i) == "u" || geo.charAt(i) == "s" || geo.charAt(i) == "d")
			{
				inData[i] = Number(geo.charCodeAt(i));
				continue;
			}
			else if(geo.charAt(i) == " ")
			{ 
				inData[i] = Number(geo.charCodeAt(i));
				continue;
			}
			inData[i] = Number(geo.charAt(i).toString(16));
		}
		
		if(mtk.now!=null){
			if(mtk.now.keyboardType=="patternMobile"){
				patternCount++;
				isPattern = true;
			}
		}
		
		if(!useSession&&limitTime>0&&!isPattern) {
			inData[i++] = 32;
			for(var k = 0 ; k<initTime.length; k++)
			{
				if(initTime.charAt(k) == "-")
					inData[i++] = Number(initTime.charCodeAt(k));
				else
					inData[i++] = initTime[k];
			}
		}
				
		inData[i++] = 32;
		inData[i++] = 101;	
		
		for( ;i <tsize; i++){
			var rndInt = genKey.tk_getrnd_int();		
			inData[i] = rndInt % 100;
		}
		 
		Seed.SeedSetKey(roundKey, sessionKey);		
		Seed.SeedEncryptCbc(roundKey, iv, inData, tsize, outData);
		
		var encodedData = new Array(tsize);
		var encodedDataString = "";
	
		for(var k=0; k<tsize; k++)
		{
			if(transkey_encDelimiter == null)
				encodedData[k] = Number(outData[k]).toString(16);
			else
				encodedDataString += Number(outData[k]).toString(16)+transkey_encDelimiter;
		}
			
		if(transkey_encDelimiter == null)
			return encodedData;
		else
			return encodedDataString.substring(0, encodedDataString.length-1);
	}
	
	function Key() {
		this.name = "";
		
		this.npoints = 0;
		this.xpoints = new Array();
		this.ypoints = new Array();
		
		this.addPoint = function(x, y) {
			this.npoints++;
			this.xpoints.push(x);
			this.ypoints.push(y);
		};
		
		this.contains = function(x, y) {
			var startx = this.xpoints[0];
			var starty = this.ypoints[0];
			
			var endx = this.xpoints[2];
			var endy = this.ypoints[2];
			
			if ( startx < x && starty < y )
			{
				if ( endx > x && endy > y )
				{
					return 1;
				}
			}
			
			return 0;
		};
	}

	function qwertyMobileLayout(id, cssText){
		var layout = '<div id="mtk_disp" class="dv_'+cssText+'_disp" style="height: 1px; border:0px;" role="button" tabindex="0" aria-label="가상키보드 영역 입니다"></div>'+
		'<span class="transkey_warning">'+tk_comments+'</span>'+
		'<span id="mtk_'+id+'_lower" class="transkey_layout '+cssText.layout+'"></span>'+
		'<span id="mtk_'+id+'_upper" class="transkey_layout '+cssText.layout+'"></span>'+
		'<span id="mtk_'+id+'_special" class="transkey_layout '+cssText.layout+'"></span>'+
			'<div id="mtk_'+id+'_Row0" class="transkey_row '+cssText.row+'">'+
			'<a '+startEvent+'="mtk.start(event, this, 0);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 1);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 2);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 3);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 4);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 5);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 6);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 7);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 8);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 9);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 10);"  class="transkey_key '+cssText.key1+'"></a>'+
			'</div>'+
			'<div id="mtk_'+id+'_Row1" class="transkey_row '+cssText.row+'">'+
			'<a '+startEvent+'="mtk.start(event, this, 11);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 12);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 13);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 14);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 15);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 16);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 17);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 18);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 19);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 20);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 21);"  class="transkey_key '+cssText.key1+'"></a>'+
			'</div>'+
			'<div id="mtk_'+id+'_Row2" class="transkey_row '+cssText.row+'">'+
			'<a '+startEvent+'="mtk.start(event, this, 22);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 23);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 24);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 25);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 26);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 27);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 28);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 29);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 30);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 31);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 32);"  class="transkey_key '+cssText.key1+'"></a>'+
			'</div>'+
			'<div id="mtk_'+id+'_Row3" class="transkey_row '+cssText.row+'">'+
			'<a id="mtk_cp" '+startEvent+'="mtk.cap(event, this);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 33);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 34);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 35);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 36);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 37);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 38);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 39);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 40);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a id="mtk_del" '+startEvent+'="mtk.del(event, this);"  class="transkey_key '+cssText.del+'"></a>'+
			'</div>'+
			'<div id="mtk_'+id+'_Row4" class="transkey_row '+cssText.row+'">'+
			'<a id="mtk_sp" '+startEvent+'="mtk.sp(event, this);"  class="transkey_key '+cssText.sp+'"></a>'+
			'<a id="mtk_clear" '+startEvent+'="mtk.clear(event, this);"  class="transkey_key '+cssText.clear+'"></a>'+
			'<a id="mtk_done" '+startEvent+'="mtk.done(event, this);"  class="transkey_key '+cssText.done+'"></a>'+
			'</div>';
		
		return layout;
	}
	function numberMobileLayout(id, cssText){
		var layout = '<div id="mtk_disp" class="dv_'+cssText+'_disp" style="height: 1px; border:0px;" role="button" tabindex="0" aria-label="가상키보드 영역 입니다"></div>'+
		'<span class="transkey_warning">'+tk_comments+'</span>'+
		'<span id="mtk_'+id+'_number" class="transkey_layout '+cssText.layout+'"></span>'+
			'<div id="mtk_'+id+'_Row0" class="transkey_row '+cssText.row+'">'+
			'<a '+startEvent+'="mtk.start(event, this, 0);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 1);" class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 2);" class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 3);" class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 4);" class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 5);" class="transkey_key '+cssText.key1+'"></a>'+
			'</div>'+
			'<div id="mtk_'+id+'_Row1" class="transkey_row '+cssText.row+'">'+
			'<a '+startEvent+'="mtk.start(event, this, 6);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 7);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 8);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 9);"  class="transkey_key '+cssText.key1+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 10);"  class="transkey_key '+cssText.key2+'"></a>'+
			'<a '+startEvent+'="mtk.start(event, this, 11);"  class="transkey_key '+cssText.key1+'"></a>'+
			'</div>'+
			'<div id="mtk_'+id+'_Row2" class="transkey_row '+cssText.row+'">'+
			'<a id="mtk_clear" '+startEvent+'="mtk.clear(event, this);"  class="transkey_key '+cssText.clear+'"></a>'+
			'<a id="mtk_del" '+startEvent+'="mtk.del(event, this);"  class="transkey_key '+cssText.del+'"></a>'+
			'<a id="mtk_done" '+startEvent+'="mtk.done(event, this);"  class="transkey_key '+cssText.done+'"></a>'+		
			'</div>';
		return layout;
	}
	
	function qwertyMobileLayoutForDIV(id, cssText){
		var layout = '<div id="mtk_disp" class="dv_'+cssText+'_disp">';

		if(document.getElementById(id).getAttribute("data-tk-useinput")=="true") {
			layout = '<div id="mtk_disp" style="height: 1px; border:0px;" role="button" tabindex="0" aria-label="가상키보드 영역 입니다"></div>';
		} else {
			layout += '<div class="dv_'+cssText+'_disp_a" role="button" tabindex="0" aria-label="가상키보드 영역 입니다"></div>';
			layout += '<a class="dv_'+cssText+'_disp_b" '+startEvent+'="mtk.close();" role="button" tabindex="0" aria-label="가상키보드 닫기"></a></div>';
		}
		
		layout += '<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_div2_Height dv_'+cssText+'_div_a">'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 0);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-4px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 1);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-39px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 2);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-73px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 3);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-108px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 4);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-143px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 5);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-178px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 6);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-213px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 7);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-248px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 8);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-284px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 9);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-319px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height " '+startEvent+'="mtk.start(event, this, 10);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-354px -9px;"></div></a>'+
	'</div>'+
	'<div class="dv_'+cssText+'_div_2  dv_'+cssText+'_div2_Height">'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 11);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-4px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 12);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-39px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 13);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-73px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 14);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-108px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 15);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-143px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 16);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-178px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 17);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-213px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 18);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-248px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 19);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-284px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 20);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-319px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 21);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-354px -60px;"></div></a>'+
	'</div>'+
	'<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_div2_Height">'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 22);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-4px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 23);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-39px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 24);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-73px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 25);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-108px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 26);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-143px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 27);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-178px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 28);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-213px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 29);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-248px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 30);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-284px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 31);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-319px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 32);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-354px -108px;"></div></a>'+
	'</div>'+
	'<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_div2_Height">'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height" id="mtk_cp" '+startEvent+'="mtk.cap(event, this);"' +endEvent+ '="balloonRemove();" aria-label="쉬프트"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-2px -157px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 33);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-39px -161px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 34);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-73px -161px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 35);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-108px -161px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 36);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-143px -161px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 37);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-178px -161px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 38);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-213px -161px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 39);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-248px -161px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 40);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-284px -161px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div_a dv_'+cssText+'_end dv_'+cssText+'_div2_Height" id="mtk_del" '+startEvent+'="mtk.del(event, this);"' +endEvent+ '="balloonRemove();" aria-label="삭제"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-338px -157px;"></div></a>'+
	'</div>';
		if(useSpace) {
			 if(relocation == true){
				 layout += '<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height">'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  id="mtk_sp" '+startEvent+'="mtk.sp(event, this);"' +endEvent+ '="balloonRemove();" aria-label="특수키"><div class="dv_'+cssText+'_div3_2 dv_'+cssText+'_div3_3_qTop" style="background-position:-16px -211px;"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  '+startEvent+'="mtk.relocate(event, this);"' +endEvent+ '="balloonRemove();" aria-label="재배열"><div class="dv_'+cssText+'_div3_3 dv_'+cssText+'_div3_3_qTop" style="background-position:0px -9px; background-size:100%"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  id="mtk_space" '+startEvent+'="mtk.start(event, this, 41);"' +endEvent+ '="balloonRemove();" aria-label="스페이스바"><div class="dv_'+cssText+'_div3_3 dv_'+cssText+'_div3_3_qTop" style="background-position:-162px -212px;"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_b dv_'+cssText+'_end dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.done(event, this);"' +endEvent+ '="balloonRemove();" aria-label="입력완료"><div class="dv_'+cssText+'_div3_5 dv_'+cssText+'_div3_3_qTop" style="background-position:-282px -211px;"></div></a>'+
				'</div>';
			 }else{
				 layout += '<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height">'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  id="mtk_sp" '+startEvent+'="mtk.sp(event, this);"' +endEvent+ '="balloonRemove();" aria-label="특수키"><div class="dv_'+cssText+'_div3_2 dv_'+cssText+'_div3_3_qTop" style="background-position:-16px -211px;"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  '+startEvent+'="mtk.clear(event, this);"' +endEvent+ '="balloonRemove();" aria-label="전체삭제"><div class="dv_'+cssText+'_div3_3 dv_'+cssText+'_div3_3_qTop" style="background-position:-75px -211px;"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  id="mtk_space" '+startEvent+'="mtk.start(event, this, 41);"' +endEvent+ '="balloonRemove();" aria-label="스페이스바"><div class="dv_'+cssText+'_div3_3 dv_'+cssText+'_div3_3_qTop" style="background-position:-162px -212px;"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_b dv_'+cssText+'_end dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.done(event, this);"' +endEvent+ '="balloonRemove();" aria-label="입력완료"><div class="dv_'+cssText+'_div3_5 dv_'+cssText+'_div3_3_qTop" style="background-position:-282px -211px;"></div></a>'+
				'</div>';
			 }
		} else {
			if(relocation == true){
				layout += '<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height">'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  id="mtk_sp" '+startEvent+'="mtk.sp(event, this);"' +endEvent+ '="balloonRemove();" aria-label="특수키"><div class="dv_'+cssText+'_div3_2 dv_'+cssText+'_div3_3_qTop" style="width:42px;height:27px;background-position:-31px -211px;"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  '+startEvent+'="mtk.relocate(event, this);"' +endEvent+ '="balloonRemove();" aria-label="재배열"><div class="dv_'+cssText+'_div3_3 dv_'+cssText+'_div3_3_qTop" style="background-position:0px -9px; background-size:100%"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_b dv_'+cssText+'_end dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.done(event, this);"' +endEvent+ '="balloonRemove();" aria-label="입력완료"><div class="dv_'+cssText+'_div3_5 dv_'+cssText+'_div3_3_qTop" style="background-position:-263px -211px;"></div></a>'+
				'</div>';
			}else{
				layout += '<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height">'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  id="mtk_sp" '+startEvent+'="mtk.sp(event, this);"' +endEvent+ '="balloonRemove();" aria-label="특수키"><div class="dv_'+cssText+'_div3_2 dv_'+cssText+'_div3_3_qTop" style="width:42px;height:27px;background-position:-31px -211px;"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  '+startEvent+'="mtk.clear(event, this);"' +endEvent+ '="balloonRemove();" aria-label="전체삭제"><div class="dv_'+cssText+'_div3_3 dv_'+cssText+'_div3_3_qTop" style="background-position:-130px -212px;"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_b dv_'+cssText+'_end dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.done(event, this);"' +endEvent+ '="balloonRemove();" aria-label="입력완료"><div class="dv_'+cssText+'_div3_5 dv_'+cssText+'_div3_3_qTop" style="background-position:-263px -211px;"></div></a>'+
				'</div>';
			}
		}
		if(showLicense&&mtk.licenseType!="")
			layout += '<div id="mtk_lic" class="dv_'+cssText+'_licenseType" style="position : absolute;margin: 5px; color : red;">' + mtk.licenseType + " (" + mtk.licExpiredDate + ")" + '</div>';

		return layout;
	}
	
	function qwertyMobileLayoutForDIV_noInline(id, cssText){
		var layout = '<div id="mtk_disp" class="dv_'+cssText+'_disp">';

		if(document.getElementById(id).getAttribute("data-tk-useinput")=="true") {
			layout = '<div id="mtk_disp" style="height: 1px; border:0px;" role="button" tabindex="0" aria-label="가상키보드 영역 입니다"></div>';
		} else {
			layout += '<div class="dv_'+cssText+'_disp_a" role="button" tabindex="0" aria-label="가상키보드 영역 입니다"></div>';
			layout += '<a class="dv_'+cssText+'_disp_b" role="button" tabindex="0" aria-label="가상키보드 닫기"></a></div>';
		}
		
		layout += '<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_div2_Height dv_'+cssText+'_div_a">'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-4px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-39px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-73px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-108px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-143px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-178px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-213px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-248px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-284px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-319px -9px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height "><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-354px -9px;"></div></a>'+
	'</div>'+
	'<div class="dv_'+cssText+'_div_2  dv_'+cssText+'_div2_Height">'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-4px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-39px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-73px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-108px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-143px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-178px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-213px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-248px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-284px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-319px -60px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-354px -60px;"></div></a>'+
	'</div>'+
	'<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_div2_Height">'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-4px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-39px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-73px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-108px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-143px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-178px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-213px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-248px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-284px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-319px -108px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-354px -108px;"></div></a>'+
	'</div>'+
	'<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_div2_Height">'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height" id="mtk_cp" aria-label="쉬프트"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-2px -157px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-39px -161px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-73px -161px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-108px -161px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-143px -161px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-178px -161px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-213px -161px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-248px -161px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-284px -161px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div_a dv_'+cssText+'_end dv_'+cssText+'_div2_Height" id="mtk_del" aria-label="삭제"><div class="dv_'+cssText+'_div2_2  dv_'+cssText+'_div2_2_qTop" style="background-position:-338px -157px;"></div></a>'+
	'</div>';
		if(useSpace) {
			 if(relocation == true){
				 layout += '<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height">'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height" aria-label="특수키"><div class="dv_'+cssText+'_div3_2 dv_'+cssText+'_div3_3_qTop" style="background-position:-16px -211px;"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height" aria-label="재배열"><div class="dv_'+cssText+'_div3_3 dv_'+cssText+'_div3_3_qTop" style="background-position:0px -9px; background-size:100%"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  id="mtk_space" aria-label="스페이스바"><div class="dv_'+cssText+'_div3_3 dv_'+cssText+'_div3_3_qTop" style="background-position:-162px -212px;"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_b dv_'+cssText+'_end dv_'+cssText+'_div2_Height" aria-label="입력완료"><div class="dv_'+cssText+'_div3_5 dv_'+cssText+'_div3_3_qTop" style="background-position:-282px -211px;"></div></a>'+
				'</div>';
			 }else{
				 layout += '<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height">'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  id="mtk_sp" aria-label="특수키"><div class="dv_'+cssText+'_div3_2 dv_'+cssText+'_div3_3_qTop" style="background-position:-16px -211px;"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height" aria-label="전체삭제"><div class="dv_'+cssText+'_div3_3 dv_'+cssText+'_div3_3_qTop" style="background-position:-75px -211px;"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  id="mtk_space" aria-label="스페이스바"><div class="dv_'+cssText+'_div3_3 dv_'+cssText+'_div3_3_qTop" style="background-position:-162px -212px;"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_b dv_'+cssText+'_end dv_'+cssText+'_div2_Height" aria-label="입력완료"><div class="dv_'+cssText+'_div3_5 dv_'+cssText+'_div3_3_qTop" style="background-position:-282px -211px;"></div></a>'+
				'</div>';
			 }
		} else {
			if(relocation == true){
				layout += '<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height">'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  id="mtk_sp" aria-label="특수키"><div class="dv_'+cssText+'_div3_2 dv_'+cssText+'_div3_3_qTop" style="width:42px;height:27px;background-position:-31px -211px;"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  aria-label="재배열"><div class="dv_'+cssText+'_div3_3 dv_'+cssText+'_div3_3_qTop" style="background-position:0px -9px; background-size:100%"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_b dv_'+cssText+'_end dv_'+cssText+'_div2_Height"  aria-label="입력완료"><div class="dv_'+cssText+'_div3_5 dv_'+cssText+'_div3_3_qTop" style="background-position:-263px -211px;"></div></a>'+
				'</div>';
			}else{
				layout += '<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height">'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height" id="mtk_sp"  aria-label="특수키"><div class="dv_'+cssText+'_div3_2 dv_'+cssText+'_div3_3_qTop" style="width:42px;height:27px;background-position:-31px -211px;"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  aria-label="전체삭제"><div class="dv_'+cssText+'_div3_3 dv_'+cssText+'_div3_3_qTop" style="background-position:-130px -212px;"></div></a>'+
					'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_b dv_'+cssText+'_end dv_'+cssText+'_div2_Height"  aria-label="입력완료"><div class="dv_'+cssText+'_div3_5 dv_'+cssText+'_div3_3_qTop" style="background-position:-263px -211px;"></div></a>'+
				'</div>';
			}
		}
		if(showLicense&&mtk.licenseType!="")
			layout += '<div id="mtk_lic" class="dv_'+cssText+'_licenseType" style="position : absolute;margin: 5px; color : red;">' + mtk.licenseType + " (" + mtk.licExpiredDate + ")" + '</div>';

		return layout;
	}
	
	function numberMobileLayoutForDIV(id, cssText){
		var layout = '<div id="mtk_disp" class="dv_'+cssText+'_disp">';
		
		if(document.getElementById(id).getAttribute("data-tk-useinput")=="true") {
			layout = '<div id="mtk_disp" style="height: 1px; border:0px;" role="button" tabindex="0" aria-label="가상키보드 영역 입니다"></div>';
		} else {
			layout += '<div class="dv_'+cssText+'_disp_a" role="button" tabindex="0" aria-label="가상키보드 영역 입니다"></div>';
			layout += '<a class="dv_'+cssText+'_disp_b" '+startEvent+'="mtk.close();" role="button" tabindex="0" aria-label="가상키보드 닫기"></a></div>';
		}
		
		layout += '<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_div2_Height">'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 0);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-33px -20px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 1);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-131px -20px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 2);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-228px -20px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 3);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-327px -20px;"></div></a>'+
		'</div>'+
		'<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_div2_Height">'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 4);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-33px -81px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 5);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-131px -81px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 6);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-228px -81px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 7);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-327px -81px;"></div></a>'+
		'</div>'+
		'<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_div2_Height">'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 8);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-33px -142px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 9);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-131px -142px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 10);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-228px -142px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 11);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-327px -142px;"></div></a>'+
		'</div>';
		if(relocation == true){
			layout += '<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height">'+
				'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.del(event, this);"' +endEvent+ '="balloonRemove();"  aria-label="삭제"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-33px -203px;"></div></a>'+
				'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.relocate(event, this);"' +endEvent+ '="balloonRemove();"  aria-label="재배열"><div class="dv_'+cssText+'_div3_3 dv_'+cssText+'_div3_3_nTop" style="background-position:-1px -11px; background-size:100%;"></div></a>'+
				'<a class="dv_'+cssText+'_div2  dv_'+cssText+'_div_b dv_'+cssText+'_end dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.done(event, this);"' +endEvent+ '="balloonRemove();"  aria-label="확인"><div class="dv_'+cssText+'_div3_2 dv_'+cssText+'_div3_3_nTop" style="background-position:-272px -206px;"></div></a>'+
			'</div>';
		}
		else{
			layout += '<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height">'+
				'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.del(event, this);"' +endEvent+ '="balloonRemove();"  aria-label="삭제"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-33px -203px;"></div></a>'+
				'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.clear(event, this);"' +endEvent+ '="balloonRemove();"  aria-label="전체 삭제"><div class="dv_'+cssText+'_div3_3 dv_'+cssText+'_div3_3_nTop" style="background-position:-114px -206px;"></div></a>'+
				'<a class="dv_'+cssText+'_div2  dv_'+cssText+'_div_b dv_'+cssText+'_end dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.done(event, this);"' +endEvent+ '="balloonRemove();"  aria-label="확인"><div class="dv_'+cssText+'_div3_2 dv_'+cssText+'_div3_3_nTop" style="background-position:-272px -206px;"></div></a>'+
			'</div>';
		}
		if(showLicense&&mtk.licenseType!="")
			layout += '<div id="mtk_lic" class="dv_'+cssText+'_licenseType" style="position : absolute;margin: 5px; color : red;">' + mtk.licenseType + " (" + mtk.licExpiredDate + ")" + '</div>';
		
		return layout;
	}
	
	function numberMobileNDLayoutForDIV(id, cssText){
		var layout = '<div id="mtk_disp" class="dv_'+cssText+'_disp">';
		
		if(document.getElementById(id).getAttribute("data-tk-useinput")=="true") {
			layout = '<div id="mtk_disp" style="height: 1px; border:0px;" role="button" tabindex="0" aria-label="가상키보드 영역 입니다"></div>';
		} else {
			layout += '<div class="dv_'+cssText+'_disp_a" role="button" tabindex="0" aria-label="가상키보드 영역 입니다"></div>';
			layout += '<a class="dv_'+cssText+'_disp_b" '+startEvent+'="mtk.close();" role="button" tabindex="0" aria-label="가상키보드 닫기"></a></div>';
		}
		
		layout += '<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_div2_Height">'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 0);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-39px -21px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 1);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-147px -21px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 2);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-254px -21px;"></div></a>'+
		'</div>'+
		'<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_div2_Height">'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 3);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-39px -82px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 4);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-147px -82px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 5);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-254px -82px;"></div></a>'+
		'</div>'+
		'<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_div2_Height">'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 6);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-39px -144px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 7);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-147px -144px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 8);"' +endEvent+ '="balloonRemove();"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-254px -144px;"></div></a>'+
		'</div>'+
		'<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height">'+
			'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  '+startEvent+'="mtk.del(event, this);"' +endEvent+ '="balloonRemove();"  aria-label="삭제"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-37px -203px;"></div></a>'+
			'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.start(event, this, 9);"' +endEvent+ '="balloonRemove();"  aria-label="전체 삭제"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-147px -207px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2  dv_'+cssText+'_div_b dv_'+cssText+'_end dv_'+cssText+'_div2_Height" '+startEvent+'="mtk.done(event, this);"' +endEvent+ '="balloonRemove();"  aria-label="확인"><div class="dv_'+cssText+'_div3_4 dv_'+cssText+'_div3_3_nTop" style="background-position:-243px -206px;"></div></a>'+
		'</div>';
		if(showLicense&&mtk.licenseType!="")
			layout += '<div id="mtk_lic" class="dv_'+cssText+'_licenseType" style="position : absolute;margin: 5px; color : red;">' + mtk.licenseType + " (" + mtk.licExpiredDate + ")" + '</div>';
		
		return layout;
	}
	

	function numberMobileLayoutForDIV_noInline(id, cssText){
		var layout = '<div id="mtk_disp" class="dv_'+cssText+'_disp">';
		
		if(document.getElementById(id).getAttribute("data-tk-useinput")=="true") {
			layout = '<div id="mtk_disp" style="height: 1px; border:0px;" role="button" tabindex="0" aria-label="가상키보드 영역 입니다"></div>';
		} else {
			layout += '<div class="dv_'+cssText+'_disp_a" role="button" tabindex="0" aria-label="가상키보드 영역 입니다"></div>';
			layout += '<a class="dv_'+cssText+'_disp_b" role="button" tabindex="0" aria-label="가상키보드 닫기"></a></div>';
		}
		
		layout += '<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_div2_Height">'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-33px -20px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-131px -20px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-228px -20px;"></div></a>'+
		'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-327px -20px;"></div></a>'+
		'</div>'+
		'<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_div2_Height">'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-33px -81px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-131px -81px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-228px -81px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-327px -81px;"></div></a>'+
		'</div>'+
		'<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_div2_Height">'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-33px -142px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-131px -142px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-228px -142px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-327px -142px;"></div></a>'+
		'</div>';
		if(relocation == true){
			layout += '<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height">'+
				'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  aria-label="삭제"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-33px -203px;"></div></a>'+
				'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  aria-label="재배열"><div class="dv_'+cssText+'_div3_3 dv_'+cssText+'_div3_3_nTop" style="background-position:-1px -11px; background-size:100%;"></div></a>'+
				'<a class="dv_'+cssText+'_div2  dv_'+cssText+'_div_b dv_'+cssText+'_end dv_'+cssText+'_div2_Height"  aria-label="확인"><div class="dv_'+cssText+'_div3_2 dv_'+cssText+'_div3_3_nTop" style="background-position:-272px -206px;"></div></a>'+
			'</div>';
		}
		else{
			layout += '<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height">'+
				'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  aria-label="삭제"><div class="dv_'+cssText+'_div2_2 dv_'+cssText+'_div2_2_nTop" style="background-position:-33px -203px;"></div></a>'+
				'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  aria-label="전체 삭제"><div class="dv_'+cssText+'_div3_3 dv_'+cssText+'_div3_3_nTop" style="background-position:-114px -206px;"></div></a>'+
				'<a class="dv_'+cssText+'_div2  dv_'+cssText+'_div_b dv_'+cssText+'_end dv_'+cssText+'_div2_Height"  aria-label="확인"><div class="dv_'+cssText+'_div3_2 dv_'+cssText+'_div3_3_nTop" style="background-position:-272px -206px;"></div></a>'+
			'</div>';
		}
		if(showLicense&&mtk.licenseType!="")
			layout += '<div id="mtk_lic" class="dv_'+cssText+'_licenseType" style="position : absolute;margin: 5px; color : red;">' + mtk.licenseType + " (" + mtk.licExpiredDate + ")" + '</div>';
		
		return layout;
	}
	
	function numberMobileNDLayoutForDIV_noInline(id, cssText){
		var layout = '<div id="mtk_disp" class="dv_'+cssText+'_disp">';
		
		if(document.getElementById(id).getAttribute("data-tk-useinput")=="true") {
			layout = '<div id="mtk_disp" style="height: 1px; border:0px;" role="button" tabindex="0" aria-label="가상키보드 영역 입니다"></div>';
		} else {
			layout += '<div class="dv_'+cssText+'_disp_a" role="button" tabindex="0" aria-label="가상키보드 영역 입니다"></div>';
			layout += '<a class="dv_'+cssText+'_disp_b" role="button" tabindex="0" aria-label="가상키보드 닫기"></a></div>';
		}
		
		layout += '<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_div2_Height">'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height" ><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-39px -21px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-147px -21px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-254px -21px;"></div></a>'+
		'</div>'+
		'<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_div2_Height">'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-39px -82px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-147px -82px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-254px -82px;"></div></a>'+
		'</div>'+
		'<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_div2_Height">'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-39px -144px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-147px -144px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-254px -144px;"></div></a>'+
		'</div>'+
		'<div class="dv_'+cssText+'_div_2 dv_'+cssText+'_end dv_'+cssText+'_div2_Height">'+
			'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div_a dv_'+cssText+'_div2_Height"  aria-label="삭제"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-37px -203px;"></div></a>'+
			'<a class="dv_'+cssText+'_div3 dv_'+cssText+'_div2_Height"  aria-label="전체 삭제"><div class="dv_'+cssText+'_div2_3 dv_'+cssText+'_div2_2_nTop" style="background-position:-147px -207px;"></div></a>'+
			'<a class="dv_'+cssText+'_div2  dv_'+cssText+'_div_b dv_'+cssText+'_end dv_'+cssText+'_div2_Height"  aria-label="확인"><div class="dv_'+cssText+'_div3_4 dv_'+cssText+'_div3_3_nTop" style="background-position:-243px -206px;"></div></a>'+
		'</div>';
		if(showLicense&&mtk.licenseType!="")
			layout += '<div id="mtk_lic" class="dv_'+cssText+'_licenseType" style="position : absolute;margin: 5px; color : red;">' + mtk.licenseType + " (" + mtk.licExpiredDate + ")" + '</div>';
		
		return layout;
	}
	
	function patternMobileHorizontalLine(id, cssText){
        var linesTag = document.createElement("div");
        linesTag.className = "dv_transkey_div5 boxsizingcontentbox";
        var elid=["12","23","45","56","78","89"];
        for (var i=0;i<6;i++){
            var lineTag = document.createElement("div");
            lineTag.className = "dv_transkey_div5_1 boxsizingcontentbox";
            lineTag.id = "line" + elid[i];
            linesTag.appendChild(lineTag);
        }
		return linesTag;
	}
	
	function patternMobileVerticalLine(id, cssText){
        var linesTag = document.createElement("div");
        linesTag.className = "dv_transkey_div5 boxsizingcontentbox";
        elid=["14","25","36","47","58","69"];
        for (var i=0;i<6;i++){
            var lineTag = document.createElement("div");
            lineTag.className = "dv_transkey_div5_2 boxsizingcontentbox";
            lineTag.id = "line" + elid[i];
            linesTag.appendChild(lineTag);
        }
		return linesTag;
	}
	
	function patternMobileDiagonalForwardLine(id, cssText){
        var linesTag = document.createElement("div");
        linesTag.className = "dv_transkey_div5 boxsizingcontentbox";
        elid=["24","35","57","68"];
        for (var i=0;i<4;i++){
            var lineTag = document.createElement("div");
            lineTag.className = "dv_transkey_div5_4 boxsizingcontentbox";
            lineTag.id = "line" + elid[i];
            linesTag.appendChild(lineTag);
        }
		return linesTag;
	}
	
	function patternMobileDiagonalBackwardLine(id, cssText){
	    var linesTag = document.createElement("div");
        elid=["15","26","48","59"];
        linesTag.className = "dv_transkey_div5 boxsizingcontentbox";
        for (var i=0;i<4;i++){
            var lineTag = document.createElement("div");
            lineTag.className = "dv_transkey_div5_3 boxsizingcontentbox";
            lineTag.id = "line" + elid[i];
            linesTag.appendChild(lineTag);
        }
		return linesTag;
	}
	
	
    
	this.patternTouchStart = function(b){
		var index = 1;
		var patternDiv = document.getElementById("mtk_"+transkey.objs[6]);
	    mtk.now.isdrawing = true;
	    if (mtk.now.inputObj.value != "") mtk.patternClear();
	    b.firstElementChild.className = "tk_pattern_btn tk_pattern_btn_touched";
	    from = "";
	    outer : for(var i = 5; i < 8 ; i++){
	    	inner : for(var j = 0; j < 3 ; j++){
	    		if( patternDiv.children[i].children[j] == b){
	    			break outer;
	    		}else{
	    			index++;	
	    		}
	    	}
	    }
	    to = index.toString();
	    var encrypted = SeedEnc(to);
		mtk.now.hidden.value += transkey_delimiter + encrypted;
	    startbutton = to;
	    return false;
	};
	
	this.patternTouchOver = function(b){
		var index = 1;
		var patternDiv = document.getElementById("mtk_"+transkey.objs[6]);
	    if (mtk.now.isdrawing){
		    outer : for(var i = 5; i < 8 ; i++){
		    	inner : for(var j = 0; j < 3 ; j++){
		    		if( patternDiv.children[i].children[j] == b){
		    			break outer;
		    		}else{
						index++;	
					}
		    	}
		    }
	        var thisbutton = index.toString();
	        if(thisbutton != to){
	            var cn = b.className;
	
	
	            // display line between 2 buttons
	            var thisline = document.getElementById("line" + to + thisbutton);
	            if (thisbutton <  to){
	                thisline = document.getElementById("line" + thisbutton + to);
	            }
	            if (thisline){
	                if (b.firstElementChild.className.indexOf("tk_pattern_btn_touched") < 0) {
	                    b.firstElementChild.className = "tk_pattern_btn tk_pattern_btn_touched"
		
	                    from = to;
	                    to = thisbutton;

	                    var encrypted = SeedEnc(to);
	                    mtk.now.hidden.value += transkey_delimiter + encrypted;

	                    thisline.style.visibility = 'visible';
	                }
	            }
	        }
	    }
	    return(false)
	};
	
	this.patternTouchMove = function(e) {
	    if(e.touches.length == 1){
	        var touch = e.touches[0];
			var isBottom = mtk.now.inputObj.getAttribute("data-tk-bottom");

			if(isBottom == undefined||isBottom=="false"){
	        	mtk.processTouchMove(parseInt(touch.pageX),parseInt(touch.pageY));
			}else {
				mtk.processTouchMove(parseInt(touch.clientX),parseInt(touch.clientY));
			}
	    }
	};
	
	this.processTouchMove = function(x,y) {
	    // find position relative to first button
	    if (!mtk.now.gridsize){
	        mtk.now.buttons[0].pos = findPos(mtk.now.buttons[0]);
	        mtk.now.buttons[1].pos = findPos(mtk.now.buttons[1]);
	        mtk.now.gridsize = parseInt(mtk.now.buttons[1].pos.left) - parseInt(mtk.now.buttons[0].pos.left);
	    }
	
	    var cox = x - parseInt(mtk.now.buttons[0].pos.left);
	    var coy = y - parseInt(mtk.now.buttons[0].pos.top);
	
	    // on what button are we over now?
	    // grid 3x3 to sequential nummber
	    var buttonnr = Math.min(2,Math.max(0,Math.floor(cox/mtk.now.gridsize))) + (Math.min(2,Math.max(0,Math.floor(coy/mtk.now.gridsize)))*3) + 1;
	
	    if (buttonnr != to){
	        // only trigger if the touch is near the middle of the button
	        // otherwise diagonal moves are impossible
	        var distancex = (cox % mtk.now.gridsize);
	        var distancey = (coy % mtk.now.gridsize);
	        if ((distancex< (mtk.now.gridsize/2)) && (distancey < (mtk.now.gridsize/2))){
	            // we're over a new button
	            var newButton = mtk.now.buttons[buttonnr-1];
	            mtk.patternTouchOver(newButton);
	        }
	    }
	};
	
	this.patternTouchEnd = function(){
		if (mtk.now.isdrawing){
	        mtk.now.isdrawing = false;
	        mtk.now.gridsize = false;
	    }
		
		if(patternCount<4){
			alert("4 점 이상 이어주세요.");
			mtk.patternClear();
		}else{
		    mtk.patternEnd();
		}
		
		patternCount = 0;
		
		return(false)
	};
	
	this.transkeyInputLayout = function(inputObj){
		var id = inputObj.id;
		var type = inputObj.type;
		var maxLength = inputObj.maxLength;
		var keyboardType = transkey[inputObj.id].keyboardType;
		var inputText = inputObj.getAttribute("data-tk-inputtext")==null?"":inputObj.getAttribute("data-tk-inputtext");
		var inputImg = inputObj.getAttribute("data-tk-inputimg")==null?"":inputObj.getAttribute("data-tk-inputimg");
		var cssText = inputObj.getAttribute("data-tk-cssName");
		if(cssText==null){
			cssText = "transkey";
		}
		var layout = '<label class="transkey_input_label">'+ inputText +'</label><a class="dv_'+cssText+'_disp_b_not_input" '+startEvent+'="mtk.close();" style="position: absolute; top:5%; right:5%;" role="button" tabindex="0" aria-label="가상키보드 닫기"></a>';
		if(useCSP)
			layout = '<label class="transkey_input_label">'+ inputText +'</label><a id="input_label_close_'+id+'" class="dv_'+cssText+'_disp_b_not_input" style="position: absolute; top:5%; right:5%;" role="button" tabindex="0" aria-label="가상키보드 닫기"></a>';			
		
		if(keyboardType=="numberMobile"&&maxLength>0&& maxLength<=10) {
			if(transkey_divType==0)
				var margin = Math.floor((transkey[inputObj.id].width-37*maxLength)/(maxLength+1));
			else{
				if(max_width!=0&&max_width>=300&&mtk.clientWidth>max_width)
					var margin = Math.floor((max_width-37*maxLength)/(maxLength+1));
				else
					var margin = Math.floor(((mtk.clientWidth*widthRatio)-37*maxLength)/(maxLength+1));
			}
			for(var i=0; i<maxLength; i++) {
				layout += '<label for="tk_input_'+id+"_"+i+'" style="display:none;"></label><input id="tk_input_'+id+"_"+i+'" class="transkey_input2" type="'+type+'" style="margin-left:'+margin+'px;" readonly disabled/>';
			}
		}
		else 
			layout += '<label for="tk_input_'+id+'" style="display:none;"></label><input id="tk_input_'+id+'" class="transkey_input" type="'+type+'" readonly disabled/>';
		
		var iDiv = document.createElement("div");
		iDiv.setAttribute("id", "mtk_input_div_"+inputObj.id);
		iDiv.setAttribute("class", "transkey_input_div");
		iDiv.style.backgroundImage="url("+inputImg+")";
		iDiv.innerHTML = layout;
		
		var obj = null;

		var is_sibling = inputObj.getAttribute("data-tk-nextSibling")
		if(is_sibling == undefined || is_sibling == "false"){
			obj = document.body;
		}else {
			obj = transkey[inputObj.id].inputObj.parentNode;
		}
		
		obj.appendChild(iDiv);
		transkey[inputObj.id].useInput = true;
		transkey[inputObj.id].useInputDiv = iDiv;
	};
	
	function pack(source)
	{
	   var temp = "";
	   for (var i = 0; i < source.length; i+=2)
	   {
	      temp+= String.fromCharCode(parseInt(source.substring(i, i + 2), 16));
	   }
	   return temp;
	}

	function char2hex(source)
	{
	   var hex = "";
	   for (var i = 0; i < source.length; i+=1)
	   {
	      var temp = source[i].toString(16);
	      switch (temp.length)
	      {
	         case 1:
	            temp = "0" + temp;
	            break;
	         case 0:
	           temp = "00";
	      }
	      hex+= temp;
	   }
	   return hex;
	}

	function xor(a, b)
	{
	   var length = Math.min(a.length, b.length);
	   var temp = "";
	   for (var i = 0; i < length; i++)
	   {
	      temp+= String.fromCharCode(a.charCodeAt(i) ^ b.charCodeAt(i));
	   }
	   length = Math.max(a.length, b.length) - length;
	   for (var i = 0; i < length; i++)
	   {
	      temp+= "\x00";
	   }
	   return temp;
	}

	function mgf1(mgfSeed, maskLen)
	{
	   var t = "";
	   var hLen = 20;
	   var count = Math.ceil(maskLen / hLen);
	   for (var i = 0; i < count; i++)
	   {
	      var c = String.fromCharCode((i >> 24) & 0xFF, (i >> 16) & 0xFF, (i >> 8) & 0xFF, i & 0xFF);
	      t+= pack(sha1Hash(mgfSeed + c));
	   }

	   return t.substring(0, maskLen);
	}

	function xorb(a, b) {
		var length = Math.min(a.length, b.length);
		var temp = "";
		for (var i = 0; i < length; i++) {
			temp += String.fromCharCode(a[i] ^ b[i]);
		}
		length = Math.max(a.length, b.length) - length;
		for (var i = 0; i < length; i++) {
			temp += "\x00";
		}
		return temp;
	}
	
	
	function strtobin(a) {
		var ret=new Uint8Array(a.length);
		
		for (var i = 0; i < a.length; i++) 
		{
			ret[i]= a.charCodeAt(i);
		}
		
		return ret;
	}
	
	function bytecopy(input,start,end) {
		
		var k = new Array(end-start); 
		for (var i = start,j=0; i < end; i++,j++) {
			k[j]=input[i];
		}
		return k;
		
	}
	
	function clear(input) {
		for (var i = 0; i < input.length; i++) {
			input[i]=0;
		}
	}
	
	this.rsaes_oaep_decrypt_key=function(m,d,n)
	{
		var _0x281f=["\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x6C\x65\x6E\x67\x74\x68","\x72\x73\x61\x65\x73\x5F\x6F\x61\x65\x70\x5F\x64\x65\x63\x72\x79\x70\x74","","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74"];var m=b64tohex(m);encoded_rsa= m[_0x281f[0]](0,512);encoded_enc= m[_0x281f[0]](512,m[_0x281f[1]]);d= this[_0x281f[2]](encoded_rsa,d,n);var k= new Array(16);var iv= new Array(16);for(var i=0;i< 16;i++){k[i]= d[i]};for(var i=16,j=0;i< 32;i++,j++){iv[j]= d[i]};var roundKey= new Array(32);Seed.SeedSetKey(roundKey,k);encoded_byte= makeHexToArrayByte(encoded_enc);var outData= new Array(encoded_byte[_0x281f[1]]);Seed.SeedDecryptCbc(roundKey,iv,encoded_byte,encoded_byte[_0x281f[1]],outData);dec= _0x281f[3];for(var i=0;i< outData[_0x281f[1]];i++){if(outData[i]== 0){break};dec+= String[_0x281f[4]](outData[i])};decBin=  new Array(dec[_0x281f[1]]);for(var i=0;i< dec[_0x281f[1]];i++){decBin[i]= dec[_0x281f[5]](i)};base64= char2Base64(decBin);clear(k);clear(iv);clear(decBin);return base64;
		
	};
	
	this.rsaes_oaep_decrypt = function(m, d, n) {
		
		var _0x2604=["\x30\x31\x30\x30\x30\x31","\x6D\x6F\x64\x50\x6F\x77","","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x6C\x65\x6E\x67\x74\x68","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74"];var _e= new BigInteger(_0x2604[0],16);var _d= new BigInteger(d,16);var _n= new BigInteger(n,16);mb=  new BigInteger(m,16);c= mb[_0x2604[1]](_d,_n);c= c.toString(16);EM= makeHexToArrayByte(c);maskedDB= _0x2604[2];maskedSeed= _0x2604[2];for(var i=0;i< 20;i++){maskedSeed+= String[_0x2604[3]](EM[i])};for(var i=0;i< EM[_0x2604[4]]- 20;i++){maskedDB+= String[_0x2604[3]](EM[20+ i])};seedMask= mgf1(maskedDB,20);seedMask1= strtobin(seedMask);seed= xor(maskedSeed,seedMask);seed1= strtobin(seed);dbMask= mgf1(seed,maskedDB[_0x2604[4]]);dbMask1= strtobin(dbMask);DB= xor(maskedDB,dbMask);DB1= strtobin(DB);var i=0;for(i= 20;i< DB[_0x2604[4]];i++){if(DB[_0x2604[5]](i)== 0x01){break}};i++;M=  new Uint8Array(DB[_0x2604[4]]- i);for(var j=0;j< DB[_0x2604[4]]- i;j++){M[j]= DB[_0x2604[5]](i+ j)};d= _0x2604[2];n= _0x2604[2];return M;

	};
		
	function rsaes_oaep_encrypt(m, n, k, e)
	{
	   var hLen = 20;


	   var mLen = m.length;
	   if (mLen > k - 2 * hLen - 2)
	   {
	   	tk_alert("too long");
	   }

	   var lHash = "\xda\x39\xa3\xee\x5e\x6b\x4b\x0d\x32\x55\xbf\xef\x95\x60\x18\x90\xaf\xd8\x07\x09"; // pack(sha1Hash(""))

	   var ps = "";
	   var temp = k - mLen - 2 * hLen - 2;
	   for (var i = 0; i < temp; i++)
	   {
	      ps+= "\x00";
	   }

	   var db = lHash + ps + "\x01" + m;
	   var seed = "";
	   for (var i = 0; i < hLen + 4; i+=4)
	   {
	      temp = new Array(4);
	      rng.nextBytes(temp);
	      seed+= String.fromCharCode(temp[0], temp[1], temp[2], temp[3]);
	   }
	   seed = seed.substring(4 - seed.length % 4);
	   var dbMask = mgf1(seed, k - hLen - 1);
	   
	   var maskedDB = xor(db, dbMask);
	   var seedMask = mgf1(maskedDB, hLen);
	   var maskedSeed = xor(seed, seedMask);
	   var em = "\x00" + maskedSeed + maskedDB;

	   m = new Array();
	   for (i = 0; i < em.length; i++)
	   {
	      m[i] = em.charCodeAt(i);
	   }
	   m = new BigInteger(m, 256);
	   c = m.modPow(e, n);
	   c = c.toString(16);
	   if (c.length & 1)
	   {
	      c = "0" + c;
	   }

	   return c;
	}

	function pkcs7pad(plaintext)
	{
	   var pad = 16 - (plaintext.length & 15);
	   for (var i = 0; i < pad; i++)
	   {
	      plaintext+= String.fromCharCode(pad);
	   }
	   return plaintext;
	}

	function aes_encrypt(plaintext, key, iv)
	{
	   var ciphertext = new Array();
	   plaintext = pkcs7pad(plaintext);
	   key = new keyExpansion(key);
	   for (var i = 0; i < plaintext.length; i+=16)
	   {
	      var block = new Array(16);
	      for (var j = 0; j < 16; j++)
	      {
	         block[j] = plaintext.charCodeAt(i + j) ^ iv[j];
	      }
	      block = AESencrypt(block, key);
	      for (var j = 0; j < 16; j++)
	      {
	         iv[j] = block[j];
	      }
	      ciphertext = ciphertext.concat(block);
	   }
	   return ciphertext;
	}

	function phpbb_encrypt1024(plaintext)
	{
	   var temp = new Array(32);
	   rng.nextBytes(temp);
	   var iv = temp.slice(0, 16);
	   var key = "";
	   for (var i = 16; i < 32; i++) // eg. temp.slice(16, 32)
	   {
	      key+= String.fromCharCode(temp[i]);
	   }

	   var n = new BigInteger("00a52ebc98a9583a90b14d34c009d436996b590561224dd1f41bd262f17dbb70f0fe9d289e60a3c31f1f70a193ad93f0a77e9a491e91de9f9a7f1197d1ffadf6814b3e46d77903a8f687849662528cdc3ea5c7c8f3bdf8fb8d118f01441ce317bb969d8d35119d2d28c8c07cbcfb28919387bd8ee67174fb1c0b2d6b87dfa73f35", 16);
	   var k = 128; // length of n in bytes
	   var e = new BigInteger("010001", 16);

	   frm1.key1.value = rsaes_oaep_encrypt(plaintext, n, k, e);
	   frm1.iv1.value = char2hex(iv);
	   frm1.data1.value = char2hex(aes_encrypt(plaintext, key, iv));
	}


	this.phpbb_encrypt2048 = function(plaintext, k, e, n)
	{
	   var temp = new Array(32);
	   rng.nextBytes(temp);
	   var key = "";
	   for (var i = 16; i < 32; i++) // eg. temp.slice(16, 32)
	   {
	      key+= String.fromCharCode(temp[i]);
	   }

	   var _e = new BigInteger(e, 16);
	   var _n = new BigInteger(n, 16);
	   
	   var _rsaoen = "";
	   
	   while(_rsaoen.length<512){
			_rsaoen = rsaes_oaep_encrypt(plaintext, _n, k, _e);
			if(_rsaoen.length>511)
				break;
	   }
	   
	   return _rsaoen;
	};

	function makeHexToArrayByte(hexString)
	{
		var len = hexString.length/2;
		var result = Array(len);
		for (var i = 0; i < len; i++)
			result[i] = parseInt(hexString.substring(2*i, 2*i+2),16);
		return result;
	}

	function getTodayDate(){
		 var _date  = new Date();
		 var _year  = "" + _date.getFullYear();
		 var _month = "" + (_date.getMonth() + 1);
		 var _day   = "" + _date.getDate();

		 if( _month.length == 1 ) _month = "0" + _month;
		 if( ( _day.length ) == 1 ) _day = "0" + _day;

		 var tmp = "" + _year.substring(2, 4) + _month + _day;
		 return tmp;
	}
	
	function verifyCA() 
	{
		var x509_pub = new X509();
		x509_pub.readCertPEM(cert_pub);
	  	
//		var NotBefore = x509_pub.getNotBefore();
//		var NotAfter = x509_pub.getNotAfter();
		var Signature = x509_pub.getSignature();
		var CertInfo = x509_pub.getCertInfo();
		var abCertInfo = CryptoJS.enc.Hex.parse(CertInfo);
		var abHash =  CryptoJS.SHA256(abCertInfo).toString();
		
//		var todayDate = getTodayDate();		
//		if(todayDate < NotBefore.substring(0, 6) || todayDate >= NotAfter.substring(0, 6)) {
//			tk_alert("transkey : 인증서 유효기간이 만료되었습니다.");
//			return "expired";
//		}
			
		var x509_ca = new X509();
		x509_ca.readCertPEM(cert_ca);

		var isValid = x509_ca.subjectPublicKeyRSA.verifyString(abHash, Signature);
		if (isValid) {
			return true;
		} else {
			return false;
		}
	}
}





mTranskey.prototype.setKeyboard = function(inputObj){
	var div = document.createElement("div");
	div.setAttribute("id", "mtk_"+inputObj.id);
	var _cssName = inputObj.getAttribute("data-tk-cssName");
	var divClassName = "transkey";
	var keyboardType = inputObj.getAttribute("data-tk-kbdType");
	var useTKInput = inputObj.getAttribute("data-tk-useinput");
	if(_cssName==null){
		_cssName = "transkey";
	}
	if(transkey_divType==1){
		if(keyboardType=="qwerty") {
			if(useTKInput=="true")
				divClassName+=" dv_"+_cssName+"_div dv_transkey_div_qHeight2";
			else
				divClassName+=" dv_"+_cssName+"_div dv_transkey_div_qHeight";
		}
		else if(keyboardType=="number") {
			if(useTKInput=="true")
				divClassName+=" dv_"+_cssName+"_div dv_transkey_div_nHeight2";
			else
				divClassName+=" dv_"+_cssName+"_div dv_transkey_div_nHeight";
		} else {
			divClassName+=" dv_"+_cssName+"_div dv_transkey_div_pHeight";
		}
	}
	div.setAttribute("class", divClassName);

	var dataType = inputObj.getAttribute("data-tk-dataType");
	var ExE2E = inputObj.getAttribute("data-tk-ExE2E");
	var keyType;
	if(keyboardType=="qwerty"){
		this.setQwertyMobileLayout(inputObj.id, div, _cssName);
		keyType = this.setKeyType(dataType);
	}
	else if(keyboardType=="number"){
		this.setNumberMobileLayout(inputObj.id, div, _cssName);
		keyType="single";
	} else {
		this.setPatternMobileLayout(inputObj.id, div, _cssName);
		keyType="pattern";
	}
	
	//div.style.backgroundImage="url("+transkey_url+"/images/loading.gif)";
	
	this.setHiddenField(inputObj, ExE2E);
	
	transkey[inputObj.id] = new mTranskeyObj(inputObj, this.clientWidth, div, keyType, keyboardType, dataType);
	
//	transkey[inputObj.id].allocation();
	
	if(!useAsyncTranskey) {
		if(useSession) {
			transkey[inputObj.id].setKeyType(transkey[inputObj.id].keyType);
		 	if(transkey_divType==0)
		 		transkey[inputObj.id].setUrl();
		} else {
			transkey[inputObj.id].setKeyIndex(inputObj);
		}
	}
	
	transkey[inputObj.id].setButton(mtk_useButton);
	
	if(transkey[inputObj.id].keyboardType=="patternMobile")
		transkey[inputObj.id].setPatternButton(div);
	
	transkey.objs.push(inputObj.id);
	
	var obj = null;

	var is_sibling = inputObj.getAttribute("data-tk-nextSibling")
	if(is_sibling == undefined || is_sibling == "false"){
		obj = document.body;
	}else {
		obj = transkey[inputObj.id].inputObj.parentNode;
	}
	obj.appendChild(div);
	
	if(useTKInput=="true")
		mtk.transkeyInputLayout(inputObj);
	
};

mTranskey.prototype.setTalkBackText = function(transkeyObj){
	if(!transkeyObj.talkBack)
		return false;
	
	var count=0;
	var dmyCount=0;
	var keyIndex=0;
	var textArray;
	var isNumber=false;
	if(transkeyObj.keyTypeIndex=="l ")
		textArray = mtk.talkBackLowerText;
	else if(transkeyObj.keyTypeIndex=="u ")
		textArray = mtk.talkBackUpperText;
	else if(transkeyObj.keyTypeIndex=="s ")
		textArray = mtk.talkBackSpecialText;
	else{
		isNumber=true;
		textArray = transkeyObj.dki;
		if(useNoDummy) {
			var tmp = textArray[9];
			textArray[9] = textArray[10];
			textArray[10] = tmp;
		}
	}
	
	var childNodes = transkeyObj.div.childNodes;
	if(transkey_divType==1){
		for(var i=0;i<childNodes.length;i++){
			var child = childNodes[i];
			if(child.id=="mtk_disp" || child.id=="mtk_lic"){
				continue;
			}
			if(child.tagName=="DIV"||child.tagName=="div"){
				for(var k=0;k<child.childNodes.length;k++){
					var key = child.childNodes[k];
					key.setAttribute('role', "button");
					key.setAttribute('tabindex', "0");
					if(key.id==""){
						if(isNumber){
							if(useNoDummy) {
								if(keyIndex>=12)
									continue;
								if("="==textArray[keyIndex]){
									key.setAttribute('aria-label', "빈칸");
									key.removeAttribute('role');
									key.removeAttribute('tabindex');
								} else if ("b"==textArray[keyIndex]) {
									keyIndex++;
									continue;
								} else if ("c"==textArray[keyIndex]) {
									keyIndex++;
									continue;
								} else {
									try{
										key.setAttribute('aria-label', textArray[keyIndex]);
										key.setAttribute('role', 'button');
        								key.setAttribute('tabindex', 0);
									}catch(e){
										console.log("[mTranskey Error] : Talkback setting fail");
									}								
								}
								keyIndex++;
							} else {
								if(keyIndex>=12)
									continue;
								if("="==textArray[keyIndex]){
									key.setAttribute('aria-label', "빈칸");
									key.removeAttribute('role');
								    key.removeAttribute('tabindex');
								}else{
									try{
										key.setAttribute('aria-label', textArray[keyIndex]);
										key.setAttribute('role', 'button');
        								key.setAttribute('tabindex', 0);
									}catch(e){
										console.log("[mTranskey Error] : Talkback setting fail");
									}								
								}
								keyIndex++;
							}
						}else{
							if(keyIndex==36)
								continue;
							if(count==Number(transkeyObj.dki[dmyCount])){
								key.setAttribute('aria-label', "빈칸");
								key.removeAttribute('role');
								key.removeAttribute('tabindex');
								dmyCount++;
							}else{
								try{
									key.setAttribute('aria-label', textArray[keyIndex]);
									key.setAttribute('role', 'button');
        							key.setAttribute('tabindex', 0);
								}catch(e){
									console.log("[mTranskey Error] : Talkback setting fail");
								}	
								keyIndex++;
							}
							count++;
						}
						
					}
				}
			}
		}
	}else{
		for(var i=0;i<childNodes.length;i++){
			var child = childNodes[i];
			if(child.id=="mtk_disp"){
				continue;
			}
			if(child.tagName=="DIV"||child.tagName=="div"){
				for(var k=0;k<child.childNodes.length;k++){
					var key = child.childNodes[k];
					if(key.tagName=="A"||key.tagName=="a"){
						key.setAttribute('role', "button");
						key.setAttribute('tabindex', "0");
						if(isNumber){
							if(keyIndex==12)
								return;
							if("="==textArray[keyIndex]){
								key.setAttribute('aria-label', "빈칸");
								key.removeAttribute('role');
								key.removeAttribute('tabindex');
								keyIndex++;
							}else{
								key.setAttribute('aria-label', textArray[keyIndex]);
								key.setAttribute('role', 'button');
        						key.setAttribute('tabindex', 0);
								keyIndex++;
							}
						}else{
							if(keyIndex==36)
								return;
							if(key.id==""){
								if(count==Number(transkeyObj.dki[dmyCount])){
									key.setAttribute('aria-label', "빈칸");
									key.removeAttribute('role');
								    key.removeAttribute('tabindex');
									dmyCount++;
								}else{
									key.setAttribute('aria-label', textArray[keyIndex]);
									key.setAttribute('role', 'button');
        							key.setAttribute('tabindex', 0);
									keyIndex++;
								}
								count++;
							}
						}
					}
				}
			}
		}
	}
};

mTranskey.prototype.setTalkBackKeys = function(transkeyObj){
	if(!transkeyObj.talkBack)
		return false;
	
	var childNodes = transkeyObj.div.childNodes;
	for(var i=0;i<childNodes.length;i++){
		var child = childNodes[i];
		if(child.tagName=="DIV"||child.tagName=="div"){
			for(var k=0;k<child.childNodes.length;k++){
				var key = child.childNodes[k];
				if(key.tagName=="A"||key.tagName=="a"){
					key.setAttribute('role', "button");
					key.setAttribute('tabindex', "0");
					if(key.id=="")
						key.setAttribute('aria-label', "");
					else if(key.id=="mtk_cp")
						key.setAttribute('aria-label', "쉬프트");
					else if(key.id=="mtk_del")
						key.setAttribute('aria-label', "삭제");
					else if(key.id=="mtk_sp")
						key.setAttribute('aria-label', "특수키");
					else if(key.id=="mtk_clear")
						key.setAttribute('aria-label', "전체삭제");
					else if(key.id=="mtk_done")
						key.setAttribute('aria-label', "입력완료");
					else if(useSpace&&key.id=="mtk_space")
						key.setAttribute('aria-label', "스페이스바");
						
				}
			}
		}
	}
};

mTranskey.prototype.setTalkBack = function(inputId){
	if(inputId==null){
		for(var i=0;i<transkey.objs.length;i++){
			var mtkObj = transkey[transkey.objs[i]];
			if(mtkObj==null)
				continue;
			if(transkey_divType==1){
				var inputObj = mtkObj.inputObj;
				mtk.remove(inputObj);			
				useTalkBack = true;
				mtk.setKeyboard(inputObj);
			}else{				
				if(mtk.now!=null)
					mtk.close();
				
				mtkObj.talkBack = true;
//				mtkObj.allocation();

				if(useSession) {
					mtkObj.setKeyType(mtkObj.keyType);
					if(transkey_divType==0)
						mtkObj.setUrl();
				} else {
					mtkObj.setKeyIndex(mtkObj.inputObj);
				}
			}
		}
	}else{
		var mtkObj = transkey[inputId];
		if(mtkObj==null)
			return false;
		if(transkey_divType==1){
			var inputObj = mtkObj.inputObj;
			mtk.remove(inputObj);
			var oriTB = useTalkBack;
			useTalkBack = true;
			mtk.setKeyboard(inputObj);
			useTalkBack = oriTB;
		}else{
			if(mtk.now!=null)
				mtk.close();
			
			mtkObj.talkBack = true;
//			mtkObj.allocation();

			if(useSession) {
				mtkObj.setKeyType(mtkObj.keyType);
				if(transkey_divType==0)
					mtkObj.setUrl();
			} else {
				mtkObj.setKeyIndex(mtkObj.inputObj);
			}
		}
	}
};

mTranskey.prototype.setGroup = function(groupId){
	
	var groupObj = [];
    var els = document.getElementsByTagName("input");
    var i = 0;

	for (i = 0; i < els.length; i++) {
	    if (els[i].getAttribute("data-tk-groupId") == groupId) {
	    	groupObj.push(transkey[els[i].id]);
	    }
	}
	mtk.groupObjs[groupId] = groupObj;
	mtk.setGroupBtn(groupId);
	
};

mTranskey.prototype.setGroupBtn = function(groupId) {
	
	var button = document.getElementById(groupId+"_tk_grpBtn");
	if(mtk_useTranskey){
		button.className = "tk_btn_";
		button.setAttribute("data-tk-btnValue","true");
	}else{
		button.className = "tk_btn";
		button.setAttribute("data-tk-btnValue","false");
	}
	mtk.groupBtns[groupId] = button;
	
	if(mtk.groupBtns[groupId].addEventListener){
		mtk.groupBtns[groupId].addEventListener("click", function() { mtk.groupBtnListener(groupId); }, false);
	}else{
		mtk.groupBtns[groupId].attachEvent("onclick", function() { mtk.groupBtnListener(groupId); });
	}
	
};

mTranskey.prototype.onKeyboard = function(inputObj){
	if(!useTalkBack && !clickDummy) {
		console.log('현재 clickDummy의 상태는 false입니다. useTalkback 설정을 true로 변경해 주세요.');
	}
	
	 document.body.height="100%";
	 this.webkitTapHighlightColor=document.body.style.webkitTapHighlightColor;
	 document.body.style.webkitTapHighlightColor="rgba(0,0,0,0)";
	 
	 if(this.now!=null && !this.now.relocate)
		this.focusout();
	 
	 if(window.innerWidth<265){
		 tk_alert("현재 크기에서는 키패드를 지원하지 않습니다.\n키패드 실행이 취소되었습니다.\n더 큰 화면에서 실행해주세요.");
		 inputObj.readOnly=true;
		 inputObj.blur();
		 return;
	 }else{
		 inputObj.readOnly=false;
	 }
	 
	 this.now = transkey[inputObj.id];
	 
	 if(this.now.tk_onKeyFlag == true ){
	 }else{
		 if(this.now.onKeyboardCount > 0){
			 this.now.tk_onKeyFlag = true;
			 if(onKeyboard_allocate||!this.now.allocate) {
		//		this.now.allocation();
				this.now.allocate=false;
				this.now.allocationIndex = new GenKey().tk_getrnd_int();
		
				if(useSession) {
					this.now.setKeyType(this.now.keyType);
					if(transkey_divType==0)
						this.now.setUrl();
				} else {
					this.now.setKeyIndex(this.now.inputObj);
				}
			 } else {
			 	 if(this.now!=null&&this.now.useTranskey){
				 	 this.now.setKeyType(this.now.keyType);
					 if(transkey_divType==0)
						 this.now.setUrl();
				 }
			 }
		 }
	 }
	 
	 if(this.now!=null&&this.now.useTranskey){
		 if(!this.checkWidthSize(this.now.width)){
			 this.getClientWidth();
			 this.reSize(this.now);
		 }
		
		this.now.clear();
		var div = this.now.div;	 
		inputObj.disabled=true;
		inputObj.blur();

		div.style.display="block";
		if(this.now.height == 0) {
			this.now.height = div.offsetHeight;
		}
		if(key_margin>0) {
			if(this.now.keyboardType=="numberMobile")
				div.style.height = this.now.height+key_margin*5-4+"px"
			else
				div.style.height = this.now.height+key_margin*6-5+"px"
		}
		
		this.setPosition();
		
		if(this.now.useInput){
			var inputHeight = getComputedStyle(this.now.useInputDiv).height.replace("px","")-getComputedStyle(this.now.useInputDiv).borderBottomLeftRadius.replace("px","");
			this.now.useInputDiv.style.width=div.clientWidth+"px";
			this.now.useInputDiv.style.left=div.style.left;
			if(inputObj.getAttribute("data-tk-bottom") == "true")
				mtk.now.useInputDiv.style.bottom=mtk.now.div.offsetHeight-getComputedStyle(mtk.now.useInputDiv).borderBottomLeftRadius.replace("px","")+"px";
			else
				this.now.useInputDiv.style.top=div.style.top.replace("px", "")-inputHeight+"px";
			this.now.useInputDiv.style.display="block";
		}
		
		inputObj.blur();
		
		setTimeout(function(){
			if(mtk.now!=null&&mtk.now.talkBack){
				if(transkey_divType==1){
					if(mtk.now.useInput || mtk.now.keyboardType=="patternMobile")
						mtk.now.div.firstChild.focus();
					else
						mtk.now.div.firstChild.firstChild.focus();
				} else {
					mtk.now.div.firstChild.focus();
				}
			}
		},100);
	 }
	 this.now.onKeyboardCount++;
 };

mTranskey.prototype.relocate = function(e, ele){
	mtk.keyPress(e, ele, false);
	this.now.relocate = true;
	this.now.allocate=false;
	mtk.onKeyboard(mtk.now.inputObj);
	this.now.relocate = false;
}

mTranskey.prototype.start = function(e, ele, index){

		mtk.keyPress(e, ele, useFakeKey);
	
		if(useTalkBack&&!clickDummy) {
			if(mtk.now.keyboardType=="numberMobile"){
				if(mtk.now.dki[index] == "=") {
					mtk.startCallBack();
					return;
				}
			} else {
				for(var i=0; i<mtk.now.dki.length; i++) {
					if(index == mtk.now.dki[i]) {
						mtk.startCallBack();
						return;
					}
				}
			}
		}
		
		var startMask = mtk.now.tk_Special_Mask_StartPos-1;
		var endMask = mtk.now.tk_Special_Mask_EndPos-1;
		var mask = mtk.now.tk_Special_Mask;
		
		var encrypted = mtk.getEncData(index);
		
		if(mtk.now.fieldType=="text") {
			if(mtk.now.inputObj.value.length >= startMask && mtk.now.inputObj.value.length <= endMask) {
				mtk.now.inputObj.value = mtk.now.inputObj.value + mask;
				if(mtk.now.useInput) {
					var value = mtk.now.inputObj.value;
					if(mtk.now.useInputDiv.childElementCount>4) {
						mtk.now.useInputDiv.childNodes[value.length*2+1].value = value[value.length-1];
					}
					else
						mtk.now.useInputDiv.childNodes[3].value = mtk.now.inputObj.value;
				}
				mtk.now.hidden.value += transkey_delimiter + encrypted;
				if(mtk.now.inputObj.maxLength>0){
					if (mtk.now.inputObj.value.length >= mtk.now.inputObj.maxLength) {
						this.close();
						return;
					}
				}
			} else {
				mtk.getText(encrypted, ele);
			}
		} else {
			mtk.now.inputObj.value = mtk.now.inputObj.value + "*";
			if(mtk.now.useInput) {
				var value = mtk.now.inputObj.value;
				if(mtk.now.useInputDiv.childElementCount>4) {
					mtk.now.useInputDiv.childNodes[value.length*2+1].value = value[value.length-1]
				}
				else
					mtk.now.useInputDiv.childNodes[3].value = mtk.now.inputObj.value;
			}
			mtk.now.hidden.value += transkey_delimiter + encrypted;
			if(mtk.now.inputObj.maxLength>0){
				if (mtk.now.inputObj.value.length >= mtk.now.inputObj.maxLength) {
					this.close();
					return;
				}
			}
		}

		mtk.startCallBack();
};

mTranskey.prototype.del = function(e, ele){
		mtk.keyPress(e, ele, false);
		
		mtk.now.inputObj.value = mtk.now.inputObj.value.substring(0, mtk.now.inputObj.value.length - 1);
		
		if(mtk.now.useInput) {
			var value = mtk.now.inputObj.value;
			if(mtk.now.useInputDiv.childElementCount>4) {
				mtk.now.useInputDiv.childNodes[(value.length+1)*2+1].value = ""
			}
			else
				mtk.now.useInputDiv.childNodes[3].value = mtk.now.inputObj.value;
		}
		 
		var pos = mtk.now.hidden.value.lastIndexOf(transkey_delimiter);
		mtk.now.hidden.value = mtk.now.hidden.value.substring(0, pos);

		mtk.delCallBack();
};
	
mTranskey.prototype.sp = function(e, ele){
	if(mtk.now.useSpecial){
		mtk.keyPress(e, ele, false);
		if(mtk.now.special){
			if(mtk.now.cap||!mtk.now.useLower)
				mtk.now.setKeyType("upper");
			else
				mtk.now.setKeyType("lower");
			mtk.now.special=false;
		}else{
			mtk.now.setKeyType("special");
			mtk.now.special=true;
		}
		
		mtk.now.setQwertyKey(mtk.now.keyType);

	}else{
		this.alert("sp");
	}
};

mTranskey.prototype.getFakeKey = function(){
	var rnd1,rnd2;
	if(this.now.keyboardType=="numberMobile"){
		rnd1 = getRandomValue(2);
		rnd2 = getRandomValue(6);
		
	}else{
		rnd1 = getRandomValue(4)+3;
		rnd2 = getRandomValue(11);
		if(rnd1==6){
			if(rnd2==0)
				rnd2=rnd2+1;
			else if(rnd2>8)
				rnd2=rnd2-getRandomValue(6);
		}
	}
	return mtk.now.div.children[rnd1].children[rnd2];
};

mTranskey.prototype.makePressImg = function(){
	var pressImg = document.createElement("img");
	pressImg.setAttribute("src", transkey_url + "/images/press.png");
	pressImg.setAttribute("style", transkey_divType==0?"width: 48px; position: absolute; left: 50%; margin-left: -24px;":"width: 48px; position: absolute; left: 50%; margin-left: -24px; margin-top: 5px;");
	return pressImg;
};

mTranskey.prototype.fakeKeyPress = function(fakeKey){
	try{
		if(this.fakeKey!=null){
			this.fakeKey.style.backgroundColor="";
			this.fakeKey.style.borderColor="";
		}
		this.fakeKey = fakeKey;

		fakeKey.style.backgroundColor="rgba(115, 115, 115, 0.63)";
		if(usePressImg)
			fakeKey.appendChild(mtk.fakePressImg);
	}catch(ee){
		console.log("[mTranskey Error] : Key setting error!");
	}

};


mTranskey.prototype.makeBalloonImg = function(){
	var BalloonImgLeft = document.createElement("div");
	BalloonImgLeft.setAttribute("id", "balloonimg");
	BalloonImgLeft.setAttribute("style", "	width: 150%;position: absolute; left:27%; margin-left: -29%; height: 165%;border-radius : 8px;background-size : 100% 100%;");
	BalloonImgLeft.style.backgroundImage="url('"+transkey_url+"/images/transkey_popup_left.png')"

	
	var BalloonImgMid = document.createElement("div");
	BalloonImgMid.setAttribute("id", "balloonimg");
	BalloonImgMid.setAttribute("style", "	width: 158%;position: absolute; left:0%; margin-left: -29%; height: 165%;border-radius : 8px;background-size : 100% 100%;");
	BalloonImgMid.style.backgroundImage="url('"+transkey_url+"/images/transkey_popup.png')"
	
	var BalloonImgRight = document.createElement("div");
	BalloonImgRight.setAttribute("id", "balloonimg");
	BalloonImgRight.setAttribute("style", "	width: 150%;position: absolute; left:-20%; margin-left: -29%; height: 165%;border-radius : 8px;background-size : 100% 100%;");
	BalloonImgRight.style.backgroundImage="url('"+transkey_url+"/images/transkey_popup_right.png')"
	
	return [BalloonImgLeft, BalloonImgMid, BalloonImgRight];
};

function balloonRemove(){
	if(document.getElementById("balloonimg")){
		document.getElementById("balloonimg").parentNode.removeChild(document.getElementById("balloonimg"));
	}
	if(document.getElementById("balloonlabel")){
		document.getElementById("balloonlabel").parentNode.removeChild(document.getElementById("balloonlabel"));
	}
}


mTranskey.prototype.keyPress = function(e, ele, useFK){

	if(document.getElementById("balloonimg")){
		document.getElementById("balloonimg").parentNode.removeChild(document.getElementById("balloonimg"));
	}
	if(document.getElementById("balloonlabel")){
		document.getElementById("balloonlabel").parentNode.removeChild(document.getElementById("balloonlabel"));
	}
	
	try{
		if(this.ele!=null){
			this.ele.style.backgroundColor="";
			this.ele.style.borderColor="";
		}
		this.ele=ele;
		if(e.preventDefault)
			e.preventDefault();
		var fakeKey=null;
	
		
		//To use custom css 
		var _cssName = mtk.now.inputObj.getAttribute("data-tk-cssName");
		if(_cssName==null){
			_cssName = "transkey";
		}
		
		//if you use Balloon,you can't use Fakekey at qwerty. (like mTCS)
		if(useBalloon && mtk.now.keyboardType.indexOf("qwerty")>-1){
			if(ele.parentElement.className.indexOf("end")<0 && ele.id != "mtk_cp" && ele.id != "mtk_del"){
				var BalloonImageIndex = 1;
				var buttonRectX = ele.getBoundingClientRect().x;
				var keypadWidth = ele.parentElement.getBoundingClientRect().width + 1;
				if(buttonRectX == 1){//left
					BalloonImageIndex = 0;
				}else if((buttonRectX + ele.clientWidth) ==  keypadWidth){//right
					BalloonImageIndex = 2;
				}		
					
				//set BalloonLabel attribute
				var BalloonLabel = document.createElement("div");
				BalloonLabel.setAttribute("id","balloonlabel");
				BalloonLabel.setAttribute("style","position: absolute; left: 50%;");
				BalloonLabel.setAttribute("class", "dv_"+_cssName+"_div2_2");
				BalloonLabel.style.backgroundImage = ele.firstElementChild.style.backgroundImage;
				BalloonLabel.style.backgroundPositionX = ele.firstElementChild.style.backgroundPositionX;
				BalloonLabel.style.backgroundPositionY = ele.firstElementChild.style.backgroundPositionY;
								
				mtk.balloonImgs[BalloonImageIndex].style.marginTop = (-ele.offsetHeight - 10 ) + "px";
				
				//change BalloonLabel location because button's height is change by css(media)
				if(ele.clientHeight==45){
					BalloonLabel.style.marginTop =  (-ele.clientHeight + 1) + "px";
				}else if(ele.clientHeight==50){
					BalloonLabel.style.marginTop =  (-ele.clientHeight + 2) + "px";
				}else{
					BalloonLabel.style.marginTop =  (-ele.clientHeight + 8) + "px";
				}	
		
				ele.appendChild(mtk.balloonImgs[BalloonImageIndex]);
				ele.appendChild(BalloonLabel);
			}else{
				//qwerty's special key 
				//select event
				ele.style.backgroundColor="rgba(115, 115, 115, 0.63)";
			}
		}else{//not balloon or numberkeypad
				
			if(useFK){
				fakeKey = this.getFakeKey();
				mtk.fakeKeyPress(fakeKey);
			}
			
			if(usePressImg){	
				//change pressImg location because button's height is change by css(media)
				if(ele.clientHeight==45){
					mtk.pressImg.style.marginTop = "-1px";
					mtk.fakePressImg.style.marginTop = "-1px";
				}else if(ele.clientHeight==50){
					mtk.pressImg.style.marginTop = "1px";
					mtk.fakePressImg.style.marginTop = "1px";
				}
				
				ele.appendChild(mtk.pressImg);
			}
			
			//selection
			ele.style.backgroundColor="rgba(115, 115, 115, 0.63)";			
		}
		
		
		setTimeout(function(){
			if(ele != null) {
				ele.style.backgroundColor="";
				ele.style.borderColor="";
				if(usePressImg && ele.contains(mtk.pressImg))
					ele.removeChild(mtk.pressImg);
			}
			
			if(useFK && fakeKey!=null){
				fakeKey.style.backgroundColor="";
				fakeKey.style.borderColor="";
				if(usePressImg && fakeKey.contains(mtk.fakePressImg))
					fakeKey.removeChild(mtk.fakePressImg);
			}
		},100);


		
	}catch(ee){
		console.log("[mTranskey Error] : Key setting error!");
	}
	
	return false;
};

mTranskey.prototype.startCallBack = function(){
	
};

mTranskey.prototype.clearCallBack = function(){
	
};

mTranskey.prototype.closeCallBack = function(){
	
};

mTranskey.prototype.delCallBack = function(){
	
};

mTranskey.prototype.doneCallBack = function(){
	
};

mTranskey.prototype.clear = function(e, ele){
	mtk.keyPress(e, ele, false);		
	mtk.now.clear();
	mtk.clearCallBack();
};

mTranskey.prototype.cap = function(e, ele){
	if(mtk.now.keyType.indexOf("special")>-1){
		return;
	}
	if(mtk.now.useCaps){
		mtk.keyPress(e, ele, false);
		if(mtk.now.cap){
			mtk.now.setKeyType("lower");
			mtk.now.cap = false;
		}else{
			mtk.now.setKeyType("upper");
			mtk.now.cap = true;
		}					
		
		mtk.now.setQwertyKey(mtk.now.keyType);
		mtk.now.special=false;
	}else{
		this.alert("cap");
	}
};
	
mTranskey.prototype.close = function(){
	document.body.style.webkitTapHighlightColor=mtk.webkitTapHighlightColor;
	mtk.now.inputObj.disabled=false;
//	setTimeout(function(){
		if(mtk.now!=null) {
			mtk.now.div.style.display="none";
			if(mtk.now.keyboardType=="qwertyMobile"){
				mtk.now.initKeyType();
				mtk.now.setKeyType(mtk.setKeyType(mtk.now.inputObj.getAttribute("data-tk-dataType")));
				mtk.now.setQwertyKey(mtk.now.keyType);
			}
			if(mtk.now.inputObj.maxLength>0 && mtk.now.inputObj.value.length > mtk.now.inputObj.maxLength) {
				mtk.now.inputObj.value = mtk.now.inputObj.value.substr(0, mtk.now.inputObj.maxLength);
			}
			if(mtk.now.useInput)
				mtk.now.useInputDiv.style.display="none";
			mtk.now.tk_onKeyFlag = false;
			if(mtk.now.nextFocus!=null&&useTalkBack) {
				var nextFocus = mtk.now.nextFocus;
				mtk.now=null;
				if(document.body.offsetWidth>=265)
					document.getElementById(nextFocus).focus();
			} else {
				mtk.now=null;
				document.body.focus();
			}
		}
//	},100);
	
	mtk.closeCallBack();
	return false;
};

mTranskey.prototype.done = function(e, ele){
	mtk.now.done();
	mtk.keyPress(e, ele, false);
	document.body.style.webkitTapHighlightColor=mtk.webkitTapHighlightColor;
	mtk.now.inputObj.disabled=false;
	setTimeout(function(){
		if(mtk.now!=null) {
			mtk.now.div.style.display="none";
			if(mtk.now.keyboardType=="qwertyMobile"){
				mtk.now.initKeyType();
				mtk.now.setKeyType(mtk.setKeyType(mtk.now.inputObj.getAttribute("data-tk-dataType")));
				mtk.now.setQwertyKey(mtk.now.keyType);
			}
			if(mtk.now.useInput)
				mtk.now.useInputDiv.style.display="none";
			mtk.now.tk_onKeyFlag = false;
			if(mtk.now.nextFocus!=null&&useTalkBack) {
				var nextFocus = mtk.now.nextFocus;
				mtk.now=null;
				document.getElementById(nextFocus).focus();
			} else {
				mtk.now=null;
				document.body.focus();
			}
		}
	},100);
	
	mtk.doneCallBack();
	return false;
};

mTranskey.prototype.focusout = function(inputObj){
	document.body.style.webkitTapHighlightColor=mtk.webkitTapHighlightColor;
	mtk.now.inputObj.disabled=false;
	if(mtk.now!=null) {
		mtk.now.div.style.display="none";
		if(mtk.now.useInput)
			mtk.now.useInputDiv.style.display="none";
		mtk.now.tk_onKeyFlag = false;
		if(inputObj!=null){
			inputObj.focus();
		}
	}
	return false;
};

mTranskey.prototype.patternClear = function(inputObj){
    for(var i=0; i<mtk.now.buttons.length; i++) {
        mtk.now.buttons[i].firstElementChild.className = "tk_pattern_btn";
    }
    for(var i=0; i<mtk.now.lines.length; i++) {
        mtk.now.lines[i].style.visibility = 'hidden';
    }
    mtk.now.inputObj.value = "";
    mtk.now.clear();
};

mTranskey.prototype.patternEnd = function(){
    mtk.patternClear();
}

mTranskey.prototype.alert = function(cmd){
	if(cmd=="setKeyboard")
		tk_alert("transkey : qwerty키보드는 text타입을 지원하지 않습니다.");
	else if(cmd=="sp"||cmd=="cap")
		tk_alert("해당키는 사용 할 수 없습니다.");
	else if(cmd=="session")
		tk_alert("세션이 만료되었습니다.");
	else 
		tk_alert("TouchEn transkey 라이선스에 문제가 발생했습니다. \n" +
				"[code : "+cmd+" , classification : "+mtk.licClassification+"]");
};


mTranskey.prototype.buttonListener = function(e){
	var obj;
	if (e.type == "text" || e.type == "password") {
		obj = event;
	} else {
		e = e ? e : window.event;
		obj = e.target ? e.target : e.srcElement;
	}
	var id = tk_btn_arr[obj.id];
	
	var v = obj.getAttribute("data-tk-btnValue");
	if(v=="true"){
		obj.className = "tk_btn";
		transkey[id].clear();
		transkey[id].useTranskey=false;
		if(mtk.now!=null)
			mtk.close();
		obj.setAttribute("data-tk-btnValue","false");
	}else{
		obj.className = "tk_btn_";
		transkey[id].useTranskey=true;
		mtk.onKeyboard(transkey[id].inputObj);
		obj.setAttribute("data-tk-btnValue","true");

	}
	
};

mTranskey.prototype.groupBtnListener = function(groupId){

	var v = mtk.groupBtns[groupId].getAttribute("data-tk-btnValue");
	
	for(i = 0; i<mtk.groupObjs[groupId].length; i++) {

		if(v=="true"){
			mtk.groupBtns[groupId].className = "tk_btn";
			mtk.groupObjs[groupId][i].clear();
			mtk.groupObjs[groupId][i].useTranskey=false;
			if(mtk.groupObjs[groupId][i].button != null) {
				mtk.groupObjs[groupId][i].button.className = "tk_btn";
			}
			if(mtk.now!=null)
				mtk.close();
			mtk.groupBtns[groupId].setAttribute("data-tk-btnValue","false");
		}else{
			mtk.groupBtns[groupId].className = "tk_btn_";
			mtk.groupObjs[groupId][i].useTranskey=true;
			if(mtk.groupObjs[groupId][i].button != null) {
				mtk.groupObjs[groupId][i].button.className = "tk_btn_";
			}
			mtk.groupBtns[groupId].setAttribute("data-tk-btnValue","true");
		}
		
	}
};

function findPos(obj) {
    var curleft = curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    }
    return {left: curleft,top: curtop};
};

mTranskey.prototype.reSize = function(transkeyObj){
	if(transkey_divType==0){
		mtk.reSizeForType0(transkeyObj);
	}else if(transkey_divType==1){
		mtk.reSizeForType1(transkeyObj);
	}
};

mTranskey.prototype.reSizeForType0 = function(transkeyObj){
	document.body.removeChild(transkeyObj.div);
//	if(transkeyObj.useInput)
//		transkeyObj.useInputDiv.style.display="none";
	var div = document.createElement("div");
	div.setAttribute("id", "mtk_"+transkeyObj.id);
	div.setAttribute("class", "transkey");
	var _cssName = transkeyObj.inputObj.getAttribute("data-tk-cssName");
	var keyboardType = transkeyObj.inputObj.getAttribute("data-tk-kbdType");
	var dataType = transkeyObj.inputObj.getAttribute("data-tk-dataType");
	var keyType;
	if(keyboardType=="qwerty"){
		this.setQwertyMobileLayout(transkeyObj.inputObj.id, div, _cssName);
		keyType = this.setKeyType(dataType);
	}
	else{
		this.setNumberMobileLayout(transkeyObj.inputObj.id, div, _cssName);
		keyType = "single";
	}
	div.style.backgroundImage="url("+transkey_url+"/images/loading.gif)";
	document.body.appendChild(div);

	transkeyObj.setDiv(div);
	transkeyObj.setWidth(this.clientWidth);

	transkeyObj.setUrl();
	
	if(transkeyObj.useInput){
		var maxLength = transkeyObj.inputObj.maxLength;
		
		var inputHeight = getComputedStyle(transkeyObj.useInputDiv).height.replace("px","")-getComputedStyle(transkeyObj.useInputDiv).borderBottomLeftRadius.replace("px","");
		transkeyObj.useInputDiv.style.width=transkeyObj.div.clientWidth+"px";
		transkeyObj.useInputDiv.style.left=transkeyObj.div.style.left;
		if(transkeyObj.inputObj.getAttribute("data-tk-bottom") == "true")
			transkeyObj.useInputDiv.style.bottom=transkeyObj.height-getComputedStyle(transkeyObj.useInputDiv).borderBottomLeftRadius.replace("px","")+"px";
		else
			transkeyObj.useInputDiv.style.top=transkeyObj.div.style.top.replace("px", "")-inputHeight+"px";
		
		if(maxLength>2&& maxLength<=10){
			if(transkey_divType==0)
				var margin = Math.floor((transkeyObj.width-37*maxLength)/(maxLength+1));
			else{
				if(max_width!=0&&max_width>=300&&mtk.clientWidth>max_width)
					var margin = Math.floor((max_width-37*maxLength)/(maxLength+1));
				else
					var margin = Math.floor(((mtk.clientWidth*widthRatio)-37*maxLength)/(maxLength+1));
			}
			
			for(var i=1; i<transkeyObj.useInputDiv.childElementCount; i++)
				transkeyObj.useInputDiv.childNodes[i].style.marginLeft=margin+"px";
		}
	}
	
	if(transkeyObj.talkBack){
		mtk.setTalkBackKeys(transkeyObj);
		mtk.setTalkBackText(transkeyObj);
	}
	transkeyObj.setKeyType(keyType);
};

mTranskey.prototype.reSizeForType1 = function(transkeyObj){
	if(transkeyObj.useInput){
		var maxLength = transkeyObj.inputObj.maxLength;
		
		var inputHeight = getComputedStyle(transkeyObj.useInputDiv).height.replace("px","")-getComputedStyle(transkeyObj.useInputDiv).borderBottomLeftRadius.replace("px","");
		transkeyObj.useInputDiv.style.width=transkeyObj.div.clientWidth+"px";
		transkeyObj.useInputDiv.style.left=transkeyObj.div.style.left;
		if(transkeyObj.inputObj.getAttribute("data-tk-bottom") == "true")
			transkeyObj.useInputDiv.style.bottom=transkeyObj.height-getComputedStyle(transkeyObj.useInputDiv).borderBottomLeftRadius.replace("px","")+"px";
		else
			transkeyObj.useInputDiv.style.top=transkeyObj.div.style.top.replace("px", "")-inputHeight+"px";
		
		if(transkeyObj.keyboardType=="numberMobile"&& maxLength>2&& maxLength<=10){
			if(transkey_divType==0)
				var margin = Math.floor((transkeyObj.width-37*maxLength)/(maxLength+1));
			else{
				if(max_width!=0&&max_width>=300&&mtk.clientWidth>max_width)
					var margin = Math.floor((max_width-37*maxLength)/(maxLength+1));
				else
					var margin = Math.floor(((mtk.clientWidth*widthRatio)-37*maxLength)/(maxLength+1));
			}
			
			for(var i=1; i<transkeyObj.useInputDiv.childElementCount; i++)
				transkeyObj.useInputDiv.childNodes[i].style.marginLeft=margin+"px";
		}
	}
	if(navigator.userAgent.indexOf("Firefox") > 0 && this.clientWidth >= 705){
		var divNum = 0.90;
		var divKeypad = 0.85;
	} else {
		var divNum = 0;
		var divKeypad = 0;
	}
	
	var _cssName = transkeyObj.inputObj.getAttribute("data-tk-cssName");
	if(_cssName==null){
		_cssName = "transkey";
	}
	
	var marginEdge = key_margin!=0?key_margin+1:0; //margin + border : border
	
	if(transkeyObj.keyboardType=="numberMobile"){

		var k=4;
		if(useNoDummy)
			var k=3;
	
		if(window.location.href.indexOf('noDummy') != -1 || window.location.href.indexOf('test') != -1 ||window.location.href.indexOf('index_mobile_WS') != -1){ // bwlim edit
			this.clientWidth = 400; // bwlim
		}
		if(max_width!=0&&max_width>=300&&this.clientWidth>max_width) {
	
			var ddivWidth = Math.floor((max_width-(k+1)-(marginEdge*(k+1)))/k)-divNum;
			var edgeSize = this.clientWidth-(Math.ceil(ddivWidth*k)+(k+1)+(marginEdge*(k+1)));
		}
		else {
			var ddivWidth = Math.floor(((this.clientWidth*widthRatio-(k+1)-(marginEdge*(k+1)))/k))-divNum;
			var edgeSize = this.clientWidth/widthRatio-(Math.ceil(ddivWidth*k)+(k+1)+(marginEdge*(k+1)));
		}
		var edgePx = new Array(k);
		for(var i=0;i<k;i++){
			if(i<edgeSize)
				edgePx[i]=1;
			else
				edgePx[i]=0;
		}
		
		for(var i=1; 5>i; i++){
			if(key_margin>0) {
				if(i==1)
					transkeyObj.div.childNodes[i].classList.remove("dv_"+_cssName+"_div_a");
				transkeyObj.div.childNodes[i].style.marginTop=key_margin+"px";
				transkeyObj.div.childNodes[i].style.marginRight=key_margin+"px";
				transkeyObj.div.childNodes[i].style.border=key_margin+"px";
				transkeyObj.div.childNodes[i].style.border=key_margin+"px";
				transkeyObj.div.childNodes[i].style.borderRight="0px";
			}
			if(i==4){
				transkeyObj.div.childNodes[i].childNodes[0].style.width=ddivWidth+edgePx[0]+"px";
				transkeyObj.div.childNodes[i].childNodes[1].style.width=ddivWidth+edgePx[1]+"px";
				transkeyObj.div.childNodes[i].childNodes[2].style.width=ddivWidth+ddivWidth+1+edgePx[2]+edgePx[3]+marginEdge+"px";		
				if(useNoDummy)
					transkeyObj.div.childNodes[i].childNodes[2].style.width=ddivWidth+edgePx[2]+"px";
				if(key_margin>0) {
					for(var j=0; 3>j; j++) {
						transkeyObj.div.childNodes[i].childNodes[j].style.marginLeft=key_margin+"px";
						transkeyObj.div.childNodes[i].childNodes[j].style.border="1px solid rgb(217, 218, 226)";
						transkeyObj.div.childNodes[i].childNodes[j].style.borderRight="0px;";
					}
				}
				
			}else{
				for(var j=0; k>j; j++){
					transkeyObj.div.childNodes[i].childNodes[j].style.width=ddivWidth+edgePx[j]+"px";
					if(key_margin>0) {
						transkeyObj.div.childNodes[i].childNodes[j].style.marginLeft=key_margin+"px";
						transkeyObj.div.childNodes[i].childNodes[j].style.border="1px solid rgb(217, 218, 226)";
						transkeyObj.div.childNodes[i].childNodes[j].style.borderRight="0px;";
						if(j==k-1)
							transkeyObj.div.childNodes[i].childNodes[j].classList.remove("dv_"+_cssName+"_end");
					}
				}
			}
		}
	} else if(transkeyObj.keyboardType=="qwertyMobile"){
		if(max_width!=0&&max_width>=300&&this.clientWidth>max_width) {
			var ddivWidth = Math.floor((max_width-12-(marginEdge*12))/11)-divKeypad;
			var edgeSize = this.clientWidth-((ddivWidth*11+12+(marginEdge*12)));
		}
		else {
			var ddivWidth = Math.floor((this.clientWidth*widthRatio-12-(marginEdge*12))/11)-divKeypad;
			var edgeSize = this.clientWidth/widthRatio-((ddivWidth*11+12+(marginEdge*12)));
		}
		var edgePx = new Array(11);
		for(var i=0;i<11;i++){
			if(i<edgeSize)
				edgePx[i]=1;
			else
				edgePx[i]=0;
		}
		
		for(var i=1; 6>i; i++){
			if(key_margin>0) {
				if(i==1)
				transkeyObj.div.childNodes[i].classList.remove("dv_"+_cssName+"_div_a");
				transkeyObj.div.childNodes[i].style.marginTop=key_margin+"px";
				transkeyObj.div.childNodes[i].style.marginRight=key_margin+"px";
				transkeyObj.div.childNodes[i].style.border=key_margin+"px";
				transkeyObj.div.childNodes[i].style.border=key_margin+"px";
				transkeyObj.div.childNodes[i].style.borderRight="0px";
			}
			if(i==5){
				if(useSpace) {
					transkeyObj.div.childNodes[i].childNodes[0].style.width=ddivWidth+ddivWidth+1+edgePx[0]+edgePx[1]+marginEdge+"px";
					transkeyObj.div.childNodes[i].childNodes[1].style.width=ddivWidth+ddivWidth+1+edgePx[2]+edgePx[3]+marginEdge+"px";
					transkeyObj.div.childNodes[i].childNodes[2].style.width=ddivWidth+ddivWidth+ddivWidth+2+edgePx[4]+edgePx[5]+edgePx[6]+marginEdge+marginEdge+"px";
					transkeyObj.div.childNodes[i].childNodes[3].style.width=4*ddivWidth+3+edgePx[7]+edgePx[8]+edgePx[9]+edgePx[10]+marginEdge+marginEdge+marginEdge+"px";
					if(key_margin>0) {
						for(var j=0; 4>j; j++) {
							transkeyObj.div.childNodes[i].childNodes[j].style.marginLeft=key_margin+"px";
							transkeyObj.div.childNodes[i].childNodes[j].style.border="1px solid rgb(217, 218, 226)";
							transkeyObj.div.childNodes[i].childNodes[j].style.borderRight="0px;";
							if(j==3)
								transkeyObj.div.childNodes[i].childNodes[j].classList.remove("dv_"+_cssName+"_end");
						}
					}
				}
				else {
					transkeyObj.div.childNodes[i].childNodes[0].style.width=ddivWidth+ddivWidth+ddivWidth+2+edgePx[0]+edgePx[1]+edgePx[2]+marginEdge+marginEdge+"px";
					transkeyObj.div.childNodes[i].childNodes[1].style.width=ddivWidth+ddivWidth+ddivWidth+2+edgePx[3]+edgePx[4]+edgePx[5]+marginEdge+marginEdge+"px";
					transkeyObj.div.childNodes[i].childNodes[2].style.width=5*ddivWidth+4+edgePx[6]+edgePx[7]+edgePx[8]+edgePx[9]+edgePx[10]+marginEdge+marginEdge+marginEdge+marginEdge+"px";
					if(key_margin>0) {
						for(var j=0; 3>j; j++) {
							transkeyObj.div.childNodes[i].childNodes[j].style.marginLeft=key_margin+"px";
							transkeyObj.div.childNodes[i].childNodes[j].style.border="1px solid rgb(217, 218, 226)";
							transkeyObj.div.childNodes[i].childNodes[j].style.borderRight="0px;";
							if(j==2)
								transkeyObj.div.childNodes[i].childNodes[j].classList.remove("dv_"+_cssName+"_end");
						}
					}
				}
			}else if(i==4){
				for(var j=0; 9>j; j++){
					transkeyObj.div.childNodes[i].childNodes[j].style.width=ddivWidth+edgePx[j]+"px";
					if(key_margin>0) {
						transkeyObj.div.childNodes[i].childNodes[j].style.marginLeft=key_margin+"px";
						transkeyObj.div.childNodes[i].childNodes[j].style.border="1px solid rgb(217, 218, 226)";
						transkeyObj.div.childNodes[i].childNodes[j].style.borderRight="0px;";
					}
				}
				transkeyObj.div.childNodes[i].childNodes[9].style.width=ddivWidth+ddivWidth+1+edgePx[9]+edgePx[10]+marginEdge+"px";
				if(key_margin>0) {
					transkeyObj.div.childNodes[i].childNodes[9].style.marginLeft=key_margin+"px";
					transkeyObj.div.childNodes[i].childNodes[9].style.border="1px solid rgb(217, 218, 226)";
					transkeyObj.div.childNodes[i].childNodes[9].style.borderRight="0px;";
					transkeyObj.div.childNodes[i].childNodes[9].classList.remove("dv_"+_cssName+"_end");
				}
			}else{
				for(var j=0; 11>j; j++){
					transkeyObj.div.childNodes[i].childNodes[j].style.width=ddivWidth+edgePx[j]+"px";
					if(key_margin>0) {
						transkeyObj.div.childNodes[i].childNodes[j].style.marginLeft=key_margin+"px";
						transkeyObj.div.childNodes[i].childNodes[j].style.border="1px solid rgb(217, 218, 226)";
						transkeyObj.div.childNodes[i].childNodes[j].style.borderRight="0px;";
						if(j==10)
							transkeyObj.div.childNodes[i].childNodes[j].classList.remove("dv_"+_cssName+"_end");
						if(i==1)
							transkeyObj.div.childNodes[i].childNodes[j].classList.add("dv_"+_cssName+"_div_a");
					}
				}
			}
		}
	} else {
	
		var k=3;
		
		if(max_width!=0&&max_width>=300&&this.clientWidth>max_width) {
			var ddivWidth = Math.floor((max_width-(k+1)-(marginEdge*(k+1)))/k)-divNum;
			var edgeSize = this.clientWidth-(ddivWidth*k+(k+1)+(marginEdge*(k+1)));
		}
		else {
			var ddivWidth = Math.floor(((this.clientWidth*widthRatio-(k+1)-(marginEdge*(k+1)))/k))-divNum;
			var edgeSize = this.clientWidth/widthRatio-(ddivWidth*k+(k+1)+(marginEdge*(k+1)));
		}
		var edgePx = new Array(k);
		for(var i=0;i<k;i++){
			if(i<edgeSize)
				edgePx[i]=1;
			else
				edgePx[i]=0;
		}
		for(var i=1; 4>i; i++){
			if(key_margin>0) {
				if(i==1)
					transkeyObj.div.childNodes[i].classList.remove("dv_"+_cssName+"_div_a");
				transkeyObj.div.childNodes[i].style.marginTop=key_margin+"px";
				transkeyObj.div.childNodes[i].style.marginRight=key_margin+"px";
				transkeyObj.div.childNodes[i].style.border=key_margin+"px";
				transkeyObj.div.childNodes[i].style.border=key_margin+"px";
				transkeyObj.div.childNodes[i].style.borderRight="0px";
			}
			for(var j=0; k>j; j++){
//				transkeyObj.div.childNodes[i].childNodes[j].style.width=ddivWidth+edgePx[j]+"px";
				if(key_margin>0) {
					transkeyObj.div.childNodes[i].childNodes[j].style.marginLeft=key_margin+"px";
					transkeyObj.div.childNodes[i].childNodes[j].style.border="1px solid rgb(217, 218, 226)";
					transkeyObj.div.childNodes[i].childNodes[j].style.borderRight="0px;";
					if(j==k-1)
						transkeyObj.div.childNodes[i].childNodes[j].classList.remove("dv_"+_cssName+"_end");
				}
			}
		}
	}
};

mTranskey.prototype.reSizeListener = function(){
	if(mtk.now!=null){
		if(document.body.offsetWidth<265){
			tk_alert("현재 크기에서는 키패드를 지원하지 않습니다.\n더 큰 화면에서 실행해주세요.\n현재 키패드를 종료합니다.");
		 	mtk.now.inputObj.readOnly=true;
			mtk.close();
			return;
		}else {
			if(mtk.now.inputObj.readOnly==true) mtk.now.inputObj.readOnly=false;
		}
	}
	mtk.getClientWidth();
	if(mtk.now!=null){
		if(transkey_divType==1) {
			if(!mtk.checkWidthSize(mtk.now.width)){
				mtk.reSize(mtk.now);
			}
		}
		 var div = mtk.now.div;
		 var maxLength = mtk.now.inputObj.maxLength;
		
		 
		 mtk.setPosition();
		if(mtk.now.useTranskey)
			div.style.display="block";
		if(mtk.now.useInput){
			var inputHeight = getComputedStyle(mtk.now.useInputDiv).height.replace("px","")-getComputedStyle(mtk.now.useInputDiv).borderBottomLeftRadius.replace("px","");
			mtk.now.useInputDiv.style.left=div.style.left;
			if(mtk.now.inputObj.getAttribute("data-tk-bottom") == "true")
				mtk.now.useInputDiv.style.bottom = mtk.now.div.offsetHeight-getComputedStyle(mtk.now.useInputDiv).borderBottomLeftRadius.replace("px","")+"px";
			else
				mtk.now.useInputDiv.style.top = div.style.top.replace("px", "")-inputHeight+"px";
			
			if(transkey_divType == 1){
				//preview keybaord input width 
				//크기는 border크기를 합한 offsetWidth 사용
				if(key_margin!=0){
					mtk.now.useInputDiv.style.width=(div.childNodes[1].childNodes[0].offsetWidth * div.childNodes[1].childNodes.length)+( key_margin * (div.childNodes[1].childNodes.length+1) )+"px";
				}else{
					mtk.now.useInputDiv.style.width=div.childNodes[1].childNodes[0].offsetWidth * div.childNodes[1].childNodes.length+"px";
				}
				
			}
			else{
				mtk.now.useInputDiv.style.width=div.clientWidth+"px";
				}
			
			if(maxLength>2&& maxLength<=10){
				if(transkey_divType==0)
					var margin = Math.floor((mtk.now.width-37*maxLength)/(maxLength+1));
				else{
					if(max_width!=0&&max_width>=300&&mtk.clientWidth>max_width)
						var margin = Math.floor((max_width-37*maxLength)/(maxLength+1));
					else
						var margin = Math.floor(((mtk.clientWidth*widthRatio)-37*maxLength)/(maxLength+1));
				}
				
				for(var i=2; i<mtk.now.useInputDiv.childElementCount; i++)
					mtk.now.useInputDiv.childNodes[i].style.marginLeft=margin+"px";
			}
		}
	}
};

function tk_contains(parent, child, deep) {
	if (parent == child || (mtk.now.useInputDiv != null && mtk.now.useInputDiv.contains(child))||child.id=="balloonimg")
    	return true;
    	

    var items = parent.children;
    var count = items.length;

    for ( var i = 0; i < count; i++) {
    	if (items[i] == child)
    		return true;
    	if (deep == true && tk_contains(items[i], child, deep))
    		return true;
	}
	return false;
}

function checkTransKey(nsEvent) {
    var inputObj;
	
    if (nsEvent.type == "text" || nsEvent.type == "password") {
          inputObj = event;
    } else {
          nsEvent = nsEvent ? nsEvent : window.event;
          inputObj = nsEvent.target ? nsEvent.target : nsEvent.srcElement;
    }
    
    if(mtk.now!=null){
    	if(mtk.now.div.style.display=="block") {
	        var transkeyDiv = mtk.now.div;
	        var transkeyObj = mtk.now;
	        
	        if(inputObj.tagName == "INPUT" && inputObj.id == transkeyObj.id) {
	        	mtk.focusout(inputObj);
	        } else if (tk_contains(transkeyDiv, inputObj, true) == false) {
	    		mtk.close();
	        }
        }
    }
}

function checkCookie() {
	   var cookieEnabled;
	   if (document.all)
	       cookieEnabled = navigator.cookieEnabled;
	   else {
	       var cookieName = 'checkCookie' + (new Date().getTime());
	       document.cookie = cookieName + '=cookieValue';
	       cookieEnabled = document.cookie.indexOf(cookieName) != -1;
	       document.cookie = cookieName + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
	   }
	   if (!cookieEnabled){
		     tk_alert("브라우저에서 쿠키가 차단되어있습니다. 설정에서 쿠키를 허용해주세요.");
		   cookie_check_val = false;
	   }
}

function removeArray(arr, item) {
	if(!Array.prototype.indexOf) {
	    Array.prototype.indexOf = function(arg, i) {
	        i = i || 0;
	        var len = this.length;
	        while (i < len) {
	            if(this[i] === arg) return i;
	            ++i;
	        }
	        return -1;
	    };
	}
	
    var a = arguments;
    var len = a.length;
    var index;
    
    while (len > 1 && arr.length) {
    	item = a[--len];
        while ((index= arr.indexOf(item)) !== -1) {
            arr.splice(index, 1);
        }
    }
    
    return arr;
}

//chrome92로 alert => div로 변환(popup형식)
var alertCnt=0;
function getChromeVersion(){

	var userAgent = navigator.userAgent;
	var reg = null;
	var browser = {
	 name: null,
	 version: null
	 };
	userAgent = userAgent.toLowerCase();
	if(userAgent.indexOf("chrome")!= -1){
		reg = /chrome\/(\S+)/;
		browser.name = "Chrome";
		browser.version = reg.exec(userAgent)[1];		
		}
	else
		browser.version=null;
	return browser.version;
		
	}
	

function tk_alert(tk_popup_comment) {
	
	this.isiPad = navigator.userAgent.indexOf("iPad")>-1;
	this.isiPhone = navigator.userAgent.indexOf("iPhone")>-1;
	this.isAndroid = navigator.userAgent.indexOf("Android")>-1;
		
	if(this.isAndroid){
		var chromeVer = getChromeVersion();
		if(chromeVer!=null) {
			if(tkAlert.useDivAlert==true && chromeVer.split(".")[0] >= tkAlert.EngineVer)
				create_alert(tk_popup_comment);
			else
				alert(tk_popup_comment);
		} else {
			if(tkAlert.useDivAlert==true)
				create_alert(tk_popup_comment);
			else
				alert(tk_popup_comment);
		}
	}
	else{
		if(tkAlert.useDivAlert==true)
			create_alert(tk_popup_comment);
		else
			alert(tk_popup_comment);
	}
}

function create_alert(tk_popup_comment){
	   alertCnt++;
	   var div1 = document.getElementById("tk_alert")
	   if(!div1) {
	      div1 = document.createElement("DIV");
	      div1.id = "tk_alert";
	      div1.style.position = "absolute";
	      div1.style.height = document.body.clientHeight + 100 + "px";
	      div1.style.width = document.body.clientWidth + "px";
	      div1.style.top = "0";
	      div1.style.left = "0";
	      div1.style.opacity = "0.4";
	      div1.style.filter = "alpha(opacity=40)";
	   }

	   var div2 = document.createElement("DIV");      //글자 들어가는 부분(닫기)
	   div2.id = "tk_alert_popupmessage"+alertCnt;
	   
	   div2.style.cssText = "color:grey;width: 200px;z-index: 10001;border: 1px solid gray;border-radius: 11px;background: white;font-family:monospace; position: fixed; white-space:pre-wrap; word-break:break-all;";
	   div2.innerHTML = "";
	   div2.innerHTML += "<div style='margin: 5px;margin-top: 15px;'>" + 
	   "<span id='tk_LayerText1' role='button' tabindex='0' aria-label='" + tk_popup_comment+"'>" + tk_popup_comment + "</span>" +
	   "</div>";
	   div2.innerHTML += "<div style='margin: 5px;'>";   
	   div2.innerHTML += "<span id='layerClose'><button onclick='tk_alertLayerClose();' style='font-size: medium;background: #9d9d9d;border-radius: 15px;margin: 10px;height:30px;width: 80px;border: 3px solid #9d9d9d;font-family: monospace;' role='button' tabindex='0' aria-label='닫기'>닫기</button></span>";
	   div2.innerHTML += "</div>";

	   var div3 = document.createElement("DIV");
	   div3.id = "tk_alert_popup"+alertCnt;
	   div3.style.cssText = "position:absolute;  display: table-cell;text-align: center; vertical-align: middle; color: white;z-index: 10000;";  
	   div3.appendChild(div2);

	   document.body.appendChild(div1);
	   document.body.appendChild(div3);
	   
	   setTimeout(function(){
	   	div2.firstChild.firstChild.focus();
	   },100);
	   
	   tk_alertLayerResize();
	   disableScrolling();
	   window.onresize = function(event) {
	      tk_alertLayerResize();
	   };
	}

function tk_alertLayerResize() {
	var div2 = document.getElementById("tk_alert_popup"+alertCnt);
	for(var i=0; i<=alertCnt; i++) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
		var div2 = document.getElementById("tk_alert_popup"+i);
	   if (div2) {
		   div2.style.top = (window.innerHeight / 2) - (div2.children[0].clientHeight / 2) + "px";
	       div2.style.left = (window.innerWidth / 2) - (div2.children[0].clientWidth / 2) + "px";
	   }
	}
}

function tk_alertLayerClose() {
                                                                                                                                                                                                                                                                                                                                                                                                                          
	var div1 = document.getElementById("tk_alert");
	var div2 = document.getElementById("tk_alert_popup"+alertCnt);

	if(alertCnt>1){		
		document.body.removeChild(div2); 
	      }
	else{
    	document.body.removeChild(div2); 
    	document.body.removeChild(div1);
    	enableScrolling();
	    }
	alertCnt--; 
}

function disableScrolling(){
	document.body.style.overflow = "hidden";
}

function enableScrolling(){
	document.body.style.overflow = "auto";
}


function Key_csp() {
	this.name = "";
	
	this.npoints = 0;
	this.xpoints = new Array();
	this.ypoints = new Array();
	
	this.addPoint = function(x, y) {
		this.npoints++;
		this.xpoints.push(x);
		this.ypoints.push(y);
	};
	
	this.contains = function(x, y) {
		var startx = this.xpoints[0];
		var starty = this.ypoints[0];
		
		var endx = this.xpoints[2];
		var endy = this.ypoints[2];
		
		if ( startx < x && starty < y )
		{
			if ( endx > x && endy > y )
			{
				return 1;
			}
		}
		
		return 0;
	};
}

function getKeyArray(func){
	var funcArr = func.split("\n");
	var qwertyMobile = new Array();
	var numberMobile = new Array();
	var key;
	
	for(var i = 0; i< funcArr.length; i++){
		if(funcArr[i].indexOf("new Key")>-1){
			key = new Key_csp;
			continue;
		}
		if(funcArr[i].indexOf(".name")>-1){
			var nameArr = funcArr[i].split("\"");
			key.name = nameArr[1];
			continue;
		}
		if(funcArr[i].indexOf(".addPoint")>-1){
			var pointArr = funcArr[i].split(",");
			var firstPoint = pointArr[0].substr(pointArr[0].indexOf("(")+1);
			var secondPoint = pointArr[1].substr(1,pointArr[1].indexOf(")")-1);
			key.addPoint(firstPoint, secondPoint);
			continue;
		}
		if(funcArr[i].indexOf(".push")>-1){
			if(funcArr[i].indexOf("qwerty")>-1){
				qwertyMobile.push(key);
			}
			else{
				numberMobile.push(key);
			}
			continue;
		}
	}
	
	return [qwertyMobile, numberMobile];
}

function getLicType(func){
	var funcArr = func.split("\n");
	var licTypeArr = funcArr[funcArr.length-3].split("=");
	return parseInt(licTypeArr[1].replace(";",""));
}

function getLicExpiredDate(func){
	var funcArr = func.split("\n");
	var expiredDateArr = funcArr[funcArr.length-2].split("=");
	return expiredDateArr[1].replace(";","").replaceAll("\"","");
}
