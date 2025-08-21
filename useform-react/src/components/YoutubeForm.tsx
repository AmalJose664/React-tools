import {useForm, useFieldArray} from "react-hook-form"
import type {FieldErrors} from "react-hook-form"
import {DevTool} from "@hookform/devtools"
import {useEffect} from  "react"



type FormValues = {
	username: string
	email: string
	channel:string
	social:{
		twitter: string
		facebook: string
	}
	phoneNumbers: string[]
	phNumbers: {number:string, }[]
	age: number
	dob: string
}

export const YouTubeForm = ()=>{

	const form = useForm<FormValues>({
		/*		defaultValues: {
			username:"Batman",
			email: "test",
			channel: "test",
			social: {facebook:"", twitter: ""}
			phoneNumbers: ["", ""],
			phNumbers:[{number: ""}],
			age: 0,
			dob: Date()
	} */
		defaultValues: async()=>{
			const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
			const data = await res.json()
			return {
				username: "Batman",
				email: data.email,
				channel: "",
				social: {
					twitter: "",
					facebook: ""
				},
				phoneNumbers: ["", ""],
				phNumbers: [{number: ""}],
				age: 0,
				dob: Date()
			}
		},
		mode: "onSubmit"
	})
	const {register, 
		control, 
		handleSubmit, formState, 
		watch, reset,trigger ,
		getValues,setValue
	} = form
	const {errors, isDirty, isValid, isSubmitted ,
		isSubmitting, isSubmitSuccessful, submitCount
	} = formState
	//console.log({isSubmitted, isSubmitting, isSubmitSuccessful, submitCount}, "Submit data here")
	const {fields, append, remove} = useFieldArray({
		name: "phNumbers",
		control
	})

	const onError = (fieldValues: FieldErrors<FormValues>)=>{
		console.log("Error ------------", fieldValues)	
	}
	const onSubmit =(data: FormValues)=>{
		console.log("Form submitted ", data)
	}

	const handleGetValues = ()=>{
		console.log(getValues(), // getValues(['username',"age"])
					  )
	}
	//const watchUsername = watch("username") // no field full wacth, then json format
	useEffect(()=>{
		//const sub = watch((value)=>{
		//	console.log(value)
		//})
		//return ()=>sub.unsubscribe()
		reset()
	},[reset, isSubmitSuccessful])

	return (
		<div>
			{/*	<h2>Watched USername {watchUsername}</h2> */}
	<form noValidate onSubmit = {handleSubmit(onSubmit,onError)}>
	  <div className="form-control">
		 <label htmlFor="username">Username</label>
		  <input type="text" id="username" {...register("username", {required: {value: true, message: "Username is required" } })}/>
		  <p className="errors" >{errors.username?.message}</p>
	  </div>

		<div className="form-control">
			<label htmlFor="email">Email</label>
			<input type="email" id="email" {...register("email", 
			{pattern: {value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: "Invalid Email format" },
				validate: {
					notAdmin: (fieldValue)=> fieldValue !== "admin@example.com" || "Enter a different email address", 
					notBlackListed: (fieldValue)=> 
					!fieldValue.endsWith("baddomain.com") || "This domain is not supported",
					emailAvailable: async(fieldValue)=>{
			const res = await fetch("https://jsonplaceholder.typicode.com/users?email="+ fieldValue)
			const data = await res.json()
					return data.length === 0 || "Email already exists"
					}
				}
			}
			)} />
		  <p className="errors" >{errors.email?.message}</p>
	  </div>

		<div className="form-control">
			<label htmlFor="channel">Channel</label>
			<input type="text" id="channel" {...register("channel", {required: {value: true, message: "Channel is required"} })}/>
			<p className="errors">{errors.channel?.message}</p>
		</div>

		<div className="form-control">
			<label htmlFor="twitter">Twitter</label>
			<input type="text" id="twitter" {...register("social.twitter",{disabled:watch("channel")==="",
			required:"Enter twitter profile"
			})}/>
		</div>
	
		<div className="form-control">
			<label htmlFor="facebook">Facebook</label>
			<input type="text" id="facebook" {...register("social.facebook")}/>
		</div>
		<div className="form-control">
			<label htmlFor="primary-phone">Primary phone number</label>
			<input type="text" id="primary-phone" {...register("phoneNumbers.0")}/>
		</div>	
		<div className="form-control">
			<label htmlFor="secondary-phone">Secondary phone number</label>
			<input type="text" id="secondary-phone" {...register("phoneNumbers.1")}/>
		</div>

		<div>
			<label>List of Phone Numbers</label>
			<div>
				{fields.map((field, index)=>(
					<div className="form-control" key={field.id}>
						<input type="text" {...register(`phNumbers.${index}.number` as const)}
						/>
						{
							index>0 && (
						<button type="button"onClick={
							()=>remove(index)}>Remove</button>
							)
						}
					</div>
				))}
				<button type="button"onClick={()=>append(
				{number: ""}
				)}>Add Phone number</button>
			</div>
		</div>
		<div className="form-control">
			<label htmlFor="age">Age</label>
			<input type="number" id="age" {...register("age", {
			valueAsNumber: true,
			required: {value: true, message: "Age is required"} })}/>
			<p className="errors">{errors.age?.message}</p>
		</div>

		<div className="form-control">
			<label htmlFor="dob">Dob</label>
			<input type="date" id="dob" {...register("dob", {
			valueAsDate: true, 
			required: {value: true, message: "Dob is required"} })}/>
			<p className="errors">{errors.dob?.message}</p>
		</div>



		<button 
			disabled={!isDirty || isValid}
				 type="submit">Submit</button>
		<button type="button" onClick={handleGetValues}>Get Values</button>
	<button type="button" onClick={
			()=>{
			setValue("username","Tonyss", {
				shouldValidate: true,
				shouldDirty: true,
			})
		}
			}>Set Values</button>
		<button onClick={()=>trigger()}>Validate</button>

		<button onClick={()=>reset()}>Reset</button>
	</form>
		<DevTool control = {control}/>
		</div>
	)
}
