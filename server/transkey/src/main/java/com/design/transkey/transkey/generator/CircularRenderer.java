package com.design.transkey.transkey.generator;

import java.awt.FontFormatException;
import java.io.File;
import java.io.IOException;
import java.util.HashSet;
import java.util.Vector;

public class CircularRenderer extends LinearRenderer {
	protected int circleIdx;
	
	public CircularRenderer(File dirBase, Vector params) throws IOException, FontFormatException {
		super(dirBase, params);
	}
	
	public void init() {
		super.init();
		
		circleIdx = 0;
	}
	
	public boolean next() {
		while(true) {
			if(super.next()) {
				return true;
			} else if(++circleIdx < chars.length) {
				super.init();
				super.next();
				
				return true;
			} else {
				return false;
			}
		}
	}
	
	public void random() {
		super.random();
		
		circleIdx = (int)(Math.random() * (chars.length));
	}
	
	protected Vector generateChars(char[] chars) {
		Vector cs = new Vector(chars.length + dummyIdxs.length);
System.out.println("======== 3");

	
		for(int i = 0; i < chars.length; i++) {
System.out.println("char[i] : " + chars[i]);
			cs.add(new Character(chars[i]));
		}
	
		//for(int i = 0; i < dummyIdxs.length; i++) {	
		if(dummyIdxs.length != 0)
		{
System.out.println("dummyIdxs.length : " + dummyIdxs.length);
			cs.add(dummyIdxs[0], new Character(' '));
			
			int a = chars.length % 2;				
			
			if(a == 0)
			{				
				if(dummyIdxs[0] <= 4)
					cs.add(chars.length - dummyIdxs[0] + 1, new Character(' '));
				else
					cs.add(chars.length - dummyIdxs[0], new Character(' '));
			}
		}
		
//System.out.println("i : " + 0 + "  dummyIdxs[i] : " + dummyIdxs[0] + "  dummyIdxs.length : " + dummyIdxs.length + "  chars.length : " + chars.length);
	//}
System.out.println("cs : " + cs);		
		return cs;






/*
		for(int i = 0; i < chars.length; i++) {
			cs.add(new Character(chars[i]));
		}
		
		for(int i = 0; i < circleIdx; i++) {
			cs.add(0, cs.remove(cs.size() - 1));
		}
		
		
		for(int i = 0; i < dummyIdxs.length; i++) {
			cs.add(dummyIdxs[i], new Character(' '));
		}
		
		return cs;
*/
	}

	public static void main(String[] args) throws Throwable {
		
		Vector params = new Vector();
		params.add(new Param("chars", "0123456789"));
		params.add(new Param("dummy.count", "2"));
		
		Renderer renderer = new CircularRenderer(null, params);
		int count = 0;
		
		HashSet set2 = new HashSet();
		while(true) {
			renderer.random();
			String chars = renderer.render(null);
			set2.add(chars);
			count++;
			if(count % 5000 == 0) {
				System.out.println(set2.size());
				break;
			}
		}
		
		count = 0;
		HashSet set = new HashSet();
		renderer.init();
		while(renderer.next()) {
			count++;
			String chars = renderer.render(null);
			set.add(chars);
			System.out.println(chars);
		}
		System.out.println("total=" + count);
		System.out.println("set=" + set.size());
		set2.removeAll(set);
		System.out.println(set2);
		
	}
}
