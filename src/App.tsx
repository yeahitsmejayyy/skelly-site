import { ModeToggle } from "./components/mode-toggle"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <div className="flex flex-col gap-4">
        <p className="text-2xl">@skelly/site</p>
        <div className="mx-auto">
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default App