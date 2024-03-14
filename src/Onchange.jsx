import {useState} from 'react'

function OnChange(){
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState()
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")
    const [date, setDate] = useState()


function handleNameChange(event){
  setName(event.target.value)
}

function handleQuantityChange(event){
      setQuantity(event.target.value)
}

function handleCommentChange(event){
  setComment(event.target.value)
}

function handlePaymentChange(event){
  setPayment(event.target.value)
}

function handleShippingChange(event){
  setShipping(event.target.value)
}

function handleDateChange(event){
  setDate(event.target.value)
}


return(
  
  <div>
    <input type="text" value={name} onChange={handleNameChange} />
    <p>Name: {name}</p>

    <input type="number" value={quantity} onChange={handleQuantityChange} />
    <p>Quantity: {quantity}</p>

    <textarea value={comment} onChange={handleCommentChange} placeholder='Give delivery instructions'/>

    <p>Comment: {comment}</p>

    <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="Giftcard">Giftcard</option>
    </select>
    <p>Payment method: {payment}</p>

    <label >
      <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
      Pick Up
      </label>
      <br/>
    <label >
      <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
      Delivery
      </label>


      <p>Shipping: {shipping}</p>

      <input type="date"  onChange={handleDateChange}/>
      <p>Date: {date}</p>

  </div>
)

}

export default OnChange