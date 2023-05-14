package com.design.transkey.kepadObj;

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
    private String chars;
    private String key0;
    private String key1;
    private String key2;
    private String key3;
}


