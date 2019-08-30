<template>
    <div id="date-picker">
        <p>Date Picker</p>
        <div id="DatePicker">
            <date-range-picker 
            :startDate="startDate" 
            :endDate="endDate" 
            @update="updateValue($event)"
            :locale-data="locale"
            :dateRange="dateRange"
            >
            
            </date-range-picker>
        </div>
    </div>
</template>

<script>
import DateRangePicker from 'vue2-daterange-picker'

import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

import moment from 'moment'

export default {
  name: 'DateRangePicker',
  props: {
    startDate: Object,
    endDate: Object,
    locale: Object,
    dateRange: String 
  },
  methods: {
      updateValue(value){
          console.log('this is value', value)
      }
  },
  components: { DateRangePicker },
    data() {
        return {
           
        }
    }
}
</script>

<style scoped>

</style>