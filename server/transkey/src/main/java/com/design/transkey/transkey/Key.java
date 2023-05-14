package transkey;

import java.awt.Polygon;

public class Key {
	public String name;
	public Polygon bounds = new Polygon();
	
	public Key(String name, Polygon bounds) {
		this.name = name;
		this.bounds = bounds;
	}
}
