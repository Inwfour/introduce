<template>
<div>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline success "
        >
          ID : fourcomsci
        </v-card-title>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
    </div>
</template>
<script>
import { EventBus } from "@/EventBus";
  export default {
    data () {
      return {
        dialog: false
      }
    },
    mounted() {
        console.log("aa");
        EventBus.$on("DialogLine", this.line);
    },
    methods: {
        line () {
            console.log("aaa")
            this.dialog = true;
        }
    },
  }
</script>