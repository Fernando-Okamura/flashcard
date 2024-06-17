#language:pt
  Funcionalidade: Testes exemplo Cucumber
    Cenário: Teste flashcard estude+
      Dado que esteja na pagina: "http://localhost:4200/home"
      Quando clicar no side menu e clicar no Inglês
      Então verifique que esteja na pagina: "http://localhost:4200/ingles"