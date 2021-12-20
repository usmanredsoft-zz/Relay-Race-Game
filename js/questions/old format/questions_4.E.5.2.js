var questions = 'How long does it take the moon to make one complete orbit around the Earth?---12 hours---24 hours---28 days---1 year---4.E.5.2---3|||Which moon phase is seen when half of the sunlit surface is facing the Earth?---crescent moon---full moon---half moon---new moon---4.E.5.2---2|||Which moon phase is seen when the Earth is between the moon and the Sun?---crescent moon---full moon---half moon---new moon---4.E.5.2---2|||Which moon phase occurs when the sunlit side of the moon faces away from the Earth?---crescent moon---full moon---half moon---new moon---4.E.5.2---4|||What would be the unit of measure used to calculate the distance from Earth to the North Star?---centimeters---inches---light-years---yards---4.E.5.2---3|||Which of the following pairs of planets below are the closest to each other?---Mercury and Saturn---Mars and Earth---Jupiter and Uranus---Neptune and Venus---4.E.5.2---2|||Which planet is known to have water, oxygen, and life?---Mars---Mercury---Earth---Venus---4.E.5.2---3|||Which planet has the longest path of   orbit around the Sun?---Earth---Mercury---Neptune---Jupiter---4.E.5.2---3|||Which force listed below is responsible for keeping the Earth in  orbit around the Sun?---gravitational force---magnetic force---elliptical force---unbalanced force---4.E.5.2---1|||Which of these heavenly bodies is smaller than the Earth?---Jupiter---an asteroid---the Sun---the Milky Way---4.E.5.2---2';

questions = questions.split("|||");

for (var i = 0; i < questions.length; i++)
{
	questions[i] = questions[i].split("---");
}
