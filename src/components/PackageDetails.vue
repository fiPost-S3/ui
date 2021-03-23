<template>
    <article class="package-details">
        <header class="container">Pakketgegevens</header>
        <section class="container">
            <h2>Ontvanger</h2>
            <contact-details v-bind:contact="reciever"></contact-details>
        </section>

        <section class="container">
            <h2>Afzender</h2>
            <p>{{sender}}</p>
            <img alt="BoxQR" src="../assets/BoxQR.png">
        </section>

        <section class="container">
            <h2>Bezorgadres: <a href="">{{deliveryLocation.name}}</a></h2>
            <address-box v-bind:address="deliveryLocation.address"></address-box>
        </section>

        <section class="container">
            <h2>Eindadres: <a href="">{{finalLocation.name}}</a></h2>
            <address-box v-bind:address="finalLocation.address"></address-box>
        </section>

        <section class="container">
            <h2>Afhaalpunt</h2>
            <p>{{dropPoint}}</p>
            <img alt="BoxQR" src="../assets/BoxLocatie.png">
        </section>
    </article>
</template>

<script lang="ts">
    import { Options, Vue } from "vue-class-component";
    import Address from "@/classes/Address";
    import Contact from "@/classes/Contact";
    import AddressBox from "@/components/AddressBox.vue";
    import ContactDetails from "@/components/ContactDetails.vue";

    @Options({
        props: {
            reciever: Contact,
            sender: String,
            deliveryLocation: Object,
            finalLocation : Object,
            dropPoint: String
        },
        components:{
            AddressBox,
            ContactDetails
        }
    })

    export default class PackageDetails extends Vue {
        fAddress: Address =  new Address(
            "Professor Goossenslaan",
            1,
            "5022DM",
            "Tilburg",
            "Nederland"
        )

        reciever: Contact = new Contact(
            "P. Makelaar",
            "p.makelaar@fontys.nl",
            "+31654963378"
        )

        sender: string = "Perfect Home Depot";

        deliveryLocation: object = {
            name: 'Fontys Tilburg Stappengoor',
            address: this.fAddress
        }

        finalLocation: Object = {
            name: 'Fontys HVK',
            address: this.fAddress
        }

        dropPoint: string = "P1 Receptie"
    }
</script>

<style scoped lang="scss">
@import "../styling/main.scss";

.package-details {
    padding: 1em;
    background-color: white;

    border-radius: $border-radius;
    box-shadow: 0px 3px 6px grey;

    text-align: left;
}

.package-details header {
    font-size: 2rem;
    font-weight: bold;
}

.container {
    position: relative;
    width: 100%;
}

.container img {
    width: 5em;
    position: absolute;
    right: 0px;
    top: 0px
}
</style>