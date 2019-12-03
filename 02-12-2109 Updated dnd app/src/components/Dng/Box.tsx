import React from 'react'
import { useDrag } from 'react-dnd'

const style: React.CSSProperties = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}

export interface BoxProps {
  name?: string,
  isDropped:boolean,
  elemantType?: string,
  type?: any,
  placeholder?: string,
  value?: string,
  label?: string,
  validation?: Validation,
  isValidation?: boolean,
  select?:any,
  item:any
}

export interface Validation {
  require: boolean,
  min?: number,
  max?: number,
  pattern?: string
} 

const Box: React.FC<BoxProps> = ({ item,isDropped }) => {
  const [{ opacity }, drag] = useDrag({
    item: item,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  })

  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {/* {isDropped ? <s>{name}</s> : name} */}
      { item.name}
    </div>
  )
}

export default Box
