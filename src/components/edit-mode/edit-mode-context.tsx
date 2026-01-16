import { createContext, useContext, useState } from "react"

interface EditModeContextValue {
    isEditMode: boolean
    toggleEditMode: () => void
}

const EditModeContext = createContext<EditModeContextValue | null>(null)

export function EditModeProvider({ children }: { children: React.ReactNode }) {
    const [isEditMode, setIsEditMode] = useState(false)

    const toggleEditMode = () => {
        setIsEditMode(prev => !prev)
    }

    return (
        <EditModeContext.Provider value={{ isEditMode, toggleEditMode }}>
            {children}
        </EditModeContext.Provider>
    )
}

export function useEditMode() {
    const ctx = useContext(EditModeContext)
    if (!ctx) {
        throw new Error("useEditMode must be used within EditModeProvider")
    }
    return ctx
}
