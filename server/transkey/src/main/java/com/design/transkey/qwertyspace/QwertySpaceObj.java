package com.design.transkey.qwertyspace;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class QwertySpaceObj {
    private Renderer[] renderer;
    private Key key;
    private String background;
    private String backgroundSpecial;
}
