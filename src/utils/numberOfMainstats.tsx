export default function getActualNumberOfMainstats(mainstatAmt: string | number) {
    switch (mainstatAmt as number) {
      case 0:
        return 0;
      case 25:
        return 1;
      case 50:
        return 2;
      case 75:
        return 3;
      case 100:
        return 4;
      default:
        return 0;
    }
  }