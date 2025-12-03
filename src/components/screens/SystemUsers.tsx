import React from 'react';
import { Users, Plus, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export function SystemUsers() {
  const users = [
    { id: 1, name: 'Иванов Иван', email: 'ivanov@agro.com', role: 'Администратор', status: 'active' },
    { id: 2, name: 'Петров Петр', email: 'petrov@agro.com', role: 'Агроном', status: 'active' },
    { id: 3, name: 'Сидоров Сидор', email: 'sidorov@agro.com', role: 'Механизатор', status: 'inactive' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
         <h1 className="text-2xl font-bold text-slate-900">Пользователи</h1>
         <Button className="bg-[#2ECC71] hover:bg-emerald-600 text-white"><Plus className="w-4 h-4 mr-2" /> Добавить</Button>
      </div>

      <div className="bg-white rounded-lg shadow border border-slate-200 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Пользователь</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Роль</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead className="text-right">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((u) => (
              <TableRow key={u.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="" />
                      <AvatarFallback>{u.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-slate-900">{u.name}</span>
                  </div>
                </TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Shield className="w-3 h-3 text-slate-400" />
                    {u.role}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={u.status === 'active' ? 'default' : 'secondary'} className={u.status === 'active' ? 'bg-green-100 text-green-700 hover:bg-green-100' : ''}>
                    {u.status === 'active' ? 'Активен' : 'Неактивен'}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                   <Button variant="ghost" size="sm">Ред.</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
