<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { Heading, Secondary, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>
<Breadcrumb>
    <BreadcrumbItem href="/">home</BreadcrumbItem>
    <BreadcrumbItem>Pos versi Vendor</BreadcrumbItem>
</Breadcrumb>

<Heading customSize="text-5xl font-thin" class="mb-5">
    Pos versi Vendor
</Heading>
<div class="grid grid-cols-3 gap-4">
    <div class="md:col-span-2 col-span-3">
        <Table hoverable=true>
            <TableHead>
                <TableHeadCell>Nama</TableHeadCell>
                <TableHeadCell>Tipe</TableHeadCell>
                <TableHeadCell>Data Terakhir</TableHeadCell>
            </TableHead>
            <TableBody tableBodyClass="divide-y">
                {#each data.pos as p}
                <TableBodyRow>
                    <TableBodyCell>{p.nama}</TableBodyCell>
                    <TableBodyCell>{p.tipe}</TableBodyCell>
                    <TableBodyCell>{p.latestSampling}</TableBodyCell>
                </TableBodyRow>
                {/each}    
            </TableBody>
        </Table>
    </div>
    <div>Kanan</div>
</div>