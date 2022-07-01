function superbowlWin (record) {
    const result = record.find(game => game.result === 'W')

    if (result === undefined) {
        return undefined
    }
    else {
        return result.year
    }
}

superbowlWin(record);