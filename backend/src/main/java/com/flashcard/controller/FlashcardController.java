package com.flashcard.controller;

import com.flashcard.dao.FlashCard;
import com.flashcard.service.FlashCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.HttpStatus.NOT_FOUND;
import static org.springframework.http.HttpStatus.OK;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class FlashcardController {

    private final FlashCardService flashCardService;

    @Autowired
    public FlashcardController(FlashCardService flashCardService) {
        this.flashCardService = flashCardService;
    }

    @GetMapping("/all")
    public List<FlashCard> getAllFlashCards() {
        return flashCardService.getAllFlashCards();
    }

    @GetMapping("/deckName/{deckName}")
    public ResponseEntity<List<FlashCard>> getFlashCardByDeckName(@PathVariable String deckName) {
        List<FlashCard> flashCard = flashCardService.getFlashCardByDeckName(deckName);
        return ResponseEntity.ok().body(flashCard);
    }

    @GetMapping("/id/{flashCardId}")
    public ResponseEntity<FlashCard> getFlashCardById(@PathVariable Integer flashCardId) {
        Optional<FlashCard> flashCard = flashCardService.getFlashCardById(flashCardId);
        return flashCard.map(value -> new ResponseEntity<>(value, OK))
                .orElseGet(() -> new ResponseEntity<>(NOT_FOUND));
    }

    @PostMapping("/cadastrar") //cadastro
    public String cadastrarFlashcard(@RequestBody FlashCard flashCard) {
        FlashCard savedFlashcard = flashCardService.createFlashCard(flashCard);

        if (savedFlashcard != null) {
            return "Flashcard com pergunta " + savedFlashcard.getPergunta() + " e resposta " + savedFlashcard.getResposta() + " cadastrado com sucesso!";
        } else {
            return "Erro ao cadastrar o Flashcard.";
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<FlashCard> updateFlashCard(@PathVariable Integer id,
                                                     @RequestBody FlashCard flashCard) {
        FlashCard updatedCard = flashCardService.updateFlashCard(id, flashCard);
        if (updatedCard != null) {
            return new ResponseEntity<>(updatedCard, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/excluir/{flashCardId}")
    public ResponseEntity<FlashCard> excluirFlashcard(@PathVariable Integer flashCardId) {
        FlashCard deletedCard = flashCardService.deleteFlashCard(flashCardId);
        if (deletedCard != null) {
            return new ResponseEntity<>(deletedCard, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}




