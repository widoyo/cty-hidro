<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>
<h1>Petugas</h1>
{#each data.petugas as p}
{p.nama}
{/each}