<template>
    <v-container>
        <v-dialog v-model="termsAndConditionsModal.dialog" width="700" persistent>
            <v-card>
                    <v-btn icon style="float:right" @click="termsAndConditionsModal.dialog = !termsAndConditionsModal.dialog">
                        <v-icon class="far fa-times-circle" />
                    </v-btn>
                <v-card-title>
                    <v-flex layout justify-center>
                        <p>{{ labels.terms_and_conditions }}</p>
                    </v-flex>
                </v-card-title>
                <v-card-text>
                        <p style="text-align: justify">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Odit, voluptatum repellendus. Aperiam dolorem, quasi 
                            voluptatibus rem culpa reiciendis eos voluptatum similique 
                            totam distinctio ullam dolorum dolor quis aspernatur at
                             dignissimos porro, placeat mollitia delectus non ab. Quae
                              laudantium beatae numquam itaque rem? Reprehenderit cumque, 
                              quasi tempora nulla obcaecati distinctio illum atque rem cupiditate 
                              fugiat. Aliquam quis adipisci ut illum? Adipisci dolorem labore quia. 
                              Veniam aut nesciunt, architecto ad exercitationem distinctio ut doloremque 
                              libero natus quo, sapiente id enim cumque dolore sint, doloribus nostrum sequi 
                              repudiandae blanditiis recusandae dignissimos molestias repellendus ipsum? Id,
                              asperiores sapiente alias unde earum nulla vel, eum et esse ad labore hic fugit 
                              blanditiis dolorum atque nemo velit, perferendis libero est consequatur beatae 
                              assumenda distinctio veniam eos. Cupiditate maxime incidunt cum impedit. Neque 
                              rerum eveniet dolor at quia amet cumque aliquam eaque, voluptatem quidem fugiat 
                              eius quis? Repellendus, voluptas nam praesentium aspernatur obcaecati quibusdam 
                              dolor reprehenderit porro id aperiam architecto rem tempora assumenda odit saepe 
                              corporis nihil eius omnis sint eveniet. Perspiciatis adipisci ipsa doloremque 
                              omnis aperiam reprehenderit temporibus? Consectetur adipisci animi temporibus 
                              nihil et unde, deleniti culpa nulla nobis. Voluptates sit veniam quidem dolor 
                              omnis in. Distinctio cum magni rerum nihil, 
                            velit atque optio officiis ad!
                        </p>
                </v-card-text>
                <v-card-actions>
                    <v-flex layout justify-center>
                        <v-btn style="width:250px;" color="yellow">
<strong>{{ labels.accept }}</strong>
</v-btn>
                    </v-flex>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>
<script>
import {labels} from '@/lang/lang.js';
import {mapState} from 'vuex';
export default {
    data:()=>({
        labels:labels,    
    }),
    computed:{
        ...mapState(["termsAndConditionsModal"])
    }
}
</script>