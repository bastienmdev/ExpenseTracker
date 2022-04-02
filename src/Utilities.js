const filterByYearHandler = (expenses, year) => {

    return expenses.filter( expense => expense.date.getFullYear().toString() === year.toString());

}

export { filterByYearHandler };