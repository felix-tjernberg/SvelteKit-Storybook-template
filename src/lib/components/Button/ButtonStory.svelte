<script lang="ts">
    import Button from "./Button.svelte"
    import { TEST_STRING } from "./TEST_STRING"

    export let label: string
</script>

<Button {label} on:click={() => console.log(TEST_STRING)} />
