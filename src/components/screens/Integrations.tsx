import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { CheckCircle, RefreshCw, Server, Database, Globe, Lock } from 'lucide-react';

export function Integrations() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Интеграционная подсистема</h1>
        <p className="text-slate-500">Управление API и внешними подключениями</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* API Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="w-5 h-5 text-blue-500" />
              Статус API
            </CardTitle>
            <CardDescription>Текущее состояние интеграционных шлюзов</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="font-medium text-slate-700">REST API Gateway</span>
              </div>
              <Badge variant="outline" className="text-green-600 bg-green-50 border-green-200">Активен</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="font-medium text-slate-700">Weather Data Service</span>
              </div>
              <Badge variant="outline" className="text-green-600 bg-green-50 border-green-200">Активен</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span className="font-medium text-slate-700">IoT Sensors Hub</span>
              </div>
              <Badge variant="outline" className="text-yellow-600 bg-yellow-50 border-yellow-200">Задержка</Badge>
            </div>
          </CardContent>
        </Card>

        {/* External Systems */}
        <Card>
          <CardHeader>
             <CardTitle className="flex items-center gap-2">
               <Globe className="w-5 h-5 text-purple-500" />
               Внешние системы
             </CardTitle>
             <CardDescription>Подключенные сервисы</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" className="w-6 h-6 object-contain" alt="Azure" />
                  <div>
                    <div className="font-medium text-slate-900">Azure IoT Central</div>
                    <div className="text-xs text-slate-500">Последняя синхронизация: 2 мин назад</div>
                  </div>
               </div>
               <Button variant="ghost" size="sm"><RefreshCw className="w-4 h-4" /></Button>
            </div>
             <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-[10px] font-bold">1C</div>
                  <div>
                    <div className="font-medium text-slate-900">1C:ERP Агропромышленный комплекс</div>
                    <div className="text-xs text-slate-500">Последняя синхронизация: 1 час назад</div>
                  </div>
               </div>
               <Button variant="ghost" size="sm"><RefreshCw className="w-4 h-4" /></Button>
            </div>
          </CardContent>
        </Card>

        {/* API Keys */}
         <Card className="lg:col-span-2">
          <CardHeader>
             <CardTitle className="flex items-center gap-2">
               <Lock className="w-5 h-5 text-slate-500" />
               Управление доступом (API Keys)
             </CardTitle>
          </CardHeader>
          <CardContent>
             <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                   <div>
                      <div className="font-medium text-slate-900">Mobile App Token</div>
                      <div className="text-xs text-slate-500 font-mono mt-1">pk_live_51Mz...4x2A</div>
                   </div>
                   <div className="flex items-center gap-3">
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>
                      <Button variant="outline" size="sm">Revoke</Button>
                   </div>
                </div>
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                   <div>
                      <div className="font-medium text-slate-900">External Analytics Service</div>
                      <div className="text-xs text-slate-500 font-mono mt-1">sk_test_43Kv...9p1Z</div>
                   </div>
                   <div className="flex items-center gap-3">
                      <Badge className="bg-slate-100 text-slate-500 hover:bg-slate-100">Test Mode</Badge>
                      <Button variant="outline" size="sm">Revoke</Button>
                   </div>
                </div>
                <Button className="w-full border-dashed border-2 border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700 hover:border-slate-300">
                   <PlusIcon className="w-4 h-4 mr-2" /> Сгенерировать новый ключ
                </Button>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
