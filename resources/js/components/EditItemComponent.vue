<template>
    <v-app >
        <v-row class="marginEdit" justify="center">
            <v-col
                cols="8"
                sm="10"
                md="5"
                lg="20"
            >
                <v-card
                    color="hsl(27deg 96% 68%)"
                    dark
                >
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>

                            <v-card-title
                                class="headline"
                                justify="center"
                            >

                                <p class="text-center title-edit"> Edit Product</p>
                            </v-card-title>

                            <v-card-subtitle>
                                <p>THÔNG TIN SẢN PHẨM BAN ĐẦU</p>

                                <p><span v-once> Tên chi nhánh: {{selectProduct.selectBranch.name}}</span></p>

                                <p><span v-once> Tên sản phẩm: {{selectProduct.editedName}}</span></p>

                            </v-card-subtitle>

                        </div>

                        <v-avatar
                            class="ma-3"
                            size="125"
                            tile
                        >
                            <v-img src="https://yt3.ggpht.com/ytc/AAUvwngY2rHWuQhwHqtH1NlnVfkog3yWCA8DP83gcdf5=s900-c-k-c0x00ffffff-no-rj"></v-img>
                        </v-avatar>
                    </div>
                </v-card>


                <v-card class="rounded-lg">

                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                        v-model="selectProduct.editedName"
                                        label="Name Product"
                                        color="red darken-4"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-combobox
                                        v-model="selectProduct.selectBranch"
                                        :items="productSearch.branches"
                                        item-text="name"
                                        item-value="id"
                                        label="Branch"
                                        placeholder="Select..."
                                        required
                                        color="red darken-4"
                                    ></v-combobox>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <router-link style="text-decoration: none; color: inherit" to="/">
                            <v-btn
                                color="red accent-3"
                                text
                            >
                                Cancel
                            </v-btn>
                        </router-link>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="saveDialog"
                        >
                            Save
                        </v-btn>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

    </v-app>
</template>

<script>

import {updateItem} from '../function.js';
export default {
    data: () => ({
        productSearch:{},
        selectProduct:{},
    }),
    mounted() {
        this.productSearch = this.$store.state.productSearch,
            this.selectProduct = this.$store.state.selectProduct

    },
    methods: {
        saveDialog(){
            var vm = this;
            var promise = updateItem(this.selectProduct.idItem, this.selectProduct.selectBranch.id, this.selectProduct.instances, this.selectProduct.editedName);
            promise.then(function (response) {
                if (response.message == 'update successfully') {
                    vm.$router.push('/');
                } else {
                    vm.errorMessage = "ERROR: " + response.message;
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
    },
}
</script>

<style scoped>
.marginEdit{
    margin-top: 5%;
    margin-bottom: 5%;
}

.title-edit{
    font-size:25px;
    font-width: 20px;
}

</style>
