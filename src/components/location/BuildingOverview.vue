<template>
    <btn-back />
    <h1>Gebouwen Overzicht</h1>
    <SearchContainerCityBuilding />
    <BuildingOverviewTable/>
    
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BtnBack from "@/components/standardUi/BtnBack.vue";
import BuildingOverviewTable from "@/components/location/BuildingOverviewTable.vue";
import SearchContainerLocation from "@/components/SearchContainerLocation.vue";
import SearchContainerCityBuilding from "@/components/SearchContainerCityBuilding.vue";
import LocationOverviewTable from "@/components/location/LocationOverviewTable.vue";
@Options({
  components: {
    BtnBack,
    LocationOverviewTable,
    BuildingOverviewTable,
    SearchContainerLocation,
    SearchContainerCityBuilding
  },
})
export default class BuildingOverview extends Vue {}
</script>

<style scoped lang="scss">
@import "@/styling/main.scss";
</style>