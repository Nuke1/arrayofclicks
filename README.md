# Array of clicks

## Install Packages
```
npm i
```
## Run test cases
```
npm test
```

## About the Project

### Requirements 

Given an array of clicks, return the subset of clicks where: 

* For each IP within each one hour period, only the most expensive click is placed into the result set.
* If more than one click from the same IP ties for the most expensive click in a one hour period, only place the earliest click into the result set.
* If there are more than 10 clicks for an IP in the overall array of clicks, do not include any of those clicks in the result set. 

The result set should be stored in a list. Each map represents a click. The expected result set should be a subset of the original list. 


### Definitions
- A click ​is the composite of an IP address, a timestamp, and a click amount. 
- Duplicate clicks​ are clicks that have the same IP address, regardless of timestamp or click amount. 
- Click periods​ are defined as the one hour spans that start at the top of the hour. So, in one day, there are 24 periods and they are broken down as follows (in HH:MM:SS format): 

```
00:00:00 ­ 00:59:59 (period 1) 
01:00:00 ­ 01:59:59 (period 2) 
02:00:00 ­ 02:59:59 (period 3) 
… 
22:00:00 ­ 22:59:59 (period 23) 
23:00:00 ­ 23:59:59 (period 24)
```



## Solution

The DataSet looks like this:
```
[
    { "ip": "22.22.22.22", "timestamp": "3/11/2020 02:02:58", "amount": 7.00 },
    { "ip": "11.11.11.11", "timestamp": "3/11/2020 02:12:32", "amount": 6.50 },
    { "ip": "55.55.55.55", "timestamp": "3/11/2020 13:33:34", "amount": 8.00 },
    { "ip": "55.55.55.55", "timestamp": "3/11/2020 13:42:24", "amount": 8.00 },
    { "ip": "33.33.33.33", "timestamp": "4/11/2020 15:42:24", "amount": 2.00 },
]
]
```

### Assumptions: 

* The dataset can contain data of different dates as well.
* It was not mentioned, The data would come in sorted order.
* It was not mentioned, The resultset should contain data in sorted manner.

### Data Structures

For above mentioned dataset, the data structures would look like this:

- To count the overall occurence of a click. A hashmap named, countMap is used. 
```
    { 
        "22.22.22.22": 1
        "11.11.11.11": 1
        "55.55.55.55": 2
        "33.33.33.33": 1
    }
```

- To handle other requirements, nested hashmaps are used.

date -> period -> ip -> {timestamp, amount} 

```
{
    "3/11/2020": {
        "2" : {
            "22.22.22.22": {
                "timestamp": "3/11/2020 02:02:58", 
                "amount": 7.00 
            },
            "11.11.11.11": {
                "timestamp": "3/11/2020 02:12:32", 
                "amount": 6.50
            }
        },
        "13" : {
            "55.55.55.55": {
                "timestamp": "3/11/2020 13:33:34", 
                "amount": 8.00
            }
        }
    },
    "4/11/2020": {
        "15": {
            "33.33.33.33": {
                "timestamp": "4/11/2020 15:42:24", 
                "amount": 2.00 
            }
        }
    }

}
```   

### Algorithm:

- Step 1: Iterate over the dataset one by one
- Step 2: Check if count in countMap > 10. If true, continue to step 1. Else, set/increase count step 3.
- Step 3: Check date, period, ip in clickMap accordingly. If click exists, step 4. Else set current click.
- Step 4: Check, If amount is same, consider earlier timestamp. If amount is different, Consider click - with greater amount. Else, set amount and timestamp.  End loop
- Step 5: Iterate over clickMap, Push clicks in array. Ignore clicks with count > 10 in click map.
- Step 6: Write in resultset.json

### Asymptotic Analysis:


- Time Complexity - O(n)
- Space Complexity - O(n)

## External Dependencies
*  [Moment](https://momentjs.com/) - To parse Timestamp and get period
*  [Jest](https://jestjs.io/) - For Unit testing

