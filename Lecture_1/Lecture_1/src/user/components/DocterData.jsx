// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import Card from './Card';

// eslint-disable-next-line no-unused-vars
const doctorsOfData = [
    {
        nameOfDocs: "Dr. John Doe",
        age: 35,
        experience: "10 years",
        fees: 100
    },
    {
        nameOfDocs: "Dr. Sarah Smith",
        age: 40,
        experience: "15 years",
        fees: 120
    },
    {
        nameOfDocs: "Dr. Michael Johnson",
        age: 45,
        experience: "20 years",
        fees: 150
    },
    {
        nameOfDocs: "Dr. Emily Brown",
        age: 38,
        experience: "12 years",
        fees: 110
    },
    {
        nameOfDocs: "Dr. David Wilson",
        age: 50,
        experience: "25 years",
        fees: 180
    },
    {
        nameOfDocs: "Dr. Jennifer Lee",
        age: 42,
        experience: "18 years",
        fees: 140
    },
    {
        nameOfDocs: "Dr. Robert Jones",
        age: 48,
        experience: "22 years",
        fees: 160
    },
    {
        nameOfDocs: "Dr. Jessica Martinez",
        age: 37,
        experience: "11 years",
        fees: 105
    },
    {
        nameOfDocs: "Dr. Christopher Davis",
        age: 44,
        experience: "17 years",
        fees: 130
    },
    {
        nameOfDocs: "Dr. Samantha Taylor",
        age: 39,
        experience: "14 years",
        fees: 115
    },
    {
        nameOfDocs: "Dr. Matthew White",
        age: 46,
        experience: "21 years",
        fees: 155
    },
    {
        nameOfDocs: "Dr. Amanda Harris",
        age: 41,
        experience: "16 years",
        fees: 125
    },
    {
        nameOfDocs: "Dr. Daniel Anderson",
        age: 36,
        experience: "13 years",
        fees: 108
    },
    {
        nameOfDocs: "Dr. Lisa Rodriguez",
        age: 43,
        experience: "19 years",
        fees: 135
    },
    {
        nameOfDocs: "Dr. James Wilson",
        age: 49,
        experience: "23 years",
        fees: 165
    },
    {
        nameOfDocs: "Dr. Ashley Martin",
        age: 34,
        experience: "9 years",
        fees: 95
    },
    {
        nameOfDocs: "Dr. Andrew Thomas",
        age: 47,
        experience: "24 years",
        fees: 170
    },
    {
        nameOfDocs: "Dr. Michelle Clark",
        age: 40,
        experience: "15 years",
        fees: 120
    },
    {
        nameOfDocs: "Dr. Ryan Hall",
        age: 38,
        experience: "11 years",
        fees: 110
    },
    {
        nameOfDocs: "Dr. Kimberly Lewis",
        age: 51,
        experience: "26 years",
        fees: 185
    }
];



export default class DocterData extends Component {
  render() {
    return (
      <>
        {doctorsOfData.map((doctor, indexOfDocs) => (
          <Card dataOfDocs={doctor} key={indexOfDocs} />
        ))}
      </>
    )
  }
}
