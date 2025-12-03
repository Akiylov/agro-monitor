import React from 'react';
import { CloudRain, Wind, Thermometer, Sun, Droplets, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Badge } from '../ui/badge';

const TEMP_DATA = [
  { time: '00:00', temp: 12 },
  { time: '04:00', temp: 10 },
  { time: '08:00', temp: 16 },
  { time: '12:00', temp: 24 },
  { time: '16:00', temp: 22 },
  { time: '20:00', temp: 18 },
  { time: '23:00', temp: 14 },
];

const FORECAST = [
  { day: 'Сегодня', icon: Sun, tempMax: 24, tempMin: 12, rain: 0 },
  { day: 'Завтра', icon: CloudRain, tempMax: 20, tempMin: 14, rain: 60 },
  { day: 'Ср', icon: CloudRain, tempMax: 18, tempMin: 13, rain: 80 },
  { day: 'Чт', icon: CloudRain, tempMax: 19, tempMin: 12, rain: 40 },
  { day: 'Пт', icon: Sun, tempMax: 22, tempMin: 11, rain: 0 },
  { day: 'Сб', icon: Sun, tempMax: 25, tempMin: 14, rain: 0 },
  { day: 'Вс', icon: Sun, tempMax: 27, tempMin: 16, rain: 0 },
];

export function Weather() {
  return (
    <div className="space-y-6">
       <h1 className="text-2xl font-bold text-slate-900">Погода</h1>

       {/* Current Weather Hero */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <Card className="lg:col-span-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-none shadow-lg overflow-hidden relative">
           <div className="absolute top-0 right-0 p-20 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
           <CardContent className="p-8 relative z-10">
             <div className="flex justify-between items-start">
               <div>
                 <div className="text-blue-100 text-sm font-medium mb-1">Текущая погода • Поле 12-А</div>
                 <div className="text-6xl font-bold tracking-tighter mb-2">24°C</div>
                 <div className="text-lg text-blue-100 flex items-center gap-2">
                    <Sun className="w-6 h-6" /> Ясно
                 </div>
               </div>
               <div className="text-right space-y-2">
                 <div className="flex items-center justify-end gap-2 text-blue-100">
                    <Wind className="w-5 h-5" /> <span>4 м/с СЗ</span>
                 </div>
                 <div className="flex items-center justify-end gap-2 text-blue-100">
                    <Droplets className="w-5 h-5" /> <span>45% Влаж.</span>
                 </div>
                 <div className="flex items-center justify-end gap-2 text-blue-100">
                    <CloudRain className="w-5 h-5" /> <span>0 мм</span>
                 </div>
               </div>
             </div>

             <div className="mt-8 h-48 w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={TEMP_DATA}>
                   <defs>
                     <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#ffffff" stopOpacity={0.5}/>
                       <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" tickLine={false} axisLine={false} />
                   <Tooltip 
                     contentStyle={{ backgroundColor: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '8px', color: '#fff' }}
                     itemStyle={{ color: '#fff' }}
                   />
                   <Area type="monotone" dataKey="temp" stroke="#ffffff" strokeWidth={3} fillOpacity={1} fill="url(#colorTemp)" />
                 </AreaChart>
               </ResponsiveContainer>
             </div>
           </CardContent>
         </Card>

         <div className="space-y-6">
           <Card className="border-l-4 border-l-yellow-400">
             <CardHeader className="pb-2">
               <CardTitle className="text-sm font-medium text-slate-500 flex items-center gap-2">
                 <AlertTriangle className="w-4 h-4 text-yellow-500" />
                 Риски
               </CardTitle>
             </CardHeader>
             <CardContent>
               <div className="space-y-4">
                 <div>
                   <div className="flex justify-between text-sm font-medium mb-1">
                     <span>Засуха</span>
                     <span className="text-yellow-600">Средний риск</span>
                   </div>
                   <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                     <div className="h-full w-[40%] bg-yellow-400 rounded-full"></div>
                   </div>
                 </div>
                 <div>
                   <div className="flex justify-between text-sm font-medium mb-1">
                     <span>Заморозки</span>
                     <span className="text-green-600">Низкий риск</span>
                   </div>
                   <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                     <div className="h-full w-[10%] bg-green-400 rounded-full"></div>
                   </div>
                 </div>
               </div>
             </CardContent>
           </Card>

           <Card>
             <CardHeader className="pb-2">
               <CardTitle className="text-sm font-medium text-slate-500">Благоприятность для опрыскивания</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="flex items-center gap-3">
                 <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                   <span className="text-lg font-bold text-green-700">8/10</span>
                 </div>
                 <div>
                   <div className="text-sm font-semibold text-slate-900">Отличные условия</div>
                   <div className="text-xs text-slate-500">Ветер слабый, без осадков</div>
                 </div>
               </div>
             </CardContent>
           </Card>
         </div>
       </div>

       {/* Forecast Grid */}
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
         {FORECAST.map((day, i) => {
           const Icon = day.icon;
           return (
             <Card key={i} className={`${i === 0 ? 'border-[#2ECC71] ring-1 ring-[#2ECC71] bg-emerald-50' : ''}`}>
               <CardContent className="p-4 flex flex-col items-center text-center">
                 <span className="text-sm font-semibold text-slate-700 mb-2">{day.day}</span>
                 <Icon className={`w-8 h-8 mb-2 ${day.rain > 0 ? 'text-blue-500' : 'text-yellow-500'}`} />
                 <div className="flex items-end gap-1">
                    <span className="text-lg font-bold text-slate-900">{day.tempMax}°</span>
                    <span className="text-sm text-slate-400 mb-0.5">{day.tempMin}°</span>
                 </div>
                 {day.rain > 0 && (
                   <Badge variant="secondary" className="mt-2 bg-blue-100 text-blue-700 hover:bg-blue-100 text-[10px] px-1.5 py-0 h-5">
                     {day.rain}%
                   </Badge>
                 )}
               </CardContent>
             </Card>
           )
         })}
       </div>
    </div>
  );
}
