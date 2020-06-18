<template>
    <v-container>
        <v-layout>
                        <v-flex md12>
                            <v-flex layout justify-center>
                                   <strong><p style="font-size:18px">{{ labels.change_password.toUpperCase() }}</p></strong> 
                             </v-flex>
                
                            <v-form ref="form" :v-model="true" lazy-validation autocomplete="on">
<v-text-field
                                style="margin-left:10%; margin-right:10%"
                                :label="labels.enter_current_password"
                                />

                                <v-text-field
                                style="margin-left:10%; margin-right:10%"
                                :label="labels.new_password"
                                />
                                
                                <v-text-field
                                style="margin-left:10%; margin-right:10%"
                                :label="labels.confirm_Password"
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