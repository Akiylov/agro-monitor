import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { TrendingUp, AlertCircle } from 'lucide-react';

const YIELD_DATA = [
  { name: 'Пшеница', plan: 4.5, forecast: 4.8, lastYear: 4.2 },
  { name: 'Кукуруза', plan: 8.0, forecast: 7.5, lastYear: 7.8 },
  { name: 'Подсолнечник', plan: 2.8, forecast: 2.9, lastYear: 2.6 },
  { name: 'Соя', plan: 2.2, forecast: 2.1, lastYear: 2.0 },
];

export function AnalyticsYield() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Прогноз урожайности</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <Card>
           <CardContent className="p-6">
             <div className="text-sm text-slate-500 font-medium mb-2">Общий валовый сбор (прогноз)</div>
             <div className="text-3xl font-bold text-slate-900 mb-1">2,450 т</div>
             <div className="flex items-center text-sm text-green-600">
               <TrendingUp className="w-4 h-4 mr-1" /> +5.2% к плану
             </div>
           </CardContent>
         </Card>
         <Card>
           <CardContent className="p-6">
             <div className="text-sm text-slate-500 font-medium mb-2">Средняя урожайность</div>
             <div className="text-3xl font-bold text-slate-900 mb-1">4.2 т/га</div>
             <div className="flex items-center text-sm text-slate-400">
               По всем культурам
             </div>
           </CardContent>
         </Card>
         <Card className="border-l-4 border-l-yellow-400">
           <CardContent className="p-6">
             <div className="text-sm text-slate-500 font-medium mb-2">Риск недобора</div>
             <div className="text-3xl font-bold text-yellow-600 mb-1">Кукуруза</div>
             <div className="flex items-center text-sm text-slate-500">
               <AlertCircle className="w-4 h-4 mr-1 text-yellow-500" /> -0.5 т/га от плана
             </div>
           </CardContent>
         </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>План vs Прогноз vs Прошлый год (т/га)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={YIELD_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                <Legend />
                <Bar dataKey="plan" name="План" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                <Bar dataKey="forecast" name="Прогноз AI" fill="#2ECC71" radius={[4, 4, 0, 0]} />
                <Bar dataKey="lastYear" name="2023" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
