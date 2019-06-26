<template>
    <div class="card">
        <div class="card-header bg-primary">
            <h4 style="color:#fff">Create Note</h4>
        </div>
        <div class="card-body">
            <vue-snotify></vue-snotify>
            <form novalidate id="note-form">
                <div class="form-group">
                    <label for="note_title">Note Title</label>
                    <input type="text" name="note_title" id="note_title" v-model="note.title" class="form-control" placeholder="Enter Note Title">
                </div>
                <div class="form-group">
                    <label for="note_body">Note Body</label>
                    <textarea rows="10" name="note_body" id="note_body" v-model="note.body" class="form-control" style="resize:none" placeholder="Enter Note Body"></textarea>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
require('bootstrap');
require('jquery');
require('jquery-validation');
export default {
    data() {
        return {

        }
    },
    methods: {
        updateNote(){
            jQuery('#note-form').validate({
                rules:{
                    note_title: {required:true},
                    note_body:{required:true}
                },
                messages:{
                    note_title: {
                        required: "Note Title field is required."
                    },
                    note_body:{
                        required: "Note Body field is required."
                    }
                },
                onblur:true,
                onfocus:true,
                errorClass: 'help-block',
                errorElement:'strong',
                highlight:function(element){
                    $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
                },
                unhighlight:function(element){
                    $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
                },
                errorPlacement:function(error, element){
                    if(element.parent('.input-group').length)
                    {
                        error.insertAfter(element.parent());
                        return false;
                    }
                    else
                    {
                        error.insertAfter(element);
                        return false;
                    }
                },
                submitHandler:function(){
                    vm.store.$dispatch('updateNote', vm.note);
                    vm.$router.push({name: 'home'});
                }
            });
        },
        editNote(){
            this.$store.commit('editNote', this.$route.params.id);
        }
    },
    mounted(){
        this.updateNote();
        this.editNote();
    },
    computed: {
        ...mapGetters([
            'note',
            'notes'
        ])
    },
}
</script>