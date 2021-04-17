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

describe("App should have PosterContainer",()=>{
    it('PosterContainer should exist', ()=>{
      expect(cy.get('[id=postercontainer]')).to.exist;
    })

})
describe("App should have NavBar",()=>{
    it('NavBar should exist',()=>{
        expect(cy.get(['id=navbar'])).to.exist;
    })

})

describe('App should have a SideNavBar',()=>{
    it('SideNavBar should exist',()=>{
        expect(cy.get('[id=sidenavbar]')).to.exist;
    })
})

describe('App should have a Content Container component',()=>{
    it('Container for SideNavBar, PosterContainer, and MovieData should exist', ()=>{
        expect(cy.get('[id=contentcontainer]')).to.exist;
    })
})
describe('App should have a MovieData component',()=>{
    it('MovieData component should exist' ,()=>{
        expect(cy.get('[id=moviedata]')).to.exist;
    })
})