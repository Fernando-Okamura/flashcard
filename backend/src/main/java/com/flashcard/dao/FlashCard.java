package com.flashcard.dao;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class FlashCard {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Integer id;
    private String pergunta;
    private String resposta;
    private String deckName;

}