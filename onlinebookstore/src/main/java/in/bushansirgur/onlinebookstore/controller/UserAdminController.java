package in.bushansirgur.onlinebookstore.controller;

import in.bushansirgur.onlinebookstore.entity.UserAdmin;
import in.bushansirgur.onlinebookstore.repository.UserAdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "users")
public class UserAdminController {

        @Autowired
        private UserAdminRepository userRepository;

        @GetMapping("/get")
        public List<UserAdmin> getUsers() {
            return userRepository.findAll();
        }

        @PostMapping("/add")
        public void createUser(@RequestBody UserAdmin user) {
                userRepository.save(user);
        }

        @DeleteMapping(path = { "/{id}" })
        public UserAdmin deleteUser(@PathVariable("id") long id) {
                UserAdmin user = userRepository.getOne(id);
                userRepository.deleteById(id);
                return user;
        }

}
