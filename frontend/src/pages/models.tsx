
import {  SchemaModel, StringType, DateType, NumberType, ObjectType, ArrayType } from "schema-typed"
import { AddDays } from "../lib/datetime"


const today = new Date()
const todayStr = today.toISOString().split("T")[0]

export const ClientFormModel = SchemaModel({
    clientName: StringType()
        .minLength(3, "Please enter at least three (3) characters.")
        .maxLength(60, "Please enter fewer than 60 characters.")
        .isRequired("Client name is required."),

    companyName: StringType()
        .minLength(3, "Please enter at least three (3) characters.")
        .maxLength(70, "Please enter fewer than 70 characters."),
        
    createdDate: DateType()
        .min(today, `Minimum date should be ${todayStr}`)
    .isRequired("Please select a date."),

    currencyAbbr: StringType().addRule((value, data) => {
        return ["EUR", "USD", "GBP"].findIndex(el => el === value) > -1
    }, "Please endter a valid currency.")
})

const checkResult = ClientFormModel.check({
    clientName: "Tim Jones",
    companyName: "ACME,LLC",
    createdDate: AddDays(today, 1),
    currencyAbbr: "EUR"
})

console.log(checkResult)
