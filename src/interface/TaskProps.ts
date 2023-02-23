export interface TaskProps {
    id: string;
    isComplete: boolean,
    title: string;
    handleDeleteTask: (id:string) => void
}