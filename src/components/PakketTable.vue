<template>
    <table class="table">
        <thead>
            <tr>
                <th v-for="column in columns" :key="column">
                    <a href="#" class="table-sort" @click="sortBy(column)">
                        {{column}}
                        <span v-if="reverse && sortKey==column">
                        <font-awesome-icon icon="sort-up" :class="sortKey==column ? '' : 'sort-arrow-defocus'"/>
                        </span>
                        <span v-else>
                        <font-awesome-icon icon="sort-down" :class="sortKey==column ? '' : 'sort-arrow-defocus'"/>
                        </span>
                    </a>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in sortedList" :key="item" >
                <td>{{item.ID}}</td>
                <td>{{item.Ontvanger}}</td>
                <td>{{item.Status}}</td>
                <td>{{item.Locatie}}</td>
                <td>{{item.Datum}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { defineComponent } from "vue";
import PackageModel from "@/classes/PackageModel";
import _ from 'lodash';

const PakketTable = defineComponent({
    data() {
        return {
            sortKey: "ID",
            reverse: false
        }
    },
    props: {
        columns: [],
        packages: []
    },
    methods: {
        sortBy: function(sortKey: string) {
            this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
            this.sortKey = sortKey;
        }
    },
    computed: {
        sortedList(): [] {
            var dir = this.reverse? 'desc' : 'asc'
            return _.orderBy(this.packages, this.sortKey, dir);
        }
    }
});

export default PakketTable;
</script>

<style scoped>
    .table-sort {
        color: #000;
        font-color: #000;
        text-decoration: none;
    }

    .sort-arrow-defocus {
        color: #999;
    }

    .table{
        width: 100%;
        table-layout: fixed;
    }
</style>