import { Stack, Button, Box, TextField, Typography, } from "@mui/material";
import React, { FormEvent, useState } from "react";
import SubmitArrow from "../assets/icons/SubmitArrow";
import UploadButton from "./UploadButton";
import useInput from "../UseInput";
import SubmitComaponent from "./SubmitComaponent";
// import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {increment} from '../redux/slices/counter'
function InputField() {

	// const name = useAppSelector((state: RootState) => state.counter);
	const dispatch = useDispatch()
	const name = useSelector((state: any) => state.counter);
	const [submit, setSubmit] = useState(false);
	const nameInput = useInput("");
	const phoneInput = useInput("");
	const emailInput = useInput("");

	const handleSubmit = (event: any) => {
		event.preventDefault();

		if (!nameInput.value) {
			nameInput.setError(true);
		}
		if (!phoneInput.value) {
			phoneInput.setError(true);
		}
		if (!emailInput.value) {
			emailInput.setError(true);
		}
		if (!nameInput.value || !phoneInput.value || !emailInput.value) return;
		// dispatch(increment({ value: nameInput.value }));

		console.log("Name:", name);
		console.log("Phone Number:", phoneInput.value);
		console.log("Email:", emailInput.value);

		// handle Error
		nameInput.setError(false);
		phoneInput.setError(false);
		emailInput.setError(false);

		setSubmit(true);
	};

	return (
		<>
			<Stack width={"100%"} spacing={"16px"}>
				{/* Name textField */}
				<Stack>
					<Typography fontSize={"14px"} fontWeight={500}>
						Name <span style={{ color: "red" }}>*</span>
					</Typography>

					<TextField
						value={nameInput.value}
						onChange={nameInput.handleChange}
						error={nameInput.error}
						placeholder="eg: 'John Doe'"
						variant="outlined"
						type="text"
					/>

					{nameInput.error && (
						<Typography fontSize={"10px"} color={"red"}>
							please enter a valid value
						</Typography>
					)}
				</Stack>

				{/* Phone Number textField */}
				<Stack>
					<Typography fontSize={"14px"} fontWeight={500}>
						Phone Number <span style={{ color: "red" }}>*</span>
					</Typography>

					<TextField
						value={phoneInput.value}
						onChange={phoneInput.handleChange}
						error={phoneInput.error}
						placeholder="eg: +9174798989888"
						variant="outlined"
						type="text"
					/>

					{phoneInput.error && (
						<Typography fontSize={"10px"} color={"red"}>
							please enter a valid value
						</Typography>
					)}
				</Stack>

				{/* Email textField */}
				<Stack>
					<Typography fontSize={"14px"} fontWeight={500}>
						Email
					</Typography>

					<TextField
						value={emailInput.value}
						onChange={emailInput.handleChange}
						error={emailInput.error}
						placeholder="eg: 'example@gmail.com'"
						variant="outlined"
						type="text"
					/>

					{emailInput.error && (
						<Typography fontSize={"10px"} color={"red"}>
							please enter a valid value
						</Typography>
					)}
				</Stack>

				<Stack>
					{/* Id Proof */}
					<Typography fontSize={"14px"} fontWeight={500}>
						Id Proof
					</Typography>

					<UploadButton />
				</Stack>

				{/* Date input Field */}
				<Stack>
					<Typography fontSize={"14px"} fontWeight={500}>
						Checkout Date
					</Typography>

					<label htmlFor="date">
						<input
							style={{
								width: "100%",
								height: "40px",
								border: "1px solid #BAC4DE",
								borderRadius: "4px",
								padding: "12px",
								color: "#A5A5A5",
							}}
							title="date"
							type="date"
							name="date"
							id="date"
						/>
					</label>
				</Stack>

				<Stack>
					<Button
						sx={{ marginTop: "40px", display: "flex", gap: "8px" }}
						variant="contained"
						onClick={handleSubmit}
						// onClick={()=> dispatch(increment())}
						size="medium"
					>
						SUBMIT
						<SubmitArrow />
					</Button>

					<Box
						sx={{
							marginTop: "24px",
							display: "flex",
							height: "45px",
							padding: "12px",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Typography fontSize={"12px"} fontWeight={400} color={"#666"}>
							powered by @ADB.com
						</Typography>
					</Box>
				</Stack>
			</Stack>

			{submit && (
				<SubmitComaponent
					name={nameInput.value}
					phone={phoneInput.value}
					email={emailInput.value}
				/>
			)}
		</>
	);
}

export default InputField;
