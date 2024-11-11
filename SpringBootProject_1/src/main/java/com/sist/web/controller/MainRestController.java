package com.sist.web.controller;

import java.util.*;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainRestController {
	@GetMapping("/names")
	public List<String> main_names(){
		List<String> list = new ArrayList<>();
		list.add("홍길동");
		list.add("심청이");
		list.add("박문수");
		return list;
	}
}
