import { ModeToggle } from "./components/mode-toggle"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl flex flex-col items-center gap-1">
          <span className="flex items-center justify-center border bg-background rounded-full w-[46px] h-[46px]">💀</span>
          <span className="font-bold">skelly-site</span>
        </h1>
        <div className="mx-auto">
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default App