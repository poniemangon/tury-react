import Button from "../button/Button";

const Banner = ({
  headline = "",
  title = "",
  body = "",
  buttonText = "",
  buttonLink = "",
  buttonVariant = "red",
  backgroundImage = "",
}) => {
  return (
    <section
      className="banner-section"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="col text-col">
          {headline && (
            <p className="headline animate-on-scroll fade-left">{headline}</p>
          )}
          {title && (
            <h1 className="animate-on-scroll fade-left">{title}</h1>
          )}
          {body && (
            <p className="body animate-on-scroll fade-left">{body}</p>
          )}
          {buttonText && buttonLink && (
            <Button
              text={buttonText}
              link={buttonLink}
              variant={buttonVariant}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
