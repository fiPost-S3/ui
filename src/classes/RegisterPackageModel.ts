import TicketModel from "@/classes/TicketModel";

export default class PackageModel {
    public Afzender: String;
    public Ontvanger: String;
    public PakketNaam: String;
    public Omschrijving: String;
    public Afhaalpunt: String;

    constructor(Afzender: String, Ontvanger: String, PakketNaam: String, Omschrijving: String, Afhaalpunt: String) {
        this.Afzender = Afzender;
        this.Ontvanger = Ontvanger;
        this.PakketNaam = PakketNaam;
        this.Omschrijving = Omschrijving;
        this.Afhaalpunt = Afhaalpunt;
    }
}