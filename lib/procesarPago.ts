// lib/procesarPago.ts
import { cobrarTarjeta } from './pasarelaPago'

export async function procesarPago(monto: number, tarjeta: string) {
  if (monto <= 0) {
    throw new Error("Monto inválido");
  }

  const resultado = await cobrarTarjeta(tarjeta, monto);

  if (!resultado.exito) {
    return { ok: false, mensaje: "Pago rechazado" };
  }

  return { ok: true, mensaje: `Pago de $${monto} aprobado`, idTransaccion: resultado.id };
}