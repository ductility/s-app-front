<template>
    <div>
        <b-list-group>
            <div class="experiment"
                v-for="(experiment, index) in experiments"
                v-bind:item="experiment"
                v-bind:index="index"
                v-bind:key="experiment._id"
            >
                <b-list-group-item href="#" class="flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{ experiment.title }} </h5>
                    <small>{{ experiment.createdAt }}</small>
                    </div>

                    <p class="mb-1">
                        {{ experiment.description }}
                    </p>

                    <small>{{ experiment.userID }}</small>
                </b-list-group-item>
            </div>
        </b-list-group>

    </div>
</template>

<script>
import axios from 'axios'

const url = '/api/posts';

export default {
    name: "ListGroup",
    data() {
        return {
            experiments: []
        }
    },
    created() {
        axios.get(url)
            .then(res => this.experiments = res.data)
            .catch(err => console.log(err));
    }
}
</script>

<style>

</style>