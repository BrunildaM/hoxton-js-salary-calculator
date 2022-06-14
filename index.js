let grossSalary = 500
let pensionContribution = 0.05 * grossSalary
console.log(pensionContribution)

let taxableAmount = grossSalary - pensionContribution
console.log(taxableAmount)

let firstTax = 0
let secondTax
let thirdTax
let fourthTax 


if ( taxableAmount > 80 && taxableAmount < 250) {
secondTax = ((taxableAmount - 80)* 0.04)} else 
{
  secondTax = ((250-80)*0.04)
}

console.log(secondTax)
   


if ( taxableAmount > 250 && taxableAmount < 450) {
    thirdTax = ((taxableAmount - 250)* 0.08)} else 
    {
      thirdTax = ((450-250)*0.08)
    }

    console.log(thirdTax)
  
    if (taxableAmount > 450) {
      fourthTax = ((taxableAmount-450)*0.1)
    }

    console.log(fourthTax)

    Math.max(0, secondTax, thirdTax, fourthTax)

let takeHomePay = taxableAmount - (firstTax + secondTax + thirdTax + fourthTax)
console.log(`Congratulations, your Take Home Pay is ${takeHomePay}`)