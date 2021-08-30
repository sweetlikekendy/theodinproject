const player = (symbol) => {
  const playerSymbol =
    typeof symbol === "string" || symbol !== null || symbol !== undefined
      ? symbol.toUpperCase()
      : null

  const getPlayerSymbol = () => playerSymbol

  return { getPlayerSymbol }
}

const gameboard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""]

  const getBoard = () => board

  const setTile = (index, symbol) => {
    if (index > board.length || index < 0) return
    if (board[index] === "" || board[index] !== symbol) {
      board[index] = symbol
    } else {
      return
    }
  }

  const getTile = (index) => {
    if (index > board.length || index < 0) return

    return board[index]
  }

  const reset = () => {
    for (let i = 0; i < board.length; i++) {
      board[i] = ""
    }
  }

  return { board, getBoard, setTile, getTile, reset }
})()

const gameController = (() => {
  const playerX = player("x")
  const playerO = player("o")
  let round = 1
  let isOver = false

  const playRound = (index) => {
    gameboard.setTile(index, getCurrentPlayerSymbol())

    console.log(checkWinner())
    if (checkWinner(index)) {
      displayController.setMessageElement(
        `Player ${getCurrentPlayerSymbol()} has won!`
      )
      isOver = true
      return
    }

    if (round === 9) {
      displayController.setMessageElement(`Game ended in a draw!`)
      isOver = true
      return
    }

    round++
    displayController.setMessageElement(
      `Player ${getCurrentPlayerSymbol()}'s turn!`
    )
  }

  const getCurrentPlayerSymbol = () => {
    return round % 2 === 1
      ? playerX.getPlayerSymbol()
      : playerO.getPlayerSymbol()
  }

  const checkWinner = (index) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let condition of winConditions) {
      const index1 = condition[0],
        index2 = condition[1],
        index3 = condition[2]

      const val1 = gameboard.getTile(index1),
        val2 = gameboard.getTile(index2),
        val3 = gameboard.getTile(index3)

      if (val1 !== "" && val1 === val2 && val2 === val3) {
        return true
      }
    }

    return false

    const isEqualToPlayerSymbol = (currentValue) =>
      currentValue === getCurrentPlayerSymbol()

    // return (
    //   winConditions
    //     // get all win conditions based on the index
    //     .filter((combinations) => combinations.includes(index))
    //     // return true if
    //     .some((possibleConditions) =>
    //       // test whether all elements in array pass a condition
    //       possibleConditions.every((index) =>
    //         isEqualToPlayerSymbol(gameboard.getTile(index))
    //       )
    //     )
    // )
  }

  const getIsOver = () => isOver

  const reset = () => {
    round = 1
    isOver = false
  }

  return { getIsOver, getCurrentPlayerSymbol, playRound, reset }
})()

const displayController = (() => {
  const gameboardTilesEls = document.getElementsByClassName("gameboard-tile")
  const messageEl = document.getElementsByClassName("message")[0]
  const btnResetEl = document.getElementsByClassName("btn-reset")[0]

  for (let i = 0; i < gameboardTilesEls.length; i++) {
    gameboardTilesEls[i].addEventListener("click", (e) => placeMarker(e, i))
  }

  btnResetEl.addEventListener("click", () => reset())

  const placeMarker = (event, index) => {
    if (gameController.getIsOver() || event.target.textContent !== "") return
    gameController.playRound(index)
    updateGameboard()
  }

  const setMessageElement = (message) => {
    messageEl.textContent = message
  }

  const updateGameboard = () => {
    for (let i = 0; i < gameboardTilesEls.length; i++) {
      gameboardTilesEls[i].textContent = gameboard.getTile(i)
    }
  }

  const reset = () => {
    gameboard.reset()
    gameController.reset()
    updateGameboard()
    setMessageElement("Player X's turn")
  }

  return { setMessageElement, updateGameboard, reset }
})()
