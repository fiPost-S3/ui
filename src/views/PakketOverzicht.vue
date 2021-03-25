<template>
    <div id="overzicht">
        <h1>Pakketoverzicht</h1>
        <SearchContainer />
        <PakketTable :columns=columns :columnKeys=columnKeys v-bind:packages=packageModels />
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import PakketTable from '@/components/PakketTable.vue';
import { pakketService } from "@/services/pakketservice";
import PackageModel from '@/classes/RegisterPackageModel';
import SearchContainer from '@/components/SearchContainer.vue';

@Options({
  components: {
    PakketTable,
    SearchContainer
  }
})

export default class PakketOverzicht extends Vue {

    private columns : string[] = ['ID', 'Ontvanger', 'Status', 'Locatie', 'Datum'];
    private columnKeys: string[] = ['id', 'receiverId', 'status', 'collectionPointId', 'sender'];
    private packageModels : Array<PackageModel> = [];

    async created(){
        let result = await pakketService.getAll();
        this.packageModels = result;
    }
}
</script>

<style scoped lang="scss">
    @import "@/styling/main.scss";
</style>
