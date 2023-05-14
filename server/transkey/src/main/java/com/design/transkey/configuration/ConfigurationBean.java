package com.design.transkey.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

@Configuration
public class ConfigurationBean {
    @Bean
    public MultipartResolver multipartResolver() { // was에서 파일 최대 크기 허용 설정 , 매소드 라이브러리 충돌로 인하여
        /*
        * implementation 'commons-fileupload:commons-fileupload:1.4' Groovy에 추가가 필요함
        * */
        CommonsMultipartResolver resolver = new CommonsMultipartResolver();
        // 최대 업로드 파일 크기 설정
        resolver.setMaxUploadSize(60000000);
        return resolver;
    }
}
