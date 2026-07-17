function Logo() {
  return (
    <div className="flex items-center gap-4">
      <img src="logo.png" className="h-15 rounded-full border-2" />
      <div>
        <h3 className="text-primary">Cozy Chat</h3>
        <p>Enterprise Hub</p>
      </div>
    </div>
  );
}

export default Logo;
