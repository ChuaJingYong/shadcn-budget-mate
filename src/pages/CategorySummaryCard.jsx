import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Progress } from "@/components/ui/progress"

const CategorySummaryCard = ({ title, categories }) => {
  return (
    <Card className="mb-3 bg-gray-800 text-white">
      <CardContent>
        <CardTitle>{title}</CardTitle>
        {categories.map((category, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src={category.icon} alt={`${category.name} icon`} className="w-6 mr-2" />
                <span>{category.name} ({category.percentage}%)</span>
              </div>
              <span>${category.amount.toFixed(2)}</span>
            </div>
            {/*<Progress value={category.percentage} className={`progress-${category.type === 'income' ? 'success' : 'danger'}`} />*/}
            <Progress value={category.percentage} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CategorySummaryCard;
