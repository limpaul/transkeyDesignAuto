package com.design.transkey.transkey;
 
import java.awt.Polygon;
import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.math.BigInteger;
import java.util.StringTokenizer;
import java.util.Vector;
import com.design.transkey.transkey.iar.IAR;
    
public class TransKey {  
	/*
	private static BigInteger e = new BigInteger("3fe40436f49952f6823e000d9d8a11f", 16);
	private static BigInteger d = new BigInteger("114e33a35eb8c9b485160976565b03bf", 16);
	private static BigInteger m = new BigInteger("177cbae8103fa60f141cb02b0c16b66d", 16);
	*/
	
	private static BigInteger e = new BigInteger("3", 16);
	private static BigInteger d = new BigInteger("117c17ef98d9aa3f5f5474dc378cb0f358e9fe5836f940f598d52018ebc9058673c73e595ea4be6beeee03c7926c2a9d19e7b30671eec7a7fe746b2f76b8930e0dfcf586c33da1509c5269e016d135b81f313f001f9496349e7de9e5e0020dfcde2ab58c08d0ccd2e64fcb6a02fa5b55adac6969202c37ee4e462ae45156f0cb", 16);
	private static BigInteger m = new BigInteger("1a3a23e765467f5f0efeaf4a5353096d055efd845275e170653fb02561ad8849adaadd860df71da1e66505ab5ba23feba6db8c89aae62b7bfdaea0c73214dc95d79f8bed8129139e9f36333e97a9bd42e6e4f039a2f8a2a9d41371a820128370c8924cd02f00f45f160feef4796da3cfcbb253805570e79511610f34cbf50ae1", 16);
	
	//private static byte[] servSessionKey;
	private static String te = "" ;
	private static String getSessionData = "" ;
	
	public static String getModulus() {
		return m.toString();
	}
	
	public static String getEncryptionExponent() {
		return e.toString();
	}
	
	public static SSKey allocateSSKey(String sessionKey) throws IOException {
		sessionKey = decrypt(sessionKey);
		return new SSKey(sessionKey);
	}
	
	public static Keyboard allocate(String path) throws IOException {
		boolean isTwin = new File(path, "/keyboard_lc.iai").isFile();
		
		long index = (long)(Math.random() * IAR.getSize(path + (isTwin ? "/keyboard_lc" : "/keyboard")));
		
		return new Keyboard(isTwin, path, index);
	}
	
	public static void writeKeyboard(Keyboard keyboard, OutputStream out) throws IOException {
		InputStream in = IAR.getInputStream(keyboard.path + "/keyboard", keyboard.index);
		dump(in, out);
		in.close();
	}
	 
	public static void writeLowerCaseKeyboard(Keyboard keyboard, OutputStream out) throws IOException {
		InputStream in = IAR.getInputStream(keyboard.path + "/keyboard_lc", keyboard.index);
		dump(in, out);
		in.close();
	}
	
	public static void writeUpperCaseKeyboard(Keyboard keyboard, OutputStream out) throws IOException {
		InputStream in = IAR.getInputStream(keyboard.path + "/keyboard_uc", keyboard.index);
		dump(in, out);
		in.close();
	}
	
	public static void writeSpecialCaseKeyboard(Keyboard keyboard, OutputStream out) throws IOException {
		InputStream in = IAR.getInputStream(keyboard.path + "/keyboard_sc", keyboard.index);
		dump(in, out);
		in.close();
	}

	public static void setSessionKey(String sessionKey) throws IOException {
	}
	
	private static void dump(InputStream in, OutputStream out) throws IOException {
		byte[] buf = new byte[4096];
		int len = in.read(buf);
		while(len > 0) {
			out.write(buf, 0, len);
			len = in.read(buf);
		}
	}
	
	public static Vector getMapping(Keyboard keyboard) throws IOException {
		if(keyboard.isTwin) {
			return toMapping(IAR.getInputStream(keyboard.path + "/mapping_lc", keyboard.index));
		} else {
			return toMapping(IAR.getInputStream(keyboard.path + "/mapping", keyboard.index));
		}
	}
		
	private static String decrypt(String encoded) {
		ByteArrayOutputStream bout = new ByteArrayOutputStream(0);
		
		StringTokenizer st = new StringTokenizer(encoded, " ");
		while(st.hasMoreTokens()) {
			BigInteger message = new BigInteger(st.nextToken(), 16);
			BigInteger dec = message.modPow(d, m);
			byte[] dec1 = dec.toByteArray();
			for(int i = dec1.length - 1; i >= 0; i--) {
				bout.write((int)dec1[i]);
			}
		}
		
		return new String(bout.toByteArray());
	}
	
