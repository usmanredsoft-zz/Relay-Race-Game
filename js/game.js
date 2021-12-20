(function(){ScreensManager.SCREEN_CHANGE = "screen_change";

ScreensManager.screen_change_event = new CustomEvent(ScreensManager.SCREEN_CHANGE);

function ScreensManager()
{
}
ScreensManager.init = function(first_screen)
{
	if (first_screen)
	{
		ScreensManager.screen = first_screen;
	}
};
ScreensManager.openScreen = function(screen)
{
	if (ScreensManager.screen)
	{
		ScreensManager.screen.cont.style.display = "none";
	}
	ScreensManager.screen = screen;

	ScreensManager.screen.cont.style.display = "block";
};function Screen01()
{
	var _this = this;

	this.id = 1;

	this.cont = document.querySelector("#screen_01");

	this.cont.addEventListener("click", changeScreen);

	function changeScreen(event)
	{
		ScreensManager.screen_change_event.screen = _this;

		RelayRace.cont.dispatchEvent(ScreensManager.screen_change_event);
	}

}function Screen02()
{
	var _this = this;

	this.id = 2;

	this.cont = document.querySelector("#screen_02");

	this.cont.style.display = "none";

	this.cont.addEventListener("click", changeScreen);

	function changeScreen(event)
	{
		ScreensManager.screen_change_event.screen = _this;

		RelayRace.cont.dispatchEvent(ScreensManager.screen_change_event);
	}

}function Screen03()
{
	var _this = this;

	this.id = 3;

	this.cont = document.querySelector("#screen_03");

	this.cont.style.display = "none";

	this.cont.addEventListener("click", changeScreen);

	function changeScreen(event)
	{
		ScreensManager.screen_change_event.player_id = Number(event.target.id.charAt(event.target.id.length - 1));
		ScreensManager.screen_change_event.screen = _this;

		RelayRace.cont.dispatchEvent(ScreensManager.screen_change_event);
	}

}function Screen04()
{
	var _this = this;

	this.id = 4;

	var player_id = 0;
	this.player_id = 0;
	var moves_amount = 1;
	var moves_total_amount;
	var turn_moves_amount_total;
	var current_turn_moves_amount;
	var moves_positions;
	var move_timer;
	var move_dir;
	var correct_answer_id;
	var player_scores = 0;
	var computer_scores = 0;
	var questions_copy;

	var START = 1;
	var DRAW_CARD = 2;
	var ROLL_DICE = 3;
	var GO_BACK_TWO_SPACES = 4;
	var GO_AHEAD_TWO_SPACES = 5;
	var FINISH = 6;

	moves_positions = [{ x: 4, y: 1.2 }];

	for (var i = 1; i < 7; i++)
	{
		moves_positions.push({ x: moves_positions[0].x + i * 10.4, y: moves_positions[0].y })
	}
	for (i = 1; i < 5; i++)
	{
		moves_positions.push({ x: moves_positions[6].x, y: moves_positions[6].y + i * 9.5 })
	}
	for (i = 1; i < 7; i++)
	{
		moves_positions.push({ x: moves_positions[10].x - i * 10.4, y: moves_positions[10].y })
	}
	for (i = 1; i < 3; i++)
	{
		moves_positions.push({ x: moves_positions[16].x, y: moves_positions[16].y - i * 9.5 })
	}
	moves_positions[0].command = START;
	moves_positions[1].command = DRAW_CARD;
	moves_positions[2].command = ROLL_DICE;
	moves_positions[3].command = DRAW_CARD;
	moves_positions[4].command = GO_BACK_TWO_SPACES;
	moves_positions[5].command = DRAW_CARD;
	moves_positions[6].command = GO_AHEAD_TWO_SPACES;
	moves_positions[7].command = ROLL_DICE;
	moves_positions[8].command = DRAW_CARD;
	moves_positions[9].command = GO_BACK_TWO_SPACES;
	moves_positions[10].command = GO_AHEAD_TWO_SPACES;
	moves_positions[11].command = DRAW_CARD;
	moves_positions[12].command = DRAW_CARD;
	moves_positions[13].command = GO_BACK_TWO_SPACES;
	moves_positions[14].command = ROLL_DICE;
	moves_positions[15].command = DRAW_CARD;
	moves_positions[16].command = GO_BACK_TWO_SPACES;
	moves_positions[17].command = DRAW_CARD;
	moves_positions[18].command = FINISH;

	moves_total_amount = moves_positions.length;

	this.cont = document.querySelector("#screen_04");

	this.cont.style.display = "none";

	var player = this.cont.querySelector("#player");

	var dice = this.cont.querySelector("#dice");
	dice.rotate_dir = -1;

	for (i = 1; i < dice.children.length; i++)
	{
		dice.children[i].style.display = "none";
	}
	var questions_cont = this.cont.querySelector("#questions_cont");
	questions_cont.question_label = questions_cont.children[0];
	questions_cont.answers_cont = questions_cont.children[1];

	var submit_answer_button = questions_cont.answers_cont.querySelector("#submit_answer_button");

	var player_scores_label = this.cont.querySelector("#player_scores_label");
	var computer_scores_label = this.cont.querySelector("#computer_scores_label");

	var end_game_screen = document.querySelector("#end_game_screen");

	var play_again_button = end_game_screen.querySelector("#play_again_button");

	dice.addEventListener("click", spinDice);
	dice.addEventListener("transitionend", startMovePlayer);

	submit_answer_button.addEventListener("click", checkAnswer);

	play_again_button.addEventListener("click", replay);

	this.setup = function(player_id_ref)
	{
		player_id = player_id_ref;
		this.player_id = player_id;

		questions_copy = questions.slice();

		player_scores_label.innerText = player_scores;
		computer_scores_label.innerText = computer_scores;

		for (var i = 0; i < player.children.length; i++)
		{
			player.children[i].style.display = i == player_id - 1 ? "block" : "none";
		}
		player.style.left = moves_positions[0].x + "vw"
		player.style.top = moves_positions[0].y + "vw"

		dice.children[0].style.display = "block";

		for (i = 1; i < dice.children.length; i++)
		{
			dice.children[i].style.display = "none";
		}
		dice.style.pointerEvents = "auto";
		dice.parentNode.classList.add("active_dice_cont");

		questions_cont.question_label.innerText = "Roll the dice";
		questions_cont.answers_cont.style.display = "none";

		end_game_screen.style.display = "none";
	};
	function spinDice(event)
	{
		dice.rotate_dir *= -1;

		for (i = 1; i < dice.children.length; i++)
		{
			dice.children[i].style.display = "none";
		}
		dice.style.pointerEvents = "none";
		dice.style.transform = "rotate(" + (dice.rotate_dir == 1 ? 1080 : 0) + "deg)";
		dice.parentNode.classList.remove("active_dice_cont");

		questions_cont.question_label.innerText = "";
	}
	function startMovePlayer(event)
	{
		turn_moves_amount_total = isNaN(event) ? Math.ceil(Math.random() * 6) : event;

		if (isNaN(event))
		{
			move_dir = 1;

			dice.children[turn_moves_amount_total].style.display = "block";
		}
		current_turn_moves_amount = 0;

		move_timer = window.setInterval(movePlayer, 250);

		dice.children[0].style.display = "none";
	}
	function movePlayer()
	{
		current_turn_moves_amount++;
		moves_amount += move_dir == 1 ? 1 : -1;

		if (moves_amount < 8)
		{
			player.style.transform = "scale(1)";
		}
		else
		{
			player.style.transform = "scale(-1, 1)";
		}
		if (current_turn_moves_amount == turn_moves_amount_total || moves_amount == moves_total_amount)
		{
			player.addEventListener("transitionend", checkPlayerMoveResult);

			window.clearInterval(move_timer);
		}
		player.style.left = moves_positions[moves_amount - 1].x + "vw";
		player.style.top = moves_positions[moves_amount - 1].y + "vw";
	}
	function checkPlayerMoveResult(event)
	{
		var command = moves_positions[moves_amount - 1].command;

		if (command == START || command == ROLL_DICE)
		{
			dice.style.pointerEvents = "auto";
			dice.parentNode.classList.add("active_dice_cont");
			dice.children[0].style.display = "block";

			dice.children[0].style.display = "block";

			for (i = 1; i < dice.children.length; i++)
			{
				dice.children[i].style.display = "none";
			}
			questions_cont.question_label.innerText = "Roll the dice";
		}
		else if (command == DRAW_CARD)
		{
			if (questions_copy.length == 0)
			{
				questions_copy = questions.slice();
			}
			var question = questions_copy.splice(Math.floor(Math.random() * questions_copy.length), 1)[0];

			switch (question.correct_answer)
			{
				case "a":
					correct_answer_id = 1;
					break;
				case "b":
					correct_answer_id = 2;
					break;
				case "c":
					correct_answer_id = 3;
					break;
				case "d":
					correct_answer_id = 4;
					break;
			}
			questions_cont.question_label.innerText = question.question;

			var answer_id;

			for (var i = 0; i < questions_cont.answers_cont.children.length - 1; i++)
			{
				switch (i)
				{
					case 0:
						answer_id = "a";
						break;
					case 1:
						answer_id = "b";
						break;
					case 2:
						answer_id = "c";
						break;
					case 3:
						answer_id = "d";
						break;
				}
				questions_cont.answers_cont.children[i].children[0].checked = false;
				questions_cont.answers_cont.children[i].children[2].innerText = question.answers[answer_id];
			}
			questions_cont.answers_cont.style.display = "block";
		}
		else if (command == GO_AHEAD_TWO_SPACES)
		{
			move_dir = 1;

			startMovePlayer(2);
		}
		else if (command == GO_BACK_TWO_SPACES)
		{
			move_dir = -1;

			startMovePlayer(2);
		}
		else if (command == FINISH)
		{
			gameEnd();
		}
		player.removeEventListener("transitionend", checkPlayerMoveResult);
	}
	function checkAnswer(event)
	{
		if (questions_cont.answers_cont.children[correct_answer_id - 1].children[0].checked)
		{
			player_scores++;

			dice.children[0].style.display = "block";

			for (i = 1; i < dice.children.length; i++)
			{
				dice.children[i].style.display = "none";
			}
			questions_cont.question_label.innerText = "Right! Roll the dice";
		}
		else
		{
			computer_scores++;

			dice.children[0].style.display = "block";

			for (i = 1; i < dice.children.length; i++)
			{
				dice.children[i].style.display = "none";
			}
			questions_cont.question_label.innerText = "Wrong. Roll the dice";
		}
		questions_cont.answers_cont.style.display = "none";

		player_scores_label.innerText = player_scores;
		computer_scores_label.innerText = computer_scores;

		dice.style.pointerEvents = "auto";
		dice.parentNode.classList.add("active_dice_cont");
	}
	function gameEnd(event)
	{
		questions_cont.question_label.innerText = "Congratulations!!!";

		player.removeEventListener("transitionend", checkPlayerMoveResult);

		window.clearInterval(move_timer);

		end_game_screen.style.display = "flex";
	}
	function replay(event)
	{
		player_scores = 0;
		computer_scores = 0;
		moves_amount = 1;

		player.style.transform = "scale(1)";

		_this.setup(player_id);
	}

}function RelayRace()
{
	var screens;
	var screens_amount;
	var screen_id = 0;
	var prev_screen_button;
	var next_screen_button;

	if (document.readyState != "complete")
	{
		window.addEventListener("load", init);
	}
	else
	{
		init();
	}
	function init(event)
	{
		RelayRace.cont = document.querySelector("#game");

		screens = [new Screen01(), new Screen02(), new Screen03(), new Screen04()];

		screens_amount = screens.length;

		ScreensManager.init(screens[0]);

		RelayRace.cont.style.display = "block";

		prev_screen_button = RelayRace.cont.querySelector("#prev_screen_button");
		prev_screen_button.disabled = true;

		next_screen_button = RelayRace.cont.querySelector("#next_screen_button");

		RelayRace.cont.addEventListener(ScreensManager.SCREEN_CHANGE, changeScreen);

		prev_screen_button.addEventListener("click", changeScreen);
		next_screen_button.addEventListener("click", changeScreen);
	}
	function changeScreen(event)
	{
		if (event.type == ScreensManager.SCREEN_CHANGE)
		{
			if (event.screen.id == 1)
			{
				document.querySelector("#bg_music").play();
			}
			else if (event.screen.id == 3)
			{
				screens[3].setup(event.player_id);
			}
			screen_id = event.screen.id;

			ScreensManager.openScreen(screens[event.screen.id]);
		}
		else
		{
			if (event.target == prev_screen_button)
			{
				if (screen_id > 0)
				{
					screen_id--;
				}
			}
			else
			{
				if (screen_id < screens_amount - 1)
				{
					screen_id++;

					if (screen_id == 3)
					{
						if (screens[3].player_id == 0)
						{
							screens[3].setup(1);
						}
					}
				}
			}
			ScreensManager.openScreen(screens[screen_id]);
		}
		prev_screen_button.disabled = screen_id == 0;
		next_screen_button.disabled = screen_id == screens_amount - 1;
	}

}
new RelayRace();}());