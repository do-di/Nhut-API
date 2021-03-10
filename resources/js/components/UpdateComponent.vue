<template>
    <div>
        <v-form v-if="disableData"
                cols="12"
                sm="10"
                md="12"
                lg="30"
                v-model="disableButton"
                lazy-validation

        >
            <div class="text-right">
                <v-btn
                    depressed
                    color="success"
                    @click="updateBranch()"
                    :disabled="!disableButton"
                    id="btn"
                >
                    Update sequence
                </v-btn>
            </div>

            <v-data-table
                :headers="header"
                :items="arr"
                :items-per-page="5"

                class="elevation-1 paddingForm my-border"
            >
                <template v-slot:item.sequence="{item}" >
                    <td v-if="item.id==idError" width="125">
                        <v-text-field
                            ref="item"
                            v-model="item.sequence"
                            type="number"
                            min="0"
                            :error-messages="errorMessage"
                            @change="resetTable()"
                            :rules="rules"
                        ></v-text-field>
                    </td>
                    <td v-else width="125">
                        <v-text-field
                            ref="item"
                            v-model="item.sequence"
                            type="number"
                            min="0"
                            :rules="rules"
                        ></v-text-field>
                    </td>
                </template>
                <template v-slot:item.actions="{ item }">
                    <router-link  style="text-decoration: none; color: inherit;" :to="{name:'EditItemComponent'}"><v-btn
                        color="light-blue accent-3"
                        fab
                        small
                        dark
                        @click="getName(item)"
                    >
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn></router-link>


                    <v-btn
                        color="primary"
                        fab
                        small
                        dark
                        @click="editItem(item)"

                    >
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>

                    <v-btn
                        color="error"
                        fab
                        small
                        dark
                        @click="deleteItem(item)"

                    >
                        <v-icon>mdi-trash-can-outline</v-icon>
                    </v-btn>
                </template>

            </v-data-table>
        </v-form>

        <v-col v-if="notFoundData"
               cols="12"
               sm="10"
               md="8"
               lg="30"
        >
            <h3>Không tìm thấy data!</h3>
        </v-col>

        <v-dialog
            v-model="dialog"
            max-width="750px"
            justify="center"
            class = "rounded-xl"
        >
            <v-card class="rounded-lg">
                <v-card-title>
                    <span class="headline">{{formTitle + instances }}</span>
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                                md="6"
                            >
                                <v-text-field
                                    v-model="editedItem.name"
                                    label="Name Product"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="6"
                            >

                                <v-combobox
                                    v-model="selectBranch"
                                    :items="branches"
                                    item-text="name"
                                    item-value="id"
                                    label="Branch"
                                    placeholder="Select..."
                                    required
                                ></v-combobox>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="red accent-3"
                        text
                        @click="closeDialog"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="saveDialog"
                    >
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>

        </v-dialog>

        <v-dialog
            v-model="dialogDelete"
            max-width="620px"
            jutify
        >
            <v-card class="rounded-lg">
                <v-card-title class="headline" color="red accent-3 ">
                    Are you sure you want to delete this {{instances}} ?
                </v-card-title>
                <v-card-actions class="pa-2">
                    <v-spacer></v-spacer>
                    <v-btn
                        color="red accent-3"
                        text
                        @click="closeDelete"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="deleteItemConfirm"
                    >
                        Confirm
                    </v-btn>

                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>
import {update} from '../function';

import {deleteItem} from "../function";

import {updateItem} from "../function";

