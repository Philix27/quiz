

export function formatWalletAddress(addr: string): string {
  if (addr === undefined) {
    return "0.00";
  }
  return `${addr.substring(0, 4)}...${addr.substring(38)}`;
}

