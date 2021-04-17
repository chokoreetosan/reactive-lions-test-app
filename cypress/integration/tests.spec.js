describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
})

describe("Loads the App",()=>{
    it('Accesses the app',()=>{
        cy.visit('http://localhost:8000')   
    })
})

describe("App has correct components",()=>{
    
})
