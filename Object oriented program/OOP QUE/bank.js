class BankAccount
{
    #balance;
    constructor (balance)

    {
        if(balance < 0)
        {
            document.writeln("balance cannot be 0");
        }
        this.#balance = balance;

    }
    deposit(amount)
    {
        if(amount <=0)
        {
            document.writeln("Amount to deposit should be greater than 0");
        }
        this.#balance += amount;
        document.writeln("Deposit successful."+"<br>"+" New balance: " + this.#balance+"<br>");

    }
    withdraw(amount)
    {
        if(amount <=0)
        {
            document.writeln("Amount to withdraw should be greater than 0");
        }
        else if(amount >= this.#balance)
        {
            document.writeln("Insufficient balance");
        }
      
        
    
        this.#balance -= amount;
        document.writeln("Withdrawal successful."+"<br>"+" New balance: " + this.#balance+"<br>");

    }
    getBalance()
    {
        this.#balance
    }
}

const account = new BankAccount(1000);

account.deposit(10000);

account.withdraw();

account.getBalance(); 


