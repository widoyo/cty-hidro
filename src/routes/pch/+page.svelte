<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import { TableBody, TableBodyRow, TableHead } from 'flowbite-svelte';
    import { Secondary, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
    import TableBodyCell from '$lib/components/TableBodyCell.svelte';
    import Table from '$lib/components/Table.svelte';
    import TableHeadCell from '$lib/components/TableBodyCell.svelte';
    import Heading from '$lib/components/Heading.svelte';
</script>

<Heading class="mb-5">
    Pos Curah Hujan <Secondary>{data.pos.length}</Secondary>
</Heading>
<div class="grid grid-cols-3 gap-4">
    <div class="md:col-span-2 col-span-3">
        <Table hoverable=true>
            <TableHead>
                <TableHeadCell>Nama</TableHeadCell>
                <TableHeadCell>Pagi</TableHeadCell>
                <TableHeadCell>Siang</TableHeadCell>
                <TableHeadCell>Sore</TableHeadCell>
                <TableHeadCell>Malam</TableHeadCell>
                <TableHeadCell>Telemetri</TableHeadCell>
                <TableHeadCell>Manual</TableHeadCell>
            </TableHead>
            <TableBody tableBodyClass="divide-y">
                {#each data.pos as p}
                <TableBodyRow>
                    <TableBodyCell><a href="/pch/{p.slug}">{p.nama}</a></TableBodyCell>
                    <TableBodyCell>{p.ll}</TableBodyCell>
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