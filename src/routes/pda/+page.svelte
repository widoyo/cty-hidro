<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import { Table, TableBody, TableBodyRow, TableHead } from 'flowbite-svelte';
    import { Secondary, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
    import TableBodyCell from '$lib/components/TableBodyCell.svelte';
    import TableHeadCell from '$lib/components/TableHeadCell.svelte';
    import Heading from '$lib/components/Heading.svelte';
</script>

<Heading class="mb-5">
    Pos Duga Air <Secondary>{data.pos.length}</Secondary>
</Heading>
<div class="grid grid-cols-3 gap-4">
    <div class="md:col-span-2 col-span-3">
        <Table hoverable=true>
            <TableHead>
                <TableHeadCell>Nama</TableHeadCell>
                <TableHeadCell>Pagi</TableHeadCell>
                <TableHeadCell>Siang</TableHeadCell>
                <TableHeadCell>Sore</TableHeadCell>
                <TableHeadCell>Telemetri</TableHeadCell>
                <TableHeadCell>Manual</TableHeadCell>
            </TableHead>
            <TableBody tableBodyClass="divide-y">
                {#each data.pos as p}
                <TableBodyRow>
                    <TableBodyCell>{p.nama}</TableBodyCell>
                    <TableBodyCell></TableBodyCell>
                    <TableBodyCell></TableBodyCell>
                    <TableBodyCell></TableBodyCell>
                    <TableBodyCell></TableBodyCell>
                    <TableBodyCell></TableBodyCell>
                </TableBodyRow>
                {/each}    
            </TableBody>
        </Table>
    </div>
    <div>Kanan</div>
</div>