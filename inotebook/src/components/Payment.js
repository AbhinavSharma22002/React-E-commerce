import React from 'react'

const Payment = () => {
    return (
        <div className="d-flex justify-content-center half">
        <div>
          <div>            
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12">
                <div className="form-block mx-auto">
                  <div className="text-center mb-5">
                    <h3 style={{color:'red'}}>
                    <strong>Checkout</strong>
                    </h3>
                  </div>
                  <form>
                    <div className="form-group first">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        size="40"
                        className="form-control"
                        placeholder="Address"
                        id="address"
                      />
                    </div>
                    <div className="form-group first my-3">
                      <label htmlFor="pin">Pin Code</label>
                      <input
                        type="text"
                        size="40"
                        maxLength="6"
                        className="form-control"
                        placeholder="Pin"
                        id="pin"
                      />
                    </div>
                    <div className="form-group last mb-3 my-3">
                      <label htmlFor="pin">Phone Number</label>
                      <input
                        type="tel"
                        size="40"
                        className="form-control"
                        placeholder="Enter correct number"
                        id="tel"
                      />
                    </div>
                    <div className="form-group" style={{display:'flex',flexDirection:'row'}}>
                    <input
                      type="submit"
                      value="Log In"
                      className="btn btn-block btn-danger"
                    />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Payment