	private static String seedDecrypt(String encoded, String sessionKey) {
		byte[] servSessionKey = new byte[16];
		int temp[] = new int[16];

		te = "";
		for(int i=0; i<16; i++) 
		{
			temp[i] = Integer.parseInt("0" + sessionKey.charAt(i), 16);			
			servSessionKey[i] = (byte)temp[i];
			te += Integer.toHexString(temp[i]).toString();
		}
		
		byte pbUserIV[]  = {(byte)0x4d, (byte)0x6f, (byte)0x62, (byte)0x69, (byte)0x6c, (byte)0x65, (byte)0x54, (byte)0x72, (byte)0x61, (byte)0x6e, (byte)0x73, (byte)0x4b, (byte)0x65, (byte)0x79, (byte)0x31, (byte)0x30};
		byte pbPlain[]    = new byte[16];		
		int pdwSEEDExRoundKey[] = new int[32];
		byte bResult[] = new byte[16];
	
		StringBuffer fullStr = new StringBuffer("");
		StringTokenizer enSt = new StringTokenizer(encoded, " ");
		while(enSt.hasMoreTokens()) 
		{
			String encodedToken = enSt.nextToken();
			encoded = encodedToken;

			//==============================================//
			//String eachEncoded[] = encoded.split(",");
			//==============================================//
			
			StringTokenizer st = new StringTokenizer(encoded, ",");
			String eachEncoded[] = new String[16];
			int index = 0;
			
			while(st.hasMoreTokens())
			{
				eachEncoded[index++] = st.nextToken();						
			}
		
			SEED seed = new SEED();
			
			int temp2[] = new int[16];
			for(int i=0; i<16; i++)
			{
				temp2[i] = Integer.parseInt(eachEncoded[i], 16);
				bResult[i] = (byte)temp2[i];
			}
			
			//=================================================//
			seed.SeedContext_SetKey(pdwSEEDExRoundKey, servSessionKey);
			//==============================================================================//
			
			//==============================================================================//
			seed.SeedContext_DecryptCbc(pdwSEEDExRoundKey, pbUserIV, bResult, 16, pbPlain);
			//==============================================================================//
			
			String str = "";
			for(int j=0; j<16; j++)
			{	
				String hexStr = Integer.toHexString(0xff&pbPlain[j]);
				byte[] hex_byte = new BigInteger(hexStr, 16).toByteArray();
				String divStr =new String(hex_byte); 
			
				if(divStr.equals("l") || divStr.equals("u") || divStr.equals("s")) {
					str += divStr;
					continue;
				}
				else if(divStr.equals(" "))	{
					str += " ";
					continue;
				}
				else if(divStr.equals("e"))	{
					break;
				}
				else
					str += Integer.toString((int)pbPlain[j]);
			}			
			str.trim();			
			encoded = str;			
			fullStr.append(str);
			fullStr.append(" ");
		}	
		encoded = fullStr.toString();

		return encoded;
	}
	 
	public static String decode(Keyboard keyboard, String encoded, String sessionKey) throws IOException {
		encoded = seedDecrypt(encoded, sessionKey);
		
		StringBuffer decoded = new StringBuffer();
		 
		if(keyboard.isTwin) {
			Vector mappingLower = toMapping(IAR.getInputStream(keyboard.path + "/mapping_lc", keyboard.index));
			Vector mappingUpper = toMapping(IAR.getInputStream(keyboard.path + "/mapping_uc", keyboard.index));
			Vector mappingSpecial = toMapping(IAR.getInputStream(keyboard.path + "/mapping_sc", keyboard.index));
			
			try {
				StringTokenizer st = new StringTokenizer(encoded, " ");
				while(st.hasMoreTokens()) {
					String type = st.nextToken();
					int x = Integer.parseInt(st.nextToken());
					int y = Integer.parseInt(st.nextToken());
					
					if("l".equals(type))
					{
						decoded.append(getKey(x, y, mappingLower));
					}
					else if("u".equals(type))
						decoded.append(getKey(x, y, mappingUpper));
					else if("s".equals(type))
					{
						decoded.append(getKey(x, y, mappingSpecial));
					}
					else
						throw new IOException("Illegal key type: " + type);
				}
			} catch(Throwable t) {
				throw new IOException("Illegal encoded value from client: " + encoded.toString() + "te : " + te + "getSessionData : " + getSessionData);
			}
		} else {
			Vector mapping = toMapping(IAR.getInputStream(keyboard.path + "/mapping", keyboard.index));
			
			try {
				StringTokenizer st = new StringTokenizer(encoded, " ");
				while(st.hasMoreTokens()) {
					int x = Integer.parseInt(st.nextToken());
					int y = Integer.parseInt(st.nextToken());
					
					decoded.append(getKey(x, y, mapping));
				}
			} catch(Throwable t) {
				throw new IOException("Illegal encoded value from client: " + decoded);
			}
		}
		 
		return decoded.toString();
	}
	
