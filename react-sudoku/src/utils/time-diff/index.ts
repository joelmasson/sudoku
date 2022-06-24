function timeDiff(time: string) {
    if (time) {
        let initalStart = new Date(time)
        let endOfGame = new Date()
        let delta = Math.abs(endOfGame.getTime() - initalStart.getTime()) / 100;
        const days = Math.floor(delta / 86400);
        delta -= days * 86400;
        const hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        const minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        const seconds = Math.floor(delta % 60);
        return days + ':' + hours + ':' + minutes + ':' + seconds
    }
    return 'N/A'
}
export default timeDiff