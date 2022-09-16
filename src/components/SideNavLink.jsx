const SideNavLink = ({ Logo, size, color, title }) => {
  return (
    <a className="sidenav-link">
      <Logo size={size} color={color} />
      <span>{title}</span>
    </a>
  );
};

export default SideNavLink;
