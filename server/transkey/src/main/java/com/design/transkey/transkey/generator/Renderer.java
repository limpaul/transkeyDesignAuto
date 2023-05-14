package com.design.transkey.transkey.generator;

import java.awt.Graphics2D;
import java.util.Vector;

public interface Renderer {
	void init();
	boolean next();
	void random();
	String render(Graphics2D g);
	String renderUpperCase(Graphics2D g);
	String renderLowerCase(Graphics2D g);
	String renderSpecialCase(Graphics2D g);
	
	Vector getKeys();
	Vector getUpperCaseKeys();
	Vector getLowerCaseKeys();
	Vector getSpecialCaseKeys();
	void setDebug(boolean b);
}
