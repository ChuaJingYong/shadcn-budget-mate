import React from 'react';
import TransactionSummaryCard from './TransactionSummaryCard';
import CategorySummaryCard from './CategorySummaryCard';
import webDevIcon from '../assets/web-dev-icon.png';
import scienceIcon from '../assets/science-icon.png';
import investmentIcon from '../assets/investment-icon.png';
import dailyIcon from '../assets/daily-icon.png';

const Dashboard = () => {
  const incomeCategories = [
    { name: 'Web Dev Tutoring', percentage: 86, amount: 3200.00, icon: webDevIcon, type: 'income' },
    { name: 'Science Tuition', percentage: 14, amount: 500.00, icon: scienceIcon, type: 'income' }
  ];

  const expenseCategories = [
    { name: 'Self-Investment', percentage: 77, amount: 100.00, icon: investmentIcon, type: 'expense' },
    { name: 'Daily Expenses', percentage: 23, amount: 30.00, icon: dailyIcon, type: 'expense' }
  ];

  return (
    <div>
      <TransactionSummaryCard icon={webDevIcon} title="Income" amount={3700.00} />
      <TransactionSummaryCard icon={scienceIcon} title="Expense" amount={130.00} />
      <TransactionSummaryCard icon={investmentIcon} title="Balance" amount={3570.00} />
      <CategorySummaryCard title="Incomes by category" categories={incomeCategories} />
      <CategorySummaryCard title="Expenses by category" categories={expenseCategories} />
    </div>
  );
};

export default Dashboard;
