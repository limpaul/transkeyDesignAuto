package com.design.transkey.qwertyspace;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class Key {
    private String caps;
    private String special;
    private String clear;
    private String backspace;
    private String close;
}
