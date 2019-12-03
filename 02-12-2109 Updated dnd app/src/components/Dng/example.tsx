import React, { useState, useCallback } from 'react'
import { NativeTypes } from 'react-dnd-html5-backend'
import Dustbin from './Dustbin'
import Box from './Box'
import ItemTypes from './ItemTypes'
import update from 'immutability-helper';
import Properties from '../Properties/Properties';


interface DustbinState {
  accepts: string[]
  lastDroppedItem: any
}

interface BoxState {
  name: string
  elemantType?: string,
  type?: any,
  placeholder?: string,
  value?: string,
  label?: string,
  validation?: Validation,
  isValidation?: boolean,
  select?: any
}

export interface Validation {
  require: boolean,
  min?: number,
  max?: number,
  pattern?: string
}


export interface DustbinSpec {
  accepts: string[]
  lastDroppedItem: any
}
export interface BoxSpec {
  name: string
  type: string
}
export interface ContainerState {
  droppedBoxNames: BoxState[]
  dustbins: DustbinSpec[]
  boxes: BoxSpec[]
}

export interface ExampleProblemProps {
  
}
 
export interface ExampleProblemState {
  
}

const inputHandleChange=(data:any) =>{

  const propertyObj:any={...data};


}
const onSubmit=(data:any)=>{
  
}

const data=[
  {
    name: 'Input', type: ItemTypes.GLASS, elemantType: "input",
    // type: ['text', 'email', 'password', 'number', 'tel'],
    placeholder: "",
    value: "",
    label: "",
    validation: {
      require: false,
      min: 0,
      max: 0,
      pattern: ""
    },
    isValidation: false,
    select: ""
  },
  {
    name: 'Radio', type: ItemTypes.FOOD, placeholder: "",
    value: "",
    label: "",
    validation: {
      require: false,
      min: 0,
      max: 0,
      pattern: ""
    },
    isValidation: false,
    select: ""
  },
  {
    name: 'Checkbox', type: ItemTypes.PAPER, placeholder: "",
    value: "",
    label: "",
    validation: {
      require: false,
      min: 0,
      max: 0,
      pattern: ""
    },
    isValidation: false,
    select: ""
  },
]

const Container: React.FC = () => {
  const [dustbins, setDustbins] = useState<DustbinState[]>([
    { accepts: [ItemTypes.GLASS, ItemTypes.FOOD, ItemTypes.PAPER], lastDroppedItem: null },
    // { accepts: [ItemTypes.FOOD], lastDroppedItem: null },
    // {
    //   accepts: [ItemTypes.PAPER, ItemTypes.GLASS, NativeTypes.URL],
    //   lastDroppedItem: null,
    // },
    // { accepts: [ItemTypes.PAPER, NativeTypes.FILE], lastDroppedItem: null },
  ])

  const [boxes] = useState<BoxState[]>(data)

  const [droppedBoxNames, setDroppedBoxNames] = useState<string[]>([])

  function isDropped(box: BoxState) {
    return droppedBoxNames.indexOf(box.name) > -1
  }

  const handleDrop = useCallback(
    (index: number, item: BoxState) => {
      const { name, value } = item
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
      )
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      )
    },
    [droppedBoxNames, dustbins],
  )
  return (
    <div>

      <div className="inputfields">
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {boxes.map((box, index) => (          
            <Box item={box} isDropped={isDropped(box)}
              key={index} />
          ))}
        </div>
      </div>
      <div className="workspace">
        <div className="row">
          <div className="col-sm-12">
            <div className="right">
              <div style={{ overflow: 'hidden', clear: 'both', marginTop: '15px' }}>
                {dustbins.map(({ accepts, lastDroppedItem }, index) => (
                  <Dustbin
                    accept={accepts}
                    lastDroppedItem={lastDroppedItem}
                    onDrop={item => handleDrop(index, item)}
                    key={index}
                    inputHandleChange={inputHandleChange} 
                    onSubmit={onSubmit}
                  />
                ))}
              </div>

            </div>
          </div>
          {/* <div className="col-sm-4 properties">
          <Properties inputHandleChange={inputHandleChange} onSubmit={onSubmit}/>
          </div> */}
        </div>

      </div>


    </div>
  )
}

export default Container
