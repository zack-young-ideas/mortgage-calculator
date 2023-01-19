/*
 * Utility class used to calculate monthly mortgage amounts.
 */

class Mortgage {

  constructor(price, downPayment, rate, amortization) {
    this.purchasePrice = price;
    this.downPaymentRate = downPayment / 100; // Convert percentage to decimal
    this.interestRate = rate / 100; // Convert percentage to decimal
    this.amortization = amortization;

    // Calculate some variables that are needed
    this.downPaymentAmount = this.purchasePrice * this.downPaymentRate;
    this.effectiveAnnualRate = ((1 + (this.interestRate / 2)) ** 2) - 1;
    this.monthlyRate = ((1 + this.effectiveAnnualRate) ** (1 / 12)) - 1;
    this.amortizationMonths = this.amortization * 12;
    this.loanAmount = this.purchasePrice - this.downPaymentAmount;
  }

  get monthlyPayment() {
    // Calculates the monthly payment amount
    let numerator = this.loanAmount * this.monthlyRate;
    let denominator = 1 - ((1 + this.monthlyRate) ** -this.amortizationMonths);
    let monthlyPayment = numerator / denominator;
    return monthlyPayment;
  }

  getMonthlyAmounts() {
    let balance = this.loanAmount;
    let index = 0;
    let output = [];
    while (index < this.amortizationMonths) {
      index++;
      let interest = balance * this.monthlyRate;
      let principal = this.monthlyPayment - interest;
      balance -= principal;
      output.push([this.monthlyPayment, interest, principal, balance,]);
    }
    return output;
  }

}

export default Mortgage;
