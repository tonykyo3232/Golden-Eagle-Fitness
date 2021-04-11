/*
    Workout Program screen
    Will process the workout and start the countdown
*/
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button, TextInput, ScrollView} from 'react-native';

const ScreenFive = props => {

	/*
		Process the countdown of workout program
		Idea of source code: 
		https://github.com/kbenavente/CS4540-Mobile-Development/blob/master/useEffect/App.js
    */
	const [timer, setTimer] = useState(0);
	const [userTimer, setUserTimer] = useState('');
	const [userSeconds, setUserSeconds] = useState(10);
	const [timerStopped, setTimerStopped] = useState(true);

	const [workout, setWorkouts] = useState([]);
	const [workout_steps, setSteps] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
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
			// set workout steps with the duration
			setSteps(steps);
        };
        fetchData();
	}, []);

	useEffect(() => {
		let intervalID = null;

		if(!timerStopped) {
			if(timer !== userSeconds) {

				intervalID = setInterval(() => {
					console.log('program in progress');
					setTimer(timer + 1)
				}, 1000);
			} else {
				intervalID = setInterval(() => {
				console.log('program paused');
				setTimer(0)
				}, 1000);
			}
		}

		return () => {
			console.log('CLEANUP');
			clearInterval(intervalID);
		};
	}, [timer, timerStopped])

	return (
		<SafeAreaView style={styles.safeAreaView}>
				
				<View style = {{flex: 7}}></View>
				
				{/* Need to develop this part
				- iterate each step of the workout program
				- at each step, show the step's name and start the count down */}
				{workout_steps.map((item, index) => {
					
					// obtain the current step and variable
					let current_step = item[0];
					let current_duration = Number(item[1]);

					// intend to use the useState to change the step name and duration dynamically
					// But by doing this will cause this error:
					// "Error: Too many re-renders. React limits the number of renders to prevent an infinite loop"
					/*
						For example:
						At the top:
						const [step_name, setStepName] = useState('');
						const [step_duration, setDuration] = useState(0);
						...
						At render part:
						setStepName(current_step)
						setDuration(current_duration)
						<Text>{step_name}</Text>
						<Text>{step_duration}</Text>
					*/
					while(current_duration > 0){
						console.log(current_step)
						console.log(current_duration)
						current_duration--;
					}

					// return(
					// 	<View style={styles.titleContainer} key = {index}>
					// 		<Text style = {{fontSize: 30}}>{item[0]}</Text>
					// 		<View style = {{marginBottom: 10}}></View>
					// 		<Text style = {{fontSize: 20}}>{item[1]}</Text>
					// 	</View>
					// )

				})}
			

				{/* This is the timer example in class
				<Text style={styles.timerText}>{timer}</Text>
				<Button title="Reset Timer" onPress={() => setTimer(timer + 1)} />
				<TextInput value={userTimer} onChangeText={(text) => setUserTimer(text)} style={styles.userTimerInput} />
				<Button title="Submit Timer" onPress={() => {
					
					setUserSeconds(Number(userTimer));
					setTimer(0);
					setUserTimer('');
					
				}} />
				<Button title={timerStopped ? 'Start Timer' : 'Stop Timer'} onPress={() => setTimerStopped(!timerStopped)} /> 
				
				*/}
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
	titleContainer: {
		flex: 1,
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