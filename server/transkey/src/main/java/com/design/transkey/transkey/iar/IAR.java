package com.design.transkey.transkey.iar;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.RandomAccessFile;

public class IAR {
	static long buf2long(byte[] buf) {
        return (((long)buf[0] << 56) +
                ((long)(buf[1] & 255) << 48) +
                ((long)(buf[2] & 255) << 40) +
                ((long)(buf[3] & 255) << 32) +
                ((long)(buf[4] & 255) << 24) +
                ((buf[5] & 255) << 16) +
                ((buf[6] & 255) <<  8) +
                ((buf[7] & 255) <<  0));
	}
	
	static byte[] long2buf(long v) {
		byte[] buf = new byte[8];
		buf[0] = (byte)(v >>> 56);
		buf[1] = (byte)(v >>> 48);
		buf[2] = (byte)(v >>> 40);
		buf[3] = (byte)(v >>> 32);
		buf[4] = (byte)(v >>> 24);
		buf[5] = (byte)(v >>> 16);
		buf[6] = (byte)(v >>> 8);
		buf[7] = (byte)(v >>> 0);
		
		return buf;
	}

	public static long getSize(String path) throws IOException {
		FileInputStream in = new FileInputStream(path + ".iai");
		
		byte[] buf = new byte[8];
		in.read(buf);
		in.close();
		
		return buf2long(buf);
	}
	
	public static InputStream getInputStream(String path, long idx) throws IOException {
		File file = new File(path + ".iai");
		RandomAccessFile iai = new RandomAccessFile(file, "r");
		iai.seek((idx + 1) * 8);
		
		byte[] buf1 = new byte[8];
		int len1 = iai.read(buf1);
		byte[] buf2 = new byte[8];
		int len2 = iai.read(buf2);
		iai.close();
		
		if(len1 != 8) {
			throw new FileNotFoundException(idx + "th entity.");
		}
		
		long pos = buf2long(buf1);
		long size = 0;
		RandomAccessFile iar = new RandomAccessFile(path + ".iar", "r");
		
		if(len2 == 8)
			size = buf2long(buf2) - pos;
		else
			size = iar.length() - pos;
		
		iar.seek(pos);
		
		return new IARInputStream(iar, size);
	}
	
	public static class IARInputStream extends InputStream {
		protected RandomAccessFile file;
		protected long length;
		private long pos;
		
		public IARInputStream(RandomAccessFile file, long length) {
			this.file = file;
			this.length = length;
		}
		
		public int read() throws IOException {
			if(pos < 0 || pos > length)
				return -1;
			
			pos++;
			return file.read();
		}

		public int available() throws IOException {
			return (int)(length - pos);
		}

		public void close() throws IOException {
			if(file != null) {
				file.close();
			}
		}

		public synchronized void mark(int readlimit) {
		}

		public boolean markSupported() {
			return false;
		}

		public int read(byte[] b, int off, int len) throws IOException {
			len = Math.min((int)(length - pos), len);
			pos += len;
			
			if(len == 0)
				return -1;
			
			return file.read(b, off, len);
		}

		public int read(byte[] b) throws IOException {
			return read(b, 0, b.length);
		}

		public synchronized void reset() throws IOException {
		}

		public long skip(long n) throws IOException {
			if(pos + n > length) {
				pos = length;
				file.seek(length - pos);
				
				return length - pos;
			} else {
				pos += n;
				file.seek(n);
				return n;
			}
		}
	}
}