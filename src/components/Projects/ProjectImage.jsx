function ProjectImage({ project, className, alt, loading, decoding, ...rest }) {
  const description = alt ?? `Cover image of the ${project.title} project`;
  return (
    <picture>
      <source srcSet={project.imgWebp} type="image/webp" />
      <img
        src={project.imgPath}
        alt={description}
        className={className}
        loading={loading}
        decoding={decoding}
        {...rest}
      />
    </picture>
  );
}

export default ProjectImage;
