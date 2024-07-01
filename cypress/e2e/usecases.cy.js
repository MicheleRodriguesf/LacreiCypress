/// <reference types= "cypress"/>

describe ("teste lacrei e2e", ()=> {
  beforeEach(()=>{
    const email = "***";
    const passwd = "***";
    cy.login(email, passwd);
  })
  
  it ("Buscar profissional", ()=>{
cy.get ("#search").type (`Medico gay{enter}`);
cy.url ().should("include", "/lista-de-profissionais/?q=Medico+gay");


  })

 it ("Editar perfil do usuário", ()=>{
  cy.get ("a[href='/perfil/']").click()
  cy.url ().should("include", "/perfil/")
  cy.contains("button", "Editar dados").click()
  cy.get ("#lastName").type(`{selectall}{backspace}Rodrigues`)
  cy.wait(700)
  cy.contains ("button", "Salvar").click()
  cy.get("span[class='sc-be497de3-1 jmtbFE']").eq(0).contains ("Rodrigues")
 })
})
