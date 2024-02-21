describe('Vyhledání zboží a přidání do nákupního košíku - Datart.cz', () => {
  it('Otevření stránky Datart.cz', () => {
    cy.visit('https://www.datart.cz/')

    // Zavření pop-up okna cookies
    cy.window().then(win => {
      cy.get('#c-t-bn').click()
    });

    // vyhledání produktu "iPhone 15"
    cy.get('[type="search"]').type('iPhone 15')
    cy.get('#btnSearch').click()

    // Ověření, že jsme na stránce s výsledky vyhledávání
    cy.url().should('include', 'iphone-15')

    // Kliknutí na první výsledek vyhledávání (předpokládáme, že první výsledek je hledaný produkt)
    cy.get('.product-box').first().click()

    // Ověření, že jsme na stránce s detaily produktu
    cy.url().should('include', 'iphone-15')

    // ODTUD DÁL HÁŽE ERROR - VYŘEŠIT
    // Kliknutí na tlačítko "Přidat do porovnání"
    //cy.get('.compare-lg').click()

    // Podívat se na porovnání
    //cy.get('.compare-widget').click()

  })
})
