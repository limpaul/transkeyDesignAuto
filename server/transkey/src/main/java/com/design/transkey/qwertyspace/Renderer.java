package com.design.transkey.qwertyspace;


import com.design.transkey.controller.Dummy;
import com.design.transkey.controller.Font;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Renderer {
    private String type;
    private Dummy dummy;
    private Font font;
    private Chars chars;

    private Display display;
    private String key0;
    private String key1;
    private String key2;
    private String key3;
    private String key4;
    private String key5;
    private String key6;
    private String key7;
    private String key8;
    private String key9;
    private String key10;
}
