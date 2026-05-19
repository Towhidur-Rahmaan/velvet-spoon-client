const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="text-center mb-12">
      <p className="uppercase tracking-[0.3em] text-amber-400 mb-3">
        {subtitle}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
    </div>
  );
};

export default SectionTitle;
