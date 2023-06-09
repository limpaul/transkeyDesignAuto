package com.design.transkey.controller;

import com.design.transkey.kepadObj.NumberDummyObj;
import com.design.transkey.nodummy.NumberNoDummyObj;
import com.design.transkey.qwertyspace.Display;
import com.design.transkey.qwertyspace.QwertySpaceObj;
import com.design.transkey.qwertyspace.Renderer;
import com.design.transkey.transkey.KeyArcive;
import com.design.transkey.transkey.KeyGenMain;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;


@CrossOrigin
@RestController
public class GenerateTranskey {

    @PostMapping("/resultQwertySpace")
    public String resultQwertySpace(@RequestParam(name = "file", required = false)MultipartFile file,
                                    @RequestParam(name = "special", required = false)MultipartFile special,
                                    @RequestParam(name = "logo1", required = false)MultipartFile logoFile1,
                                    @RequestParam(name = "logo2", required = false)MultipartFile logoFile2,
                                    @RequestParam(name = "logo3", required = false)MultipartFile logoFile3,
                                    @RequestParam(name = "logo4", required = false)MultipartFile logoFile4,
                                    @RequestParam(name = "font1", required = false)MultipartFile fontFile1,
                                    @RequestParam(name = "font2", required = false)MultipartFile fontFile2,
                                    @RequestParam(name = "font3", required = false)MultipartFile fontFile3,
                                    @RequestParam(name = "font4", required = false)MultipartFile fontFile4,

                                    @RequestParam("data") String data)throws Exception{
        ObjectMapper mapper = new ObjectMapper();
        QwertySpaceObj obj = mapper.readValue(data, QwertySpaceObj.class);
        System.out.println(obj.toString());
        // 이미지 처리 및 이미지 저장
        saveImage(file);
        saveImage(special);

        // 폰트파일 저장
        saveTtf(fontFile1);
        saveTtf(fontFile2);
        saveTtf(fontFile3);
        saveTtf(fontFile4);


        // 로고 처리 및 이미지 저장
        saveImage(logoFile1);
        saveImage(logoFile2);
        saveImage(logoFile3);
        saveImage(logoFile4);


        createMkbForQwertySpaceFile(obj, "qwerty_space.mkb");

        KeyGenMain.main(new String[]{"qwerty_space.mkb", "0.00001", "true", "false"});
   //     KeyArcive.main(new String[]{"true"}); // true면 qwerty, false면 number 압축

        return "resultQwertySpace";
    }
    @PostMapping("/resultNodummy")
    public String resultNodummy(@RequestParam(name = "file", required = false)MultipartFile file,
                                @RequestParam(name = "logo1", required = false)MultipartFile logoFile1,
                                @RequestParam(name = "logo2", required = false)MultipartFile logoFile2,
                                @RequestParam(name = "font1", required = false)MultipartFile fontFile1,
                                @RequestParam(name = "font2", required = false)MultipartFile fontFile2,
                                @RequestParam("data") String data) throws Exception{
        ObjectMapper objectMapper = new ObjectMapper();
        NumberNoDummyObj obj = objectMapper.readValue(data, NumberNoDummyObj.class);
        System.out.println(obj.toString());

        createMkbForNoDummyFile(obj, "number_nodummy.mkb");

        // 이미지 처리 및 이미지 저장
        saveImage(file);

        // 폰트파일 저장
        saveTtf(fontFile1);
        saveTtf(fontFile2);


        // 로고 처리 및 이미지 저장
        saveImage(logoFile1);
        saveImage(logoFile2);


        KeyGenMain.main(new String[]{"number_nodummy.mkb", "0.08", "false", "true"});
        KeyArcive.main(new String[]{"false"}); // true면 qwerty, false면 number 압축

        // 디렉토리 WEB-INF/raon_config/keyboard/옮기고
        // was 재기동
        return "hello noDummy";
    }



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

            saveTtf(fontFile1);
            saveTtf(fontFile2);
            saveTtf(fontFile3);


            saveImage(logoFile1);
            saveImage(logoFile2);
            saveImage(logoFile3);


