/*
    Workout Program screen
    Will process the workout and start the countdown
*/
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button, TextInput} from 'react-native';

const ScreenFive = props => {

    /*
        obtain the info of the workout
    */
    const [workout, setWorkouts] = useState([]);
    useEffect(() => {
        const getWorkouts = async () => {
            
            // fetch the data from the website
            const responseWorkout = await fetch(`https://gef-db.herokuapp.com/workout/${props.route.params.selectedLabel}`);
            
            // convert to Json format data
            const workout = await responseWorkout.json();

            // save the workouts
            setWorkouts(workout);

			/*
				save the program steps in a 2D array variable called 'steps'
			*/
			let steps = 0;
			{workout.map((entry) => {
				// insert the first step in 2D array
				{entry.steps.map((step) => {
					if(steps == 0){
						steps = [
							[step[0], step[1]]
						];
					}
					// insert the rest of steps in 2D array
					else{
						steps.push([step[0], step[1]]);
					}
				})}
			})}
        };

        getWorkouts();

    }, []);

	/*
		save the program steps in a 2D array variable called 'steps'
	*/
	function getSteps(){
			let steps = 0;
			{workout.map((entry) => {
				// insert the first step in 2D array
				{entry.steps.map((step) => {
					if(steps == 0){
						steps = [
							[step[0], step[1]]
						];
					}
					// insert the rest of steps in 2D array
					else{
						steps.push([step[0], step[1]]);
					}
				})}
			})}
		console.log("end of function")
		console.log(steps)
		return steps;
	}

    /*
        process the count down of workout program
        (so far this part is the same as: https://github.com/kbenavente/CS4540-Mobile-Development/blob/master/useEffect/App.js)
    */
	const [timer, setTimer] = useState(0);
	const [userTimer, setUserTimer] = useState('');
	const [userSeconds, setUserSeconds] = useState(10);
	const [timerStopped, setTimerStopped] = useState(true);

	useEffect(() => {
		let intervalID = null;

		if(!timerStopped) {

			if(timer !== userSeconds) {

				intervalID = setInterval(() => {

					console.log('HERE');

					setTimer(timer + 1)

				}, 1000);

			} else {

				intervalID = setInterval(() => {

					console.log('HERE');

					setTimer(0)

				}, 1000);

			}

		}

		return () => {

			console.log('CLEANUP');

			clearInterval(intervalID);

		};

	}, [timer, timerStopped]);

	return (
		<SafeAreaView style={styles.safeAreaView}>

				{/* print out the steps in console */}
				{console.log(getSteps())}

				<Text style={styles.timerText}>{timer}</Text>

				<Button title="Reset Timer" onPress={() => setTimer(timer + 1)} />

				<TextInput value={userTimer} onChangeText={(text) => setUserTimer(text)} style={styles.userTimerInput} />

				<Button title="Submit Timer" onPress={() => {
					
					setUserSeconds(Number(userTimer));
					setTimer(0);
					setUserTimer('');
					
				}} />

				<Button title={timerStopped ? 'Start Timer' : 'Stop Timer'} onPress={() => setTimerStopped(!timerStopped)} />

		</SafeAreaView>

	);

};

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
		backgroundColor: '#2c3e50',
		justifyContent: 'center',
		alignItems: 'center'
	},
	timerText: {
		color: '#FFF',
		fontSize: 70,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	userTimerInput: {
		borderBottomWidth: 1,
		borderBottomColor: '#3498db',
		width: '50%',
		height: 60,
		marginVertical: 35,
		fontSize: 20,
		color: '#FFF'
	}
});


export default ScreenFive;