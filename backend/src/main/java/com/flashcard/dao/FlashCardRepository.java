package com.flashcard.dao;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FlashCardRepository extends CrudRepository<FlashCard, Integer> {
    List<FlashCard> findAll();
    List<FlashCard> findByDeckName(String deckName);
}