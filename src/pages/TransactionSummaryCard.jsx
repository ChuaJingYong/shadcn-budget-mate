import React from 'react';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

function TransactionSummaryCard({ icon, title, amount }) {
  return (
    <Card className="mb-3 bg-gray-800 text-white">
      <CardContent>
        <div className="flex items-center">
          <img src={icon} alt={`${title} icon`} className="w-6 mr-2" />
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>${amount.toFixed(2)}</CardDescription>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TransactionSummaryCard;
