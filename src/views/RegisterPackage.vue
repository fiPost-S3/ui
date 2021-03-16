<template>
    <div>
        <h1>Registreer pakket</h1>
        <label>
            <p>Naam ontvanger:</p>
            <input v-model="Package.Name" placeholder="Naam ontvanger"/>
            <br/>
            <br/>
            <button v-on:click="registerPackage">Registreer</button>
        </label>
        <br/>
        <br/>
        <div v-if="isVisible">
            <QrcodeVue :value="id"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Options, Vue} from "vue-class-component";
    import QrcodeVue from 'qrcode.vue';


    @Options({
        components: {
            QrcodeVue
        }
    })

    export default class RegisterPackage extends Vue {
        private id : string = "";
        private isVisible : boolean = false;
        private Package = {
            Name: "",
        };

        registerPackage(): void {
            // Send package data to backend.
            // Receive either Ok with Id or Fail.
            // Create QR from said Id. Example:
            this.id = this.Package.Name;
            this.isVisible = true;
            window.alert('Register succesful: ' + this.Package.Name)
        }
    }
</script>

<style scoped>

</style>