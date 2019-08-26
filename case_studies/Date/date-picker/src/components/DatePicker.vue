<template>
    <div id="datePicker">
        <date-picker v-model="date_picker"></date-picker>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
    name: 'datePicker',
    components: {
        'date-picker': Datepicker
    },
    data(){
        return {
            date_picker: null
        }
    },
    watch:{
        date_picker:function(value){
            console.log('new date pick', value)
        }
    }
}
</script>