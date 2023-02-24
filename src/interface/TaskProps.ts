export interface TaskProps {
    id: string;
    isComplete: boolean,
    title: string;
    handleDeleteTask: (id:string) => void
    handleEditTask: (id: string, isComplete: boolean) => void
}