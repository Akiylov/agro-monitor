import React from 'react';
import { Search, Eye, MoreVertical, FileText, CheckCircle2 } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { cn } from '../ui/utils';

interface LayerFile {
  id: string;
  name: string;
  note: string;
  date: string;
  visible: boolean;
  selected?: boolean;
}

const LAYER_FILES: LayerFile[] = [
  { id: '1', name: 'R.Xaydarov FXXU.tif', note: 'clone', date: '24.08.2023', visible: true },
  { id: '2', name: 'Toshkent FXXU Hududi.tif', note: 'clone', date: '09.08.2023', visible: true },
  { id: '3', name: 'Yangidala FXXU hududi.tif', note: 'clone', date: '09.08.2023', visible: true, selected: true },
  { id: '4', name: 'Turkiston_FHHU_hududi.tif', note: 'clone', date: '09.08.2023', visible: true },
  { id: '5', name: 'Istiklol_hududi_FHHU.tif', note: 'clone', date: '09.08.2023', visible: true },
  { id: '6', name: 'Mirzachul_FHHU_hududi_gotov...', note: 'clone', date: '09.08.2023', visible: true },
  { id: '7', name: 'Mustakillik_kelazhagi_FHHU_hududi.tif', note: 'clone', date: '09.08.2023', visible: false },
  { id: '8', name: 'Abay FXXU hududi.tif', note: 'clone', date: '09.08.2023', visible: true },
];

export function MapLayersSidebar() {
  return (
    <div className="w-80 bg-white border-r border-slate-200 flex flex-col h-full z-10 shadow-sm">
      <div className="p-4 pb-0">
        <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg mb-4">
           <button className="flex-1 bg-white text-slate-800 shadow-sm text-xs font-medium py-1.5 rounded-md text-center">Снимки</button>
           <button className="flex-1 text-slate-500 hover:text-slate-700 text-xs font-medium py-1.5 rounded-md text-center">Импорт</button>
           <button className="flex-1 text-slate-500 hover:text-slate-700 text-xs font-medium py-1.5 rounded-md text-center">БПЛА</button>
        </div>
        <div className="relative mb-3">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
          <Input placeholder="Поиск по названию" className="pl-8 bg-slate-50 border-slate-200 h-9 text-sm" />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="divide-y divide-slate-100">
          {LAYER_FILES.map((file) => (
            <div 
              key={file.id}
              className={cn(
                "p-3 flex items-start gap-3 hover:bg-slate-50 cursor-pointer transition-colors relative group",
                file.selected ? "bg-blue-50 hover:bg-blue-50" : ""
              )}
            >
              {/* Selection Indicator Line */}
              {file.selected && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
              )}

              <div className="flex-1 min-w-0">
                 <div className={cn("font-medium text-sm truncate", file.selected ? "text-blue-700" : "text-slate-700")}>
                   {file.name}
                 </div>
                 <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
                   <span>Примечания</span>
                 </div>
                 <div className="text-xs text-slate-500 font-medium mt-0.5">
                   {file.note}
                 </div>
                 <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                   <FileText className="w-3 h-3" /> {file.date}
                 </div>
              </div>

              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "h-8 w-8 shrink-0", 
                  file.visible ? "text-[#2ECC71] hover:text-emerald-600 hover:bg-emerald-50" : "text-slate-300"
                )}
              >
                <Eye className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
