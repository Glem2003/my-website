export const diffMonths = (date1: string, date2: string): number => {

    if (!date1 || !date2) return 1;

    const [y1, m1] = date1.split('/').map(Number)
    const [y2, m2] = date2.split('/').map(Number)
    const total1 = y1 * 12 + (m1 - 1);
    const total2 = y2 * 12 + (m2 - 1);

    return Math.abs(total2 - total1)
}


export const sumDiffMonths = (ranges: { date: string[] }[]): number => {
    return ranges.reduce((sum, range) => {
        return sum + diffMonths(range.date[0], range.date[1]);
    }, 0);
};
