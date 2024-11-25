import React, {useState} from "react"

function MyChangeEvent(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState("");
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery")

    function handleNameChange(event){
        setName(event.target.value);
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

    return(
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} type="number" onChange={handleQuantityChange}/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="text here..."></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="Master Card">Master Card</option>
                <option value="Gift Card">Gift Card</option>
            </select>
            <p>Payment: {payment}</p>

            <label><input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>Pick Up</label>
            <label><input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>Delivery</label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default MyChangeEvent