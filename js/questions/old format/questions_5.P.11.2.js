var questions = 'When a balloon is rubbed against clean hair, what is most likely the result?---The balloon gains a positive charge---The balloon gains a negative charge---The balloon does not gain a charge---The balloon never had a charge---5.P.11.2---2|||Which form of heat is transferred from a pot of boiling water to a spoon used for stirring?---conduction---convection---insulation---radiation---5.P.11.2---1|||Which of the following is not a good conductor of heat?---aluminum---copper---metal---rubber---5.P.11.2---4|||Which statement accurately describes the parts of the wire?---Copper and plastic are both good insulators.---Copper and plastic are both good conductors.---Copper is a good conductor, while plastic is a good insulator.---Copper is a good insulator, while plastic is a good conductor.---5.P.11.2---3|||Why would an electrician wear rubber gloves when working on power lines?---Rubber is a good conductor of heat.---Rubber is a good conductor of electricity.---Rubber is a good insulator.---Rubber is a bad insulator.---5.P.11.2---3|||What is the main source of heat for sand on a beach?---people running on the beach---the core beneath the earth---the temperature of the air---the heat and light from the sun---5.P.11.2---4|||Which material would best be used to insulate a cooler to prevent the loss of thermal energy?---aluminum foil---rubber container---bubble wrap---fabric---5.P.11.2---2|||Which of the following best describes an electric charge?---Like charges attract and unlike charges repel.---Like charges repel and unlike charges attract.---Like charges repel and unlike charges repel.---Like charges attract and unlike charges attract.---5.P.11.2---2|||Which of these is not an example of static electricity?---getting shocked when touching a doorknob---clothes stuck together from the dryer---lightning in the sky---pieces of wood nailed together---5.P.11.2---4|||What would happen if ice where added to a hot cup of tea?---Heat from the ice would flow to the hot tea---Heat from the hot tea flows to the ice.---The ice would cause the heat to flow into the cup.---The ice would cool the air in the mug.---5.P.11.2---2';

questions = questions.split("|||");

for (var i = 0; i < questions.length; i++)
{
	questions[i] = questions[i].split("---");
}