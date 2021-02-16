import React from 'react'
import './bodySection.scss'
import PropTypes from 'prop-types';

let buttons = ["square", "rhombus", "triangle"]

export const BodySection = ({style, clickhandler, lefBlock, figure}) => {
  const figureDefinition = (item) => {
    switch (item) {
      case "square":
        return <img style={{maxWidth: "240px", margin: "5px"}}
                    src="https://img2.freepng.ru/20180501/coe/kisspng-black-square-computer-icons-clip-art-5ae846bc1fbc99.66222818152517190013.jpg"
                    alt="square"/>
      case "rhombus":
        return <img style={{maxWidth: "240px", margin: "5px"}}
                    src="https://c0.klipartz.com/pngpicture/786/70/gratis-png-forma-de-rombo-paralelogramo-matematicas-forma.png"
                    alt="rhombus"/>
      case "triangle":
        return <img style={{maxWidth: "240px", margin: "5px"}}
                    src="https://c0.klipartz.com/pngpicture/152/448/gratis-png-forma-de-piramide-del-triangulo-negro-triangulo.png"
                    alt="triangle"/>
    }
  }
  return (
    <div className={'bodySection'} style={style}>
      {!lefBlock ? <h1>{figure.el}</h1> : false}
      {
        lefBlock ?
          buttons.map((el, index) => (
            <div
              key={index}
              className={"sectionItem"}
              onClick={() => clickhandler({el})}
            >
              {el}
            </div>
          )) : figureDefinition(figure.el)
      }

    </div>
  )
}

BodySection.propTypes={
  style: PropTypes.shape({
    border: PropTypes.string.isRequired,
  }).isRequired,
  clickhandler: PropTypes.any.isRequired,
  lefBlock: PropTypes.bool.isRequired,
  figure: PropTypes.shape({
    el: PropTypes.string.isRequired,
  }),
}
