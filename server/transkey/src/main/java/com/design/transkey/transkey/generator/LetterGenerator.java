package com.design.transkey.transkey.generator;

import java.awt.Color;
import java.awt.Font;
import java.awt.FontMetrics;
import java.awt.Graphics;
import java.awt.Toolkit;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Vector;

import javax.imageio.ImageIO;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class LetterGenerator {
	
	int minFontSize = 10;
	int maxFontSize = 12;
	
	int width = 9;
	int height = 15;
	
	Font[] fonts = new Font[] { 
			new Font("Arial", Font.PLAIN, 10)
	};
	
	Color[] backgrounds = null;
	Color[] foregrounds = null;
	
	public LetterGenerator(int br, int bg, int bb, int fr, int fg, int fb) {
		Vector v = new Vector();
		for(int r = br; r <= 255; r++) {
			for(int g = bg; g <= 255; g++) {
				for(int b = bb; b <= 255; b++) {
					v.add(new Color(r, g, b));
				}
			}
		}
		backgrounds = (Color[])v.toArray(new Color[v.size()]);
		
		v.clear();
		for(int r = 0; r <= fr; r++) {
			for(int g = 0; g <= fg; g++) {
				for(int b = 0; b <= fb; b++) {
					v.add(new Color(r, g, b));
				}
			}
		}
		foregrounds = (Color[])v.toArray(new Color[v.size()]);
	}
	
	public void generate(JFrame frame, JLabel label, String str, File dir) throws IOException {
		dir.mkdirs();
		
		//boolean isPacked = false;
		
		BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
		Graphics g = image.getGraphics();
		
		int count = 0;
		for(int size = minFontSize; size <= maxFontSize; size++) {
			for(int i = 0; i < fonts.length; i++) {
				int screenRes = Toolkit.getDefaultToolkit().getScreenResolution();
			    int fontSize = (int)Math.round(size * screenRes / 72.0);
			    
				Font font = new Font(fonts[i].getName(), fonts[i].getStyle(), fontSize);
				g.setFont(font);
				
				FontMetrics metrics = g.getFontMetrics(font);
				Rectangle2D bounds = metrics.getStringBounds(str, g);
				System.out.println("Creating string: " + str + ", font size: " + bounds.getWidth() + " x " + bounds.getHeight());
				int w = width - (int)bounds.getWidth();
				int h = height - (int)bounds.getHeight();
				
				for(int k = 0; k < backgrounds.length; k++) {
					Color background = backgrounds[k];
					
					for(int j = 0; j < foregrounds.length; j++) {
						Color foreground = foregrounds[j];
						
						for(int x = 0; x < w; x++) {
							for(int y = 0; y < h; y++) {
								g.setColor(background);
								g.fillRect(0, 0, width, height);
								g.setColor(foreground);
								g.drawString(str, x, y + (int)(-bounds.getY() + 0.5));
								//g.setColor(Color.RED);
								//g.drawRect(x, y, (int)bounds.getWidth(), (int)(bounds.getHeight() + 0.5));
	//							
	//							label.setIcon(new ImageIcon(image));
	//							if(!isPacked) {
	//								frame.pack();
	//								isPacked = true;
	//							}
								count++;
								
								ByteArrayOutputStream bout = new ByteArrayOutputStream(0);
								ImageIO.write(image, "jpeg", bout);
								bout.close();
								
								FileOutputStream out = new FileOutputStream(new File(dir, count + ".jpg"));
								out.write(bout.toByteArray());
								out.close();
								bout.reset();
							}
						}
					}
				}
			}
		}
		System.out.println("Created string: " + str + ", count: " + count);
	}
	
	public static void main(String[] args) throws IOException {
//		long base = System.currentTimeMillis();
//		int counter = 0;
//		
//		for(int i = 0; i < 5000; i++) {
//			long size = IAR.getSize("/9");
//			int no = (int)(Math.random() * size) + 1;
//			byte[] buffer = new byte[1024];
//			InputStream in = IAR.getInputStream("/9", no);
//			in.read(buffer);
//			in.close();
//			buffer = null;
//			
//			counter++;
//			if(counter % 1000 == 0) {
//				System.out.print(".");
//				System.out.flush();
//			}
//		}
//		System.out.println((System.currentTimeMillis() - base) + " ms");
//		
//		
//		for(int i = 0; i < 5000; i++) {
//			int no = (int)(Math.random() * 34606) + 1;
//			byte[] buffer = new byte[1024];
//			FileInputStream in = new FileInputStream("/9/" + no + ".jpg");
//			in.read(buffer);
//			in.close();
//			buffer = null;
//			
//			counter++;
//			if(counter % 1000 == 0) {
//				System.out.print(".");
//				System.out.flush();
//			}
//		}
//		System.out.println((System.currentTimeMillis() - base) + " ms");
//		
//		if(true)
//			return;
//		
//		Properties options = new Properties();
//		options.put(RecordManagerOptions.DISABLE_TRANSACTIONS, "true");
//		
//		RecordManager manager = RecordManagerFactory.createRecordManager("WEB-INF/keyboard/letters/db", options);
//		
//		base = System.currentTimeMillis();
//		counter = 0;
//		for(int i = 0; i < 5000; i++) {
//			int no = (int)(Math.random() * 10);
//			long recid = manager.getNamedObject(Long.toString(no));
//			BTree btree = BTree.load(manager, recid);
//			int random = (int)(Math.random() * btree.size()) + 1;
//			byte[] buffer = (byte[])btree.find(new Long(random));
//			if(buffer == null)
//				System.out.println("null");
//			else if(buffer.length == 0)
//				System.out.println("0");
//			
//			counter++;
//			if(counter % 1000 == 0) {
//				System.out.print(".");
//				System.out.flush();
//			}
//		}
//		System.out.println((System.currentTimeMillis() - base) + " ms");
//		
//		if(true)
//			return;
		
		File dir = new File("keyboard/letters");
		dir.mkdirs();
		
		JFrame frame = new JFrame();
		JLabel label = new JLabel();
//		frame.getContentPane().add(label);
		//frame.setVisible(true);
		
		LetterGenerator generator = new LetterGenerator(253, 253, 253, 2, 2, 2);
		generator.generate(frame, label, " ", new File(dir, "blank"));
		for(char ch = '0'; ch <= '9'; ch++) {
			String str = Character.toString(ch);
			
			generator.generate(frame, label, str, new File(dir, str));
		}
	}
}
