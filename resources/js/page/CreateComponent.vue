<template>
  <div class="card">
    <div class="card-header bg-primary">
      <h4 style="color:#fff">Note</h4>
    </div>
    <div class="card-body">
      <vue-snotify></vue-snotify>
      <div id="error-msg" class="alert alert-danger" v-if="note_error != null">
        <span>{{ note_error }}</span>
      </div>
      <form novalidate id="note-form">
        <div :class="['form-group', title_error ? 'has-error': '' ]">
          <label for="note_title">
            <strong>Note Title</strong>
          </label>
          <input
            type="text"
            name="note_title"
            @blur="blurNoteTitle"
            id="note_title"
            v-model="note.title"
            class="form-control"
            placeholder="Enter Note Title"
          />
          <span :class="['help-block']" v-if="title_error == true">
            <strong>Note Title field is required.</strong>
          </span>
        </div>
        <div :class="['form-group', body_error ? 'has-error': '' ]">
          <label for="note_body">
            <strong>Note Body</strong>
          </label>
          <textarea
            rows="10"
            name="note_body"
            @blur="blurNoteBody"
            id="note_body"
            v-model="note.body"
            class="form-control"
            style="resize:none"
            placeholder="Enter Note Body"
          ></textarea>
          <span :class="['help-block']" v-if="body_error == true">
            <strong>The Body field is required.</strong>
          </span>
        </div>
        <div class="form-group">
          <button type="reset" id="reset" class="btn btn-dark">
            <i class="fa fa-times"></i>
          </button>
          <button type="submit" id="save" class="btn btn-primary">
            <i class="fa fa-save"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
require("bootstrap");
require("jquery");
require("jquery-validation");
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title_error: false,
      body_error: false
    };
  },
  methods: {
    saveOrUpdateNote() {
      var vm = this;
      jQuery("#note-form").validate({
        rules: {
          note_title: { required: true },
          note_body: { required: true }
        },
        messages: {
          note_title: {
            required: "Note Title field is required."
          },
          note_body: {
            required: "Note Body field is required."
          }
        },
        onblur: true,
        onfocus: true,
        errorClass: "help-block",
        errorElement: "strong",
        highlight: function(element) {
          $(element)
            .closest(".form-group")
            .removeClass("has-success")
            .addClass("has-error");
        },
        unhighlight: function(element) {
          $(element)
            .closest(".form-group")
            .removeClass("has-error")
            .addClass("has-success");
        },
        errorPlacement: function(error, element) {
          if (element.parent(".input-group").length) {
            error.insertAfter(element.parent());
            return false;
          } else {
            error.insertAfter(element);
            return false;
          }
        },
        submitHandler: function() {
          var id = vm.note.id;
          if (id == undefined) {
            vm.$store.dispatch("SAVE_NOTE", vm.note);
            vm.$store.dispatch("GET_NOTE");
          } else {
            vm.$store.dispatch("UPDATE_NOTE", vm.note);
            vm.$store.dispatch("GET_NOTE");
          }
        }
      });
    },
    blurNoteTitle() {
      var note_title = document.querySelector("#note_title").value;
      var note_body = document.querySelector("#note_body").value;

      if (note_title.length > 0 && note_body.length > 0) {
        $("#note-form").submit();
      } else {
        return false;
      }
    },
    blurNoteBody() {
      var note_title = document.querySelector("#note_title").value;
      var note_body = document.querySelector("#note_body").value;

      if (note_title.length > 0 && note_body.length > 0) {
        $("#note-form").submit();
      } else {
        return false;
      }
    },
    deleteSeveralNote() {}
  },
  mounted() {
    this.saveOrUpdateNote();
  },
  computed: {
    ...mapGetters(["notes", "note", "note_error"])
  },
  watch: {
    title_error: {
      handler: function() {
        var note_title = $("#note_title").val();
        if (note_title.length < 1 || note_title == null || note_title == "") {
          this.title_error = true;
        } else {
          this.title_error = false;
        }
      }
    },
    body_error: {
      handler: function() {
        var note_body = $("#note_body").val();
        if (note_body.length < 1 || note_body == null || note_body == "") {
          this.body_error = true;
        } else {
          this.body_error = false;
        }
      }
    }
  }
};
</script>