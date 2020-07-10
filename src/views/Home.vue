<template>
  <div class="box">
    <h1>Home</h1>
    <b-tabs class="tabs" content-class="mt-3">
        <b-tab title="내 프로젝트"><ListGroup /></b-tab>
        <b-tab title="좋아요 한 프로젝트"><ListGroup /></b-tab>
    </b-tabs>
  </div>
</template>


<script>
import ListGroup from './../components/ListGroup.vue'

export default {
    name: 'Home',
    components: {
        ListGroup
    }
}
</script>

<style scope>
h1 {
    text-align: center;
}

@media ( min-width: 768px ) {
    .box{
        width: 70%;
        margin: auto auto;
    }
}

</style>