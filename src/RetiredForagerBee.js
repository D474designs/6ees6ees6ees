class RetiredForagerBee extends Bee {
  constructor() {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey',
    this.treasureChest = [];
  }
  forage(treasure) {
    return 'I am too old, let me play cards instead';
  }
  gamble(pettyCash) {
    this.treasureChest.push('!whiteCastleMoneyAndBlackAndMilds');
  }
};
