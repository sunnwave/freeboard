'use client';

import { useRouter } from 'next/router';
import { menuItems } from '../../../../data/menuItem';
import { Menu, MenuItem, NavbarContainer } from './Navbar.styles';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();
  const pathName = router.pathname;

  console.log(pathName);

  return (
    <NavbarContainer>
      <Menu>
        {menuItems.map(el => (
          <MenuItem key={el.name} isActive={pathName === el.path}>
            <Link href={el.path}>{el.name}</Link>
          </MenuItem>
        ))}
      </Menu>
    </NavbarContainer>
  );
}
