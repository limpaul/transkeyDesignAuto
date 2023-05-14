package com.design.transkey.transkey.generator;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.FontFormatException;
import java.awt.Graphics2D;
import java.awt.Point;
import java.awt.Polygon;
import java.awt.RenderingHints;
import java.awt.image.BufferedImage;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.util.StringTokenizer;
import java.util.Vector;

import javax.imageio.ImageIO;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;

import com.design.transkey.transkey.Key;

public class Generator {
	protected boolean isTest;
	
	protected File dirBase;
	protected File dirOutput;
	
	protected BufferedImage imgBackground;
	protected BufferedImage imgBackgroundSpecial;
	protected Vector renderers = new Vector();
	protected Vector keys = new Vector();
	
	protected boolean isTwin = false;
	
	private BufferedImage image;
	private Vector mapping;
	
	private BufferedImage imageLower;
	private Vector mappingLower;
	
	private BufferedImage imageUpper;
	private Vector mappingUpper;
	
	private BufferedImage imageSpecial;
	private Vector mappingSpecial;
	
	public Generator(File dirBase, File dirOutput, String mkbName, boolean isTest) throws IOException, FontFormatException {
		this.dirBase = dirBase;
		this.dirOutput = dirOutput;
		this.isTest = isTest;
		
		init(mkbName);
		
		for(int i = 0; i < renderers.size() - 1; i++) {
			Renderer r = (Renderer)renderers.get(i);
			
			r.next();
		}
		
		if(isTest) {
			for(int i = 0; i < renderers.size(); i++) {
				Renderer r = (Renderer)renderers.get(i);
				
				r.setDebug(true);
			}
		}
	}
	
	public int randomRange(int n1, int n2) {
		int r = (int) (Math.random() * (n2 - n1 + 1)) + n1;
		System.out.println("random Value : "+ r);
	    return r;
	  }
	
	private void init(String mkbName) throws IOException, FontFormatException {
		BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(new File(dirBase, mkbName)), Charset.forName("UTF-8")));
		
		Vector params = new Vector();
		String renderer = null;
		
		String line = reader.readLine();
		while(line != null) {
			line = removeComment(line);
			
			if("".equals(line)) {
				line = reader.readLine();
				continue;
			}
			
			String[] split = split(line);
			String key = split[0];
			String value = split[1];
			
			if("renderer.type".equals(key)) {
				if(renderer != null) {
					renderers.add(createRenderer(renderer, params));
					renderer = null;
					params.clear();
				}
				
				renderer = value;
			} else if(key.startsWith("renderer.")) {
				if(key.indexOf("chars.lower") > 0)
					isTwin = true;
				
				params.add(new Param(key.substring("renderer.".length()), value));
			} else {
				if(renderer != null) {
					renderers.add(createRenderer(renderer, params));
					renderer = null;
					params.clear();
				}
				
				if(key.startsWith("key.")) {
					keys.add(new Key(key.substring("key.".length()), toPolygon(value)));
				} else if("background".equals(key)) {
					imgBackground = ImageIO.read(new File(dirBase, value));
				} else if("backgroundSpecial".equals(key)) {
					imgBackgroundSpecial = ImageIO.read(new File(dirBase, value));
				} else {
					throw new IOException("Illegal key: " + key);
				}
			}
			
			line = reader.readLine();
		}
		
