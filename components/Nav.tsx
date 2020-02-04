import { List } from '@rmwc/list';

import NavItem from './NavItem';

type Props = {
  darkMode?: boolean;
};

const Nav: React.FC<Props> = ({ darkMode = false }) => {
  const style = darkMode
    ? { backgroundColor: '#000000', color: '#ffffff' }
    : undefined;

  return (
    <List style={style}>
      <NavItem href={'/'} icon='home' darkMode={darkMode}>
        Home
      </NavItem>
      <NavItem href={'/about'} icon='portrait' darkMode={darkMode}>
        About
      </NavItem>
      <NavItem href={'/projects'} icon='view_carousel' darkMode={darkMode}>
        Projects
      </NavItem>
      <NavItem href={'/contact'} icon='contacts' darkMode={darkMode}>
        Contact
      </NavItem>
      <NavItem
        href={'https://github.com/4cm4k1/personal-website'}
        icon='code'
        darkMode={darkMode}
      >
        Source Code
      </NavItem>
    </List>
  );
};

export default Nav;