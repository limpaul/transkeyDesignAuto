package com.design.transkey.transkey.generator;

import java.awt.Color;
import java.awt.Font;
import java.awt.FontFormatException;
import java.awt.Graphics2D;
import java.awt.Point;
import java.awt.Polygon;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Vector;

import javax.imageio.ImageIO;


import com.design.transkey.transkey.Key;
public class LinearRenderer implements Renderer {
	
	protected boolean DEBUG = false;
	
	protected File dirBase;
	
	protected char[] chars = {};
	protected char[] upperChars = {};
	protected char[] lowerChars = {};
	protected char[] specialChars = {};
	
	protected char[] displayLowChars = {};
	protected char[] displayUpperChars = {};
	protected Map<String, String> upperDisplayChar = new HashMap<String, String>();
	protected Map<String, String> lowerDisplayChar = new HashMap<String, String>();


	protected BufferedImage imgDummy;
	
	protected Font font;
	protected Point fontLocation = new Point(0, 0);
	protected Point specialFontLocation = new Point(0, 0);
	protected Color fontColor = Color.BLACK;
	
	protected Vector polygons = new Vector();
	
	protected int[] dummyIdxs = new int[1];
	
	protected int displayY = 7;
	protected int displayFontSize = 11;
	
	protected boolean shuffleChar = false;
	
	public LinearRenderer(File dirBase, Vector params) throws IOException, FontFormatException {
		this.dirBase = dirBase;

		Font fontBase = new Font("Arial", Font.PLAIN, 18); 
		String fontType = "PLAIN";
		int fontSize = 18;
		
		Iterator i = params.iterator();
		while(i.hasNext()) {	
			Param param = (Param)i.next();
			String key = (String)param.key;
			String value = (String)param.value;
			
			if("chars".equals(key)) {
				lowerChars = upperChars = chars = new char[value.length()];
				for(int j = 0; j < value.length(); j++) {
					chars[j] = value.charAt(j);
				}
			} else if("chars.upper".equals(key)) {
				upperChars = new char[value.length()];
				for(int j = 0; j < value.length(); j++) {
					upperChars[j] = value.charAt(j);
				}
			} else if("chars.lower".equals(key)) {
				chars = lowerChars = new char[value.length()];
				for(int j = 0; j < value.length(); j++) {
					lowerChars[j] = value.charAt(j);
				}
			} else if("chars.special".equals(key)) {
				specialChars = new char[value.length()];
				for(int j = 0; j < value.length(); j++) {
						specialChars[j] = value.charAt(j);
				}
			}else if("chars.display.L".equals(key)) {
				displayLowChars = new char[value.length()];
				for(int j = 0; j < value.length(); j++) {
					lowerDisplayChar.put(Character.toString(lowerChars[j]), Character.toString(value.charAt(j)));
					
					displayLowChars[j] = value.charAt(j);
System.out.println("displayChars[j] : " + displayLowChars[j] + "    key : " + key + "   value : " + value);
				}
			}else if("chars.display.U".equals(key)) {
				displayUpperChars = new char[value.length()];
				for(int j = 0; j < value.length(); j++) {
					upperDisplayChar.put(Character.toString(upperChars[j]), Character.toString(value.charAt(j)));
					
					displayUpperChars[j] = value.charAt(j);
System.out.println("displayChars[j] : " + displayUpperChars[j] + "    key : " + key + "   value : " + value);
				}
			}  else if("dummy.count".equals(key)) {
				dummyIdxs = new int[Integer.parseInt(value)];
			} else if("dummy.file".equals(key)) {
				imgDummy = ImageIO.read(new File(dirBase, value));
			} else if("font.file".equals(key)) {
				fontBase = Font.createFont(Font.TRUETYPE_FONT, new File(dirBase, value));
			} else if("font.type".equals(key)) {
				fontType = value;
			} else if("font.size".equals(key)) {
				fontSize = Integer.parseInt(value);
			} else if("font.color".equals(key)) {
				fontColor = Generator.toColor(value);
			} else if("font.location".equals(key)) {
				fontLocation = Generator.toPoint(value);
			}else if("specialFont.location".equals(key)) {
				specialFontLocation = Generator.toPoint(value);
			} else if("display.y".equals(key)) {
				displayY = Integer.parseInt(value);
			} else if("display.size".equals(key)) {
				displayFontSize = Integer.parseInt(value);
			} else if(key.startsWith("key")) {
				polygons.add(Generator.toPolygon(value));
			} else if("shuffle".equals(key)) {
				if("true".equals(value))
					shuffleChar = true;
			}
		}
		font = fontBase.deriveFont("BOLD".equals(fontType) ? Font.BOLD : "ITALIC".equals(fontType) ? Font.ITALIC : Font.PLAIN, fontSize);
		init();
	}
	
