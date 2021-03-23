export default class TicketModel {
    public Id: number;
    public PackageId: number;
    public ToDoLocationId: number;
    public CreatedAt: String;
    public FinishedAt: String;
    public CreatedByPCN: number;
    public FinishedByPCN: number;
    public IsFinished: Boolean;
    public NextTicketId: number;
    public IsCurrent: Boolean;
    public Description: String;
    public IsLast: Boolean = false;

    constructor(id: number, packageId: number, toDoLocationId: number, createdAt: String, createdByPCN: number, finishedByPCN: number
        , isFinished: Boolean, nextTicketId: number, finishedAt: String, isCurrent: Boolean, description: String){
        this.Id = id;
        this.PackageId = packageId;
        this.ToDoLocationId = toDoLocationId;
        this.CreatedAt = createdAt;
        this.CreatedByPCN = createdByPCN;
        this.FinishedByPCN = finishedByPCN;
        this.IsFinished = isFinished;
        this.NextTicketId = nextTicketId;
        this.FinishedAt = finishedAt;
        this.IsCurrent = isCurrent;
        this.Description = description;
    }
}