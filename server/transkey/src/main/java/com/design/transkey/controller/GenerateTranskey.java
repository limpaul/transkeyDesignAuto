package com.design.transkey.controller;

import com.design.transkey.kepadObj.NumberDummyObj;
import com.design.transkey.transkey.KeyArcive;
import com.design.transkey.transkey.KeyGenMain;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;


@CrossOrigin
@RestController
public class GenerateTranskey {
    @PostMapping("/result")
    public String result(@RequestParam(name = "file", required = false)MultipartFile file,
                         @RequestParam(name = "logo1", required = false)MultipartFile logoFile1,
                         @RequestParam(name = "logo2", required = false)MultipartFile logoFile2,
                         @RequestParam(name = "logo3", required = false)MultipartFile logoFile3,
                         @RequestParam(name = "font1", required = false)MultipartFile fontFile1,
                         @RequestParam(name = "font2", required = false)MultipartFile fontFile2,
                         @RequestParam(name = "font3", required = false)MultipartFile fontFile3,
                         @RequestParam("data") String data){
        try{

            ObjectMapper objectMapper = new ObjectMapper();
            NumberDummyObj obj =  objectMapper.readValue(data, NumberDummyObj.class);
            System.out.println(obj.toString());
            for(int i = 0 ; i < 3; i++){ // dummy값은 mkb파일이 3개이며 값이 파일마다 다르다
                String fileName ="";
                if( i == 0){
                    fileName ="number.mkb";
                }else if( i == 1){
                    fileName ="number2.mkb";
                }else if ( i == 2){
                    fileName ="number3.mkb";
                }
                createMkbFile(obj, fileName ,i); // dummy에 관련 한 mkb 파일 생성
            }


            // 이미지 처리 및 이미지 저장
            if(file != null){
                saveImage(file);
            }
            // 폰트파일 저장
            if(fontFile1 != null){
                saveTtf(fontFile1);
            }
            if(fontFile2 != null){
                saveTtf(fontFile2);
            }
            if(fontFile3 != null){
                saveTtf(fontFile3);
            }

            // 로고 처리 및 이미지 저장
            if(logoFile1 != null){
                saveImage(logoFile1);
            }
            if(logoFile2 != null){
                saveImage(logoFile2);
            }
            if(logoFile3 != null){
                saveImage(logoFile3);
            }

            KeyGenMain.main(new String[]{"number.mkb", "0.08", "false"});
            KeyArcive.main(new String[]{"false"});
        } catch (Exception e) {
            e.printStackTrace();
        }

        return "Test";
    }

    private void saveTtf(MultipartFile fontFile) throws IOException {
        // 파일 원본 이름 추출
        String fileName = StringUtils.cleanPath(fontFile.getOriginalFilename());

        // 파일 경로 설정
        String fileDirectory = "newKeyboard2/";
        Path filePath = Paths.get(fileDirectory+fileName);


        // newKeyboard2 디렉토리가 없을 경우 생성
        if(!Files.exists(filePath.getParent())){
            Files.createDirectories(filePath.getParent());
        }

        // 파일 저장
        try (InputStream inputStream = fontFile.getInputStream()) {
            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
        }
    }

    public void saveImage(MultipartFile file) throws Exception {
        // 파일 원본 이름 추출
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        // 파일 경로 설정
        String fileDirectory = "newKeyboard2/";
        Path filePath = Paths.get(fileDirectory+fileName);


        // newKeyboard2 디렉토리가 없을 경우 생성
        if(!Files.exists(filePath.getParent())){
            Files.createDirectories(filePath.getParent());
        }
        // 파일 저장
        try (InputStream inputStream = file.getInputStream()) {
            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
        }

    }

    public void createMkbFile(NumberDummyObj obj, String fileName, int mkbNum) throws Exception{ // dummy 같으경우 renderer.dummy.count renderer.chars 값 두가지가 바뀜
        FileWriter writer = new FileWriter("newKeyboard2/"+fileName);
        writer.write("## Created at 2023. 05. 13\n");
        writer.write("## Created by bwlim\n\n");

        for(int i = 0 ; i < 3; i++){
            writer.write("renderer.type="+obj.getRenderer()[i].getType()+"\n");
            if(mkbNum == 1){
                if(i == 0){
                    obj.getRenderer()[i].getDummy().setCount(1);
                }else if(i == 1){
                    obj.getRenderer()[i].getDummy().setCount(0);
                }else if(i == 2){
                    obj.getRenderer()[i].getDummy().setCount(1);
                }
                writer.write("renderer.dummy.count="+obj.getRenderer()[i].getDummy().getCount() +"\n");
            }else if(mkbNum == 2){
                if(i == 0){
                    obj.getRenderer()[i].getDummy().setCount(0);
                }else if(i == 1){
                    obj.getRenderer()[i].getDummy().setCount(1);
                }else if(i == 2){
                    obj.getRenderer()[i].getDummy().setCount(1);
                }
                writer.write("renderer.dummy.count="+obj.getRenderer()[i].getDummy().getCount() +"\n");
            }else{
                writer.write("renderer.dummy.count="+obj.getRenderer()[i].getDummy().getCount() +"\n");
            }
            writer.write("renderer.dummy.file="+obj.getRenderer()[i].getDummy().getFile()+"\n");
            writer.write("renderer.font.file="+obj.getRenderer()[i].getFont().getFile()+"\n");
            writer.write("renderer.font.type="+obj.getRenderer()[i].getFont().getType()+"\n");
            writer.write("renderer.font.size="+obj.getRenderer()[i].getFont().getSize()+"\n");
            writer.write("renderer.font.color="+obj.getRenderer()[i].getFont().getColor()+"\n");
            writer.write("renderer.font.location="+"\""+obj.getRenderer()[i].getFont().getLocation()+"\"\n"); // ""
            if(mkbNum == 1){// 789
                if(i == 0){
                    obj.getRenderer()[i].setChars("789");
                }else if(i == 1){
                    obj.getRenderer()[i].setChars("0123");
                }else if(i == 2){
                    obj.getRenderer()[i].setChars("456");
                }
                writer.write("renderer.chars="+"\""+obj.getRenderer()[i].getChars()+"\"\n"); //""
            }else if(mkbNum == 2){ // 3456
                if(i == 0){
                    obj.getRenderer()[i].setChars("3456");
                }else if(i == 1){
                    obj.getRenderer()[i].setChars("789");
                }else if(i == 2){
                    obj.getRenderer()[i].setChars("012");
                }
                writer.write("renderer.chars="+"\""+obj.getRenderer()[i].getChars()+"\"\n"); //""
            }else{
                writer.write("renderer.chars="+"\""+obj.getRenderer()[i].getChars()+"\"\n"); //""
            }
            writer.write("renderer.key0="+"\""+obj.getRenderer()[i].getKey0()+"\"\n");// ""
            writer.write("renderer.key1="+"\""+obj.getRenderer()[i].getKey1()+"\"\n");// ""
            writer.write("renderer.key2="+"\""+obj.getRenderer()[i].getKey2()+"\"\n");// ""
            writer.write("renderer.key3="+"\""+obj.getRenderer()[i].getKey3()+"\"\n\n");// ""
        }
        writer.write("key.backspace="+"\""+obj.getKey().getBackspace()+"\"\n");// ""
        writer.write("key.close="+"\""+obj.getKey().getClose()+"\"\n");// ""

        writer.write("background="+obj.getBackground()+"\n");

        writer.close();
    }



}
