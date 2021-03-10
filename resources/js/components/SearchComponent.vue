<template>
    <v-card ref="form">
        <v-card-text>
            <h1>{{ instance }} Management</h1>
            <slot name="contentSearch"></slot>
            <div class="text-center">
                <v-btn
                    depressed
                    color="primary"
                    @click="searchData"
                >
                    Search
                </v-btn>
                <v-btn
                    depressed
                    color="error"
                    @click="clearData"
                >
                    Clear
                </v-btn>
            </div>
        </v-card-text>
        <div class="text-center">
            <slot name="actionSearch"></slot>
        </div>
    </v-card>
</template>

<script>
export default {
    props: ['instance', 'searchData', 'clearData','modelText'],
    name: "SearchComponent.vue",
    data: () => ({
        textArea: "Name "
    }),
    mounted() {
      this.textArea = this.textArea + this.instance;
    },

}
</script>

<style scoped>

</style>
