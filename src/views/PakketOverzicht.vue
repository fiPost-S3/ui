<template>
    <div id="overzicht">
        <h1>Pakketoverzicht</h1>
        <PakketTable :columns=columns :packages=packages />
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import PakketTable from '@/components/PakketTable.vue';

@Options({
  components: {
    PakketTable
  }
})

export default class PakketOverzicht extends Vue {

    private columns : string[] = ['ID', 'Ontvanger', 'Status', 'Locatie', 'Datum'];
    private packages : object[] = [
        { 
            ID: '12345',
            Ontvanger: 'A. Doe',
            Status: 'Onderweg',
            Locatie: 'Fontys Tilburg',
            Datum: '2021-03-18'
        },
                { 
            ID: '12346',
            Ontvanger: 'N. Doe',
            Status: 'Onderweg',
            Locatie: 'Fontys Tilburg',
            Datum: '2021-03-18'
        },
                { 
            ID: '12347',
            Ontvanger: 'C. Doe',
            Status: 'Onderweg',
            Locatie: 'Fontys Tilburg',
            Datum: '2021-03-18'
        },
                { 
            ID: '12348',
            Ontvanger: 'U. Doe',
            Status: 'Onderweg',
            Locatie: 'Fontys Tilburg',
            Datum: '2021-03-18'
        },
                { 
            ID: '12349',
            Ontvanger: 'J. Doe',
            Status: 'Onderweg',
            Locatie: 'Fontys Tilburg',
            Datum: '2021-03-18'
        },
                { 
            ID: '12350',
            Ontvanger: 'X. Doe',
            Status: 'Onderweg',
            Locatie: 'Fontys Tilburg',
            Datum: '2021-03-18'
        },
                { 
            ID: '12351',
            Ontvanger: 'R. Doe',
            Status: 'Onderweg',
            Locatie: 'Fontys Tilburg',
            Datum: '2021-03-18'
        }
    ]
}
</script>