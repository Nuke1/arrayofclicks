let test_data1 = [{
    "ip": "11.11.11.11",
    "timestamp": "3/11/2020 02:12:32",
    "amount": 6.50
},
{
    "ip": "11.11.11.11",
    "timestamp": "3/11/2020 02:13:11",
    "amount": 7.25
},
]

let expected_data1 = [{
"ip": "11.11.11.11",
"timestamp": "3/11/2020 02:13:11",
"amount": 7.25
}]


let test_data2 = [{
    "ip": "11.11.11.11",
    "timestamp": "3/11/2020 02:12:32",
    "amount": 8.00
},
{
    "ip": "11.11.11.11",
    "timestamp": "3/11/2020 02:50:26",
    "amount": 8.00
},
]

let expected_data2 = [{
"ip": "11.11.11.11",
"timestamp": "3/11/2020 02:12:32",
"amount": 8.00
}]

let test_data3 = [{
    "ip": "11.11.11.11",
    "timestamp": "3/11/2020 02:12:32",
    "amount": 8.00
},
{
    "ip": "11.11.11.11",
    "timestamp": "3/11/2020 03:50:26",
    "amount": 1.00
},
{
    "ip": "11.11.11.11",
    "timestamp": "3/11/2020 04:12:32",
    "amount": 2.00
},
{
    "ip": "11.11.11.11",
    "timestamp": "3/11/2020 05:50:26",
    "amount": 3.10
},
{
    "ip": "11.11.11.11",
    "timestamp": "3/11/2020 06:12:32",
    "amount": 5.28
},
{
    "ip": "11.11.11.11",
    "timestamp": "3/11/2020 08:09:26",
    "amount": 7.25
},
{
    "ip": "11.11.11.11",
    "timestamp": "3/11/2020 08:12:32",
    "amount": 8.00
},
{
    "ip": "11.11.11.11",
    "timestamp": "3/11/2020 09:10:26",
    "amount": 6.10
},
{
    "ip": "11.11.11.11",
    "timestamp": "3/11/2020 09:12:32",
    "amount": 6.10
},
{
    "ip": "11.11.11.11",
    "timestamp": "3/11/2020 10:50:26",
    "amount": 3.00
},
{
    "ip": "11.11.11.11",
    "timestamp": "3/11/2020 10:50:26",
    "amount": 5.00
},
{
    "ip": "22.11.11.11",
    "timestamp": "3/11/2020 02:12:32",
    "amount": 8.00
}
]

let expected_data3 = [{
"ip": "22.11.11.11",
"timestamp": "3/11/2020 02:12:32",
"amount": 8.00
}]

let expected_data4 = [{
    "ip": "11.11.11.11",
    "timestamp": "3/11/2020 02:13:11",
    "amount": 7.25
},
{
    "ip": "44.44.44.44",
    "timestamp": "3/11/2020 02:13:54",
    "amount": 8.75
},
{
    "ip": "44.44.44.44",
    "timestamp": "3/11/2020 06:32:42",
    "amount": 5
},
{
    "ip": "11.11.11.11",
    "timestamp": "3/11/2020 06:45:01",
    "amount": 12
},
{
    "ip": "11.11.11.11",
    "timestamp": "3/11/2020 07:02:54",
    "amount": 4.5
},
{
    "ip": "33.33.33.33",
    "timestamp": "3/11/2020 07:02:54",
    "amount": 15.75
},
{
    "ip": "66.66.66.66",
    "timestamp": "3/11/2020 07:02:54",
    "amount": 14.25
},
{
    "ip": "55.55.55.55",
    "timestamp": "3/11/2020 13:02:40",
    "amount": 8
},
{
    "ip": "44.44.44.44",
    "timestamp": "3/11/2020 13:02:55",
    "amount": 8
},
{
    "ip": "55.55.55.55",
    "timestamp": "3/11/2020 14:03:04",
    "amount": 5.25
},
{
    "ip": "55.55.55.55",
    "timestamp": "3/11/2020 15:12:55",
    "amount": 6.25
},
{
    "ip": "55.55.55.55",
    "timestamp": "3/11/2020 16:22:11",
    "amount": 8.5
},
{
    "ip": "55.55.55.55",
    "timestamp": "3/11/2020 17:18:19",
    "amount": 11.25
},
{
    "ip": "55.55.55.55",
    "timestamp": "3/11/2020 18:19:20",
    "amount": 9
}
]

module.exports = {
test_data1,
test_data2,
test_data3,
expected_data1,
expected_data2,
expected_data3,
expected_data4
}