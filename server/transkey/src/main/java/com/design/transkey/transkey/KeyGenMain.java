package com.design.transkey.transkey;

import java.io.File;

import com.design.transkey.transkey.generator.Generator;

public class KeyGenMain {

	
	public static void main(String[] args) {
		boolean isQwerty = Boolean.parseBoolean(args[2]);
		boolean isShuffle = Boolean.parseBoolean(args[3]); //for number_nodummy
		String folder = "newKeyboard2";
//		String mkbFile = "number.mkb";
//		String pro = "0.08";
//		String mkbFile = "number_nodummy.mkb";
//		String pro = "0.08";
//		String mkbFile = "qwerty.mkb";
//		String pro = "0.00001";
//		String mkbFile = "qwerty_space.mkb";
		String mkbFile = args[0];
//		String pro = "0.00001";
		String pro = args[1];
		File dirBase = new File(folder);
		File dirOutput = new File(folder+"_GENDATA/");
		
		if(dirOutput.exists()){
			dirOutput.delete();
		}
		dirOutput.mkdir();
		
		
		String mkbName = mkbFile;
		float probability =  Float.parseFloat(pro);
		
		try {
			if(isQwerty){
				
				Generator generator = new Generator(dirBase, dirOutput, mkbName, false);
				Generator.generate(generator, probability);
				long count = 0;
				while(generator.next()) {

					if(generator.randomRange(0,300) == 1) {
						
						count++;
						if(count > 5){
							break;
						}
						System.out.println("total : "+count+" th");
						Generator.generate(generator, count);
					}
				}
				
			}else{
				Generator generator = new Generator(dirBase, dirOutput, mkbName, false);
				long count = 0;
				long count2=0;
				while(generator.next()) {


					count2++;
					System.out.println("total : "+count2+" th");
						count++;
						Generator.generate(generator, count);

				}
				if(!isShuffle) {
					Generator generator2 = new Generator(dirBase, dirOutput, "number2.mkb", false);
					while(generator2.next()) {

						Generator.generate(generator2, count);

					}
					Generator generator1 = new Generator(dirBase, dirOutput, "number3.mkb", false);
					while(generator1.next()) {

						count++;
						Generator.generate(generator1, count);
						
					}
				}
				
			}
		
//			Generator generator = new Generator(dirBase, dirOutput, mkbName, false);
////			Generator.generate(generator, probability);
////			Generator generator2 = new Generator(dirBase, dirOutput, "qwerty360.mkb", false);
////			Generator generator3 = new Generator(dirBase, dirOutput, "number.mkb", false);
//			long count = 0;
//			long count2=0;
//			while(generator.next()) {
////				
////				if(count==150)
////					break;
//
//				count2++;
//				System.out.println("total : "+count2+" th");
////				if(generator.randomRange(0,300) == 1) {
//					count++;
//					Generator.generate(generator, count);
////					Generator.generate(generator2, count, "360");
////					Generator.generate(generator3, count);
////				}
//			}
//			Generator generator2 = new Generator(dirBase, dirOutput, "number2.mkb", false);
//			while(generator2.next()) {
////				
////				if(count==110)
////					break;
//	
////				if(Math.random() <= probability) {
//					count++;
////					Generator.generate(generator, count, "");
////					Generator.generate(generator2, count, "360");
//					Generator.generate(generator2, count);
////				}
//			}
//			Generator generator1 = new Generator(dirBase, dirOutput, "number3.mkb", false);
//			while(generator1.next()) {
////				
////				if(count==110)
////					break;
//	
////				if(Math.random() <= probability) {
//					count++;
////					Generator.generate(generator, count, "");
////					Generator.generate(generator2, count, "360");
//					Generator.generate(generator1, count);
////				}
//			}
			

		} catch (Exception e) {
			e.printStackTrace();
			
		}
		
	}
	
}