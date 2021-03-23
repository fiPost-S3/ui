<template>
    <p><b>Naam:</b> {{contact.Name}}</p>
    <p><b>Email:</b> {{contact.Email}}</p>
    <p><b>Telefoon:</b> {{contact.Phone}}</p>
</template>

<script lang="ts">
    import {Options, Vue} from 'vue-class-component'
    import Contact from "@/classes/Contact"

    @Options({
        props:{
            contact: Contact
        }
    })

    export default class ContactDetails extends Vue {}
</script>