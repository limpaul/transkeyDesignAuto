package com.design.transkey.qwertyspace;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class Display {
    private int y;
    private int size;
    private String L;
    private String U;
}
