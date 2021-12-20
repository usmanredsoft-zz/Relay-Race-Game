var questions = 'What is a physical property of matter that can be observed?---volume---color---temperature---mass---5.P.8.1---2|||Which term is used to describe anything that takes up space and has mass?---density---mass---matter---volume---5.P.8.1---3|||What instrument is used to measure the boiling point of water?---a balance scale---a compass---a graduated cylinder---a thermometer---5.P.8.1---4|||What are the metric system units for measuring temperature?---degrees Celsius---grams---meters---milliliters---5.P.8.1---1|||Which phase of matter has definite shape and definite volume?---gases---liquids---plasma---solids---5.P.8.1---4|||Which of the following is measured using a pan balance?---length---mass---temperature---volume---5.P.8.1---2|||Which of the following instruments is best used for measuring liquid volume?---balance---graduated cylinder---meter stick---thermometer---5.P.8.1---2|||Which term is defined as the amount of space something takes up?---density---mass---temperature---volume---5.P.8.1---4|||What are the metric system units for measuring volume?---degrees Celsius---grams---meters---milliliters---5.P.8.1---4|||What are the metric system units for measuring mass?---degrees Celsius---grams---meters---millimeters---5.P.8.1---2';

questions = questions.split("|||");

for (var i = 0; i < questions.length; i++)
{
	questions[i] = questions[i].split("---");
}