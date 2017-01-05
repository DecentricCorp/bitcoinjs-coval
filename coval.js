var Testnets = {};

// extend known network params with dogecoin and litecoin testnets
Testnets.coval = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bip32: {
    public: 0x0488b21e,
    private: 0x04358394
  },
  pubKeyHash: 0x3d,
  scriptHash: 0x80,
  wif: 189,
  dustThreshold: 100000000,
};

var register = function (btcjslibNetObj) {
  Object.keys(Testnets).forEach(function (net) {
    btcjslibNetObj[net] = Testnets[net];
  });
};

module.exports = {
  register: register
};

