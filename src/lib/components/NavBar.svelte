<script>
    import { page } from '$app/stores';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownDivider, DropdownHeader } from 'flowbite-svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
    $: activeUrl = $page.url.pathname;
</script>
  
  <Navbar fluid=true class="py-0 font-base font-thin">
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">BBWS Citanduy</span>
    </NavBrand>
    <div class="flex items-center md:order-2">
        <Avatar id="avatar-menu" src="" />
        <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
      </div>
      <Dropdown placement="bottom" triggeredBy="#avatar-menu">
        <DropdownHeader>
          <span class="block text-sm">Bonnie Green</span>
          <span class="block truncate text-sm font-medium">name@flowbite.com</span>
        </DropdownHeader>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>
    <NavUl {activeUrl}>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/pch">Pos Curah Hujan</NavLi>
      <NavLi href="/pda">Pos Duga Air</NavLi>
      <NavLi href="/petugas">Petugas</NavLi>
      <NavLi class="cursor-pointer">
        Alat Bantu <ChevronDownOutline class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline" />
      </NavLi>
      <Dropdown class="w-44 z-20">
        <DropdownItem href="/rdaily">Data Harian</DropdownItem>
        <DropdownItem href="/opos">Nama Pos Vendor</DropdownItem>
        <DropdownItem href="/fetchlog">Riwayat Menyalin</DropdownItem>
      </Dropdown>
    </NavUl>
  </Navbar>