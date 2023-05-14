package com.design.transkey.transkey;

import java.io.Serializable;
 
public class Keyboard implements Serializable {
	public boolean isTwin;
	public String path;
	public long index;
	
	public Keyboard(boolean isTwin, String path, long index) {
		this.isTwin = isTwin;
		this.path = path;
		this.index = index;
	}
}