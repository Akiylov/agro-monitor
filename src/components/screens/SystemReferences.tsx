import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

export function SystemReferences() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Справочники</h1>
      <Tabs defaultValue="crops">
        <TabsList>
          <TabsTrigger value="crops">Культуры</TabsTrigger>
          <TabsTrigger value="tech">Техника</TabsTrigger>
          <TabsTrigger value="szr">СЗР и Удобрения</TabsTrigger>
        </TabsList>
        
        <TabsContent value="crops" className="mt-4">
          <Card>
             <Table>
               <TableHeader>
                 <TableRow>
                   <TableHead>Название</TableHead>
                   <TableHead>Тип</TableHead>
                   <TableHead>Цвет на карте</TableHead>
                 </TableRow>
               </TableHeader>
               <TableBody>
                 <TableRow>
                   <TableCell>Пшеница озимая</TableCell>
                   <TableCell>Зерновые</TableCell>
                   <TableCell><div className="w-4 h-4 rounded-full bg-yellow-400"></div></TableCell>
                 </TableRow>
                 <TableRow>
                   <TableCell>Кукуруза</TableCell>
                   <TableCell>Зерновые</TableCell>
                   <TableCell><div className="w-4 h-4 rounded-full bg-orange-400"></div></TableCell>
                 </TableRow>
                 <TableRow>
                   <TableCell>Соя</TableCell>
                   <TableCell>Бобовые</TableCell>
                   <TableCell><div className="w-4 h-4 rounded-full bg-green-400"></div></TableCell>
                 </TableRow>
               </TableBody>
             </Table>
          </Card>
        </TabsContent>
        
        <TabsContent value="tech" className="mt-4">
          <Card><CardContent className="p-6 text-slate-500">Парк техники...</CardContent></Card>
        </TabsContent>
        
        <TabsContent value="szr" className="mt-4">
          <Card><CardContent className="p-6 text-slate-500">Каталог агрохимии...</CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
