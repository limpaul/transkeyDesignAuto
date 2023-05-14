package com.design.transkey.controller;

import com.design.transkey.kepadObj.NumberDummyObj;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;


@CrossOrigin
@RestController
public class GenerateTranskey {
    @PostMapping("/result")
    public String result(@RequestParam(name = "file", required = false)MultipartFile file, @RequestParam("data") String data){
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
                createMkbFile(obj, fileName ,i);
            }


            // 이미지 처리 및 이미지 저장
            if(file!=null){
                saveImage(file);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return "Test";
    }

    public void saveImage(MultipartFile file) throws Exception {
        File convertedFile = new File(file.getOriginalFilename());
        FileOutputStream fos = new FileOutputStream(convertedFile);
        fos.write(file.getBytes());
        fos.close();
    }
    public void createMkbFile(NumberDummyObj obj, String fileName, int mkbNum) throws Exception{ // dummy 같으경우 renderer.dummy.count renderer.chars 값 두가지가 바뀜
        FileWriter writer = new FileWriter(fileName);
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
