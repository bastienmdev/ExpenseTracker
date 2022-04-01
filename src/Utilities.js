const filterByYearHandler = (expenses, year) => {
    //console.log('Expenses:', expenses);
    //console.log('Year to Filter By:', year);

    const updatedData = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === year.toString();
    });

    return updatedData.length > 0? updatedData : expenses;
}

export { filterByYearHandler };