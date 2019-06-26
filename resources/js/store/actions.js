let actions = {
    SAVE_NOTE({commit}, note) {
        axios.post(`/api/note/create`, note)
        .then(res => {
            if(res.data.status == 200)
            {
                commit('SAVE_NOTE', res.data.data);
            }
            else
            {
                commit('NOTE_ERROR', res.data.message);
                window.setTimeout(function(){
                    $('#error-msg').delay(500).slideUp(300);
                }, 5000);
            }
        });
    },
    GET_NOTE({commit}) {
        axios.get(`/api/note/all`)
        .then(res => {
            if (res.data.status === 200)
            {
                commit('GET_NOTE', res.data.data);
            }
            else
            {
                commit('NOTE_ERROR', res.data.message);
                window.setTimeout(function(){
                    $('#error-msg').delay(500).slideUp(300);
                }, 5000);
            }
        });
    },
    EDIT_NOTE({commit}, id){
        axios.get(`/api/note/edit/${id}`)
        .then(res => {
            if (res.data.status === 200)
            {
                commit('EDIT_NOTE', res.data.data);
            }
            else
            {

            }
        });
    },
    UPDATE_NOTE({commit}, note){
        axios.post(`api/note/update/${note.id}`, note)
        .then(res => {
            if(res.data.status == 200)
            {
                commit('UPDATE_NOTE', res.data.data);
            }
            else
            {
                commit('NOTE_ERROR', res.data.message);
                window.setTimeout(function(){
                    $('#error-msg').delay(500).slideUp(300);
                }, 5000);
            }
        });
    },
    DELETE_NOTE({commit}, id){
        axios.delete(`/api/note/delete/${id}`)
        .then(res => {
            if (res.data.status === 200)
            {
                commit('DELETE_NOTE', res.data.data);
            }
            else
            {
                COMMIT('NOTE_ERROR', res.data.message);
                window.setTimeout(function(){
                    $('#error-msg').delay(500).slideUp(300);
                }, 5000);
            }
        });
    },
    REMOVE_NOTE({commit}, note){
        axios.post(`/api/note/several/delete`, note)
        .then(res => {
            if (res.data.status == 200)
            {
                
            }
            else
            {
                commit('NOTE_ERROR', res.data.message);
                window.setTimeout(function(){
                    $('#error-msg').delay(500).slideUp(300);
                }, 5000);
            }
        });
    }
}
export default actions