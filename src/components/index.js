import Vue from 'vue';
import Row from './Row.vue';
import Column from './Column.vue';

const Components = {
    Row,
    Column
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;
