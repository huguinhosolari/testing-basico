// calculateTotal.ts

interface CalculateTotalOptions {
    taxRate?: number;
    discount?: number;
}

export function calculateTotal(
    subtotal: number,
    { taxRate = 0.13, discount = 0 }: CalculateTotalOptions = {}
    ): number {
    
    if (typeof subtotal !== "number" || subtotal < 0) {
        throw new Error("Subtotal inválido");
    }
    const taxed = subtotal * (1 + taxRate);
    const total = taxed - discount;
    return Math.max(0, Number(total.toFixed(2)));
}