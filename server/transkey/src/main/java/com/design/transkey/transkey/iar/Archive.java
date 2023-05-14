package com.design.transkey.transkey.iar;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Iterator;
import java.util.Map;
import java.util.TreeMap;

public class Archive {
	public static void retrieve(File dir, Map map) {
		File[] files = dir.listFiles();
		if(files == null)
			return;
		
		for(int i = 0; i < files.length; i++) {
			if(files[i].isDirectory())
				retrieve(files[i], map);
			else
				map.put(files[i].getPath(), new Long(files[i].length()));
		}
	}
	
	public static void compress(String source, String archive) throws IOException {
		File dir = new File(source);
		if(!dir.isDirectory()) {
			System.out.println("The directory is not exists or not a directory: " + source);
			return;
		}
		
		TreeMap map = new TreeMap();
		retrieve(dir, map);
		
		FileOutputStream iar = new FileOutputStream(new File(archive + ".iar"));
		FileOutputStream iai = new FileOutputStream(new File(archive + ".iai"));
		
		// Wirte the number of entities
		iai.write(IAR.long2buf(map.size()));
		
		byte[] buffer = new byte[4096];
		long pos = 0;
		Iterator i = map.entrySet().iterator();
		while(i.hasNext()) {
			Map.Entry entry = (Map.Entry)i.next();
			String name = (String)entry.getKey();
			name = name.replace('\\', '/');
			Long size = (Long)entry.getValue();
			
			// Output to console
			System.out.println(name + "\t" + pos + "\t" + size);
			
			// Write to IAR
			FileInputStream in = new FileInputStream(name);
			int len = in.read(buffer);
			while(len > 0) {
				iar.write(buffer, 0, len);
				
				len = in.read(buffer);
			}
			in.close();
			in = null;
			
			// Write to IAI
			iai.write(IAR.long2buf(pos));
			
			pos += size.longValue();
		}
		iar.close();
		iai.close();
	}
	
	public static void main(String[] args) throws IOException {
		if(args.length < 1) {
			System.out.println("Usage: java " + Archive.class.getName() + " [dir path]");
			return;
		}
		
		compress(args[0], args[0]);
	}
}
