package com.design.transkey.transkey;

import java.io.IOException;

import com.design.transkey.transkey.iar.Archive;

public class KeyArcive {

	
	public static void main(String[] args) {
//newKeyboard2_GENDATA
		String folder = "newKeyboard2"+"_GENDATA/";


		try {
			if(args[0].equals("true")){
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
			}else{
				String tempFolder = folder+"keyboard";
				Archive.compress(tempFolder, tempFolder);

				tempFolder = folder+"mapping";
				Archive.compress(tempFolder, tempFolder);

				String tempNumFolder = tempFolder;
				for(int i = 0 ; i < 10 ; i ++){
					tempFolder = tempNumFolder+"/"+i;
					Archive.compress(tempFolder, tempFolder);
				}
				tempFolder = tempNumFolder+"/blank";
				Archive.compress(tempFolder, tempFolder);
			}

		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
