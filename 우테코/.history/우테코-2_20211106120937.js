function solution(log) {
    const arr = []
    log.forEach(e => {
        arr.push(e.split(':'));
    })

const log = ["08:30", "09:00", "14:00", "16:00", "16:01", "16:06", "16:07", "16:11"];
solution(log);