describe('End-to-End test asEMPLOYEE', () => {

    describe('Given I am on login page, I', () => {
        beforeEach(() => {
            cy.visit('http://127.0.0.1:8080')
        })
        it('should not be able to connect with wrong login/password', () => {
            cy.get('[data-testid="employee-login-button"]').click()
            cy.url().should('eq', 'http://127.0.0.1:8080/')

            cy.get('[data-testid="employee-email-input"]').type('employee@test.tld')
            cy.get('[data-testid="employee-login-button"]').click()
            cy.url().should('eq', 'http://127.0.0.1:8080/')
        })
        it('should access Bills page with good login/password', () => {
            cy.get('[data-testid="employee-email-input"]').type('employee@test.tld')
            cy.get('[data-testid="employee-password-input"]').type('employee')
            cy.get('[data-testid="employee-login-button"]').click()
            cy.url().should('contain', '#employee/bills')
        })
    })

    describe('Given I am connected on Bills page, I', () => {
        beforeEach(() => {
            cy.visit('http://127.0.0.1:8080')
            cy.get('[data-testid="employee-email-input"]').type('employee@test.tld')
            cy.get('[data-testid="employee-password-input"]').type('employee')
            cy.get('[data-testid="employee-login-button"]').click()
            cy.get('.content-title')
        })
        it('should see higlighted icon-window', () => {
            cy.get('[data-testid="icon-window"]').should('have.class', 'active-icon')
        })
        it('should see Title page "Mes notes de frais"', () => {
            cy.get('.content-title').should('contain.text', 'Mes notes de frais')
        })
        it('should display modal with image when click on icon-eye', () => {
            cy.get('[data-testid="icon-eye"]').eq(2).click()
            cy.get('#exampleModalLongTitle').should('contain.text', 'Justificatif').should('be.visible')
            cy.get('[data-testid="modalBody"]').should('contain.html', 'img')
            cy.get('button[class="close"]').click().click()

            cy.get('#exampleModalLongTitle').should('contain.text', 'Justificatif').should('not.be.visible')
            cy.get('#modaleFile').should('not.be.visible')
        })
        it('should open NewBill page on click btn "Nouvelle note de frais"', () => {
            cy.get('[data-testid="btn-new-bill"]').click()
            cy.url().should('eq', 'http://127.0.0.1:8080/#employee/bill/new')
            cy.get('.content-title').should('contain.text', 'Envoyer une note de frais')
        })
        it('should not go back to Login page when click on back btn', () => {
            cy.go('back')
            cy.url().should('not.eq', 'http://127.0.0.1:8080/')
            cy.url().should('eq', 'http://127.0.0.1:8080/#employee/bills')
        })
        it('should go back to Login page on click btn "deconnexion"', () => {
            cy.get('#layout-disconnect > svg').click()
            cy.url().should('eq', 'http://127.0.0.1:8080/')
        })
    })

    describe('Given I am connected on NewBill page, I', () => {
        beforeEach(() => {
            cy.visit('http://127.0.0.1:8080')
            cy.get('[data-testid="employee-email-input"]').type('employee@test.tld')
            cy.get('[data-testid="employee-password-input"]').type('employee')
            cy.get('[data-testid="employee-login-button"]').click()
            cy.get('.content-title')
            cy.get('[data-testid="btn-new-bill"]').click()
            cy.url().should('contain', '/bill/new')
        })
        it('should see higlighted icon-mail', () => {
            cy.get('[data-testid="icon-mail"]').should('have.class', 'active-icon')
        })
        it('should see Title page "Envoyer une note de frais"', () => {
            cy.get('.content-title').should('contain.text', 'Envoyer une note de frais')
        })
        it('should not send form with required fields empty', () => {
            cy.get('#btn-send-bill').click()
            cy.url().should('eq', 'http://127.0.0.1:8080/#employee/bill/new')

            cy.get('[data-testid="datepicker"]').type('2021-04-02')
            cy.get('#btn-send-bill').click()
            cy.url().should('eq', 'http://127.0.0.1:8080/#employee/bill/new')

            cy.get('[data-testid="amount"]').type('150')
            cy.get('#btn-send-bill').click()
            cy.url().should('eq', 'http://127.0.0.1:8080/#employee/bill/new')

            cy.get('[data-testid="pct"]').type('20')
            cy.get('#btn-send-bill').click()
            cy.url().should('eq', 'http://127.0.0.1:8080/#employee/bill/new')
        })
        it('should display alert if file format is not "jpeg/jpg/png"', () => {
            const stub = cy.stub()
            cy.on('window:alert', stub)

            cy.get('[data-testid="datepicker"]').type('2021-04-02')
            cy.get('[data-testid="amount"]').type('150')
            cy.get('[data-testid="pct"]').type('20')
            cy.get('[data-testid="file"]').selectFile('./cypress/assets/arrow.js')
                .then(() =>
                    expect(stub.getCall(0)).to.be.calledWith('Only jpeg, jpg or png format are suported.'))
        })
        it('should finally send form and display Bills page', () => {
            const stub = cy.stub()
            cy.on('window:alert', stub)

            cy.get('[data-testid="datepicker"]').type('2021-04-02')
            cy.get('[data-testid="amount"]').type('150')
            cy.get('[data-testid="pct"]').type('20')
            cy.get('[data-testid="file"]').selectFile('./cypress/assets/facturefreemobile.jpg')
                .then(() => expect(stub).not.to.be.called)

            cy.get('#btn-send-bill').click()
            cy.url().should('eq', 'http://127.0.0.1:8080/#employee/bills')
        })
        it('should go back to Bills page when click on back btn', () => {
            cy.go('back')
            cy.url().should('eq', 'http://127.0.0.1:8080/#employee/bills')
        })
        it('should go back to Login page on click btn "deconnexion"', () => {
            cy.get('#layout-disconnect > svg').click()
            cy.url().should('eq', 'http://127.0.0.1:8080/')
        })
    })
})