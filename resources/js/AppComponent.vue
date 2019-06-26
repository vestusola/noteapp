<template>
    <div>
        <header>
            <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-brand href="/">NoteApp</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <!-- <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown right>
                            <template slot="button-content"><em>User</em></template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse> -->
            </b-navbar>
        </header>
        <br>

        <div class="container">
            <vue-snotify></vue-snotify>
            <div class="row">
                <div class="col-md-6">
                    <div id="error-msg" class="alert alert-danger" v-if="note_error != null">
                        <span>{{ note_error }}</span>
                    </div>
                    <div class="card">
                        <div class="card-header bg-success">
                            <h4 style="color:#fff" class="pull-left">Note List</h4>
                            <h4 style="color:#fff" class="pull-right" v-if="deleteCount > 0"> <button class="btn btn-danger btn-sm" @click="removeNote"><i class="fa fa-trash"></i></button> <sup><span class="badge badge-light">{{ deleteCount }}</span></sup></h4>
                        </div>
                        <div class="card-body">
                            <div class="table-reponsive" style="font-size:12px">
                                <table class="table table-striped" style="width:100%">
                                    <tbody>
                                        <tr v-for="(item, index) in notes" :key="item.id">
                                            <td style="width:10%">{{ index + 1}}</td>
                                            <td style="width:10%">
                                                <b-form-group id="input-group-4">
                                                    <b-form-checkbox @change="checkDelete(item.id)" :value="item.id"></b-form-checkbox>
                                                </b-form-group>
                                            </td>
                                            <td class="note-link"><a @click.prevent="editNote(item.id)" :href="`note/edit/${item.id}`" style="text-decoration:none; width:80%" >{{ item.title }} </a><button style="font-size:12px" class="btn btn-danger btn-sm" @click="deleteNote(item.id)" id="note-btn" ><i class="fa fa-trash"></i></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <br>
                </div>
                <div class="col-md-6">
                    <transition name="fade">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }

    .help-block {
        display: block;
        margin-top: 5px;
        margin-bottom: 10px;
        color: #737373;
    }
    .has-success .help-block,
    .has-success .control-label,
    .has-success .radio,
    .has-success .checkbox,
    .has-success .radio-inline,
    .has-success .checkbox-inline,
    .has-success.radio label,
    .has-success.checkbox label,
    .has-success.radio-inline label,
    .has-success.checkbox-inline label {
        color: #3c763d;
    }
    .has-success .form-control {
        border-color: #3c763d;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    }
    .has-success .form-control:focus {
        border-color: #2b542c;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
    }
    .has-success .input-group-addon {
        color: #3c763d;
        background-color: #dff0d8;
        border-color: #3c763d;
    }
    .has-success .form-control-feedback {
        color: #3c763d;
    }
    .has-warning .help-block,
    .has-warning .control-label,
    .has-warning .radio,
    .has-warning .checkbox,
    .has-warning .radio-inline,
    .has-warning .checkbox-inline,
    .has-warning.radio label,
    .has-warning.checkbox label,
    .has-warning.radio-inline label,
    .has-warning.checkbox-inline label {
        color: #8a6d3b;
    }
    .has-warning .form-control {
        border-color: #8a6d3b;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    }
    .has-warning .form-control:focus {
        border-color: #66512c;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;
    }
    .has-warning .input-group-addon {
        color: #8a6d3b;
        background-color: #fcf8e3;
        border-color: #8a6d3b;
    }
    .has-warning .form-control-feedback {
        color: #8a6d3b;
    }
    .has-error .help-block,
    .has-error .control-label,
    .has-error .radio,
    .has-error .checkbox,
    .has-error .radio-inline,
    .has-error .checkbox-inline,
    .has-error.radio label,
    .has-error.checkbox label,
    .has-error.radio-inline label,
    .has-error.checkbox-inline label {
        color: #a94442;
    }
    .has-error .form-control {
        border-color: #a94442;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    }
    .has-error .form-control:focus {
        border-color: #843534;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
    }
    .has-error .input-group-addon {
        color: #a94442;
        background-color: #f2dede;
        border-color: #a94442;
    }
    .has-error .form-control-feedback {
        color: #a94442;
    }
    #note-btn{
        display: none;
    }
    .note-link:hover #note-btn{
        display:inline;
        float:right;
    }
</style>

<script>
import BootstrapVue from 'bootstrap-vue';
import {mapGetters} from 'vuex';
require('jquery-validation');
require('lodash');
export default {
    data() {
        return {
            isDelete:[],
            deleteCount:0
        }
    },
    methods: {
        checkDelete(id){
            var arrIndex = this.isDelete.indexOf(id);
            if(arrIndex < 0)
            {
                this.isDelete.push(id);
                this.deleteCount += 1;
            }
            else
            {
                this.deleteCount -= 1;
                this.isDelete.splice(arrIndex, 1);
            }
        },
        removeNote(){
            var id = this.isDelete;
            this.$store.dispatch('REMOVE_NOTE', {id:id});
            this.deleteCount = 0;
            this.isDelete = [];
            this.$store.dispatch('GET_NOTE');
        },
        editNote(id){
            this.$store.dispatch('EDIT_NOTE', id);
        },
        deleteNote(id){
            this.$store.dispatch('DELETE_NOTE', id);
        }
    },
    mounted(){
        this.$store.dispatch('GET_NOTE');
    },
    computed: {
        ...mapGetters([
            'note',
            'notes',
            'note_error'
        ]),
    },
    watch: {
        // notes: {
        //     handler: _.debounce(function(){
        //         this.$store.dispatch('GET_NOTE');
        //     }, 1500)
        // },
    },
}
</script>