import React from 'react';
import { Activity, AlertTriangle, Droplets, TrendingUp, Tractor, Sun, ArrowUpRight, ChevronRight, Map as MapIcon, Wheat, DollarSign, Satellite } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Cell } from 'recharts';
import { Badge } from '../ui/badge';

const NDVI_TREND = [
  { date: '1 Май', value: 0.45 },
  { date: '5 Май', value: 0.52 },
  { date: '10 Май', value: 0.58 },
  { date: '15 Май', value: 0.65 },
  { date: '20 Май', value: 0.72 },
  { date: '25 Май', value: 0.78 },
  { date: '30 Май', value: 0.81 },
];

const YIELD_PREVIEW = [
  { name: 'Пшеница', value: 100, color: '#eab308' }, // yellow-500
  { name: 'Кукуруза', value: 85, color: '#f97316' }, // orange-500
  { name: 'Соя', value: 65, color: '#22c55e' }, // green-500
  { name: 'Подсолн.', value: 90, color: '#ca8a04' }, // yellow-600
];

export function MainDashboard() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Обзор хозяйства</h1>
          <p className="text-slate-500">Мониторинг полей и агрооперации • Сезон 2024/25</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline">Скачать отчет</Button>
           <Button className="bg-[#2ECC71] hover:bg-emerald-600">Планирование</Button>
        </div>
      </div>

      {/* Top KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Card 1: Всего полей */}
        <Card className="hover:shadow-md transition-shadow border-slate-200">
          <CardContent className="p-5 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                <MapIcon className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Всего полей</div>
              <div className="text-2xl font-bold text-slate-900 mt-1">48 <span className="text-sm font-normal text-slate-500">полей</span></div>
            </div>
          </CardContent>
        </Card>

        {/* Card 2: Общая площадь */}
        <Card className="hover:shadow-md transition-shadow border-slate-200">
           <CardContent className="p-5 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-yellow-50 rounded-lg text-yellow-600">
                <Wheat className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Общая площадь</div>
              <div className="text-2xl font-bold text-slate-900 mt-1">12,450 <span className="text-sm font-normal text-slate-500">га</span></div>
            </div>
          </CardContent>
        </Card>

        {/* Card 3: Средний NDVI */}
        <Card className="hover:shadow-md transition-shadow border-slate-200">
           <CardContent className="p-5 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                <Satellite className="w-5 h-5" />
              </div>
              <Badge variant="outline" className="text-emerald-600 bg-emerald-50 border-emerald-100 flex items-center gap-1 text-[10px] px-1.5 h-5">
                <ArrowUpRight className="w-3 h-3" /> 8%
              </Badge>
            </div>
            <div>
              <div className="text-sm text-slate-500">Средний NDVI</div>
              <div className="text-2xl font-bold text-slate-900 mt-1">0.72</div>
            </div>
          </CardContent>
        </Card>

        {/* Card 4: Прогноз урожая */}
        <Card className="hover:shadow-md transition-shadow border-slate-200">
           <CardContent className="p-5 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <TrendingUp className="w-5 h-5" />
              </div>
              <Badge variant="outline" className="text-emerald-600 bg-emerald-50 border-emerald-100 flex items-center gap-1 text-[10px] px-1.5 h-5">
                <ArrowUpRight className="w-3 h-3" /> 12%
              </Badge>
            </div>
            <div>
              <div className="text-sm text-slate-500">Прогноз урожая</div>
              <div className="text-2xl font-bold text-slate-900 mt-1">52,800 <span className="text-sm font-normal text-slate-500">т</span></div>
            </div>
          </CardContent>
        </Card>

        {/* Card 5: Выполнено работ */}
        <Card className="hover:shadow-md transition-shadow border-slate-200">
           <CardContent className="p-5 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                <Activity className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Выполнено работ</div>
              <div className="text-2xl font-bold text-slate-900 mt-1">78%</div>
            </div>
          </CardContent>
        </Card>

        {/* Card 6: Прогноз выручки */}
        <Card className="hover:shadow-md transition-shadow border-slate-200">
           <CardContent className="p-5 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-yellow-50 rounded-lg text-yellow-600">
                <DollarSign className="w-5 h-5" />
              </div>
              <Badge variant="outline" className="text-emerald-600 bg-emerald-50 border-emerald-100 flex items-center gap-1 text-[10px] px-1.5 h-5">
                <ArrowUpRight className="w-3 h-3" /> 5%
              </Badge>
            </div>
            <div>
              <div className="text-sm text-slate-500">Прогноз выручки</div>
              <div className="text-xl font-bold text-slate-900 mt-1">150 Млрд UZS</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Chart Area */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Динамика вегетации (NDVI)</CardTitle>
            <CardDescription>Средний показатель по всем активным полям</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={NDVI_TREND}>
                  <defs>
                    <linearGradient id="colorNdvi" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2ECC71" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2ECC71" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} domain={[0, 1]} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#2ECC71" strokeWidth={3} fillOpacity={1} fill="url(#colorNdvi)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions / Operations */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Текущие операции</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100">
                {[
                  { title: 'Опрыскивание (Гербицид)', field: 'Поле 03-В', status: 'progress', progress: 54 },
                  { title: 'Внесение удобрений', field: 'Поле 12-А', status: 'done', progress: 100 },
                  { title: 'Культивация', field: 'Поле 15-С', status: 'pending', progress: 0 },
                ].map((op, i) => (
                  <div key={i} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-slate-800 text-sm">{op.title}</span>
                      {op.status === 'progress' && <Badge variant="secondary" className="text-blue-600 bg-blue-50">54%</Badge>}
                      {op.status === 'done' && <Badge variant="secondary" className="text-green-600 bg-green-50">Готово</Badge>}
                      {op.status === 'pending' && <Badge variant="secondary" className="text-slate-500 bg-slate-100">План</Badge>}
                    </div>
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <Tractor className="w-3 h-3" /> {op.field}
                    </div>
                    {op.status === 'progress' && (
                      <div className="mt-2 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[54%]"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="p-3 border-t border-slate-100 text-center">
                <Button variant="ghost" size="sm" className="w-full text-slate-500 hover:text-slate-900">
                  Все операции <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
           <CardHeader>
             <CardTitle className="text-base">Прогноз выполнения плана</CardTitle>
           </CardHeader>
           <CardContent>
             <div className="h-[200px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={YIELD_PREVIEW} layout="vertical" margin={{left: 20}}>
                   <CartesianGrid horizontal={false} strokeDasharray="3 3" stroke="#f1f5f9" />
                   <XAxis type="number" hide />
                   <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12, fill: '#64748b'}} axisLine={false} tickLine={false} />
                   <Tooltip cursor={{fill: 'transparent'}} />
                   <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                     {YIELD_PREVIEW.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={entry.color} />
                     ))}
                   </Bar>
                 </BarChart>
               </ResponsiveContainer>
             </div>
           </CardContent>
        </Card>

        <Card className="lg:col-span-2 bg-gradient-to-r from-[#1e293b] to-[#0f172a] text-white border-none">
           <CardContent className="p-8 flex items-center justify-between">
             <div>
               <h2 className="text-2xl font-bold mb-2">Готовы к уборке?</h2>
               <p className="text-slate-300 mb-6 max-w-md">
                 Аналитика предсказывает оптимальное окно уборки для Пшеницы озимой через 12 дней. Проверьте готовность техники.
               </p>
               <Button className="bg-[#2ECC71] hover:bg-emerald-500 text-white border-none">
                 Перейти к планированию уборки
               </Button>
             </div>
             <div className="hidden md:block relative">
               <Tractor className="w-32 h-32 text-slate-700 opacity-50" />
               <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
             </div>
           </CardContent>
        </Card>
      </div>
    </div>
  );
}