	public static void writeLetter(Keyboard keyboard, SSKey ssKey, String letterPath, String encoded, OutputStream out) throws IOException {
		if(keyboard == null || encoded == null) {
			String path = letterPath + "/blank";
			long size = IAR.getSize(path);
			InputStream in = IAR.getInputStream(path, (long)(Math.random() * size));
			dump(in, out);
			in.close();
			
			return;
		}
		
		encoded = seedDecrypt(encoded, ssKey.sessionKey);
		String decoded = null;
	
		if(keyboard.isTwin) {
			Vector mappingLower = toMapping(IAR.getInputStream(keyboard.path + "/mapping_lc", keyboard.index));
			Vector mappingUpper = toMapping(IAR.getInputStream(keyboard.path + "/mapping_uc", keyboard.index));
			
			try {
				StringTokenizer st = new StringTokenizer(encoded, " ");
				String type = st.nextToken();
				int x = Integer.parseInt(st.nextToken());
				int y = Integer.parseInt(st.nextToken());
				
				if("l".equals(type))
					decoded = getKey(x, y, mappingLower);
				else if("u".equals(type))
					decoded = getKey(x, y, mappingUpper);
				else
					throw new IOException("Illegal key type: " + type);
			} catch(Throwable t) {
				throw new IOException("Illegal encoded value from client: " + decoded);
			}
		} else {
			Vector mapping = toMapping(IAR.getInputStream(keyboard.path + "/mapping", keyboard.index));
			
			try {
				StringTokenizer st = new StringTokenizer(encoded, " ");
				int x = Integer.parseInt(st.nextToken());
				int y = Integer.parseInt(st.nextToken());
				
				decoded = getKey(x, y, mapping);
			} catch(Throwable t) {
				throw new IOException("Illegal encoded value from client: " + decoded);
			}
		}
		
		if(decoded == null || "".equals(decoded))
			decoded = "blank";
		
		String path = letterPath + "/" + decoded;
		long size = IAR.getSize(path);
		InputStream in = IAR.getInputStream(path, (long)(Math.random() * size));
		dump(in, out);
		in.close();
	}
	
	private static String getKey(int x, int y, Vector mapping) throws IOException {
		for(int i = 0; i < mapping.size(); i++) {
			Key key = (Key)mapping.get(i);
			
			if(key.bounds.contains(x, y))
				return key.name;
		}
		
		throw new IOException("Illegal key location: " + x + ", " + y);
	}
	
	private static Vector toMapping(InputStream in) throws IOException {
		BufferedReader reader = new BufferedReader(new InputStreamReader(in));
		Vector mapping = new Vector();
		String line = reader.readLine();
		
		while(line != null) {
						
			String name = null;
			int pos_except_one = line.indexOf("==");
			int pos_except_two = line.indexOf(",=");
			
			StringTokenizer st;
			
			if(pos_except_one >= 0)
			{
				int pos = line.indexOf("==");
				//line = line.substring(0, pos).trim();
				line = line.substring(pos + 1);
				
				st = new StringTokenizer(line, "=,");	
				name = "=";				
			}
			else if(pos_except_two >= 0)
			{
				int pos = line.indexOf(",=");
				line = line.substring(pos + 1);
				
				st = new StringTokenizer(line, "=,");
				name = ",";				
			}
			else
			{
				st = new StringTokenizer(line, "=,");
				
				if(line.startsWith("="))
					name = "";
				else
					name = st.nextToken();
			}
			
			Polygon bounds = new Polygon();
			while(st.hasMoreTokens()) {
				int x = Integer.parseInt(st.nextToken());
				int y = Integer.parseInt(st.nextToken());
				
				bounds.addPoint(x, y);
			}
			
			mapping.add(new Key(name, bounds));
			
			line = reader.readLine();
		}
		reader.close();

		return mapping;	
	}

	public static int length(Keyboard keyboard, String encoded, String sessionKey) throws IOException {
		return decode(keyboard, encoded, sessionKey).length();
	}
	
	public static boolean equals(Keyboard keyboard1, String encoded1, Keyboard keyboard2, String encoded2, String sessionKey) throws IOException {
		return decode(keyboard1, encoded1, sessionKey).equals(decode(keyboard2, encoded2, sessionKey));
	}
	
	static boolean isLower = true;
	
	public static void main(String[] args) throws Throwable {
		/*
		Generator generator = new Generator(new File("keyboard/meta"), new File("."), "samsung.mkb", false);
		
		JFrame frame = new JFrame();
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		final JLabel label = new JLabel();
		
		frame.getContentPane().add(label);
		
		// Generate first time
		generator.random();
		
		final BufferedImage imageLower = generator.getLowerCaseImage();
		final BufferedImage imageUpper = generator.getUpperCaseImage();
		
		final Vector mappingLower = generator.getLowerCaseMapping();
		final Vector mappingUpper = generator.getUpperCaseMapping();
		
		label.setIcon(new ImageIcon(imageLower));
		
		frame.pack();
		frame.setVisible(true);
		
		label.addMouseListener(new MouseAdapter() {
			public void mouseClicked(MouseEvent e) {
				Vector mapping = isLower ? mappingLower : mappingUpper;
				for(int i = 0; i < mapping.size(); i++) {
					Key key = (Key)mapping.get(i);
					if(key.bounds.contains(e.getPoint())) {
						if("caps".equals(key.name)) {
							label.setIcon(new ImageIcon(isLower ? imageUpper : imageLower));
							label.repaint();
							
							isLower = !isLower;
						} else if("backspace".equals(key.name)) {
							System.out.println("<-");
						} else if("close".equals(key.name)) {
							System.exit(0);
						} else {
							System.out.println(key.name);
						}
					}
				}
			}
		});
		*/
	}
}
