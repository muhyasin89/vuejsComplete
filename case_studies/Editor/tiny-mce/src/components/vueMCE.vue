<template>
    <div id="vue-mce">
         <vue-mce :config="config" />
    </div>
</template>

<script>
import Vue from 'vue';
import VueMce from 'vue-mce';

Vue.use(VueMce);

export default {
    'name': 'vue-mce',
    data(){
        return {
            config: {
                theme: 'modern',
                fontsize_formats: "8px 10px 12px 14px 16px 18px 20px 22px 24px 26px 39px 34px 38px 42px 48px",
                plugins: 'print preview fullpage powerpaste searchreplace autolink',
                toolbar1: 'formatselect fontsizeselect | bold italic strikethrough forecolor backcolor link',
            },
        }
    }
}
</script>

<style>

</style>