package transkey;

import java.io.IOException;

import transkey.iar.Archive;

public class KeyArcive {

	
	public static void main(String[] args) {
		
		String folder = "newKeyboard2"+"_GENDATA/";
		
		
		try {
			String tempFolder = folder+"keyboard";
			Archive.compress(tempFolder, tempFolder);
			
			tempFolder = folder+"mapping";
			Archive.compress(tempFolder, tempFolder);
			
			tempFolder = folder+"keyboard_lc";
			Archive.compress(tempFolder, tempFolder);
			tempFolder = folder+"mapping_lc";
			Archive.compress(tempFolder, tempFolder);
			
			tempFolder = folder+"keyboard_uc";
			Archive.compress(tempFolder, tempFolder);
			tempFolder = folder+"mapping_uc";
			Archive.compress(tempFolder, tempFolder);
			
			tempFolder = folder+"keyboard_sc";
			Archive.compress(tempFolder, tempFolder);
			tempFolder = folder+"mapping_sc";
			Archive.compress(tempFolder, tempFolder);
			
//			tempFolder = folder+"letters";
//			String tempNumFolder = tempFolder;
//			for(int i = 0 ; i < 10 ; i ++){
//				tempFolder = tempNumFolder+"/"+i;
//				Archive.compress(tempFolder, tempFolder);
//			}
//			tempFolder = tempNumFolder+"/blank";
//			Archive.compress(tempFolder, tempFolder);
			
			
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
