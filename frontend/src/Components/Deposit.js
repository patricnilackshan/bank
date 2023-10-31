import React from 'react';
import "./Parts.css"

export function Deposit() {
    const htmlContent = `
        <!DOCTYPE html>
        <html>
            <body>
                <div class="Auth-form-container">
                    <form class="Auth-form" action="/Employee">
                        <div class="Auth-form-content">
                            <h3 class="Auth-form-title" align="center">Enter the Details</h3>

                            <div class="row">                               
                            <div class="col-25">
                                <label>Customer ID</label> </div>
                                <div class="col-75">
                                <input
                                    type="number"
                                    className="form-control mt-1"
                                    placeholder="Enter ID"
                                />
                            </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label>Account Number</label>
                                </div>
                                <div class="col-75">
                                    <input
                                        type="number"
                                        className="form-control mt-1"
                                        placeholder="Enter account number"
                                        size="48"
                                    />
                                </div>
                            </div>

                            <div class="row">                               
                                <div class="col-25">
                                    <label>Amount</label> 
                                </div>
                                <div class="col-75">
                                    <input
                                        type="number"
                                        className="form-control mt-1"
                                        placeholder="Enter amount in SCR"
                                        min="1000"
                                        max="999999"
                                    />
                                </div>
                            </div>

                            <div class="row">                               
                            <div class="col-25">
                                <label>Description </div>
                                <div class="col-75">
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Enter description"                                     
                                />
                            </div>
                        </div>

                            <br>
                            <div class="row">
                                <input type="submit" value="Deposit">
                            </div>
                            <button class="backbutton" style="vertical-align:middle" formAction="/EmployeeTransaction"><span>Back </span></button>
                                                        
                        </div>
                    </form>
                </div>
            </body>
        </html>
    `;

    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}