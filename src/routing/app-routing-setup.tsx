import { MainLayout } from "@/layouts/main/layout";
import { FilePage } from "@/pages/file";
import { HomePage } from "@/pages/home";
import { SettingPage } from "@/pages/settings/page";
import { Navigate, Route, Routes } from "react-router";

export function AppRoutingSetup() {
  return (
    <Routes>
      <Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/file" element={<FilePage />} />
          <Route path="/settings" element={<SettingPage />} />
          <Route path="/control" element={<SettingPage />} />

          <Route path="/tuning" element={<SettingPage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/error/404" />} />
    </Routes>
  );
}
