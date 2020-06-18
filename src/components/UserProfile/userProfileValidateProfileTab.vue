<template>
    <v-container>
        <v-layout>
                        <v-flex md12>
                            <v-flex layout justify-center>
                                   <strong><p style="font-size:18px">{{ labels.validate_profile.toUpperCase() }}</p></strong> 
                             </v-flex>
                
                            <v-form ref="form" :v-model="true" lazy-validation autocomplete="on">
<v-select
                                :items="items"
                                :label="labels.identification_document"
                                />

                                <v-file-input
                                    :label="labels.attach_file"
                                    filled
                                    chips  
                                />
                                
                                    <v-menu
                                            ref="menu1"
                                            v-model="menu1"
                                            :close-on-content-click="false"
                                            transition="scale-transition"
                                            offset-y
                                            max-width="290px"
                                            min-width="290px"
                                            >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                v-model="dateFormatted"
                                                label="Date"
                                                hint="MM/DD/YYYY format"
                                                persistent-hint
                                                prepend-icon="event"
                                                @blur="date = parseDate(dateFormatted)"
                                                v-on="on"
                                                />
                                            </template>
                                            <v-date-picker v-model="date" no-title @input="menu1 = false" />
                                    </v-menu>
                            </v-form>
                            <v-flex layout justify-center>
                        <v-btn color="#364573" dark style="margin-top:5%">
{{ labels.update }}
</v-btn>
                    </v-flex>
                    </v-flex>
                </v-layout>
    </v-container>
</template>
<script>
import {labels} from '@/lang/lang.js'
export default {
    data:(vm)=>({
        labels:labels,
        items:["C.C","C.E"],
        date: new Date().toISOString().substr(0, 10),
        dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
        menu1: false,
    }),
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },
    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },
     methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [day,month, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
}
</script>