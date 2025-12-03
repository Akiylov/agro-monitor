import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function SystemSettings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Настройки системы</h1>
      <Tabs defaultValue="general">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="general">Общие</TabsTrigger>
          <TabsTrigger value="integrations">Интеграции</TabsTrigger>
          <TabsTrigger value="notifications">Уведомления</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="mt-6 space-y-4 max-w-2xl">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="org">Название организации</Label>
                <Input id="org" defaultValue='ООО "АгроХолдинг"' />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lang">Язык интерфейса</Label>
                <select id="lang" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                   <option>Русский</option>
                   <option>English</option>
                </select>
              </div>
              <Button className="mt-4 bg-[#2ECC71] hover:bg-emerald-600">Сохранить</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="mt-6">
           <Card>
             <CardContent className="p-6 text-slate-500">
               <h3 className="font-semibold text-slate-900 mb-2">John Deere Operations Center</h3>
               <p className="text-sm mb-4">Синхронизация границ полей и данных урожайности.</p>
               <Button variant="outline">Подключить</Button>
             </CardContent>
           </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
