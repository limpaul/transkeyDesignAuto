package com.design.transkey.transkey;
  
import java.io.Serializable;

public class SSKey implements Serializable {
	public String sessionKey;
	
	public SSKey(String sessionKey) {
		this.sessionKey = sessionKey;
	}
	
	public SSKey() {
		
	}
}