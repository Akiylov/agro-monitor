import React, { useState } from "react";
import { Sidebar } from "./components/layout/Sidebar";
import { TopNav } from "./components/layout/TopNav";
import { MainDashboard } from "./components/screens/MainDashboard";
import { FieldMap } from "./components/screens/FieldMap";
import { SatelliteData } from "./components/screens/SatelliteData";
import { Weather } from "./components/screens/Weather";
import { VegetationIndices } from "./components/screens/VegetationIndices";
import { FieldsAndCrops } from "./components/screens/FieldsAndCrops";
import { AgroOperations } from "./components/screens/AgroOperations";
import { Scouting } from "./components/screens/Scouting";
import { AnalyticsYield } from "./components/screens/AnalyticsYield";
import { AnalyticsEconomy } from "./components/screens/AnalyticsEconomy";
import { Reports } from "./components/screens/Reports";
import { SystemUsers } from "./components/screens/SystemUsers";
import { SystemReferences } from "./components/screens/SystemReferences";
import { SystemSettings } from "./components/screens/SystemSettings";

import { GeneralAnalytics } from "./components/screens/GeneralAnalytics";
import { Integrations } from "./components/screens/Integrations";

// Main App Component
export default function App() {
  const [currentScreen, setCurrentScreen] = useState("dashboard");

  const renderScreen = () => {
    switch (currentScreen) {
      case "dashboard":
        return (
          <div>
            <div>1</div>
            <MainDashboard />;
          </div>
        );
      case "map":
        return (
          <div>
            <div>2</div>
            <FieldMap />
          </div>
        ); // Keep map accessible if referenced elsewhere, though removed from sidebar
      case "satellite":
        return (
          <div>
            <div>3</div>
            <SatelliteData />;
          </div>
        );
      case "weather":
        return (
          <div>
            <div>4</div>
            <Weather />;
          </div>
        );
      case "vegetation":
        return (
          <div>
            <div>5</div>
            <VegetationIndices />;
          </div>
        ); // Might need to consolidate
      case "fields":
        return (
          <div>
            <div>6</div>
            <FieldsAndCrops />;
          </div>
        );
      case "operations":
        return (
          <div>
            <div>7</div>
            <AgroOperations />;
          </div>
        );
      case "scouting":
        return (
          <div>
            <div>8</div>
            <Scouting />;
          </div>
        );
      case "analytics":
        return (
          <div>
            <div>9</div>
            <GeneralAnalytics />;
          </div>
        );
      case "yield":
        return (
          <div>
            <div>0</div>
            <AnalyticsYield />;
          </div>
        ); // Keep for backward compat or direct link
      case "harvest_forecast":
        return (
          <div>
            <div>11</div>
            <AnalyticsYield />;
          </div>
        ); // Mapping Harvest Forecast to existing Yield component
      case "economy":
        return (
          <div>
            <div>12</div>
            <AnalyticsEconomy />;
          </div>
        );
      case "reports":
        return (
          <div>
            <div>13</div>
            <Reports />;
          </div>
        );
      case "integrations":
        return (
          <div>
            <div>14</div>
            <Integrations />;
          </div>
        );
      // case "users":
      //   return (
      //     <div>
      //       <div>15</div>
      //       <SystemUsers />;
      //     </div>
      //   );
      // case "references":
      //   return (
      //     <div>
      //       <div>16</div>
      //       <SystemReferences />;
      //     </div>
      //   );
      // case "settings":
      //   return (
      //     <div>
      //       <div>17</div>
      //       <SystemSettings />;
      //     </div>
      //   );
      default:
        return <MainDashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 text-slate-900 font-sans overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopNav />

        <main className="flex-1 overflow-y-auto p-6">{renderScreen()}</main>
      </div>
    </div>
  );
}
