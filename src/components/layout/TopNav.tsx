import React from 'react';
import { Search, Bell, HelpCircle, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { cn } from '../ui/utils';

export function TopNav() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4 w-1/3">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input 
            placeholder="Поиск полей, культур или операций..." 
            className="pl-10 bg-slate-50 border-slate-200 focus-visible:ring-[#2ECC71]"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 mr-4">
           <Button variant="ghost" size="icon" className="text-slate-500 hover:text-[#2ECC71]">
             <HelpCircle className="w-5 h-5" />
           </Button>
           <Button variant="ghost" size="icon" className="relative text-slate-500 hover:text-[#2ECC71]">
             <Bell className="w-5 h-5" />
             <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
           </Button>
        </div>
        
        <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>

        <Button variant="ghost" className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
          <span className="text-sm font-medium">ООО "АгроХолдинг"</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
}
