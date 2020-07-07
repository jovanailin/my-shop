import React, {useContext, useState} from "react"
import {Context} from "../context"

function Form(){
  const [sellerId,setSellerId]=useState("")
  const [publishableKey,setPublishableKey]=useState("")
  const [ccNo,setCcNo]=useState("")
  const [expMonth,setExpMonth]=useState("")
  const [expYear,setExpYear]=useState("")
  const [ccv,setCcv]=useState("")


  return(
    <form id="myCCForm" action="https://www.mysite.com/examplescript.php" method="post">
    <input name="token" type="hidden" value="" />
    <div>
      <label className="ml-3 mt-3 d-flex justify-content-start">
        <span className="px-1">Card Number</span>
        <input className="" id="ccNo" type="text" value="" autocomplete="off" required />
      </label>
    </div>
    <div>
      <label className="ml-3 d-flex justify-content-start">
        <span className="px-2">Expiration Date (MM/YYYY)</span>
        <input id="expMonth" type="text" size="2" required />
        <span className="px-2"> / </span>
        <input id="expYear" type="text" size="4" required />
      </label>

    </div>
    <div>
      <label className="ml-3 d-flex justify-content-start">
        <span className="pr-2">CVC</span>
        <input id="cvv" type="text" value="" autocomplete="off" required />
      </label>
    </div>
    <input className="btn bg-danger text-white mb-3" type="submit" value="Submit Payment" />
  </form>)
}

export default Form
