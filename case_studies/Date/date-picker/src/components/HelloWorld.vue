<template>
  <div class="hello">
    <h1>Date Picker</h1>
    <date-picker></date-picker>
    <h1>Date Range Picker</h1>
    <date-range-picker :startDate="startDate" :endDate="endDate" :dateRange="dateRange"></date-range-picker>
  </div>
</template>

<script>
import DatePicker from '@/components/DatePicker'
import DateRangePicker from '@/components/DateRangePicker'
import moment from 'moment'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }, 
  data(){
    return {
      startDate: moment(),
      endDate: moment().add(1, 'day'),
      locale: {
                direction: 'ltr', //direction of text
                format: 'DD-MM-YYYY', //fomart of the dates displayed
                separator: ' - ', //separator between the two ranges
                applyLabel: 'Apply',
                cancelLabel: 'Cancel',
                weekLabel: 'W',
                customRangeLabel: 'Custom Range',
                daysOfWeek: moment.weekdaysMin(), //array of days - see moment documenations for details
                monthNames: moment.monthsShort(), //array of month names - see moment documenations for details
                firstDay: 1 //ISO first day of week - see moment documenations for details
            },
      dateRange: moment() +'-'+ moment().add(1, 'day')
    }
  },
  components: {
    'date-range-picker': DateRangePicker,
    'date-picker': DatePicker
  },
  created() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
