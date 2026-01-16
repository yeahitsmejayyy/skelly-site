import { Switch } from "@/components/ui/switch"
import { useEditMode } from "./edit-mode-context"

export function ToggleEditMode() {
    const { isEditMode, toggleEditMode } = useEditMode()

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
                Edit
            </span>
            <Switch
                checked={isEditMode}
                onCheckedChange={toggleEditMode}
            />
        </div>
    )
}
