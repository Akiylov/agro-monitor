import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Calendar } from 'lucide-react';

const NDVI_DATA = [
  { date: '01 Апр', ndvi: 0.2, avg: 0.15 },
  { date: '15 Апр', ndvi: 0.35, avg: 0.3 },
  { date: '01 Май', ndvi: 0.55, avg: 0.45 },
  { date: '15 Май', ndvi: 0.72, avg: 0.6 },
  { date: '01 Июн', ndvi: 0.81, avg: 0.75 },
  { date: '15 Июн', ndvi: 0.85, avg: 0.8 },
  { date: '01 Июл', ndvi: 0.78, avg: 0.75 },
];

export function VegetationIndices() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
         <h1 className="text-2xl font-bold text-slate-900">Индексы вегетации (NDVI)</h1>
         <div className="flex gap-3">
           <div className="flex items-center bg-white border rounded-md px-3 py-2 text-sm text-slate-600">
             <Calendar className="w-4 h-4 mr-2 text-slate-400" />
             Сезон 2024
           </div>
           <Select defaultValue="field-1">
             <SelectTrigger className="w-64">
               <SelectValue placeholder="Выберите поле" />
             </SelectTrigger>
             <SelectContent>
               <SelectItem value="field-1">Поле 12-А (Пшеница)</SelectItem>
               <SelectItem value="field-2">Поле 08-Б (Кукуруза)</SelectItem>
             </SelectContent>
           </Select>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Динамика развития биомассы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={NDVI_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} domain={[0, 1]} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Legend verticalAlign="top" height={36}/>
                  <Line 
                    name="Текущий сезон" 
                    type="monotone" 
                    dataKey="ndvi" 
                    stroke="#2ECC71" 
                    strokeWidth={3} 
                    dot={{ r: 4, fill: '#2ECC71', strokeWidth: 0 }} 
                    activeDot={{ r: 6 }} 
                  />
                  <Line 
                    name="Среднее за 5 лет" 
                    type="monotone" 
                    dataKey="avg" 
                    stroke="#94a3b8" 
                    strokeWidth={2} 
                    strokeDasharray="5 5" 
                    dot={false} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Analysis Cards */}
        <div className="space-y-6">
           <Card>
             <CardHeader className="pb-2">
               <CardTitle className="text-sm font-medium text-slate-500">Текущий NDVI</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="text-4xl font-bold text-[#2ECC71] mb-1">0.85</div>
               <div className="text-sm text-slate-600">Максимальная вегетация</div>
               <div className="mt-4 h-2 w-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"></div>
               <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                 <span>0.0</span>
                 <span>0.5</span>
                 <span>1.0</span>
               </div>
             </CardContent>
           </Card>

           <Card>
             <CardHeader className="pb-2">
               <CardTitle className="text-sm font-medium text-slate-500">Однородность поля</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full border-4 border-[#2ECC71] flex items-center justify-center">
                    <span className="text-lg font-bold text-slate-800">94%</span>
                  </div>
                  <div className="text-sm text-slate-600">
                    Высокая однородность.<br/>Зон угнетения не выявлено.
                  </div>
               </div>
             </CardContent>
           </Card>

           <Card className="bg-emerald-50 border-emerald-200">
             <CardContent className="p-4">
               <h3 className="font-semibold text-emerald-900 mb-1">Рекомендация</h3>
               <p className="text-sm text-emerald-800">
                 Вегетация проходит в соответствии с планом. Рекомендуется провести плановую фунгицидную обработку через 3 дня.
               </p>
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
