const moment = require('moment');
const fs = require('fs')

let data = require('./assets/clicks.json');

const writeFileName = './resultset.json'
const encodingMode = 'utf-8'
const dateFormat = 'YYYY-MM-DD'
const periodFormat = 'HH'
const maxClicksAllowed = 10


const readClicks = () => {
    return data
}

const setCountMap = (countMap, ip) => {
    count = countMap.get(ip)
    if (count) {
        countMap.set(ip, count + 1)
    } else {
        countMap.set(ip, 1)
    }
    return countMap
}

const setDateMap = (dateMap, click, period) => {
    let ipMap = dateMap.get(period)
    if (!ipMap) {
        ipMap = new Map()
    }
    ipMap = setIpMap(ipMap, click)
    dateMap.set(period, ipMap)
    return dateMap
}

const setIpMap = (ipMap, click) => {
    let prevClick = ipMap.get(click.ip)
    if (prevClick && prevClick.amount >= click.amount) {
        return ipMap
    } 
    else {
        ipMap.set(click.ip, {
            timestamp: click.timestamp,
            amount: click.amount
        })
    }
    return ipMap
}


const writeToResultSet = (result) => {
    fs.writeFileSync(writeFileName, JSON.stringify(result), encodingMode);
}

// Time Complexity - O(n)
const createFinalResult = (countMap, clicksMap) => {
    let result = []
    for (let dateMap of clicksMap.values()) {
        for (let [period, ipMap] of dateMap) {
            for (let [ip, obj] of ipMap) {
                if (countMap.get(ip) > 10) {
                    continue
                }
                result.push({
                    ip,
                    timestamp: obj.timestamp,
                    amount: obj.amount
                })
            }
        }
    }
    return result
}


const createClickSubset = (clicks) => {
    let countMap = new Map()
    let clicksMap = new Map()

    // Time Complexity - O(n) | Space Complexity - O(n)
    clicks.forEach(click => {
        let date = moment(new Date(click.timestamp)).format(dateFormat)
        let period = moment(new Date(click.timestamp)).format(periodFormat)
        let currentIpCount = countMap.get(click.ip)

        if (currentIpCount && currentIpCount > maxClicksAllowed) {
            return
        } else {
            countMap = setCountMap(countMap, click.ip)
        }

        let dateMap = clicksMap.get(date)
        if (dateMap) {
            dateMap = setDateMap(dateMap, click, period)
            clicksMap.set(date, dateMap)
        } else {
            ipMap = new Map()
            dateMap = new Map()
            ipMap = setIpMap(ipMap, click)
            dateMap.set(period, ipMap)
            clicksMap.set(date, dateMap)
        }
    });

   return createFinalResult(countMap, clicksMap)
}

const start = () => {
    let clicks = readClicks()
    let result = createClickSubset(clicks)
    writeToResultSet(result)
}


module.exports = {createClickSubset, start}