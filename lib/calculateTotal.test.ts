// casos de prueba
// caso normal subtotal + tax rate
// caso con descuento
// casos de error
// edge cases

// calculateTotal.test.js
import { describe, it, expect } from 'vitest'
import { calculateTotal } from './calculateTotal'

describe('calculateTotal', () => {
    it('calcula el total con el impuesto por defecto sin descuento (AAA)', () => {
        // arrange
        const subtotal: number = 100
        // act
        const result: number = calculateTotal(subtotal)
        // assert
        expect(result).toBe(113.00)
    })

    it('se aplica un descuento de forma correcta con su redonddeo (AAA)', () => {
        const subtotal: number = 99.99
        const options = { taxRate: 0.13, discount: 10}

        const result: number = calculateTotal(subtotal, options)

        expect(result).toBe(102.99)
    })

    it('que pasa cuando el subtotal es negativo (AAA)', () => {
        const subtotal: number = -10

        expect( () => calculateTotal(subtotal)).toThrow('Subtotal inválido')
    })
})