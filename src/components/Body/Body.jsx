import React, {useState,useEffect} from 'react'
import './Body.scss'
import {BodySection} from '../body_section/'

export const Body = () => {
  const [state, setState] = useState("")

  const ClickHandler = (type) => {
    setState(type)
  }

  return (
    <div className={'body'}>
      <BodySection
        style={
        {
          border: "3px solid red",
        }}
                   lefBlock={true}
                   clickhandler={ClickHandler}
      />
      <BodySection
        style={{
          border: "3px solid black",
        }}
        figure = {state}
      />

    </div>

  )

}
