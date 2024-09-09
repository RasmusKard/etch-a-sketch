const gridContainer = document.querySelector('#grid-container')

function makeGrid(row, column) {
    for (let i = 0; i < column; i++) {
        const newColumn = document.createElement('div')
        newColumn.classList.add('grid-column')

        gridContainer.appendChild(newColumn)

        for (let i = 0; i < row; i++) {
            const newRow = document.createElement('div')
            newRow.classList.add('grid-element')
            newColumn.appendChild(newRow)
        }
    }}

makeGrid(80,80)