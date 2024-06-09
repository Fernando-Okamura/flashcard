package com.flashcard.service;

import com.flashcard.dao.FlashCard;
import com.flashcard.dao.FlashCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FlashCardService {
    private final FlashCardRepository flashCardRepository;

    @Autowired
    public FlashCardService(FlashCardRepository flashCardRepository) {
        this.flashCardRepository = flashCardRepository;
    }

    public List<FlashCard> getAllFlashCards() {
        return flashCardRepository.findAll();
    }

    public Optional<FlashCard> getFlashCardById(Integer id) {
        return flashCardRepository.findById(id);
    }

    public List<FlashCard> getFlashCardByDeckName(String deckName) {
        if(null == deckName){
            System.out.println("Deck com este nome não encontrado");
        }
        return flashCardRepository.findByDeckName(deckName);
    }

    public FlashCard createFlashCard(FlashCard flashCard) {
        return flashCardRepository.save(flashCard);
    }

    public FlashCard updateFlashCard(Integer id, FlashCard updatedFlashCard) {
        Optional<FlashCard> existingFlashCard = flashCardRepository.findById(id);
        if (existingFlashCard.isPresent()) {
            FlashCard flashCard = existingFlashCard.get();
            flashCard.setPergunta(updatedFlashCard.getPergunta());
            flashCard.setResposta(updatedFlashCard.getResposta());
            flashCard.setDeckName(updatedFlashCard.getDeckName());
            return flashCardRepository.save(flashCard);
        } else {
            // Tratar o caso em que o FlashCard não é encontrado
            return null;
        }
    }

    public FlashCard deleteFlashCard(Integer id) {
        flashCardRepository.deleteById(id);
        return null;
    }

    public List<String> getDistinctDeckNames() {
        return flashCardRepository.findDistinctDeckNames();
    }
}

