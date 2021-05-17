import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    ncols: 5,
    nrows: 5,
    chanceLightStartsOn: 0.25
  }
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard()
    };
    // TODO: set initial state
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    for(var i=0; i<this.props.nrows; i++){
      let newrow = [];
      for(var j=0; j<this.props.ncols; j++){
        newrow.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(newrow);
    }
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  
  flipCellsAround(coord) {
    /**alert(`flipping ${coord}`);*/
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);
    function flipCell(y, x) {
      // if this coord is actually on board, flip it
  
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
      flipCell(y, x);
      flipCell(y+1, x);
      flipCell(y-1, x);
      flipCell(y, x+1);
      flipCell(y, x-1);
      // same and short way to do that work => var hasWon = board.every( row => row.every(cell => !cell));
      var hasWon = true;
      for(let i=0; i<nrows; i++){
        for(let j=0; j<ncols; j++){
          if(board[i][j]){
            hasWon = false;
          }
        }
      }
    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won

    this.setState({board:board, hasWon: hasWon});
  }


  /** Render game board or winning message. */

  render() {
    if(this.state.hasWon){
      return(
        <div className="board-title">
         <div className="winner">
           <span className="neon-orange">You</span>
           <span className="neon-blue">Win!!!</span>
         </div>
        </div>
      )
    }

    let displayBoard = [];
    for(let i = 0; i<this.props.nrows; i++){
      let nr = [];
      for(let j=0; j<this.props.ncols; j++){
        let coord = `${i}-${j}`;
        nr.push(<Cell key={coord} isLit={this.state.board[i][j]} flipCellsAroundMe={()=>this.flipCellsAround(coord)}/>)
      }
      displayBoard.push(<tr key={i}>{nr}</tr>);
    }
    return(
       <div>
         <div className="board-title">
           <div className="neon-orange">Lights</div>
           <div className="neon-blue">OUT</div>
         </div>
         <table className = "Board">
           <tbody>{displayBoard}</tbody>
         </table>
       </div>
    )
    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board

    // TODO
  }
}


export default Board;
