var questions = 'What season occurs in the Northern Hemisphere when the Earth’s axis is tilted towards the Sun?---fall---spring---summer---winter---4.E.5.1/4.E.5.3/4.E.5.4---3|||What season occurs in the Southern Hemisphere when the Earth’s axis is tilted towards the sun?---fall---spring---summer---winter---4.E.5.1/4.E.5.3/4.E.5.4---4|||What season occurs in the Northern Hemisphere when the Earth’s axis is tilted away from the Sun?---fall---spring---summer---winter---4.E.5.1/4.E.5.3/4.E.5.4---4|||What season occurs in the Southern Hemisphere when the Earth’s axis is tilted away from the Sun?---fall---spring---summer---winter---4.E.5.1/4.E.5.3/4.E.5.4---3|||What is the shape of Earth’s orbital path around the Sun?---circular---elliptical---rectangular---squared---4.E.5.1/4.E.5.3/4.E.5.4---2|||What is the term used to describe the Imaginary line that runs through the center of the Earth from the North to the South Pole?---axis---equinox---hemisphere---solstice---4.E.5.1/4.E.5.3/4.E.5.4---1|||What causes day and night?---Earth revolving on its axis every 24 hours---Earth revolving on its axis every year---Earth rotating on its axis every 24 hours---Earth rotating on its axis every year---4.E.5.1/4.E.5.3/4.E.5.4---3|||What causes the seasons on Earth?---Earth revolving on its axis every 24hours---Earth revolving on its axis every year---Earth rotating on its axis every 24 hours---Earth rotating on its axis every year---4.E.5.1/4.E.5.3/4.E.5.4---2|||Approximately how long does each season last?---28 days---3 months---6 months---1 year---4.E.5.1/4.E.5.3/4.E.5.4---2|||How long does it take the Earth to make one complete rotation?---12 hours---24 hours---28 days---1 year---4.E.5.1/4.E.5.3/4.E.5.4---2';

questions = questions.split("|||");

for (var i = 0; i < questions.length; i++)
{
	questions[i] = questions[i].split("---");
}