            KeyGenMain.main(new String[]{"number.mkb", "0.08", "false", "false"}); // (mkb파일 이름, property, qwerty인지, shuffle ( noDummy일때만 true )
            KeyArcive.main(new String[]{"false"});
        } catch (Exception e) {
            e.printStackTrace();
        }

        return "Test";
    }

    private void initQwertyImportantValue(QwertySpaceObj qwertySpaceObj){

        for(int i = 0; i < 3 ; i++){
            Renderer renderer = qwertySpaceObj.getRenderer()[i];
            if(i == 1){ // display.L, dispaly.U 초기화
//                renderer.getChars().getDisplay().setL();
//                renderer.getChars().getDisplay().setU();
//                renderer.getChars().getDisplay().setY();
            }
        }
    }
    private void saveTtf(MultipartFile fontFile) throws IOException {
        if(fontFile == null){
            return;
        }
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
        }catch (Exception e){
            e.printStackTrace();
        }

    }

    public void saveImage(MultipartFile file) throws Exception {
        if(file == null){
            return;
        }
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
    public void createMkbForQwertySpaceFile(QwertySpaceObj obj, String fileName) throws Exception{
        Writer writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream("newKeyboard2/" + fileName), "UTF-8"));
        writer.write("## Created at 2023. 05. 13\n");
        writer.write("## Created by bwlim\n\n");

        for(int i = 0 ; i < 5 ; i++){
            writer.write("renderer.type="+obj.getRenderer()[i].getType()+"\n");
            writer.write("renderer.dummy.count="+obj.getRenderer()[i].getDummy().getCount() +"\n");
            writer.write("renderer.dummy.file="+obj.getRenderer()[i].getDummy().getFile()+"\n");
            writer.write("renderer.font.file="+obj.getRenderer()[i].getFont().getFile()+"\n");
            writer.write("renderer.font.type="+obj.getRenderer()[i].getFont().getType()+"\n");
            writer.write("renderer.font.size="+obj.getRenderer()[i].getFont().getSize()+"\n");
            writer.write("renderer.font.color="+obj.getRenderer()[i].getFont().getColor()+"\n");
            writer.write("renderer.font.location="+"\""+obj.getRenderer()[i].getFont().getLocation()+"\"\n"); // ""
            writer.write("renderer.chars.lower="+"\""+obj.getRenderer()[i].getChars().getLower()+"\"\n"); //""
            writer.write("renderer.chars.upper="+"\""+obj.getRenderer()[i].getChars().getUpper()+"\"\n"); //""
            writer.write("renderer.chars.special="+"\""+obj.getRenderer()[i].getChars().getSpecial()+"\"\n"); //""
            // 분기처리 필요 1, 2, 3
            if(i != 0 && i !=4){
                Display temp = obj.getRenderer()[i].getChars().getDisplay();
                if( i == 1){
                    initQwertySpaceLUValue(temp,"ㅂㅈㄷㄱㅅㅛㅕㅑㅐㅔ" ,"ㅃㅉㄸㄲㅆㅛㅕㅑㅒㅖ" );
                }
                if( i == 2){
                    initQwertySpaceLUValue(temp,"ㅁㄴㅇㄹㅎㅗㅓㅏㅣ" ,"ㅁㄴㅇㄹㅎㅗㅓㅏㅣ" );
                }
                if( i == 3){
                    initQwertySpaceLUValue(temp,"ㅋㅌㅊㅍㅠㅜㅡ" , "ㅋㅌㅊㅍㅠㅜㅡ");
                }

                writer.write("renderer.chars.display.L="+"\""+obj.getRenderer()[i].getChars().getDisplay().getL()+"\"\n"); //""
                writer.write("renderer.chars.display.U="+"\""+obj.getRenderer()[i].getChars().getDisplay().getU()+"\"\n"); //""
            }
            if(i !=0 ){
                // 분기처리 필요
                writer.write("renderer.display.y="+"\""+obj.getRenderer()[i].getDisplay().getY()+"\"\n"); //""
                writer.write("renderer.display.size="+"\""+obj.getRenderer()[i].getDisplay().getSize()+"\"\n"); //""
            }
            writer.write("renderer.key0="+"\""+obj.getRenderer()[i].getKey0()+"\"\n");// ""
            if(i!=4){
                writer.write("renderer.key1="+"\""+obj.getRenderer()[i].getKey1()+"\"\n");// ""
                writer.write("renderer.key2="+"\""+obj.getRenderer()[i].getKey2()+"\"\n");// ""
                writer.write("renderer.key3="+"\""+obj.getRenderer()[i].getKey3()+"\"\n");// ""
                writer.write("renderer.key4="+"\""+obj.getRenderer()[i].getKey4()+"\"\n");// ""
                writer.write("renderer.key5="+"\""+obj.getRenderer()[i].getKey5()+"\"\n");// ""
                writer.write("renderer.key6="+"\""+obj.getRenderer()[i].getKey6()+"\"\n");// ""
                writer.write("renderer.key7="+"\""+obj.getRenderer()[i].getKey7()+"\"\n");// ""
            }
            if(i!=3 && i!=4){
                writer.write("renderer.key8="+"\""+obj.getRenderer()[i].getKey8()+"\"\n");// ""
                writer.write("renderer.key9="+"\""+obj.getRenderer()[i].getKey9()+"\"\n");// ""
                writer.write("renderer.key10="+"\""+obj.getRenderer()[i].getKey10()+"\"\n\n");// ""
            }
        }

        writer.write("key.caps="+"\""+obj.getKey().getCaps()+"\"\n");// ""
        writer.write("key.special="+"\""+obj.getKey().getSpecial()+"\"\n");// ""
        writer.write("key.clear="+"\""+obj.getKey().getClear()+"\"\n");// ""
        writer.write("key.backspace="+"\""+obj.getKey().getBackspace()+"\"\n");// ""
        writer.write("key.close="+"\""+obj.getKey().getClose()+"\"\n\n");// ""
        writer.write("background="+obj.getBackground()+"\n");
        writer.write("backgroundSpecial="+obj.getBackground()+"\n");
        writer.close();
    }

    public void initQwertySpaceLUValue(Display display, String lower, String upper){

        if(display.getL() == null){
            display.setL(new String(lower.getBytes(StandardCharsets.UTF_8), StandardCharsets.UTF_8));
        }
        if(display.getU() == null){
            display.setU(new String(upper.getBytes(StandardCharsets.UTF_8), StandardCharsets.UTF_8));
        }
    }
    public void createMkbForNoDummyFile(NumberNoDummyObj obj, String fileName) throws Exception{

        FileWriter writer = new FileWriter("newKeyboard2/"+fileName);
        writer.write("## Created at 2023. 05. 13\n");
        writer.write("## Created by bwlim\n\n");

        for(int i = 0 ; i < 2 ; i++){
            writer.write("renderer.type="+obj.getRenderer().getArr()[i].getType()+"\n");
            writer.write("renderer.dummy.count="+obj.getRenderer().getArr()[i].getDummy().getCount() +"\n");
            writer.write("renderer.dummy.file="+obj.getRenderer().getArr()[i].getDummy().getFile()+"\n");
            writer.write("renderer.font.file="+obj.getRenderer().getArr()[i].getFont().getFile()+"\n");
            writer.write("renderer.font.type="+obj.getRenderer().getArr()[i].getFont().getType()+"\n");
            writer.write("renderer.font.size="+obj.getRenderer().getArr()[i].getFont().getSize()+"\n");
            writer.write("renderer.font.color="+obj.getRenderer().getArr()[i].getFont().getColor()+"\n");
            writer.write("renderer.font.location="+"\""+obj.getRenderer().getArr()[i].getFont().getLocation()+"\"\n"); // ""
            writer.write("renderer.chars="+"\""+obj.getRenderer().getArr()[i].getChars()+"\"\n\n"); //""

        }
        writer.write("renderer.shuffle="+obj.getRenderer().getShuffle()+"\n");
        writer.write("renderer.key0="+"\""+obj.getRenderer().getKey0()+"\"\n");// ""
        writer.write("renderer.key1="+"\""+obj.getRenderer().getKey1()+"\"\n");// ""
        writer.write("renderer.key2="+"\""+obj.getRenderer().getKey2()+"\"\n");// ""
        writer.write("renderer.key3="+"\""+obj.getRenderer().getKey3()+"\"\n");// ""
        writer.write("renderer.key4="+"\""+obj.getRenderer().getKey4()+"\"\n");// ""
        writer.write("renderer.key5="+"\""+obj.getRenderer().getKey5()+"\"\n");// ""
        writer.write("renderer.key6="+"\""+obj.getRenderer().getKey6()+"\"\n");// ""
        writer.write("renderer.key7="+"\""+obj.getRenderer().getKey7()+"\"\n");// ""
        writer.write("renderer.key8="+"\""+obj.getRenderer().getKey8()+"\"\n");// ""
        writer.write("renderer.key9="+"\""+obj.getRenderer().getKey9()+"\"\n\n");// ""

        writer.write("key.backspace="+"\""+obj.getKey().getBackspace()+"\"\n");// ""
        writer.write("key.close="+"\""+obj.getKey().getClose()+"\"\n\n");// ""
        writer.write("background="+obj.getBackground()+"\n");
        writer.close();
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
