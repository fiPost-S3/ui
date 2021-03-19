import TicketModel from "@/classes/TicketModel";

export default class PackageModel {
    public Id: String;
    public Afzender: String;
    public Ontvanger: String;
    public PakketNaam: String;
    public Omschrijving: String;
    public Afhaalpunt: String;
    public Status: String;
    public RouteKlaar: Boolean;
    public Ticket: Array<TicketModel>;

    constructor(Id: String, Afzender: String, Ontvanger: String, PakketNaam: String, Omschrijving: String, Afhaalpunt: String, Status: String, RouteKlaar: Boolean, Ticket: Array<TicketModel>) {
        this.Id = Id;
        this.Afzender = Afzender;
        this.Ontvanger = Ontvanger;
        this.PakketNaam = PakketNaam;
        this.Omschrijving = Omschrijving;
        this.Afhaalpunt = Afhaalpunt;
        this.Status = Status;
        this.RouteKlaar = RouteKlaar;
        this.Ticket = Ticket;
    }
}
