import { useEditMode } from "./edit-mode-context"

export function EditModeBanner() {
    const { isEditMode } = useEditMode()

    if (!isEditMode) return null

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 text-black text-sm py-1 text-center">
            You are in edit mode — changes affect site content
        </div>
    )
}
