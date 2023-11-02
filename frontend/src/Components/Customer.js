import React from "react";
import { Link } from "react-router-dom";
import "./Parts.css";

export function Customer() {
	return (
		<div className="Auth-form-container-big">
			<form className="Auth-form" action="/Customer">
				<div className="Auth-form-content">
					<h3 className="Auth-form-title" align="center">
						Welcome Back!
					</h3>
					<button
						className="button"
						style={{ verticalAlign: "middle" }}
						formAction="/ViewCustomer"
					>
						<span>Get Profile Details </span>
					</button>
					<br />
					<button
						className="button"
						style={{ verticalAlign: "middle" }}
						formAction="/ViewBalance"
					>
						<span>Get Account Details </span>
					</button>
					<br />
					<Link to="/Transaction">
						<button className="button" style={{ verticalAlign: "middle" }}>
							<span>Do a Transaction </span>
						</button>
					</Link>
					<br />
					<button
						className="button"
						style={{ verticalAlign: "middle" }}
						formAction="/ApplyLoan"
					>
						<span>Apply for an Online Loan </span>
					</button>
					<br />
					<button
						className="button"
						style={{ verticalAlign: "middle" }}
						formAction="/CreateFD"
					>
						<span>Start a Fixed Deposit </span>
					</button>
					<br />
					<button
						className="button"
						style={{ verticalAlign: "middle" }}
						formAction="/CheckInstallments"
					>
						<span>Check Loan Installments </span>
					</button>
					<br />
					<button
						className="button"
						style={{ verticalAlign: "middle" }}
						formAction="/PayInstallment"
					>
						<span>Pay Loan Installments </span>
					</button>
					<br />
					<button
						className="button"
						style={{ verticalAlign: "middle" }}
						formAction="/Statement"
					>
						<span>Get Bank Statement </span>
					</button>
					<br />
					<button
						className="button"
						style={{ verticalAlign: "middle" }}
						formAction="/"
					>
						<span>Log Out</span>
					</button>
				</div>
			</form>
		</div>
	);

	const htmlContent = `
        <!DOCTYPE html>
        <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
            <body>
            </body>
        </html>
    `;

	return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
