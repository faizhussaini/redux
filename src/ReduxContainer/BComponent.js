import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import purchaseBook from './BookAction'
const BComponent = () => {
   const noOfBooks = useSelector(state=>state.numberOfBooks )
   const Dispatch=useDispatch()
  return (
    <>

    <div>No Of Books : {noOfBooks}</div>
    <button onClick={()=>{Dispatch(purchaseBook())}}>BuyBook</button>
    </>
  )
}

export default BComponent