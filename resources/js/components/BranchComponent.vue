<template>
    <v-app>
        <v-main>
            <v-row justify="center">
                <v-col
                    cols="12"
                    sm="10"
                    md="8"
                    lg="30"
                >
                <SearchComponent :instance="instance" :searchData ="searchData" :clearData ="clearData"
                >
                    <div slot="contentSearch">
                        <v-text-field
                            ref="name"
                            v-model="search"
                            label="Name Branch"
                            placeholder=""
                            required
                        ></v-text-field>
                    </div>
                </SearchComponent>

                </v-col>
                <v-col
                    cols="12"
                    sm="10"
                    md="8"
                    lg="30"
                >
                    <UpdateComponent ref="childComponent" :disableData="disableTable" :arr="branches"
											:notFoundData="disableNotFoundData"
                                           :arrClone="cloneBranches"
                                           :callSearch="refreshData"
                                           :header="headers" :instances="instance"></UpdateComponent>
                </v-col>
            </v-row>
        </v-main>
    </v-app>
</template>
<script>

import {search} from '../function';
import UpdateComponent from "./UpdateComponent";
import SearchComponent from "./SearchComponent";

export default {

    components: {
        UpdateComponent,
        SearchComponent,
    },

    data: () => ({
        instance: 'Branch',
        search: '',
        branches: [],
        cloneSearch: '',
        disableTable: false,
        disableNotFoundData:false,
        cloneBranches: [],
        headers: [
            {text: '#', value: 'id'},
            {text: 'Sequence', value: 'sequence'},
            {text: 'Branch', value: 'branch_name', sortable: false,},
            {text: 'Add Date', value: 'created_at', sortable: false,},
            {text: '', value: 'actions', sortable: false,},
        ],
    }),

    mounted() {
        this.searchBranch(this.search);
    },

    methods: {

        clearData() {
            this.search = null;
            this.searchBranch(this.search);
        },
        searchData(){
          this.searchBranch(this.search);
        },

        refreshData(){
            this.searchBranch(this.cloneSearch);
        },

        searchBranch(valSearch) {
            this.$refs.childComponent.resetTable();
            this.cloneSearch = valSearch;
            var temp = '';
            var vm = this;
            this.disableTable = false;
            this.disableNotFoundData=false;
            var promise = search(valSearch, '', this.instance);
            promise.then(function (response) {
                vm.branches = [];
                vm.cloneBranches = [];

                response.forEach(element => {
                    vm.branches.push({
                        id: element.id,
                        sequence: element.Sequence,
                        branch_name: element.name,
                        created_at: element.created_at
                    });
                    vm.cloneBranches.push({id: element.id, sequence: element.Sequence});
                });
                if (vm.branches.length == 0) {
                    vm.disableTable = false;
                    vm.disableNotFoundData=true;
                } else {
                    vm.disableTable = true;
                }

            })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },

}
</script>

