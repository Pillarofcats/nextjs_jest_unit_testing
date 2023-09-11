import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

//TESTING LIBRARY FOR DOCS

//Triple A Pattern for writing tests
//1 - ARRANGE
//2 - ACT
//3 - ASSERT

//Describe - a suite of tests
describe('Home Componenet Tests', () => {

  //It - a single test
  it('Should contain the text "Docs"', () => {
    //ARRANGE - get components read for testing
    render(<Home />)

    //ACT - take an action
    const myElement = screen.getByText('Docs')

    //ASSERT - to be in document
    expect(myElement).toBeInTheDocument()
  })

    it('Should contain the text "information"', () => {
      render(<Home />)

      const myElement = screen.getByText(/information/i)

      expect(myElement).toBeInTheDocument()
    })

    it('Should have a heading', () => {
      render(<Home />)

      const myElement = screen.getByRole('heading', {
        name: 'Learn'
      })

      expect(myElement).toBeInTheDocument()
    })

  })