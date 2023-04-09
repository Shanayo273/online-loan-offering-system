package in.bushansirgur.onlinebookstore.controller;

import in.bushansirgur.onlinebookstore.entity.Book;
import in.bushansirgur.onlinebookstore.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping(path = "books")
public class BookController {

        @Autowired
        private BookRepository bookRepository;

        @GetMapping("/getBook")
        public List<Book> getBooks() {
            return bookRepository.findAll();
        }

        @PostMapping("/addBook")
        public void createBook(@RequestBody Book book) {
            bookRepository.save(book);
        }

        @DeleteMapping(path = { "/{id}" })
        public Book deleteBook(@PathVariable("id") int id) {
            Book book = bookRepository.getOne(id);
            bookRepository.deleteById(id);
            return book;
        }

}
