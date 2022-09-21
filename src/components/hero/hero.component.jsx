import "./hero.styles.scss";
const Hero = ({ children, title, sub_title }) => {
  return (
    <div className="hero">
      <h1 className="landing-title">{title}</h1>
      <p>{sub_title}</p>
      {children}
    </div>
  );
};
export default Hero;
