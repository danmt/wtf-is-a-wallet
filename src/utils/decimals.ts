export const MINT_DECIMALS = 6;

export const UNITS_PER_TOKEN = Math.pow(10, MINT_DECIMALS);

export function toUserNumber(value: number, units = UNITS_PER_TOKEN) {
  return value / units;
}

export function fromUserNumber(value: number, units = UNITS_PER_TOKEN) {
  return value * units;
}
