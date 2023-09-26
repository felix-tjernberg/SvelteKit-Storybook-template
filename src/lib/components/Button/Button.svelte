<script lang="ts">
    export let label: string
</script>

<button on:click>{label}</button>

<style>
    button {
        color: var(--gray-100);
        background-color: var(--gray-800);
    }
</style>
