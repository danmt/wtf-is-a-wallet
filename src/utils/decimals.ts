export const MINT_DECIMALS = 6;

export function toUserNumber(value: number) {
  return value * Math.pow(10, MINT_DECIMALS);
}
