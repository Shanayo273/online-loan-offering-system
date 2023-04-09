/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package in.bushansirgur.onlinebookstore.controller;

import in.bushansirgur.onlinebookstore.Dto.LoginDto;
import in.bushansirgur.onlinebookstore.Dto.UserDto;
import in.bushansirgur.onlinebookstore.entity.User;
import in.bushansirgur.onlinebookstore.payloadresponse.LoginMessage;
import in.bushansirgur.onlinebookstore.repository.UserRepository;
import in.bushansirgur.onlinebookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 *
 * @author Cool buddy
 */
@RestController
@CrossOrigin (origins = "http://localhost:4200/")
@RequestMapping ()

public class UserController {

    @Autowired
    private UserService userService;

    private UserRepository userRepository;

    @PostMapping(path = "/login")
    public LoginMessage loginUser (@RequestBody LoginDto loginDto)
    {
        return new LoginMessage("Success!", true);
    }

    @PostMapping(path = "/save")
    public String saveUser (@RequestBody UserDto userDto)
    {
        String id = userService.addUser(userDto);
        return id;
    }

    @GetMapping(path ="/getUsers")
    public List<User> getUsers(){ return userRepository.findAll(); }
    
} 

