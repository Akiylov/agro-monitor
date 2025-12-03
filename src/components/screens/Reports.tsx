import React from 'react';
import { FileText, Download, FileBarChart } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

export function Reports() {
  const reports = [
    { id: 1, title: 'Итоговый отчет по посевной', date: '20 Май 2024', type: 'PDF' },
    { id: 2, title: 'Анализ использования ТМЦ', date: '01 Июн 2024', type: 'XLSX' },
    { id: 3, title: 'Прогноз урожайности v2', date: 'Сегодня', type: 'PDF' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Отчёты</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reports.map(r => (
          <Card key={r.id} className="group cursor-pointer hover:shadow-md transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{r.title}</h3>
                <p className="text-sm text-slate-500">{r.date}</p>
              </div>
              <Button variant="outline" className="w-full gap-2">
                <Download className="w-4 h-4" /> Скачать {r.type}
              </Button>
            </CardContent>
          </Card>
        ))}
        
        <Card className="border-dashed border-2 border-slate-200 shadow-none flex items-center justify-center p-6 cursor-pointer hover:border-slate-300 hover:bg-slate-50">
           <div className="text-center">
             <div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-3">
               <FileBarChart className="w-6 h-6 text-slate-400" />
             </div>
             <h3 className="font-medium text-slate-900">Конструктор отчетов</h3>
             <p className="text-sm text-slate-500">Создать новый шаблон</p>
           </div>
        </Card>
      </div>
    </div>
  );
}
