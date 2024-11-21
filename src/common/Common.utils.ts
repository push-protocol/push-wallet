export const centerMaskWalletAddress = (address: string) => {
  if (address) {
    const start = address.substring(0, 7);
    const end = address.substring(address.length - 7);
    return start + "..." + end;
  }
  return "";
};


