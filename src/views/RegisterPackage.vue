<template>
    <div>
        <BtnBack/>
        <div class="component-container">
            <h1>Pakket registreren</h1>
            <div>
                <h3>Afzender</h3>
                <InputField @inputChanged="afzender" labelText="Naam:"/>
            </div>
            <div>
                <h3>Ontvanger</h3>
                <InputField @inputChanged="ontvanger" labelText="Naam:"/>
            </div>
            <div>
                <h3>Pakket</h3>
                <InputField @inputChanged="pakketNaam" labelText="Naam:"/>
                <InputField @inputChanged="omschrijving" labelText="Omschrijving:"/>
            </div>
            <div>
                <h3>Afhaalpunt</h3>
                <InputField @inputChanged="afhaalpunt" labelText="Naam:"/>
            </div>
            <BtnFinish text="Bevestigen" v-on:click="registerPackage"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Options, Vue} from "vue-class-component";
    import BtnBack from "@/components/BtnBack.vue";
    import InputField from "@/components/InputField.vue";
    import BtnFinish from "@/components/BtnFinish.vue";
    import RegisterPackageModel from "@/classes/RegisterPackageModel";


    @Options({
        components: {
            BtnBack,
            InputField,
            BtnFinish
        }
    })

    export default class RegisterPackage extends Vue {
        private package: RegisterPackageModel = new RegisterPackageModel(
            "",
            "",
            "",
            "",
            "",
        );


        registerPackage(): void {
            // Call to backend. Package is filled by emitters.
        }

        afzender(input: string): void {
            this.package.Afzender = input;
        }

        ontvanger(input: string): void {
            this.package.Ontvanger = input;
        }

        pakketNaam(input: string): void {
            this.package.PakketNaam = input;
        }

        omschrijving(input: string): void {
            this.package.Omschrijving = input;
        }

        afhaalpunt(input: string): void {
            this.package.Afhaalpunt = input;
        }
    }
</script>

<style scoped lang="scss">
    @import "@/styling/main.scss";
</style>