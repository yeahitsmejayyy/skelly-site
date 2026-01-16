import { ThemeProvider } from "@/components/theme-provider"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";
import { EditModeProvider } from "@/components/edit-mode/edit-mode-context"
import './index.css'
import App from './App.tsx'
import { EditModeBanner } from "./components/edit-mode/edit-mode-banner.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HelmetProvider>
        <EditModeProvider>
          <EditModeBanner />
          <App />
        </EditModeProvider>
      </HelmetProvider>
    </ThemeProvider>
  </StrictMode>,
)
