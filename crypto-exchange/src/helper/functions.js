const fixedNumber = number => {
    const fixedNumber = Number(number).toFixed(2);
    return Number(fixedNumber);
}

export { fixedNumber };