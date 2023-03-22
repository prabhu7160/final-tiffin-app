package com.project.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.dtos.DtoEntityConverter;
import com.project.dtos.Response;
import com.project.dtos.TiffinDetailDto;
import com.project.dtos.TiffinFormDto;
import com.project.entities.TiffinDetail;
import com.project.services.StorageService;
import com.project.services.TiffinDetailService;

@CrossOrigin(origins = "*")
@RestController
public class TiffinDetailController {

	@Autowired
	private TiffinDetailService tiffinDetailService;
	@Autowired
	private DtoEntityConverter converter;
	@Autowired
	private StorageService storageService;
	@PostMapping("/tiffinDetail/{id}")
	public ResponseEntity<?> displayTiffinDetail(@PathVariable("id") int id) {
		TiffinDetailDto tiffinDetailDto = tiffinDetailService. findTiffinById(id);
		return Response.success(tiffinDetailDto);
	}
	@GetMapping("/tiffin/details")
	public ResponseEntity<?> findAllTiffinDetails() {
		return Response.success(tiffinDetailService.findAllTiffins());
	}

//	@PostMapping("/tiffin/addTiffin")
//	public ResponseEntity<?> save(@RequestBody TiffinDetailDto details) {
//		return Response.success(tiffinDetailService.saveTiffin(details));
//	}

	@PostMapping("/tiffin/addTiffin")
	   public ResponseEntity<?> saveAlbum(TiffinFormDto tiffinDto) throws IOException {
	       System.out.println(tiffinDto);
	       TiffinDetail tiffin = converter.albumFormDtoToEntity(tiffinDto);
	       String thumbnail = storageService.store(tiffinDto.getTiffinImage());
	       tiffin.setTiffinImage(thumbnail);
	       tiffinDetailService.saveTiffinDetails(tiffin);
	       return Response.success(tiffin);
	   }
	@PostMapping("/tiffin/updateTiffin/{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody TiffinDetailDto details) {
		TiffinDetailDto det = tiffinDetailService.findTiffinById(id);
		System.out.println(details.getDescription());
		det.setTiffinName(details.getTiffinName());
		det.setTiffinPrice(details.getTiffinPrice());
		det.setDescription(details.getDescription());
		TiffinDetail result = tiffinDetailService.saveTiffin(det);
		return Response.success(result);
	}	

	@DeleteMapping("/tiffin/delete/{id}")
	public @ResponseBody String deleteById(@PathVariable("id") int id) {
		int count = tiffinDetailService.deleteTiffinById(id);
		return "Records Deleted: " + count;
	}
}
