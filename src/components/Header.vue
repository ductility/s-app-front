<template>
  <div>
    <b-navbar class="header" toggleable="sm" type="dark" variant="dark">
        <b-navbar-brand href="#/">Ductility</b-navbar-brand>

        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="#/">Home</b-nav-item>
            <b-nav-item href="#/login/">Login</b-nav-item>
            <b-nav-item href="#/me/">Me</b-nav-item>
            <b-nav-item href="#/setting/">Setting</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    .header{
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

</style>