	public void init() {
		if(dummyIdxs.length != 0)
		{
			for(int i = 0; i < dummyIdxs.length; i++)
				dummyIdxs[i] = i;
			
			dummyIdxs[dummyIdxs.length - 1]--;			
		}
	}

	public boolean next() {
		int pos = dummyIdxs.length - 1;
		
//System.out.println("dummyIdxs.length : " + dummyIdxs.length);	
		for( ; pos >= 0; pos--) {
			dummyIdxs[pos]++;
			
			for(int i = pos + 1; i < dummyIdxs.length; i++){
				dummyIdxs[i] = dummyIdxs[i - 1] + 1;
//System.out.println("dummyIdxs[i] : " + dummyIdxs[i]);
			}
			
			if(dummyIdxs[pos] < chars.length + pos + 1) {
//System.out.println("pos : " + pos + "dummyIdxs[pos] : " + dummyIdxs[pos] + "    chars.length : " + chars.length + "   dummyIdxs.length : " + dummyIdxs.length);
//System.out.println("dummyIdxs[0] : " + dummyIdxs[0]);
				return true;
			}
		}
		
		return pos != -1;
	}
	
	public void random() {
		for(int i = 0; i < dummyIdxs.length; i++) {
			int min = i == 0 ? 0 : dummyIdxs[i - 1] + 1;
			int max = chars.length + i + 1;
//System.out.println("max : " + max + "  min : " + min);
			
			dummyIdxs[i] = (int)(Math.random() * (max - min)) + min;
		}
	}
	
	public static char[] shuffle(char[] arr){
		for(int x=0;x<arr.length;x++){
			int i = (int)(Math.random()*arr.length);
			int j = (int)(Math.random()*arr.length);
			char tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
		}
		return arr;
	}
	
	protected Vector generateChars(char[] chars) {
		Vector cs = new Vector(chars.length + dummyIdxs.length);
		
		for(int i = 0; i < chars.length; i++) {
			cs.add(new Character(chars[i]));
		}
		
		for(int i = 0; i < dummyIdxs.length; i++) {
			cs.add(dummyIdxs[i], new Character(' '));
		}
		
		return cs;
	}
	
	public String render(Graphics2D g) {
		if(shuffleChar)
			chars = shuffle(chars);
		return renderImpl(g, generateChars(chars), fontLocation);
	}

	public String renderLowerCase(Graphics2D g) {
		return renderImpl(g, generateChars(lowerChars), fontLocation);
	}

	public String renderUpperCase(Graphics2D g) {
		return renderImpl(g, generateChars(upperChars), fontLocation);
	}
	
	public String renderSpecialCase(Graphics2D g) {
		return renderImpl(g, generateChars(specialChars), specialFontLocation);
	}
	
