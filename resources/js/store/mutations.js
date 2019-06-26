let mutations = {
    SAVE_NOTE(state, note){
        state.notes.unshift(note);
        state.note = {};
        return;
    },
    GET_NOTE(state, notes) {
        return state.notes = notes;
    },
    EDIT_NOTE(state, note){
        return state.note = note;
    },
    UPDATE_NOTE(state, note){
        state.note = note;
        state.note = {};
        return;
    },
    DELETE_NOTE(state, note){
        state.notes.splice(state.notes.indexOf(note), 1);
        return;
    },
    NOTE_ERROR(state, note_error){
        return state.note_error = note_error;
    },
}

export default mutations