System.out.println("init -> line : " + line + "    renderer : " + renderer + "    params : " + params);

		if(renderer != null) {
			renderers.add(createRenderer(renderer, params));
			renderer = null;
			params.clear();
		}
	}
	
	private Renderer createRenderer(String type, Vector params) throws IOException, FontFormatException {
		if("linear".equals(type)) {
System.out.println("linear dirBase : " + dirBase);
			return new LinearRenderer(dirBase, params);
		} else if("circular".equals(type)) {
System.out.println("circular dirBase : " + dirBase);
			return new CircularRenderer(dirBase, params);
		} else {
			throw new IOException("Illegal renderer type: " + type);
		}
	}
	
	private String removeComment(String line) {
		System.out.println("line : " + line);
		int pos = line.indexOf("##");

		if(pos >= 0) {
			line = line.substring(0, pos).trim();
		}
		return line;
	}
	
	private String[] split(String line) throws IOException {
		int pos = line.indexOf('=');
		
		if(pos > 0) {
			String key = line.substring(0, pos);
			String value = line.substring(pos + 1);
			
			if(value.startsWith("\"")) {
				int pos2 = value.lastIndexOf('"');
				if(pos2 > 0) {
					value = value.substring(1, pos2);
				}
			}
System.out.println("split======  line : " + line + "      key : " + key + "     value : " + value);

			return new String[] { key, value };
		} else {
			throw new IOException("Illegal MKB format: '" + line + "'");
		}
	}

	public static Point toPoint(String value) {
		try {
			int pos = value.indexOf(',');
			String x = value.substring(0, pos);
			String y = value.substring(pos + 1);
			
			return new Point(Integer.parseInt(x), Integer.parseInt(y));
		} catch(Throwable t) {
			System.err.println("Illegal point: " + value);
			return new Point();
		}
	}
	
	public static Polygon toPolygon(String value) {
		Polygon polygon = new Polygon();
		
		try {
			if(value.startsWith("rect:")) {
				StringTokenizer st = new StringTokenizer(value.substring("rect:".length()), ",");
				int x = Integer.parseInt(st.nextToken());
				int y = Integer.parseInt(st.nextToken());
				int w = Integer.parseInt(st.nextToken());
				int h = Integer.parseInt(st.nextToken());
				
				polygon.npoints = 4;
				polygon.xpoints = new int[] { x, x + w, x + w, x };
				polygon.ypoints = new int[] { y, y, y + h, y + h };
			} else if(value.startsWith("poly:")) {
				StringTokenizer st = new StringTokenizer(value.substring("poly:".length()), ",");
				while(st.hasMoreTokens()) {
					int x = Integer.parseInt(st.nextToken());
					int y = Integer.parseInt(st.nextToken());
					
					polygon.addPoint(x, y);
				}
			} else {
				System.err.println("Illegal boundary: " + value);
			}
		} catch(Throwable t) {
			System.err.println("Illegal boundary: " + value);
		}
		
		return polygon;
	}
	
	public static Color toColor(String value) {
		Color color = Color.BLACK;
		
		StringTokenizer st = new StringTokenizer(value, ",");
		try {
			color = new Color(Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()));
		} catch(Throwable t) {
			System.err.println("Illegal color: " + value);
		}
		
		return color;
	}
	
	public boolean isTwin() {
		return isTwin;
	}
	
	public boolean next() {
		int pos = renderers.size() - 1;
		
		for( ; pos >= 0; pos--) {
			Renderer renderer = (Renderer)renderers.get(pos);
			
			if(renderer.next()) {
				return true;
			} else {
				renderer.init();
				renderer.next();
			}
		}
		
		return pos != -1;
	}
	
	public void random() {
		for(int i = 0; i < renderers.size(); i++)
			((Renderer)renderers.get(i)).random();
	}
	
	public String generate() {
		if(isTwin) {
			return generateTwin();
		} else {
			return generateSingle();
		}
	}
	
	private String generateTwin() {
		int width = imgBackground.getWidth();
		int height = imgBackground.getHeight();
		
		int widthSpecial = imgBackgroundSpecial.getWidth();
		int heightSpecial = imgBackgroundSpecial.getHeight();
				
		imageLower = new BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB);
		imageUpper = new BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB);
		//imageSpecial = new BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB);
		imageSpecial = new BufferedImage(widthSpecial, heightSpecial, BufferedImage.TYPE_INT_ARGB);
		
		mappingLower = new Vector();
		mappingUpper = new Vector();
		mappingSpecial = new Vector();
		
		Graphics2D gLower = imageLower.createGraphics();
		gLower.setRenderingHint(RenderingHints.KEY_TEXT_ANTIALIASING, RenderingHints.VALUE_TEXT_ANTIALIAS_ON);
        gLower.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);

		Graphics2D gUpper = imageUpper.createGraphics();
		gUpper.setRenderingHint(RenderingHints.KEY_TEXT_ANTIALIASING, RenderingHints.VALUE_TEXT_ANTIALIAS_ON);
        gUpper.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);
		
        Graphics2D gSpecial = imageSpecial.createGraphics();
        gSpecial.setRenderingHint(RenderingHints.KEY_TEXT_ANTIALIASING, RenderingHints.VALUE_TEXT_ANTIALIAS_ON);
        gSpecial.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);
        
		gLower.drawImage(imgBackground, 0, 0, null);
		gUpper.drawImage(imgBackground, 0, 0, null);
		gSpecial.drawImage(imgBackgroundSpecial, 0, 0, null);
		
		StringBuffer bufLower = new StringBuffer();
		StringBuffer bufUpper = new StringBuffer();
		StringBuffer bufSpecial = new StringBuffer();
		
		for(int i = 0; i < renderers.size(); i++) {
			Renderer renderer = (Renderer)renderers.get(i);
			
			bufLower.append(renderer.renderLowerCase(gLower));
			bufUpper.append(renderer.renderUpperCase(gUpper));
			bufSpecial.append(renderer.renderSpecialCase(gSpecial));
			
			mappingLower.addAll(renderer.getLowerCaseKeys());
			mappingUpper.addAll(renderer.getUpperCaseKeys());
			mappingSpecial.addAll(renderer.getSpecialCaseKeys());
			
			if(i + 1 < renderers.size()) {
				bufLower.append(", ");
				bufUpper.append(", ");
				bufSpecial.append(", ");
			}
		}
		mappingLower.addAll(keys);
		mappingUpper.addAll(keys);
		mappingSpecial.addAll(keys);
		
		
		if(isTest) {
			for(int i = 0; i < keys.size(); i++) {
				Key key = (Key)keys.get(i);
				
				gLower.setColor(Color.RED);
				gLower.drawPolygon(key.bounds);
				
				gUpper.setColor(Color.RED);
				gUpper.drawPolygon(key.bounds);
			}
		}

		return bufLower.append("\n").append(bufUpper).toString();
	}
	
	private String generateSingle() {
		int width = imgBackground.getWidth();
		int height = imgBackground.getHeight();
		
		image = new BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB);
		mapping = new Vector();
		
		Graphics2D g = image.createGraphics();
		g.setRenderingHint(RenderingHints.KEY_TEXT_ANTIALIASING, RenderingHints.VALUE_TEXT_ANTIALIAS_ON);
        g.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);

		g.drawImage(imgBackground, 0, 0, null);
		
		StringBuffer buf = new StringBuffer();
		
		for(int i = 0; i < renderers.size(); i++) {
			Renderer renderer = (Renderer)renderers.get(i);
			
			buf.append(renderer.render(g));
			
			mapping.addAll(renderer.getKeys());
			
			if(i + 1 < renderers.size()) {
				buf.append(", ");
			}
		}
		mapping.addAll(keys);
		
		if(isTest) {
			for(int i = 0; i < keys.size(); i++) {
				Key key = (Key)keys.get(i);
				
				g.setColor(Color.RED);
				g.drawPolygon(key.bounds);
			}
		}
		
		return buf.toString();
	}
	
	public BufferedImage getImage() {
		return image;
	}
	
	public Vector getMapping() {
		return mapping;
	}
	
	public BufferedImage getLowerCaseImage() {
		return imageLower;
	}
	
	public Vector getLowerCaseMapping() {
		return mappingLower;
	}
	
	public BufferedImage getUpperCaseImage() {
		return imageUpper;
	}
	
	public Vector getUpperCaseMapping() {
		return mappingUpper;
	}
	
	public BufferedImage getSpecialCaseImage() {
		return imageSpecial;
	}
	
	public Vector getSpecialCaseMapping() {
		return mappingSpecial;
	}
	
	public void write(String name) throws IOException {
		if(isTwin()) {
			File dirKeyboardLC = new File(dirOutput, "keyboard_lc");
			dirKeyboardLC.mkdirs();
			File dirKeyboardUC = new File(dirOutput, "keyboard_uc");
			dirKeyboardUC.mkdirs();
			File dirKeyboardSC = new File(dirOutput, "keyboard_sc");
			dirKeyboardSC.mkdirs();
			
// System.out.println("dirKeyboardUC : " + dirKeyboardUC);
			
			ImageIO.write(imageLower, "png", new File(dirKeyboardLC, name + "_lc.png"));
			ImageIO.write(imageUpper, "png", new File(dirKeyboardUC, name + "_uc.png"));
			ImageIO.write(imageSpecial, "png", new File(dirKeyboardSC, name + "_sc.png"));
			write(name + "_lc", "mapping_lc", mappingLower);
			write(name + "_uc", "mapping_uc", mappingUpper);
			write(name + "_sc", "mapping_sc", mappingSpecial);
		} else {
			File dirKeyboard = new File(dirOutput, "keyboard");
			dirKeyboard.mkdirs();
			
			ImageIO.write(image, "png", new File(dirKeyboard, name + ".png"));
			write(name, "mapping", mapping);
		}
	}
	
	private void write(String name, String dirName, Vector mapping) throws IOException {
//System.out.println("name : " + name + "   dirName : " + dirName + "   mapping : " + mapping);
		File dirMapping = new File(dirOutput, dirName);
		dirMapping.mkdirs();

		FileWriter writer = new FileWriter(new File(dirMapping, name + ".map"));
		
		for(int i = 0; i < mapping.size(); i++) {
			Key key = (Key)mapping.get(i);
			
			if(key.name.equals("→")){
				writer.append(" ");	// Convert ' ' to ''
			}else{
				writer.append(" ".equals(key.name) ? "" : key.name);	// Convert ' ' to ''
			}
			writer.append("=");
			
			for(int j = 0; j < key.bounds.npoints; j++) {
				writer.append("" + key.bounds.xpoints[j]).append(",").append("" + key.bounds.ypoints[j]);
				
				if(j + 1 < key.bounds.npoints) {
					writer.append(",");
				} else {
					writer.append("\n");
				}
			}
		}
		writer.close();
	}
	
	public static void main(String[] args) throws Throwable {
		//args = new String[] { "-t", "-d", "keyboard/meta", "-o", "keyboard/out", "samsung.mkb" };
		
		boolean isTest = false;
		File dirBase = new File(".");
		File dirOutput = new File("out");
		String mkbName = null;
		float probability = 1.0F;
		
		if(args.length < 1) {
			usage();
			return;
		}
		
		for(int i = 0; i < args.length; i++) {
			if("-d".equals(args[i])) {
				i++;
				dirBase = new File(args[i]);
			} else if("-o".equals(args[i])) {
				i++;
				dirOutput = new File(args[i]);
				dirOutput.mkdirs();
			} else if("-t".equals(args[i])) {
				isTest = true;
			} else if("-p".equals(args[i])) {
				i++;
				probability = Float.parseFloat(args[i]);
			} else {
				mkbName = args[i];
			}
		}
		
		if(mkbName == null) {
			usage();
			return;
		}
		
		Generator generator = new Generator(dirBase, dirOutput, mkbName, isTest);
		if(isTest)
			test(generator);
		else
			generate(generator, probability);
	}
	
	private static void test(Generator generator) {
/*
		JFrame frame = new JFrame();
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		JLabel labelLower = new JLabel();
		JLabel labelUpper = null;
		if(generator.isTwin())
			labelUpper = new JLabel();
		
		frame.getContentPane().setLayout(new BorderLayout());
		frame.getContentPane().add(labelLower, BorderLayout.NORTH);
		if(generator.isTwin())
			frame.getContentPane().add(labelUpper, BorderLayout.SOUTH);
		
		// Generate first time
		generator.next();
		System.out.println(generator.generate());

		BufferedImage imageLower = null;
		BufferedImage imageUpper = null;
		if(generator.isTwin()) {
			imageLower = generator.getLowerCaseImage();
			imageUpper = generator.getUpperCaseImage();
		} else {
			imageLower = generator.getImage();
		}
		
		labelLower.setIcon(new ImageIcon(imageLower));
		if(generator.isTwin())
			labelUpper.setIcon(new ImageIcon(imageUpper));
		
		frame.pack();
		frame.setVisible(true);
		
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
		}
		
		int count = 0;
		while(generator.next()) {
			count++;
			System.out.println(generator.generate());
			
			if(generator.isTwin()) {
				imageLower = generator.getLowerCaseImage();
				imageUpper = generator.getUpperCaseImage();
			} else {
				imageLower = generator.getImage();
			}
			
			labelLower.setIcon(new ImageIcon(imageLower));
			if(generator.isTwin())
				labelUpper.setIcon(new ImageIcon(imageUpper));
			
			labelLower.repaint();
			if(generator.isTwin())
				labelUpper.repaint();
			
			if(count < 10) {
				try {
					Thread.sleep(3000);
				} catch (InterruptedException e) {
				}
			}
		}
*/
	}
	
	public static void generate(Generator generator, float probability) throws IOException {
		long count = 0;
//System.out.println("1");
		while(generator.next()) {
			//float a = (float)Math.random();
//System.out.println("2");			
			if(Math.random() <= probability) {
//System.out.println("3");
//System.out.println("a : " + a);
/*
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
*/		
				count++;
				System.out.println(count + " th");
				System.out.println(generator.generate());
				
				generator.write(Long.toString(count));
			}
		}
	}
	
	public static void generate(Generator generator, long count) throws IOException {

				System.out.println(count + " th");
				System.out.println(generator.generate());
				
				generator.write(Long.toString(count));


	}
	
	private static void usage() {
		System.out.println("Usage: java transkey.generator.Generator [-d base directory] [-o output directory] [-t test mkb] [-p probability] mkb file");
	}
}