	protected String renderImpl(Graphics2D g, Vector cs, Point _fontLocation) {
		for(int i = 0; i < polygons.size() && i < cs.size(); i++) {
			Polygon poly = (Polygon)polygons.get(i);
			Character ch = (Character)cs.get(i);
			
			Point cp = getCenter(poly);
			
			if(ch.charValue() == ' ') {
				int x = cp.x - imgDummy.getWidth() / 2;
				int y = cp.y - imgDummy.getHeight() / 2;
				
				g.drawImage(imgDummy, x, y, null);
				
				if(DEBUG) {
					g.setColor(Color.RED);
					g.drawPolygon(poly);
				}
			}
			else if(ch.charValue() == '→') {
				
			}
			else {
				g.setFont(font);
				g.setColor(fontColor);
				
				Rectangle2D bounds = g.getFontMetrics().getStringBounds(ch.toString(), g);
				int x = cp.x - (int)(bounds.getWidth() / 2) + _fontLocation.x;
				int y = cp.y + (int)(bounds.getHeight() / 2) + _fontLocation.y;
				
				
				if(upperDisplayChar.get(ch.toString()) != null){
					g.drawString(ch.toString(), x, y-9);
					
//					Font fontBase = new Font("Gulim", Font.PLAIN, 13); 
					Font fontBase = null;
					try {
						fontBase = Font.createFont(Font.TRUETYPE_FONT, new File(dirBase, "NanumGothic.ttf"));
						fontBase = fontBase.deriveFont(Font.PLAIN, displayFontSize);
					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					} 
					
					g.setFont(fontBase);
					g.setColor(Generator.toColor("85,85,85"));
					
					Rectangle2D bounds1 = g.getFontMetrics().getStringBounds(upperDisplayChar.get(ch.toString()), g);
					
					g.drawString(upperDisplayChar.get(ch.toString()), cp.x - (int)(bounds1.getWidth() / 2), cp.y+displayY+ (int)(bounds1.getHeight() / 2));
				}else if(lowerDisplayChar.get(ch.toString()) != null){
					g.drawString(ch.toString(), x, y-9);
//					Font fontBase = new Font("Gulim", Font.PLAIN, 13);
					
					Font fontBase = null;
					try {
						fontBase = Font.createFont(Font.TRUETYPE_FONT, new File(dirBase, "NanumGothic.ttf"));
						fontBase = fontBase.deriveFont(Font.PLAIN, displayFontSize);
					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					} 
					
					g.setFont(fontBase);
					g.setColor(Generator.toColor("85,85,85"));
					
					Rectangle2D bounds1 = g.getFontMetrics().getStringBounds(lowerDisplayChar.get(ch.toString()), g);
					
					g.drawString(lowerDisplayChar.get(ch.toString()), cp.x - (int)(bounds1.getWidth() / 2), cp.y+displayY+ (int)(bounds1.getHeight() / 2));
					
				}else{
					g.drawString(ch.toString(), x, y);
				}
				
				
//System.out.println("----- g : " + g + "     () : " + g.toString() + "   ch.toString() : " + ch.toString());
				if(DEBUG) {
					g.setColor(Color.RED);
					g.drawPolygon(poly);
				}
			}
		}
		
		StringBuffer buf = new StringBuffer("\"");
		for(int i = 0; i < cs.size(); i++)
			buf.append(cs.get(i));
		buf.append("\"");
		
//System.out.println("++++ buf.toString() : " + buf.toString()); 
		return buf.toString();
	}
	
	private Point getCenter(Polygon poly) {
		int cx = 0;
		int cy = 0;
		for(int i = 0; i < poly.npoints; i++) {
			cx += poly.xpoints[i];
			cy += poly.ypoints[i];
		}
		
		return new Point(cx / poly.npoints, cy / poly.npoints);
	}
	
	public Vector getKeys() {
		Vector vs = generateChars(chars);
		Vector keys = new Vector();
		for(int i = 0; i < vs.size() && i < polygons.size(); i++)
			keys.add(new Key(vs.get(i).toString(), (Polygon)polygons.get(i)));
		
		return keys;
	}
	
	public Vector getLowerCaseKeys() {
		Vector vs = generateChars(lowerChars);
		Vector keys = new Vector();
		for(int i = 0; i < vs.size() && i < polygons.size(); i++)
			keys.add(new Key(vs.get(i).toString(), (Polygon)polygons.get(i)));
//System.out.println("keys : " + keys);		
		return keys;
	}
	
	public Vector getUpperCaseKeys() {
		Vector vs = generateChars(upperChars);
		Vector keys = new Vector();
		for(int i = 0; i < vs.size() && i < polygons.size(); i++)
			keys.add(new Key(vs.get(i).toString(), (Polygon)polygons.get(i)));
		
		return keys;
	}
	
	public Vector getSpecialCaseKeys() {
		Vector vs = generateChars(specialChars);
		Vector keys = new Vector();
		for(int i = 0; i < vs.size() && i < polygons.size(); i++)
			keys.add(new Key(vs.get(i).toString(), (Polygon)polygons.get(i)));
		
		return keys;
	}

	public void setDebug(boolean b) {
		DEBUG = b;
	}
	
	public static void main(String[] args) throws Throwable {
	
		Vector params = new Vector();
		params.add(new Param("chars", "qwertyuiop"));
		params.add(new Param("dummy.count", "3"));
		
		LinearRenderer renderer = new LinearRenderer(null, params);
//		while(true) {
//			renderer.random();
//			String chars = renderer.render(null);
//			System.out.println(chars);
//			if(chars.length() != 14 || !(chars.indexOf('.') >= 0 && chars.indexOf('.', chars.indexOf('.') + 1) > 0))
//				System.err.println(chars);
//		}
		//while(renderer.next()) {
		//	String chars = renderer.render(null);
		//	System.out.println(chars);
		//}
	}
}
