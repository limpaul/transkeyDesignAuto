package com.design.transkey.nodummy;

import com.design.transkey.kepadObj.Key;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class NumberNoDummyObj {
    private Renderer renderer;
    private Key key;
    private String background;
}
