package com.design.transkey.nodummy;


import com.design.transkey.controller.Dummy;
import com.design.transkey.controller.Font;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Arr {
    private String type;
    private Dummy dummy;
    private Font font;
    private String chars;
}
