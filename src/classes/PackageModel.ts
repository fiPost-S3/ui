import TicketModel from "@/classes/TicketModel";

export default class PackageModel {
    public Id: String;
    public ReceiverId: String;
    public CollectionPointId: String;
    public Sender: String;
    public Name: String;
    public Status: String;
    public RouteFinished: Boolean;
    public Tickets: Array<TicketModel>;


    constructor(Id: String, ReceiverId: String, CollectionPointId: String, Sender: String, Name: String, Status: String, RouteFinished: Boolean, Tickets: Array<TicketModel>) {
        this.Id = Id;
        this.ReceiverId = ReceiverId;
        this.CollectionPointId = CollectionPointId;
        this.Sender = Sender;
        this.Name = Name;
        this.Status = Status;
        this.RouteFinished = RouteFinished;
        this.Tickets = Tickets;
    }
}