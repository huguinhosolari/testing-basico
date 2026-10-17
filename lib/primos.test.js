// test de primos.js (primos.test.js)

import { describe, it, expect } from "vitest";
import { esPrimo } from "./primos";

describe('esPrimo', () => {
    it('retorna true para un número primo (7)', () => {
        expect(esPrimo(7)).toBe(true)
    })
    it('retorna false para un número no primo (8)', () => {
        expect(esPrimo(8)).toBe(false)
    })
    it('retorna false para un edge case n=1', () => {
        expect(esPrimo(1)).toBe(false)
    })
    it('retorna false para otro edge case número negativo', () => {
        expect(esPrimo(-5)).toBe(false)
    })
})