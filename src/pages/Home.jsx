function Home(){
    return(
        <>
        <h1>Stay on Top of Your Finances with BudgetBuddy</h1>
        <p>Effortlessly Track Your Income, Expenses, and Budgets in One Place.</p>
        
        <div class="buttons">
            <button class="primary">Get Started</button>
            <button class="secondary">GitHub</button>
        </div>

        <h2>Features</h2>
        <p>Easily manage your finances with our app's convenient features.</p>
        <div className="card">
            <b>Account</b>
            <p>Create an Account and add a balance</p>
        </div>
        <div className="card">
            <b>Transactions</b>
            <p>Add your daily transactions, whether income or expenses</p>
        </div>
        <div className="card">
            <b>Budget</b>
            <p>Set a budget for a specified period</p>
        </div>
        </>
    )
}

export default Home