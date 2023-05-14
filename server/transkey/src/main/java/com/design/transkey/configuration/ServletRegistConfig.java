package com.design.transkey.configuration;

import com.raonsecure.transkey.servlet.TranskeyServlet;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class ServletRegistConfig implements WebMvcConfigurer {
    @Bean
    public ServletRegistrationBean<TranskeyServlet> servletServletRegistrationBean(){
        ServletRegistrationBean<TranskeyServlet> registrationBean = new ServletRegistrationBean<TranskeyServlet>(new TranskeyServlet());
        registrationBean.addInitParameter("isRealPath","false");
        registrationBean.addInitParameter("isClassPath","false");
        registrationBean.addInitParameter("iniFilePath","/WEB-INF/raon_config/config.ini");
        registrationBean.addInitParameter("licenseIniPath","/WEB-INF/raon_config/transkey_license.ini");
        registrationBean.addUrlMappings("/transkeyServlet");

        return registrationBean;
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/transkeyServlet").allowedOrigins("*");
    }
}
