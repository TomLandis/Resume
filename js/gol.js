"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overpopulation.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/
var row = [];
var gridArray = [];

var counter = 0;

for (var i = 0; i < 1500; i++) {
  row.push(i);
}

for (var i = 0; i < row.length; i++) {
  var rand = Math.random();
  if (rand > 0.8) {
    gridArray.push({ place: i, alive: "alive", next: "" });
  } else {
    gridArray.push({ place: i, alive: "dead", next: "" });
  }
}
//console.log(ob)
//console.log(gridArray[19].place);
//this helper function will test if a cell is alive or not
var isLiving = function isLiving(me, arr) {
  if (arr[me].alive === "alive") {
    return true;
  } else {
    return false;
  }
};

//NearBy function identifies the neighbors of a given cell so that thoes cells can be checked for life and status of life for next time can be confirmed.
var NearBy = function NearBy(me) {
  var list = [];
  var finalList = [];
  var listo = [];
  list.push(me + 1);
  list.push(me - 1);
  list.push(me + 51);
  list.push(me + 49);
  list.push(me + 50);
  list.push(me - 51);
  list.push(me - 49);
  list.push(me - 50);

  //this accounts for negitive numbers
  list.map(function (num) {
    return num > 0 ? finalList.push(num) : finalList.push(num + 1500);
  });
  // this handles numbers larger than 1500
  finalList.map(function (num) {
    return num < 1500 ? listo.push(num) : listo.push(num - 1500);
  });
  return listo;
};

var livingNow = function livingNow(me, arr) {
  var ln = 0;
  var dn = 0;
  var nei = NearBy(me, arr);
  for (var i = 0; i < nei.length; i++) {
    if (isLiving(nei[i], arr)) {
      ln++;
    } else {
      dn++;
    }
  }
  if (ln < 2 || ln > 3) {
    gridArray[me].next = "dead";
  } else {
    gridArray[me].next = "alive";
  }
};
var deadNow = function deadNow(me, arr) {
  var ln = 0;

  var nei = NearBy(me, arr);
  for (var i = 0; i < nei.length; i++) {
    if (isLiving(nei[i], arr)) {
      ln++;
    }
  }
  if (ln === 3) {
    gridArray[me].next = "alive";
  } else {
    gridArray[me].next = "dead";
  }
};

var StopButton = function (_React$Component) {
  _inherits(StopButton, _React$Component);

  function StopButton() {
    _classCallCheck(this, StopButton);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  StopButton.prototype.render = function render() {
    return React.createElement(
      "button",
      { onClick: this.props.stop },
      "Stop"
    );
  };

  return StopButton;
}(React.Component);

var StartButton = function (_React$Component2) {
  _inherits(StartButton, _React$Component2);

  function StartButton() {
    _classCallCheck(this, StartButton);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  StartButton.prototype.render = function render() {
    return React.createElement(
      "button",
      { onClick: this.props.start },
      "Start"
    );
  };

  return StartButton;
}(React.Component);

var Clear = function (_React$Component3) {
  _inherits(Clear, _React$Component3);

  function Clear() {
    _classCallCheck(this, Clear);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  Clear.prototype.render = function render() {
    return React.createElement(
      "button",
      { id: "clear", onClick: this.props.clear },
      "Clear"
    );
  };

  return Clear;
}(React.Component);

var Cell = function (_React$Component4) {
  _inherits(Cell, _React$Component4);

  function Cell(props) {
    _classCallCheck(this, Cell);

    return _possibleConstructorReturn(this, _React$Component4.call(this));
  }

  Cell.prototype.render = function render() {

    return React.createElement(
      "div",
      { ref: this.props.ref, className: this.props.alive, onClick: this.props.changeIt },
      "o "
    );
  };

  return Cell;
}(React.Component);

var Credit = function Credit() {
  return React.createElement(
    "h5",
    null,
    "Made by Tom Landis - 2017"
  );
};

var Grid = function (_React$Component5) {
  _inherits(Grid, _React$Component5);

  function Grid(props) {
    _classCallCheck(this, Grid);

    var _this5 = _possibleConstructorReturn(this, _React$Component5.call(this));

    _this5.state = { board: gridArray, gen: 1, stop: false };
    _this5.tick = _this5.tick.bind(_this5);
    _this5.stop = _this5.stop.bind(_this5);
    _this5.start = _this5.start.bind(_this5);
    _this5.clear = _this5.clear.bind(_this5);
    _this5.changeIt = _this5.changeIt.bind(_this5);

    return _this5;
  }

  Grid.prototype.start = function start() {
    if (this.state.stop) {
      this.setState({ stop: false });
    }
  };

  Grid.prototype.stop = function stop() {
    if (!this.state.stop) {
      this.setState({ stop: true });
    }
  };

  Grid.prototype.clear = function clear() {
    for (var i = 0; i < gridArray.length; i++) {
      gridArray[i].alive = "dead";
    }
    this.setState({ board: gridArray, gen: 0 });
  };

  Grid.prototype.changeIt = function changeIt(x) {
    var board = this.state.board;

    if (this.state.stop) {
      if (board[x].alive === "dead") {
        board[x].alive = "alive";
      } else {
        board[x].alive = "dead";
      }

      this.setState({ board: board });
    }
  };

  Grid.prototype.tick = function tick() {
    var _this6 = this;

    var timed = function timed() {
      if (_this6.state.stop) {} else {

        var field = _this6.state.board;
        gridArray = _this6.state.board;
        for (var i = 0; i < field.length; i++) {
          if (isLiving(i, field)) {
            livingNow(i, field);
          } else {
            deadNow(i, field);
          }
        }
        for (var i = 0; i < gridArray.length; i++) {
          gridArray[i].alive = gridArray[i].next;
        }
        var gen = _this6.state.gen + 1;
        _this6.setState({ board: gridArray, gen: gen });
      }
    };
    clearTimeout(timed);
    setTimeout(timed, 25);
  };

  Grid.prototype.render = function render() {
    var _this7 = this;

    var info = this.state.board;

    this.tick();
    return React.createElement(
      "div",
      null,
      React.createElement(StopButton, { stop: this.stop }),
      React.createElement(StartButton, { start: this.start }),
      React.createElement(Clear, { clear: this.clear }),
      React.createElement(
        "h5",
        null,
        " Generation: ",
        this.state.gen,
        " "
      ),
      React.createElement(
        "div",
        { className: "outerBox" },
        info.map(function (data) {
          return React.createElement(Cell, { ref: data.place, alive: data.alive, changeIt: function changeIt() {
              return _this7.changeIt(data.place);
            } });
        })
      ),
      "  "
    );
  };

  return Grid;
}(React.Component);

var App = function (_React$Component6) {
  _inherits(App, _React$Component6);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component6.apply(this, arguments));
  }

  App.prototype.render = function render() {

    return React.createElement(
      "div",
      null,
      React.createElement(
        "a",
        { href: "https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life", target: "_blank" },
        React.createElement(
          "h3",
          { id: "title" },
          "The Game of Life"
        )
      ),
      React.createElement(Grid, null),
      React.createElement(Credit, null)
    );
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('App'));
