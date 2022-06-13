let grossSalary = 500
let pensionContribution = 0.05 * grossSalary
console.log(pensionContribution)

let taxableAmount = grossSalary - pensionContribution
console.log(taxableAmount)

if (0 < taxableAmount < 80) {
    firstTax = 0
} 

if (80 < taxableAmount < 250) {
   secondTax = ((250-80)*0.04)
}

if (250 < taxableAmount < 450) {
    thirdTax = ((450-250)*0.08)
}

if (taxableAmount > 450) {
    fourthTax = ((taxableAmount-450)*0.1)
}


let takeHomePay = taxableAmount - (firstTax + secondTax + thirdTax + fourthTax)
console.log('Congratulations, your Take Home Pay is' + ' ' + takeHomePay)