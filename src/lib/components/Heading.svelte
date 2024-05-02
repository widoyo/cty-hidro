<script>
    import { twMerge } from 'tailwind-merge';
    import { Heading } from 'flowbite-svelte';
</script>

<Heading customSize="text-5xl font-thin" class={twMerge($$props.class)}>
    <slot />
</Heading>