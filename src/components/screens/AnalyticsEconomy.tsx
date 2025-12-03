import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { DollarSign } from 'lucide-react';

const COST_DATA = [
  { name: 'СЗР', value: 35, color: '#ef4444' },
  { name: 'Удобрения', value: 25, color: '#f59e0b' },
  { name: 'Семена', value: 15, color: '#22c55e' },
  { name: 'ГСМ', value: 15, color: '#3b82f6' },
  { name: 'ФОТ', value: 10, color: '#64748b' },
];

const PROFIT_DATA = [
  { name: 'Пшеница', cost: 25000, revenue: 45000 },
  { name: 'Кукуруза', cost: 35000, revenue: 60000 },
  { name: 'Подсолнечник', cost: 20000, revenue: 55000 },
  { name: 'Соя', cost: 18000, revenue: 40000 },
];

export function AnalyticsEconomy() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Экономика</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Структура затрат (сум/га)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={COST_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {COST_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="middle" align="right" layout="vertical" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Рентабельность культур (сум/га)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={PROFIT_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Legend />
                  <Bar dataKey="cost" name="Затраты" stackId="a" fill="#ef4444" radius={[0, 0, 0, 0]} barSize={20} />
                  <Bar dataKey="revenue" name="Прибыль" stackId="a" fill="#22c55e" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
