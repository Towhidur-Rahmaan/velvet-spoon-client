const ImmersiveSection = ({ children, className = "" }) => {
  return (
    <section className={`iphone-section min-h-screen relative ${className}`}>
      <div className="content h-full flex items-center justify-center px-6 md:px-16">
        <div className="w-full max-w-7xl">{children}</div>
      </div>
    </section>
  );
};

export default ImmersiveSection;
