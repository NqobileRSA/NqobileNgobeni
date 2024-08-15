// import './GlitchText.scss';
import './GlitchText.css';
const GlitchText = () => {
  return (
    <>
      {/* <span
        data-text="<Nqobile/>"
        className="animateText"
        style={{
          fontSize: '25px',
          fontFamily: '"Press Start 2P", system-ui',
          fontWeight: 'bolder',
        }}
      >
        {'<Nqobile/>'}
      </span> */}
      <h2
        className="hero glitch layers"
        data-text="<Nqobile/>"
        style={{
          fontSize: '25px',
          // fontFamily: '"Press Start 2P", system-ui',
          // fontWeight: 'bolder',
        }}
      >
        <span>{`<Nqobile/>`}</span>
      </h2>
    </>
  );
};

export default GlitchText;
