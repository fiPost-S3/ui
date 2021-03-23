<template>
    <p><b>Address:</b> {{address.Street}} {{address.StreetNr}}</p>
    <p><b>Postcode:</b> {{address.PostalCode}}</p>
    <p><b>Plaats:</b> {{address.City}}, {{address.Country}}</p>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import Address from '@/classes/Address';

    @Options({
        props: {
            address: Address
        }
    })

    export default class AddressBox extends Vue {}
</script>

<style lang="scss">
@import "@/styling/main.scss";

</style>