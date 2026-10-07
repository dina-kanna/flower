const SectionHeading = ({
  eyebrow = "Green Collection",
  title,
  description,
}) => {
  return (
    <div className="text-center max-w-full mx-auto mb-12">
      <p className="text-green-700 font-bold uppercase tracking-widest text-sm">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-green-950">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;