package steps;

import io.cucumber.java.Before;
import io.cucumber.java.After;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class StepsFlashcards {
    WebDriver driver;

    @Before
    public void before() {
        System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        driver.manage().window().maximize(); // Maximizar a janela do navegador
    }

    @After
    public void after() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Dado("que esteja na pagina: {string}")
    public void que_esteja_na_pagina(String url) {
        driver.get(url);
    }

    @Quando("clicar no side menu e clicar no Inglês")
    public void clicar_no_side_menu_e_clicar_no_inglês() {
        String sideMenuXPath = "//ion-menu[@aria-label='menu']";
        String inglesXPath = "//ion-label[normalize-space()='Inglês']";

        driver.findElement(By.xpath(sideMenuXPath)).click(); // Clicar no side menu
        driver.findElement(By.xpath(inglesXPath)).click(); // Clicar na opção Inglês

    }

    @Então("verifique que esteja na pagina: {string}")
    public void verifique_que_esteja_na_pagina(String expectedUrl) {
        String currentUrl = driver.getCurrentUrl();
        if (!currentUrl.equals(expectedUrl)) {
            throw new AssertionError("A URL atual não é a esperada. Esperado: " + expectedUrl + " mas foi: " + currentUrl);
        }
    }
}