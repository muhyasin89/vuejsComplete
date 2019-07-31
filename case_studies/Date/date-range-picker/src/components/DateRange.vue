<template>
    <div id="date-range">
        <v-md-date-range-picker @change="changePicker"></v-md-date-range-picker>
    </div>
</template>

<script>
import Vue from 'vue';
import VMdDateRangePicker from "v-md-date-range-picker";
// import "v-md-date-range-picker/dist/v-md-date-range-picker.css";
 
Vue.use(VMdDateRangePicker);

export default {
    name: 'date-range',
    data(){
        return {
            picker: null
        }
    },
    methods: {
        changePicker(){
            console.log('event', this.picker)
        }
    }
}
</script>

<style>
</style>