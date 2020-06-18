<template>
    <v-container>
        <v-layout>
<v-flex md12>
                            <v-flex layout justify-center>
                                   <strong><p style="font-size:18px">{{ labels.contact_information.toUpperCase() }}</p></strong> 
                             </v-flex>
                
                            <v-form ref="form" :v-model="true" lazy-validation autocomplete="on">
                                <v-text-field
                                style="margin-left:10%; margin-right:10%;"
                                :label="labels.name"
                                append-icon="fas fa-user-circle"
                                />
                            
                                <v-text-field
                                style="margin-left:10%; margin-right:10%"
                                :label="labels.identification_number"
                                append-icon="fas fa-id-card"
                                />

                                <v-text-field
                                style="margin-left:10%; margin-right:10%"
                                :label="labels.email"
                                append-icon="far fa-envelope"
                                />
                                
                                <v-text-field
                                style="margin-left:10%; margin-right:10%"
                                :label="labels.phone_number"
                                append-icon="fas fa-phone-square-alt"
                                />

                                <v-text-field
                                style="margin-left:10%; margin-right:10%"
                                :label="labels.address"
                                append-icon="fas fa-map-marker-alt"
                                />
                            </v-form>
                            <v-flex layout justify-center>
                        <v-btn color="#364573" dark>
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
    data:()=>({
        labels:labels
    })
}
</script>