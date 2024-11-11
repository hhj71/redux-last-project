package com.sist.web.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import lombok.Data;

//DB =>  @Entity, Elasticsearch => @Document

@Document(indexName = "eboard")
@Data
public class EBoard {
   @Id // Primary Key => 검색
   private int id;
   private String name,subject,content,pwd,regdate;
   private int hit;
}