export default {
    props: ['disableData', 'arr', 'arrClone', 'callSearch', 'header', 'instances', 'notFoundData','branches'],


    data: () => ({
        dialog:false,
        dialogDelete: false,
        disableButton: true,
        errorMessage: '',
        formHasErrors: false,
        updateProducts: [],
        idError: 0,
        editedIndex: -1,
        editedItem: {
            id: 0,
            sequence: '',
            name: 0,
            branch_name: 0,
            created_at: 0,
        },
        defaultItem: {
            id: 0,
            sequence: '',
            name: 0,
            branch_name: 0,
            created_at: 0,
        },
        selectBranch:{}

    }),


    computed: {
        rules() {
            const rules = [];
            const rule1 =
                ruleInt => Number.isInteger(Number(ruleInt)) == true || 'Integer'

            const rule2 =
                ruleEmpty => !!ruleEmpty || 'Required'

            rules.push(rule1);
            rules.push(rule2);
            return rules
        },

        formTitle()
        {
            return this.editedIndex === -1 ? 'New ': 'Edit ';
        }
    },
    mounted() {

    },


    methods: {
        resetTable() {
            this.errorMessage = '';
            this.idError = 0;
        },

      editItem(item) {
          this.editedIndex = this.arr.indexOf(item);
          this.editedItem = Object.assign({}, item);
          this.selectBranch = {
              name: this.editedItem.branch_name,
              id: this.editedItem.branch_id
          };
          this.dialog = true;
        },
        getName(item){
            this.editedIndex = this.arr.indexOf(item);
            this.editedItem = Object.assign({},item);
            var temp_branch = this.$store.state.productSearch.branch;
            this.selectBranch = {
                name: this.editedItem.branch_name,
                id: this.editedItem.branch_id
            };
            this.$store.state.selectProduct = {idItem:this.editedItem.id,selectBranch:this.selectBranch,instances:this.instances,editedName:this.editedItem.name};
            this.$store.state.productSearch.branches = this.branches;
        },

        deleteItem(item)
        {
            this.editedIndex = this.arr.indexOf(item);
            this.editedItem = Object.assign({},item);
            this.dialogDelete = true
        },

        customColor(item){
          return 'color-background';
        },



        closeDialog(){
            this.dialog = false
            this.$nextTick(()=>{
                this.editedItem = Object.assign({},this.defaultItem)
                this.editIndex = -1
            })
        },

        deleteItemConfirm () {
            console.log(this.editedItem.id);
            deleteItem(this.editedItem.id,this.instances);
            this.arr.splice(this.editedIndex, 1);
            this.closeDelete();
        },

        closeDelete(){
            this.dialogDelete = false;
            this.$nextTick(()=>{
                this.editedItem = Object.assign({}.this.defaultItem)
                this.editIndex = -1;
            })
        },


        saveDialog(){

            if(this.editedIndex >-1)
            {
                var vm =this;
                var promise = updateItem(vm.editedItem.id, vm.selectBranch.id,vm.instances, vm.editedItem.name);
                promise.then(function (response) {
                    if (response.message == 'update successfully') {
                        vm.callSearch();
                    } else {
                        vm.errorMessage = "ERROR: " + response.message;
                    }
                }).catch(function (error) {
                    console.log(error);
                });

            }else{

                this.arr.push(this.editedItem);
            }
            this.closeDialog();
        },

        updateBranch() {
            this.updateProducts = [];
            this.idError = 0;
            var vm = this;
            vm.arr.forEach(function (item, index, array) {
                if (vm.arr[index].sequence != vm.arrClone[index].sequence &&
                    vm.arr[index].id == vm.arrClone[index].id) {
                    vm.updateProducts.push({id: vm.arr[index].id, Sequence: vm.arr[index].sequence});
                }
            })
            let temp = JSON.stringify(vm.updateProducts);
            var promise = update(temp, this.instances);
            promise.then(function (response) {
                if (response.message == 'update successfully') {
                    vm.callSearch();
                } else {

                    vm.errorMessage = "ERROR: " + response.message;
                }
                if (response.id) {
                    vm.idError = response.id;
                }
            }).catch(function (error) {
                console.log(error);
            });

        },

    }
}
</script>

<style lang="css" scoped>
.paddingForm{
    text-align: center;
}

.header-size{
    font-size: 40px;
}

.my-border {
    border: 1px black;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    font-family: sans-serif;
    text-align: center;
    line-height: 1;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(20px);
    font-size:500px;

}
>>>.v-data-table {
    font-size: 500px!important;
    font-family: 'Segoe UI';
    font-weight: bold;
    background-color: inherit;

}

</style>
