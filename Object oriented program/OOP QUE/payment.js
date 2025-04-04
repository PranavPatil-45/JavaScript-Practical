class Payment
{
    
    pay(amount)
    {
        document.writeln("Payint"+amount+"using"+this.pay);
    }

}

class CreditCardPayment extends Payment
{
    pay(amount)
    {
        document.writeln("Credit Card Payment using"+amount+"<br>");
    }
}

class PayPalPayment extends Payment
{
    pay(amount)
    {
        document.writeln("PayPal Payment using"+amount);
    }
}

const creditard = new CreditCardPayment();

creditard.pay(100); // Output: Payint100 using Credit Card Payment using100

const payPal = new PayPalPayment();

payPal.pay(200); // Output: Payint200 using PayPal Payment using200