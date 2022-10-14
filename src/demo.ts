let x: number
let y: string
let z: boolean
let a: Date
let b: string[]
let c: any

// b = ["hello", 5]

//not recommended
// b = 'happy' as any
// b = 4

// c = ["hello", 5]
// c = 'happy'
// c = 4

interface Contact extends Address{
	id: number;
	name: string;
	birthDate?: Date;
}

interface Address {
	line1: string;
	line2?: string;
	postalCode: string;
}

let primaryContact: Contact = {
	// birthDate: new Date("01-01-1999"),
	id: 123,
	name: "bigPoppa",
	postalCode: '11226',
	line1: '385 E ...'
}