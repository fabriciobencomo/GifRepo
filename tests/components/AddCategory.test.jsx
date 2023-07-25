import { fireEvent, render,screen } from "@testing-library/react"
import {AddCategory} from "../../src/components/AddCategory"

describe('AddCategory', () => { 
    test('should change the value of the input box', () => { 
        render(<AddCategory onNewCategory={ () => { }}></AddCategory>)
        const input = screen.getByRole("textbox")
        fireEvent.input(input, {target: { value: "saitama"}})
        expect(input.value).toBe("saitama")
    })    

    test('should call onNewCategory if the input has any value', () => { 
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={ onNewCategory }></AddCategory>)
        const input = screen.getByRole("textbox")
        const form = screen.getByRole("form")
        fireEvent.input(input, {target: { value: inputValue}})
        fireEvent.submit(form)
        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })

    test('should not call the onNewCategory if the value is less or equal to 1', () => { 
        const inputValue = 'S';
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={ onNewCategory }></AddCategory>)
        const input = screen.getByRole("textbox")
        const form = screen.getByRole("form")
        fireEvent.input(input, {target: { value: inputValue}})
        fireEvent.submit(form)
        expect(input.value).toBe(inputValue)
        expect(onNewCategory).toHaveBeenCalledTimes(0)
    })
})