import React from 'react'
import { useDrop } from 'react-dnd'
import Pagedesigner from '../Page Designer/Page Desinger/Pagedesigner';
const style: React.CSSProperties = {
  height: '625px',
  width: '100%',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}

export interface DustbinProps {
  accept: string[]
  lastDroppedItem?: any
  onDrop: (item: any) => void
  inputHandleChange: (item: any) => void
  onSubmit: (item: any) => void
  
}

const Dustbin: React.FC<DustbinProps> = ({
  accept,
  lastDroppedItem,
  onDrop,
  inputHandleChange,
  onSubmit

}) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const isActive = isOver && canDrop
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }

  return (
    <div ref={drop} style={{ ...style, backgroundColor }}>
      {isActive
        ? 'Release to drop'
        : `This App Builder accepts: ${accept.join(', ')}`}

      {lastDroppedItem && (
        <React.Fragment>
            <Pagedesigner data={lastDroppedItem} inputHandleChange={inputHandleChange} 
                    onSubmit={onSubmit}/>
             {/* <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p> */}
        </React.Fragment>
     
      )}
    </div>
  )
}

export default Dustbin
