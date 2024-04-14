const tokens = {
  97: [
    {
      address: "0x0000000000000000000000000000000000000000", // token contract address
      name: "Binance Coin",
      symbol: "BNB",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    },
    {
      address: "0x5FeAA734a0B29e35265cF978D62dA51a60e3b2DC", // token contract address
      name: "KIP Protocol",
      symbol: "KIP",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAATlBMVEUPGCkOFikSHzIVKz4QGSoOFSciOkkpR1cQNEwmU2UQQlo1Xms/bXdDfIOxvcOWqbHCzNCAk51LjZD19vf////m6etRn55Xs60WJTMOFSeeXyJmAAAAGnRSTlNy////6N3///////////////////////9zddY813gAAAFQSURBVHgBfdPhjoQgDARgxT0EUASpu3fv/6I3bW2iMdmJ/prPSQxhGMavGQY3uVtGdwOvYTqj8KF+Bi+ZPIxRIwpmFZxwGTMBgPhTBR+CKNtgECMTYcmnC7GFjMxZSZpTSgEB4AhYsgZLEYRjYnQCECOIjahgsIpAizclPAIcYmAFyaVsOW6l5lZKaAVpIwuAfQfJnWpsRDUVooAX6W5UwGIByERHAugMWiUqCt4QAg6iJcdzwY0HHScQ0QnZIoAuTAtRNfA20KMtSBYFHwMFT7SF3it65xS8GdR4EK22MPKBnIAFg2Xn36gKQgo3sNe6rctW69pqSa0UgHAD+4rkiCROSNeFjwI9EggljwXro/WXBe0z91ZfAf+l9fMsvQwYQK81WvQ+BI/aegD+3GovndboFaDWFrVHJaX1DOxb5HG7BGjDnbvfT7u8v6+v+fsHysQh/JCATOUAAAAASUVORK5CYII=",
    },
    {
      address: "0x5AD103dAF165DF8dF4617A697764dFbbaf9a4607", // token contract address
      name: "USD Tether",
      symbol: "USDT",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
    },
    {
      address: "0x544A53C55371587f921d836FA3df7bFFf90FFF80", // token contract address
      name: "USD Circle",
      symbol: "USDC",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
    },
  ],
  1: [
    {
      address: "0x0000000000000000000000000000000000000000", // token contract address
      name: "Ethereum",
      symbol: "ETH",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    },
  ],
};

export type TokenInfo = {
  address: string;
  name: string;
  symbol: string;
  icon: string;
};

const zeroAddress = "0x0000000000000000000000000000000000000000";

export { tokens, zeroAddress };
