const user = {
  avatar:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/3840px-User-avatar.svg.png",
  username: "Thuan",
};

const FooterSidebar = () => {
  return (
    <footer className="mt-auto flex items-center gap-3 border-t border-dashed pt-4">
      <img
        src={user.avatar}
        alt={`${user.username}'s avatar`}
        className="h-12 w-12 rounded-full border object-cover"
      />
      <p className="text-lg">{user.username}</p>
    </footer>
  );
};

export default FooterSidebar;
