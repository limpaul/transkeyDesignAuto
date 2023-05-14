package com.design.transkey.transkey.iar;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

public class Extract {
	static void decompress(String path) throws IOException {
		File dir = new File(path);
		dir.mkdirs();
		
		long size = IAR.getSize(path);
		System.out.println("Number of decompressing files: " + size);
		
		byte[] buf = new byte[4096];
		int len = 0;
		
		for(long i = 0; i < size; i++) {
			InputStream in = IAR.getInputStream(path, i);
			OutputStream out = new FileOutputStream(new File(dir, Long.toString(i)));
			
			System.out.print(Long.toString(i) + " ");
			len = in.read(buf);
			while(len > 0) {
				out.write(buf, 0, len);
				
				System.out.print(".");
				System.out.flush();
				
				len = in.read(buf);
			}
			System.out.println();
			
			out.close();
			in.close();
		}
	}
	
	public static void main(String[] args) throws IOException {
		
		if(args.length < 1) {
			System.out.println("Usage: java " + Extract.class.getName() + " [archive path]");
			return;
		}
		
		decompress(args[0]);
	}
}
